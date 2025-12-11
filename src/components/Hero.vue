<script setup lang="ts">
import { Ref, ref, inject, computed, onMounted, onUnmounted } from 'vue';

defineProps({
    msg: String,
})

const currentLang = inject<Ref<'pl' | 'en'>>('currentLang');

const heroText = computed(() => ({
    greeting: currentLang?.value === 'pl' ? 'Cześć,' : "Hi there,",
    name: currentLang?.value === 'pl' ? "Jestem Konrad" : "I'm Konrad",
    role: currentLang?.value === 'pl' ? 'Web i Software Developer' : 'Web and Software Developer',
    buttonContact: currentLang?.value === 'pl' ? 'Kontakt' : 'Contact Me',
    buttonResume: currentLang?.value === 'pl' ? 'Moje CV' : 'My resume',
}));

const scrollToContact = () => {
    const el = document.getElementById('contact-section');
    el?.scrollIntoView({ behavior: 'smooth' });
};

const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/cv/Konrad_Kulesza_CV_2025.pdf'; // ścieżka względem public/
    link.setAttribute('download', 'Konrad_Kulesza_CV_2025.pdf');
    link.setAttribute('target', '_blank'); // ważne dla Androida
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

// gridzik

// DETEKCJA MOBILE/TABLET
const isMobileOrTablet = ref(false);
const checkMobile = () => {
    // Sprawdzamy szerokość ekranu oraz touch capability
    const width = window.innerWidth;
    const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    // Jeśli szerokość <= 1024px LUB urządzenie ma touch, traktujemy jako mobile/tablet
    isMobileOrTablet.value = width <= 1024 || hasTouch;

    console.log('Mobile/Tablet detection:', {
        width,
        hasTouch,
        isMobileOrTablet: isMobileOrTablet.value
    });
};
// Nowe refy dla canvas
const gridCanvasRef = ref<HTMLCanvasElement | null>(null);
const circleCanvasRef = ref<HTMLCanvasElement | null>(null);

let resizeTimeout: ReturnType<typeof setTimeout>;

// Stan dla animacji
const mousePosition = ref({ x: 0, y: 0 });
const isMouseOver = ref(false);
const animationFrameId = ref<number | null>(null);

// Konfiguracja siatki
const gridConfig = {
    cellSize: 40,
    gap: 1,
    maxLift: 35,
    influenceRadius: 130,
    baseColor: '#1d232a',
    hoverColor: '#ff6347',
    transitionSpeed: 0.20,
};

// Konfiguracja fali
const waveConfig = {
    maxRadius: 1200,
    speed: 9, // pikseli na klatkę
    maxLift: 90, // maksymalne podniesienie od fali
    duration: 1000, // czas trwania fali w ms
    rings: 1, // ile fal (pierścieni)
    ringDelay: 10, // opóźnienie między falami w ms
};

// Kwadraty siatki
const gridCells = ref<Array<{
    x: number,
    y: number,
    baseX: number,
    baseY: number,
    centerX: number,
    centerY: number,
    lift: number,
    targetLift: number,
    color: string,
    size: number,
    waveLift: number, // dodatkowe podniesienie od fali
    waveTimestamp: number // czas ostatniego wpływu fali
}>>([]);

// Fale (impulsy)
const waves = ref<Array<{
    x: number,
    y: number,
    startTime: number,
    radius: number,
    active: boolean,
    ringIndex: number
}>>([]);

