<script setup lang="ts">
import { ref, onMounted, onUnmounted, onBeforeUnmount } from 'vue';
import { gsap } from 'gsap';

defineProps({
    msg: String,
})

const count = ref(0)

let mouseHandler: (e: MouseEvent) => void

let smallCircleEl: HTMLElement | null = null
let bigCircleEl: HTMLElement | null = null
let shape1El: HTMLElement | null = null
let shape2El: HTMLElement | null = null
let shape3El: HTMLElement | null = null

onMounted(() => {
    smallCircleEl = document.querySelector('.small-circle')
    bigCircleEl = document.querySelector('.big-circle')
    shape1El = document.querySelector('.shape1')
    shape2El = document.querySelector('.shape2')
    shape3El = document.querySelector('.shape3')


    mouseHandler = (e: MouseEvent) => {
        const cx = e.clientX - window.innerWidth / 2
        const cy = e.clientY - window.innerHeight / 2
        gsap.to(smallCircleEl, { x: cx * 0.05, y: cy * 0.05, duration: 0.7, ease: 'power2.out' })
        gsap.to(bigCircleEl, { x: cx * 0.03, y: cy * 0.03, duration: 1.2, ease: 'power2.out' })
        gsap.to(shape1El, { x: cx * 0.05, y: cy * 0.04, duration: 0.3, ease: 'power2.out' })
        gsap.to(shape2El, { x: cx * 0.1, y: cy * 0.1, duration: 0.3, ease: 'power2.out' })
        gsap.to(shape3El, { x: cx * 0.05, y: cy * 0.08, duration: 0.3, ease: 'power2.out' })
    }
    window.addEventListener('mousemove', mouseHandler)
})

</script>

<template>
    <div class="hero bg-base-200 h-[calc(100vh-64px)] w-full p-0 overflow-clip relative">
        <div class="w-full hero-content flex-col lg:flex-row-reverse align-start justify-end">
            <div>
                <p class="text-3xl py-6 font-bold">
                    Hi there,
                </p>
                <p class="text-3xl"><span class="font-bold text-colorful"> > > > </span> I'm Konrad <span
                        class="font-bold text-colorful">
                        < < < </span>
                </p>
                <p class="text-4xl py-6 font-bold">
                    Web and Software Developer<span class="font-bold text-colorful">.</span>
                </p>
                <div class="flex gap-4">
                    <button class="btn-c-filled btn">Contact Me</button>
                    <button class="btn-c-outline btn">My resume
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                        </svg>

                    </button>
                </div>
            </div>
        </div>

        <div class="small-circle"></div>
        <div class="big-circle"></div>
        <div class="shape1 font-black rotate-[-10deg]">{ }</div>
        <div class="shape2 font-black">&lt;/&gt;</div>
        <div class="shape3 font-black rotate-[10deg]">[ ]</div>


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
    /* background: linear-gradient(45deg, rgb(255, 111, 71), rgba(255, 99, 71, 0)); */
    border-radius: 50%;
    z-index: 6;

    /* animation: float 10s infinite; */
    filter: blur(2px);

}

.big-circle {
    position: absolute;
    top: 0px;
    right: 0px;
    height: 600px;
    width: 600px;
    background-color: rgba(255, 99, 71, 0.27);
    /* background: linear-gradient(45deg, tomato, rgba(255, 99, 71, 0.295)); */
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
    font-family: 'Inter', sans-serif;
    -webkit-text-stroke: 3px #f0f8ea;

}

.shape2 {
    position: absolute;
    top: 200px;
    right: 200px;
    font-size: 150px;
    color: transparent;
    z-index: 7;
    user-select: none;
    font-family: 'Inter', sans-serif;
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
    font-family: 'Inter', sans-serif;
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

.btn-c-filled:focus {
    background-color: #ff6347 !important;
    border: none;
    color: white;
}

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

.btn-c-outline:focus {
    background-color: tomato !important;
    border: none;
    color: white;
}
</style>
