<script setup>
import { ref } from 'vue'

// obrazki
import seenemaImg from '../assets/img/seenema.png'

defineProps({
    msg: String,
})

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css'; // podstawowe style
import 'swiper/css/navigation'; // jeśli chcesz strzałki
import 'swiper/css/pagination'; // jeśli chcesz kropki

import { Navigation, Pagination } from 'swiper/modules';

const showMore = ref(false);
</script>

<template>
    <!-- Tekst My Projects -->
    <div class="max-w-screen-xl mx-auto">
        <!-- ciemny kolor -->
        <h1 class="text-xl lg:text-5xl font-bold my-8 pl-8 text-gray-800">My Projects</h1>
        <div
            class="grid gap-8 grid-cols-1 lg:grid-cols-3 p-8 pb-0 max-w-screen-xl mx-auto justify-items-center items-start">

            <div class="card bg-base-100 w-full shadow-sm" onclick="my_modal_5.showModal()">
                <figure>
                    <img :src="seenemaImg" alt="Seenema" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">
                        Seenema
                        <div class="badge badge-secondary">Typescript</div>
                        <div class="badge badge-secondary">Python</div>
                    </h2>
                    <!-- apka do zarządzania kinem i rezerwacji biletów -->
                    <p>Great web application for managing cinema and booking tickets.</p>
                </div>
            </div>


            <div class="card bg-base-100 w-full shadow-sm transition-all duration-500"
                :class="{ 'lg:mt-10': !showMore }">
                <figure>
                    <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">
                        Quikbook
                        <div class="badge badge-secondary">React</div>
                        <div class="badge badge-secondary">Firebase</div>
                    </h2>
                    <!-- usługi i rezerwacje -->
                    <p>Web app for booking services and managing reservations.</p>
                </div>
            </div>

            <!-- przesun w dol o 20px -->
            <div class="card bg-base-100 w-full shadow-sm transition-all duration-500"
                :class="{ 'lg:mt-20': !showMore }">
                <figure>
                    <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">
                        PocketPal
                        <div class="badge badge-secondary">NEW</div>
                    </h2>
                    <p>Track your spending and manage finances with visualized data.</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Ukryte projekty -->
    <transition name="fade" mode="out-in">
        <div v-if="showMore"
            class="grid gap-8 grid-cols-1 lg:grid-cols-3 p-8 max-w-screen-xl mx-auto justify-items-center">
            <div class="card bg-base-100 w-full shadow-sm">
                <figure>
                    <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">
                        SnapStats
                        <div class="badge badge-secondary">Vue</div>
                    </h2>
                    <p>Hidden project that appears after clicking "Show more".</p>
                </div>
            </div>

            <div class="card bg-base-100 w-full shadow-sm">
                <figure>
                    <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">
                        RatePlay
                        <div class="badge badge-secondary">Vue</div>
                    </h2>
                    <p>Hidden project that appears after clicking "Show more".</p>
                </div>
            </div>

            <div class="card bg-base-100 w-full shadow-sm">
                <figure>
                    <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">
                        Pong STM32
                        <div class="badge badge-secondary">Vue</div>
                    </h2>
                    <p>Hidden project that appears after clicking "Show more".</p>
                </div>
            </div>

            <div class="card bg-base-100 w-full shadow-sm">
                <figure>
                    <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">
                        Wynalazki
                        <div class="badge badge-secondary">Vue</div>
                    </h2>
                    <p>Hidden "Show more".</p>
                </div>
            </div>

            <div class="card bg-base-100 w-full shadow-sm">
                <figure>
                    <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">
                        Statki
                        <div class="badge badge-secondary">Vue</div>
                    </h2>
                    <p>Hidden project that appears after clicking "Show more".</p>
                </div>
            </div>

            <div class="card bg-base-100 w-full shadow-sm">
                <figure>
                    <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">
                        Extra Project
                        <div class="badge badge-secondary">Vue</div>
                    </h2>
                    <p>Hidden project that appears after clicking "Show more".</p>
                </div>
            </div>
        </div>
    </transition>

    <!-- Przycisk Show More -->
    <div class="flex justify-center my-6">
        <button class="btn btn-primary btn-wide" @click="showMore = !showMore">
            {{ showMore ? "Show less" : "Show more" }}
        </button>
    </div>

    <!-- Modale -->

    <!-- Open the modal using ID.showModal() method -->
    <!-- <button class="btn" onclick="my_modal_5.showModal()">open modal</button> -->
    <dialog id="my_modal_5" class="modal modal-middle">
        <div class="modal-box w-11/12 max-w-5xl">
            <h3 class="text-lg font-bold">Seenema</h3>
            <Swiper :modules="[Navigation, Pagination]" :navigation="true" :pagination="{ clickable: true }"
                :loop="true" class="w-full h-[400px]">
                <SwiperSlide>
                    <img src="https://picsum.photos/id/1015/800/400" class="w-full h-full object-cover" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://picsum.photos/id/1016/800/400" class="w-full h-full object-cover" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://picsum.photos/id/1018/800/400" class="w-full h-full object-cover" />
                </SwiperSlide>
            </Swiper>
            <p class="py-4">Seenema is a full-stack web application we developed as a team project together with my
                colleagues Maciej Rataj and Marcel Wójcik. It’s designed for cinema management and online ticket booking. The system includes features
                such as role-based access (super admin, admin, employee, customer), JWT authentication with automatic
                session refresh, account registration and recovery, as well as seat selection and booking confirmation.</p>

            <p class="py-4">On the technical side, we used React + Vite, Tailwind CSS, and NextUI for the frontend, and
                Django REST Framework with PostgreSQL for the backend. The modular structure of the app allowed us to
                work in parallel on different parts of the system and keep the codebase scalable and maintainable.</p>
            <div class="modal-action">
                <form method="dialog">
                    <!-- if there is a button in form, it will close the modal -->
                    <button class="btn">Close</button>
                </form>
            </div>
        </div>
    </dialog>

</template>

<style scoped>
.read-the-docs {
    color: #888;
}

.fade-enter-active,
.fade-leave-active {
    transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}
</style>