// Inicjalizacja canvas
const initCanvas = () => {
    if (!gridCanvasRef.value || !circleCanvasRef.value) return;

    const gridCanvas = gridCanvasRef.value;
    const circleCanvas = circleCanvasRef.value;
    const parent = gridCanvas.parentElement;

    if (!parent) return;

    const width = parent.clientWidth;
    const height = parent.clientHeight;

    gridCanvas.width = width;
    gridCanvas.height = height;
    circleCanvas.width = width;
    circleCanvas.height = height;

    const cols = Math.ceil(width / (gridConfig.cellSize + gridConfig.gap));
    const rows = Math.ceil(height / (gridConfig.cellSize + gridConfig.gap));

    const cells = [];
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const x = col * (gridConfig.cellSize + gridConfig.gap);
            const y = row * (gridConfig.cellSize + gridConfig.gap);

            cells.push({
                x,
                y,
                baseX: x,
                baseY: y,
                centerX: x + gridConfig.cellSize / 2, // <-- DODAJ TO
                centerY: y + gridConfig.cellSize / 2, // <-- DODAJ TO
                lift: 0,
                targetLift: 0,
                color: gridConfig.baseColor,
                size: gridConfig.cellSize,
                waveLift: 0,
                waveTimestamp: 0
            });
        }
    }

    gridCells.value = cells;
};

// Tworzenie fali (kliknięcie)
const createWave = (x: number, y: number) => {
    const now = Date.now();

    // Tworzymy kilka fal z opóźnieniem (efekt pierścieni)
    for (let i = 0; i < waveConfig.rings; i++) {
        setTimeout(() => {
            waves.value.push({
                x,
                y,
                startTime: Date.now(),
                radius: 0,
                active: true,
                ringIndex: i
            });
        }, i * waveConfig.ringDelay);
    }
};

// Aktualizacja fal
const updateWaves = () => {
    const now = Date.now();

    // Aktualizuj istniejące fale
    waves.value.forEach(wave => {
        const elapsed = now - wave.startTime;

        // Jeśli fala skończyła
        if (elapsed > waveConfig.duration) {
            wave.active = false;
            return;
        }

        // Oblicz promień fali (zaczyna od 0, rośnie liniowo)
        wave.radius = (elapsed / waveConfig.duration) * waveConfig.maxRadius;
        const radiusSq = wave.radius * wave.radius;

        // Dla każdego kwadratu sprawdź czy jest w zasięgu fali
        gridCells.value.forEach(cell => {
            const dx = cell.centerX - wave.x;
            const dy = cell.centerY - wave.y;
            const distanceSq = dx * dx + dy * dy;

            if (distanceSq < radiusSq) {
                const distance = Math.sqrt(distanceSq); // sqrt tylko raz jeśli w zasięgu
                const waveProgress = distance / waveConfig.maxRadius;
                const waveStrength = Math.sin(waveProgress * Math.PI);

                const timeStrength = 1 - (elapsed / waveConfig.duration);
                const ringStrength = 1 - (wave.ringIndex / waveConfig.rings) * 0.3;
                const totalStrength = waveStrength * timeStrength * ringStrength;

                const waveEffect = totalStrength * totalStrength * waveConfig.maxLift;

                if (waveEffect > cell.waveLift) {
                    cell.waveLift = waveEffect;
                    cell.waveTimestamp = now;
                }
            }
        });
    });

    // Usuń nieaktywne fale
    waves.value = waves.value.filter(wave => wave.active);

    // Stopniowo zmniejszaj waveLift dla kwadratów
    const decayTime = 300; // ms
    gridCells.value.forEach(cell => {
        if (cell.waveLift > 0 && now - cell.waveTimestamp > decayTime) {
            cell.waveLift *= 0.9; // płynne zanikanie
            if (cell.waveLift < 0.5) cell.waveLift = 0;
        }
    });
};

