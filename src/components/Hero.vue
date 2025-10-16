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
    link.href = '/cv/CV_Konrad_Kulesza_2025.pdf'; // ścieżka względem public/
    link.setAttribute('download', 'CV_Konrad_Kulesza_2025.pdf');
    link.setAttribute('target', '_blank'); // ważne dla Androida
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

// Do parallax na bloby (mobile)
const scrollX = ref(0);

onMounted(() => {
    window.addEventListener('scroll', () => {
        scrollX.value = window.scrollY;
    });
});


// Do responsywnego SVG (desktop)
const svgWidth = ref(window.innerWidth);

onMounted(() => {
    const onResize = () => (svgWidth.value = window.innerWidth);
    window.addEventListener("resize", onResize);
    onUnmounted(() => window.removeEventListener("resize", onResize));
});


interface Blob {
    el: HTMLElement
    x0: number
    y0: number
    px: number
    py: number
    vx: number
    vy: number
    dragging: boolean
    lastPositions: { x: number; y: number; t: number }[]
}

let blobs: Blob[] = []
let rafId: number

onMounted(() => {
    const blobEls = Array.from(document.querySelectorAll(".blob")) as HTMLElement[]

    const speedScale = 0.015
    const maxSpeed = 15
    const minSpeed = 0.1
    const friction = 0.98

    const containerEl = document.querySelector('.gooey-bg') as HTMLElement
    const containerRect = containerEl.getBoundingClientRect()

    blobs = blobEls.map(blob => {
        const rect = blob.getBoundingClientRect()
        // pozycja środka bloba **w kontenerze**
        const x0 = rect.left + rect.width / 2 - containerRect.left
        const y0 = rect.top + rect.height / 2 - containerRect.top
        return {
            el: blob,
            x0,
            y0,
            px: x0,
            py: y0,
            vx: 0,
            vy: 0,
            dragging: false,
            lastPositions: []
        }
    })


    // dla bloba o indeksie 0 ustawiamy początkową prędkość
    if (blobs[0]) blobs[0].vx = -0.5
    if (blobs[0]) blobs[0].vy = -0.5

    if (blobs[2]) blobs[2].vx = -0.5
    if (blobs[2]) blobs[2].vy = 0.5

    const animate = () => {
        blobs.forEach(blob => {
            if (blob.dragging) return

            // odbijanie od krawędzi okna
            const radius = blob.el.getBoundingClientRect().width / 2
            const containerHeight = containerRect.height
            const containerWidth = containerRect.width

            if (blob.py - radius < 0 && blob.vy < 0) blob.vy = -blob.vy;
            if (blob.py + radius > containerHeight && blob.vy > 0) blob.vy = -blob.vy;
            if (blob.px - radius < 0 && blob.vx < 0) blob.vx = -blob.vx;
            if (blob.px + radius > containerWidth && blob.vx > 0) blob.vx = -blob.vx;

            // aktualizacja pozycji wg prędkości
            blob.px += blob.vx
            blob.py += blob.vy

            // delikatne spowalnianie
            if (Math.abs(blob.vx) < minSpeed) {
                if (blob.vx > 0) blob.vx = minSpeed
                else if (blob.vx < 0) blob.vx = -minSpeed
            }
            if (Math.abs(blob.vy) < minSpeed) {
                if (blob.vy > 0) blob.vy = minSpeed
                else if (blob.vy < 0) blob.vy = -minSpeed
            }

            blob.vx *= friction - radius / 100000
            blob.vy *= friction - radius / 100000

            // jeśli prędkość bardzo mała — zatrzymujemy
            if (Math.abs(blob.vx) < 0.01) blob.vx = 0
            if (Math.abs(blob.vy) < 0.01) blob.vy = 0

            gsap.set(blob.el, { x: blob.px - blob.x0, y: blob.py - blob.y0 })
        })

        rafId = requestAnimationFrame(animate)
    }

    animate()

    // const containerEl = document.querySelector('.gooey-bg') as HTMLElement

    blobEls.forEach((el, i) => {
        let offsetX = 0
        let offsetY = 0

        const getLocalMousePos = (e: MouseEvent) => {
            const rect = containerEl.getBoundingClientRect()
            return {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            }
        }


        const onMouseDown = (e: MouseEvent) => {
            blobs[i].dragging = true
            blobs[i].lastPositions = []

            const blobRect = el.getBoundingClientRect()
            const containerRect = containerEl.getBoundingClientRect()
            offsetX = e.clientX - blobRect.left - blobRect.width / 2
            offsetY = e.clientY - blobRect.top - blobRect.height / 2
        }

        const onMouseMove = (e: MouseEvent) => {
            if (!blobs[i].dragging) return
            const pos = getLocalMousePos(e)

            blobs[i].px = pos.x - offsetX
            blobs[i].py = pos.y - offsetY

            gsap.set(el, { x: blobs[i].px - blobs[i].x0, y: blobs[i].py - blobs[i].y0 })

            const now = performance.now()
            blobs[i].lastPositions.push({ x: pos.x, y: pos.y, t: now })
            if (blobs[i].lastPositions.length > 5) blobs[i].lastPositions.shift()
        }

        const onMouseUp = () => {
            if (!blobs[i].dragging) return
            blobs[i].dragging = false

            const lp = blobs[i].lastPositions
            if (lp.length >= 2) {
                const a = lp[lp.length - 2]
                const b = lp[lp.length - 1]
                const dt = (b.t - a.t) / 1000
                if (dt > 0) {
                    blobs[i].vx = Math.max(Math.min((b.x - a.x) / dt * speedScale, maxSpeed), -maxSpeed)
                    blobs[i].vy = Math.max(Math.min((b.y - a.y) / dt * speedScale, maxSpeed), -maxSpeed)
                }
            }
        }

        el.addEventListener('mousedown', onMouseDown)
        window.addEventListener('mousemove', onMouseMove)
        window.addEventListener('mouseup', onMouseUp)

        onUnmounted(() => {
            el.removeEventListener('mousedown', onMouseDown)
            window.removeEventListener('mousemove', onMouseMove)
            window.removeEventListener('mouseup', onMouseUp)
        })
    })
})


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

        <div class="w-full h-full flex-col items-start justify-end lg:justify-center relative z-1">

            <svg v-if="svgWidth >= 1024" class="gooey-bg absolute inset-0" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="18" result="blur" />
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  
            0 1 0 0 0  
            0 0 1 0 0  
            0 0 0 40 -15" result="goo" />
                        <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                    </filter>
                </defs>
                <g filter="url(#goo)">
                    <circle class="blob" :cx="svgWidth - 400" cy="250" r="80" fill="tomato" />
                    <circle class="blob" :cx="svgWidth - 300" cy="350" r="200" fill="tomato" />
                    <circle class="blob" :cx="svgWidth - 400" cy="480" r="60" fill="tomato" />
                </g>
            </svg>

            <svg v-else class="gooey-bg absolute inset-0" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="18" result="blur" />
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  
            0 1 0 0 0  
            0 0 1 0 0  
            0 0 0 40 -15" result="goo" />
                        <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                    </filter>
                </defs>
                <g filter="url(#goo)">
                    <circle :cx="svgWidth / 2 + scrollX / 7" cy="600" r="170" fill="tomato" />
                    <circle :cx="(svgWidth / 2) - 100 - scrollX / 7" :cy="500 - scrollX / 7" r="70" fill="tomato" />
                    <circle :cx="(svgWidth / 2) - 100 - scrollX / 7" :cy="700 + scrollX / 7" r="50" fill="tomato" />
                </g>
            </svg>
        </div>

    </div>
</template>

<style scoped>
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
