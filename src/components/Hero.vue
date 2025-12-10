<script setup lang="ts">
import { Ref, ref, inject, computed, onMounted, onUnmounted, onBeforeUnmount } from 'vue';
import { gsap } from 'gsap';

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
// Nowe refy dla canvas
const gridCanvasRef = ref<HTMLCanvasElement | null>(null);
const circleCanvasRef = ref<HTMLCanvasElement | null>(null);

// Stan dla animacji
const mousePosition = ref({ x: 0, y: 0 });
const isMouseOver = ref(false);
const animationFrameId = ref<number | null>(null);

// Konfiguracja siatki
const gridConfig = {
  cellSize: 40,
  gap: 2,
  maxLift: 20,
  influenceRadius: 120,
  baseColor: '#1d232a',
  hoverColor: '#ff6347',
  transitionSpeed: 0.15,
};

// Konfiguracja fali
const waveConfig = {
  maxRadius: 1000,
  speed: 4, // pikseli na klatkę
  maxLift: 35, // maksymalne podniesienie od fali
  duration: 1200, // czas trwania fali w ms
  rings: 3, // ile fal (pierścieni)
  ringDelay: 100, // opóźnienie między falami w ms
};

// Kwadraty siatki
const gridCells = ref<Array<{
  x: number,
  y: number,
  baseX: number,
  baseY: number,
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
    
    // Dla każdego kwadratu sprawdź czy jest w zasięgu fali
    gridCells.value.forEach(cell => {
      const cellCenterX = cell.baseX + cell.size / 2;
      const cellCenterY = cell.baseY + cell.size / 2;
      
      const distance = Math.sqrt(
        Math.pow(cellCenterX - wave.x, 2) + 
        Math.pow(cellCenterY - wave.y, 2)
      );
      
      // Jeśli kwadrat jest w zasięgu fali
      if (distance < wave.radius) {
        // Oblicz siłę fali (najsilniejsza na krawędzi, słabnie do środka i na zewnątrz)
        // Używamy funkcji sinus dla ładnego efektu
        const waveProgress = distance / waveConfig.maxRadius;
        const waveStrength = Math.sin(waveProgress * Math.PI);
        
        // Tłumienie w czasie
        const timeStrength = 1 - (elapsed / waveConfig.duration);
        
        // Tłumienie dla kolejnych pierścieni
        const ringStrength = 1 - (wave.ringIndex / waveConfig.rings) * 0.3;
        
        const totalStrength = waveStrength * timeStrength * ringStrength;
        
        // Jeśli ta fala ma większy wpływ niż poprzednia
        const waveEffect = Math.pow(totalStrength, 2) * waveConfig.maxLift;
        
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
  
  // Wyczyść canvas
  ctx.clearRect(0, 0, gridCanvasRef.value.width, gridCanvasRef.value.height);
  
  // Aktualizuj fale
  updateWaves();
  
  // Rysuj wszystkie kwadraty
  gridCells.value.forEach(cell => {
    // Płynna animacja podnoszenia od myszki
    cell.lift += (cell.targetLift - cell.lift) * gridConfig.transitionSpeed;
    
    // Całkowite podniesienie = myszka + fala
    const totalLift = cell.lift + cell.waveLift;
    
    // Oblicz aktualną pozycję z podniesieniem
    const currentY = cell.baseY - totalLift;
    
    // Oblicz przezroczystość na podstawie podniesienia
    const opacity = 0.7 + (totalLift / (gridConfig.maxLift + waveConfig.maxLift)) * 0.3;
    
    // Intensywność koloru na podstawie podniesienia (0-1)
    const colorIntensity = Math.min(1, totalLift / 30);
    
    // Rysuj kwadrat
    ctx.save();
    
    // Cienie
    ctx.shadowColor = `rgba(0, 0, 0, 0.3)`;
    ctx.shadowOffsetY = 5;

    // JEDNOLITY KOLOR - UŻYJ FUNKCJI interpolateColor
    // colorIntensity = 0 → baseColor, colorIntensity = 1 → hoverColor
    const fillColor = interpolateColor(
      gridConfig.baseColor, 
      gridConfig.hoverColor, 
      colorIntensity
    );
    
    ctx.fillStyle = fillColor;
    
    ctx.globalAlpha = opacity;
    
    // Zaokrąglenie rogów dla lepszego efektu
    const borderRadius = 2;
    ctx.beginPath();
    ctx.roundRect(cell.baseX, currentY, cell.size, cell.size, borderRadius);
    ctx.fill();
    
    // Obramowanie
    ctx.strokeStyle = `rgba(255, 255, 255, ${0.05 + colorIntensity * 0.1})`;
    ctx.lineWidth = 1;
    ctx.stroke();
    
    ctx.restore();
  });
};

// Rysowanie okręgu myszki i fal
const drawCircleAndWaves = () => {
  if (!circleCanvasRef.value) return;
  
  const ctx = circleCanvasRef.value.getContext('2d');
  if (!ctx) return;
  
  // Wyczyść canvas
  ctx.clearRect(0, 0, circleCanvasRef.value.width, circleCanvasRef.value.height);
  
  // Rysuj fale
  waves.value.forEach(wave => {
    const elapsed = Date.now() - wave.startTime;
    if (!wave.active) return;
    
    const progress = elapsed / waveConfig.duration;
    
    // Przezroczystość zanika z czasem
    const alpha = 0.3 * (1 - progress);
    
    // Grubość linii też zanika
    const lineWidth = 2 * (1 - progress);
    
    // Rysuj okrąg fali
    ctx.beginPath();
    ctx.arc(wave.x, wave.y, wave.radius, 0, Math.PI * 2);
    
    // Gradient dla fali
    const gradient = ctx.createRadialGradient(
      wave.x, wave.y, wave.radius * 0.8,
      wave.x, wave.y, wave.radius
    );
    
    gradient.addColorStop(0, `rgba(255, 99, 71, ${alpha})`);
    gradient.addColorStop(1, `rgba(255, 99, 71, 0)`);
    
    ctx.strokeStyle = gradient;
    ctx.lineWidth = lineWidth;
    ctx.stroke();
    
    // Delikatne wypełnienie
    ctx.fillStyle = `rgba(255, 99, 71, ${alpha * 0.1})`;
    ctx.fill();
  });
  
  // Rysuj okrąg myszki (tylko gdy jest nad canvasem)
  if (isMouseOver.value) {
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
    const cellCenterX = cell.baseX + cell.size / 2;
    const cellCenterY = cell.baseY + cell.size / 2;
    
    const distance = Math.sqrt(
      Math.pow(cellCenterX - mouseX, 2) + 
      Math.pow(cellCenterY - mouseY, 2)
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
  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : { r: 0, g: 0, b: 0 };
  };
  
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);
  
  const r = Math.round(rgb1.r + (rgb2.r - rgb1.r) * factor);
  const g = Math.round(rgb1.g + (rgb2.g - rgb1.g) * factor);
  const b = Math.round(rgb1.b + (rgb2.b - rgb1.b) * factor);
  
  return `rgb(${r}, ${g}, ${b})`;
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
  initCanvas();
};

// Lifecycle hooks
onMounted(() => {
  initCanvas();
  
  // Rozpocznij animację
  if (gridCanvasRef.value) {
    animate();
    
    // Dodaj event listeners
    gridCanvasRef.value.addEventListener('mousemove', updateMousePosition);
    gridCanvasRef.value.addEventListener('click', handleMouseClick);
    gridCanvasRef.value.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);
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
<canvas ref="circleCanvasRef" id="circleCanvas" class="w-full h-full absolute inset-0 pointer-events-none"></canvas>



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