// Rysowanie siatki
const drawGrid = () => {
    if (!gridCanvasRef.value) return;

    const ctx = gridCanvasRef.value.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, gridCanvasRef.value.width, gridCanvasRef.value.height);

    updateWaves();

    // NA MOBILE: Nie aktualizujemy lift z myszy, tylko z fal
    if (!isMobileOrTablet.value) {
        gridCells.value.forEach(cell => {
            cell.lift += (cell.targetLift - cell.lift) * gridConfig.transitionSpeed;
        });
    }

    // Rysuj wszystkie kwadraty z optymalizacją
    const oldFillStyle = ctx.fillStyle;
    const oldGlobalAlpha = ctx.globalAlpha;

    gridCells.value.forEach(cell => {
        // Na mobile używamy tylko waveLift, na desktop mysz + waveLift
        const totalLift = isMobileOrTablet.value ? cell.waveLift : cell.lift + cell.waveLift;
        const currentY = cell.baseY - totalLift;
        const colorIntensity = Math.min(1, totalLift / 30);

        ctx.fillStyle = interpolateColor(
            gridConfig.baseColor,
            gridConfig.hoverColor,
            colorIntensity
        );
        
        ctx.globalAlpha = 0.7 + (colorIntensity * 0.3);
        ctx.fillRect(cell.baseX, currentY, cell.size, cell.size);
    });

    ctx.fillStyle = oldFillStyle;
    ctx.globalAlpha = oldGlobalAlpha;
};
const drawCircleAndWaves = () => {
    if (!circleCanvasRef.value) return;

    const ctx = circleCanvasRef.value.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, circleCanvasRef.value.width, circleCanvasRef.value.height);

    // Rysuj fale (działa na mobile i desktop)
    waves.value.forEach(wave => {
        const elapsed = Date.now() - wave.startTime;
        if (!wave.active) return;

        const progress = elapsed / waveConfig.duration;
        const alpha = 0.3 * (1 - progress);

        ctx.beginPath();
        ctx.arc(wave.x, wave.y, wave.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 99, 71, ${alpha * 0.1})`;
        ctx.fill();
    });

    // Rysuj okrąg myszki TYLKO na desktop
    if (!isMobileOrTablet.value && isMouseOver.value) {
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(
            mousePosition.value.x, mousePosition.value.y, 0,
            mousePosition.value.x, mousePosition.value.y, gridConfig.influenceRadius
        );

        gradient.addColorStop(0, 'rgba(255, 99, 71, 0.1)');
        gradient.addColorStop(0.7, 'rgba(255, 99, 71, 0.05)');
        gradient.addColorStop(1, 'rgba(255, 99, 71, 0)');

        ctx.fillStyle = gradient;
        ctx.arc(
            mousePosition.value.x,
            mousePosition.value.y,
            gridConfig.influenceRadius,
            0,
            Math.PI * 2
        );
        ctx.fill();
    }
};

// Aktualizacja pozycji myszki
const updateMousePosition = (e: MouseEvent) => {
    if (isMobileOrTablet.value) return;
    if (!gridCanvasRef.value) return;

    const rect = gridCanvasRef.value.getBoundingClientRect();
    mousePosition.value = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
    };

    isMouseOver.value = true;

    // Aktualizuj kwadraty na podstawie pozycji myszki
    updateGridCells();
};

// Obsługa kliknięcia myszki - TWORZENIE FALI!
const handleMouseClick = (e: MouseEvent) => {
    if (!gridCanvasRef.value) return;

    const rect = gridCanvasRef.value.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Utwórz falę w miejscu kliknięcia
    createWave(x, y);

    // Mały efekt wizualny - krótki błysk
    if (circleCanvasRef.value) {
        const ctx = circleCanvasRef.value.getContext('2d');
        if (ctx) {
            // Rysuj małe białe kółko w miejscu kliknięcia
            ctx.beginPath();
            ctx.arc(x, y, 10, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
            ctx.fill();

            // Zniknie w następnej klatce
        }
    }
};

// Aktualizacja stanu kwadratów (tylko dla myszki)
const updateGridCells = () => {
    const mouseX = mousePosition.value.x;
    const mouseY = mousePosition.value.y;

    gridCells.value.forEach(cell => {
        // const cellCenterX = cell.baseX + cell.size / 2;
        // const cellCenterY = cell.baseY + cell.size / 2;

        const distance = Math.sqrt(
            Math.pow(cell.centerX - mouseX, 2) +
            Math.pow(cell.centerY - mouseY, 2)
        );

        if (distance < gridConfig.influenceRadius) {
            const force = 1 - (distance / gridConfig.influenceRadius);
            cell.targetLift = Math.pow(force, 2) * gridConfig.maxLift;
            const colorIntensity = Math.pow(force, 1.5);
            cell.color = interpolateColor(
                gridConfig.baseColor,
                gridConfig.hoverColor,
                colorIntensity
            );
        } else {
            cell.targetLift = 0;
            cell.color = gridConfig.baseColor;
        }
    });
};

// Pomocnicza funkcja do interpolacji kolorów
const interpolateColor = (color1: string, color2: string, factor: number): string => {
    // Pre-calc once at init
    const r1 = 29, g1 = 35, b1 = 42; // #1d232a
    const r2 = 255, g2 = 99, b2 = 71; // tomato

    const r = (r1 + (r2 - r1) * factor) | 0; // |0 is faster than Math.round
    const g = (g1 + (g2 - g1) * factor) | 0;
    const b = (b1 + (b2 - b1) * factor) | 0;

    // Template literal is faster than string concat
    return `rgb(${r},${g},${b})`;
};

// Pętla animacji
const animate = () => {
    drawGrid();
    drawCircleAndWaves();
    animationFrameId.value = requestAnimationFrame(animate);
};

// Obsługa opuszczenia obszaru
const handleMouseLeave = () => {
    isMouseOver.value = false;

    gridCells.value.forEach(cell => {
        cell.targetLift = 0;
        cell.color = gridConfig.baseColor;
    });

    if (circleCanvasRef.value) {
        const ctx = circleCanvasRef.value.getContext('2d');
        if (ctx) {
            ctx.clearRect(0, 0, circleCanvasRef.value.width, circleCanvasRef.value.height);
        }
    }
};

// Obsługa zmiany rozmiaru okna
const handleResize = () => {
    // initCanvas();
    if (resizeTimeout) clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        checkMobile();
        initCanvas();
    }, 150);
};

// Lifecycle hooks
onMounted(() => {
    initCanvas();
    checkMobile();

    window.addEventListener('resize', handleResize);
    // Rozpocznij animację
    if (gridCanvasRef.value) {
        animate();

        // Dodaj event listeners
        gridCanvasRef.value.addEventListener('mousemove', updateMousePosition);
        gridCanvasRef.value.addEventListener('click', handleMouseClick);
        gridCanvasRef.value.addEventListener('mouseleave', handleMouseLeave);
    }
});

onUnmounted(() => {
    if (animationFrameId.value) {
        cancelAnimationFrame(animationFrameId.value);
    }

    if (gridCanvasRef.value) {
        gridCanvasRef.value.removeEventListener('mousemove', updateMousePosition);
        gridCanvasRef.value.removeEventListener('click', handleMouseClick);
        gridCanvasRef.value.removeEventListener('mouseleave', handleMouseLeave);
    }

    window.removeEventListener('resize', handleResize);

    if (resizeTimeout) clearTimeout(resizeTimeout);
});

</script>

<template>
    <div class="hero bg-base-200 h-[calc(100vh-64px)] w-full p-0 overflow-clip relative">
        <div
            class="w-full h-full hero-content flex-col items-center lg:items-start justify-start lg:justify-center mt-20 lg:mt-0 select-none relative z-10">
            <div class="text-center lg:text-left">
                <p class="text-3xl py-6 font-bold z-10">
                    {{ heroText.greeting }}
                </p>

                <p class="text-3xl z-10"><span class="font-bold text-colorful"> > > > </span> {{ heroText.name }} <span
                        class="font-bold text-colorful">
                        < < < </span>
                </p>
                <p class="text-4xl py-6 font-bold">
                    {{ heroText.role }}<span class="font-bold text-colorful">.</span>
                </p>
                <div class="flex gap-4 items-center justify-center lg:justify-start">
                    <button class="btn-c-filled btn w-[45%] sm:w-auto" @click="scrollToContact">{{
                        heroText.buttonContact }}</button>
                    <button class="btn-c-outline btn w-[45%] sm:w-auto" @click="downloadResume">{{ heroText.buttonResume
                        }}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                        </svg>

                    </button>
                </div>
            </div>
        </div>

        <!-- <canvas ref="canvasRef" class="hero-canvas absolute inset-0 w-full h-full"></canvas> -->
        <canvas ref="gridCanvasRef" id="gridCanvas" class="w-full h-full absolute inset-0 pointer-events-auto"></canvas>
        <canvas ref="circleCanvasRef" id="circleCanvas"
            class="w-full h-full absolute inset-0 pointer-events-none"></canvas>



    </div>
</template>

<style scoped>
#gridCanvas {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    pointer-events: auto;
}

#circleCanvas {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    pointer-events: none;
    mix-blend-mode: overlay;
}

.read-the-docs {
    color: #888;
}

.text-colorful {
    color: tomato;
}

.small-circle {
    position: absolute;
    top: 280px;
    right: 300px;
    height: 350px;
    width: 350px;
    background-color: rgba(255, 88, 59, 0.342);
    border-radius: 50%;
    z-index: 6;

    filter: blur(2px);

}

.big-circle {
    position: absolute;
    top: 0px;
    right: 0px;
    height: 600px;
    width: 600px;
    background-color: rgba(255, 99, 71, 0.582);
    border-radius: 50%;
    z-index: 1;
    filter: blur(5px);
}

.shape1 {
    position: absolute;
    top: 50px;
    right: 450px;
    font-size: 100px;
    color: transparent;
    z-index: 7;
    user-select: none;
    filter: blur(1px);
    font-family: "Noto Sans", sans-serif;
    -webkit-text-stroke: 3px #f0f8ea;
    /* shadow that looks like outline */
}

.shape2 {
    position: absolute;
    top: 180px;
    right: 150px;
    font-size: 150px;
    color: transparent;
    z-index: 7;
    user-select: none;
    font-family: "Noto Sans", sans-serif;
    -webkit-text-stroke: 3px #f0f8ea;
}

.shape3 {
    position: absolute;
    top: 400px;
    right: 50px;
    font-size: 100px;
    color: transparent;
    z-index: 7;
    user-select: none;
    filter: blur(1px);
    font-family: "Noto Sans", sans-serif;
    -webkit-text-stroke: 3px #f0f8ea;
}

.btn-c-filled {
    background-color: tomato !important;
    border: none;
    color: white;
    outline: none;
    /* usuwa domyślny focus ring */
    box-shadow: none;
}

.btn-c-filled:hover {
    background-color: #df5239 !important;
    border: none;
    color: white;
}

/* .btn-c-filled:focus {
    background-color: #ff6347 !important;
    border: none;
    color: white;
} */

.btn-c-outline {
    border: 2px solid tomato !important;
    color: tomato;
    background-color: transparent;
    outline: none;
    /* usuwa domyślny focus ring */
    box-shadow: none;
}

.btn-c-outline:hover {
    background-color: tomato !important;
    border: none;
    color: white;
}

/* .btn-c-outline:focus {
    background-color: tomato !important;
    border: none;
    color: white;
} */

.gooey-bg {
    width: 100%;
    height: 100%;
    z-index: 0;
    position: absolute;
    /* gradient radialny */
}

.blob {
    transform-origin: center center;
    cursor: default;
}

.blob:hover {
    cursor: grab;
}

.hero-content {
    pointer-events: none;
}

.hero-content button {
    pointer-events: auto;
    /* żeby przyciski działały */
}

@media (max-width: 1024px) {
    .small-circle {
        height: 200px;
        width: 200px;
        top: 580px;
        right: 220px;
    }

    .big-circle {
        height: 400px;
        width: 400px;
        top: 380px;
        right: 0px;
    }

    .shape1 {
        font-size: 60px;
        top: 380px;
        right: 300px;
    }

    .shape2 {
        font-size: 80px;
        top: 520px;
        right: 120px;
    }

    .shape3 {
        font-size: 60px;
        top: 680px;
        right: 50px;
    }
}
</style>
