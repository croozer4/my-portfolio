<script setup>
import { ref } from 'vue'

// obrazki do cardów
import seenemaImg from '../assets/img/seenema.jpg'
import quikbookImg from '../assets/img/quikbook.jpg'
import pocketPalImg from '../assets/img/pocketpal.jpg'
import snapStatsImg from '../assets/img/snapstats.jpg'
import ratePlayImg from '../assets/img/rateplay.jpg'
import pongSTM32Img from '../assets/img/pong-stm32.jpg'

// obrazki do swipera seenema
import seenemaSwiperImg1 from '../assets/img/seenema/seenema1.jpg'
import seenemaSwiperImg2 from '../assets/img/seenema/seenema2.jpg'
import seenemaSwiperImg3 from '../assets/img/seenema/seenema3.jpg'
import seenemaSwiperImg4 from '../assets/img/seenema/seenema4.jpg'

// obrazki do swipera quikbook
import quikbookSwiperImg1 from '../assets/img/quikbook/quikbook1.jpg'
import quikbookSwiperImg2 from '../assets/img/quikbook/quikbook2.jpg'
import quikbookSwiperImg3 from '../assets/img/quikbook/quikbook3.jpg'
import quikbookSwiperImg4 from '../assets/img/quikbook/quikbook4.jpg'
import quikbookSwiperImg5 from '../assets/img/quikbook/quikbook5.jpg'

// obrazki do swipera pocketpal
import pocketPalSwiperImg1 from '../assets/img/pocketpal/pocketpal1.jpg'
import pocketPalSwiperImg2 from '../assets/img/pocketpal/pocketpal2.jpg'
import pocketPalSwiperImg3 from '../assets/img/pocketpal/pocketpal3.jpg'
import pocketPalSwiperImg4 from '../assets/img/pocketpal/pocketpal4.jpg'
import pocketPalSwiperImg5 from '../assets/img/pocketpal/pocketpal5.jpg'

// obrazki do swipera snapstats
import snapStatsSwiperImg1 from '../assets/img/snapstats/snapstats1.jpg'
import snapStatsSwiperImg2 from '../assets/img/snapstats/snapstats2.jpg'
import snapStatsSwiperImg3 from '../assets/img/snapstats/snapstats3.jpg'
import snapStatsSwiperImg4 from '../assets/img/snapstats/snapstats4.jpg'
import snapStatsSwiperImg5 from '../assets/img/snapstats/snapstats5.jpg'
import snapStatsSwiperImg6 from '../assets/img/snapstats/snapstats6.jpg'
import snapStatsSwiperImg7 from '../assets/img/snapstats/snapstats7.jpg'

//obrazki do swipera rateplay
import ratePlaySwiperImg1 from '../assets/img/rateplay/rateplay1.jpg'
import ratePlaySwiperImg2 from '../assets/img/rateplay/rateplay2.jpg'
import ratePlaySwiperImg3 from '../assets/img/rateplay/rateplay3.jpg'
import ratePlaySwiperImg4 from '../assets/img/rateplay/rateplay4.jpg'
import ratePlaySwiperImg5 from '../assets/img/rateplay/rateplay5.jpg'
import ratePlaySwiperImg6 from '../assets/img/rateplay/rateplay6.jpg'
import ratePlaySwiperImg7 from '../assets/img/rateplay/rateplay7.jpg'


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
        <!-- Karty projektów -->
         
        <div
            class="grid gap-8 grid-cols-1 lg:grid-cols-3 p-8 pb-0 max-w-screen-xl mx-auto justify-items-center items-start">

            <!-- Seenema Card -->
            <div class="card bg-base-100 w-full shadow-sm" onclick="seenema_modal.showModal()">
                <figure>
                    <img :src="seenemaImg" alt="Seenema" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">
                        Seenema
                        <div class="badge badge-secondary">Python</div>
                        <div class="badge badge-secondary">PostgreSQL</div>
                    </h2>
                    <!-- apka do zarządzania kinem i rezerwacji biletów -->
                    <p>Cinema management and online ticket booking made easy.</p>
                </div>
            </div>

            <!-- Quikbook Card -->
            <div class="card bg-base-100 w-full shadow-sm transition-all duration-500"
                onclick="quikbook_modal.showModal()" :class="{ 'lg:mt-10': !showMore }">
                <figure>
                    <img :src="quikbookImg" alt="Quikbook" />
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
            <!-- PocketPal Card -->
            <div class="card bg-base-100 w-full shadow-sm transition-all duration-500"
                onclick="pocketpal_modal.showModal()" :class="{ 'lg:mt-20': !showMore }">
                <figure>
                    <img :src="pocketPalImg" alt="PocketPal" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">
                        PocketPal
                        <div class="badge badge-secondary">Typescript</div>
                        <div class="badge badge-secondary">Firebase</div>
                    </h2>
                    <p>Track your spending and manage finances with visualized data.</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Ukryte projekty -->
    <transition name="fade" mode="out-in">
        <!-- SnapStats Card -->
        <div v-if="showMore"
            class="grid gap-8 grid-cols-1 lg:grid-cols-3 p-8 max-w-screen-xl mx-auto justify-items-center">
            <div class="card bg-base-100 w-full shadow-sm" onclick="snapstats_modal.showModal()">
                <figure>
                    <img :src="snapStatsImg" alt="SnapStats" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">
                        SnapStats
                        <div class="badge badge-secondary">React</div>
                        <div class="badge badge-secondary">Firebase</div>
                    </h2>
                    <p>Online platform for photographers to share, analyze, and critique photos.</p>
                </div>
            </div>

            <!-- RatePlay Card -->
            <div class="card bg-base-100 w-full shadow-sm" onclick="rateplay_modal.showModal()">
                <figure>
                    <img :src="ratePlayImg" alt="RatePlay" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">
                        RatePlay
                        <div class="badge badge-secondary">Angular</div>
                        <div class="badge badge-secondary">Gemini API</div>
                    </h2>
                    <p>Online app for game enthusiasts to connect and share experiences.</p>
                </div>
            </div>

            <!-- Pong STM32 Card -->
            <div class="card bg-base-100 w-full shadow-sm" onclick="pongstm32_modal.showModal()">
                <figure>
                    <img :src="pongSTM32Img" alt="Pong STM32" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">
                        Pong STM32
                        <div class="badge badge-secondary">C</div>
                        <div class="badge badge-secondary">Embedded</div>
                    </h2>
                    <p>Fun Pong Game recreated on STM32 microcontroller.</p>
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
                        Next Project
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

    <!-- Seenema Modal -->
    <dialog id="seenema_modal" class="modal modal-middle">
        <div class="modal-box w-11/12 max-w-5xl">
            <form method="dialog">
                <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-6">✕</button>
            </form>
            <h3 class="text-2xl font-bold pb-4">Project - Seenema</h3>
            <Swiper :modules="[Navigation, Pagination]" :navigation="true" :pagination="{ clickable: true }"
                :loop="true" class="w-full sm:h-[400px] h-[400px]">
                <SwiperSlide class="aspect-video sm:aspect-[4/3]">
                    <img :src="seenemaSwiperImg1" class="w-full h-full object-cover" />
                </SwiperSlide>
                <SwiperSlide class="aspect-video sm:aspect-[4/3]">
                    <img :src="seenemaSwiperImg2" class="w-full h-full object-cover" />
                </SwiperSlide>
                <SwiperSlide class="aspect-video sm:aspect-[4/3]">
                    <img :src="seenemaSwiperImg3" class="w-full h-full object-cover" />
                </SwiperSlide>
                <SwiperSlide class="aspect-video sm:aspect-[4/3]">
                    <img :src="seenemaSwiperImg4" class="w-full h-full object-cover" />
                </SwiperSlide>
            </Swiper>
            <p class="pt-8">Seenema is a full-stack web application we developed as a team project together with my
                colleagues Maciej Rataj and Marcel Wójcik. It’s designed for cinema management and online ticket
                booking. The system includes features
                such as role-based access (super admin, admin, employee, customer), JWT authentication with automatic
                session refresh, account registration and recovery, as well as seat selection and booking confirmation.
            </p>

            <p class="pt-8">On the technical side, we used React + Vite, Tailwind CSS, and NextUI for the frontend, and
                Django REST Framework with PostgreSQL for the backend. The modular structure of the app allowed us to
                work in parallel on different parts of the system and keep the codebase scalable and maintainable.</p>
        </div>
    </dialog>

    <!-- Quikbook Modal -->
    <dialog id="quikbook_modal" class="modal modal-middle">
        <div class="modal-box w-11/12 max-w-5xl">
            <form method="dialog">
                <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-6">✕</button>
            </form>
            <h3 class="text-2xl font-bold pb-4">Project - Quikbook</h3>
            <Swiper :modules="[Navigation, Pagination]" :navigation="true" :pagination="{ clickable: true }"
                :loop="true" class="w-full sm:h-[400px] h-[400px]">
                <SwiperSlide class="aspect-video sm:aspect-[4/3]">
                    <img :src="quikbookSwiperImg1" class="w-full h-full object-cover" />
                </SwiperSlide>
                <SwiperSlide class="aspect-video sm:aspect-[4/3]">
                    <img :src="quikbookSwiperImg2" class="w-full h-full object-cover" />
                </SwiperSlide>
                <SwiperSlide class="aspect-video sm:aspect-[4/3]">
                    <img :src="quikbookSwiperImg3" class="w-full h-full object-cover" />
                </SwiperSlide>
                <SwiperSlide class="aspect-video sm:aspect-[4/3]">
                    <img :src="quikbookSwiperImg4" class="w-full h-full object-cover" />
                </SwiperSlide>
                <SwiperSlide class="aspect-video sm:aspect-[4/3]">
                    <img :src="quikbookSwiperImg5" class="w-full h-full object-cover" />
                </SwiperSlide>
            </Swiper>
            <p class="pt-8">
                Quikbook is a modern web application we created as a team with Marcel Wójcik and Maciej Rataj to
                simplify online service bookings.
                It provides a smooth process for customers to search, book, and manage reservations, while service
                providers can easily manage their availability, services, and client requests.
                The platform includes features such as dedicated accounts for clients and providers, intuitive UI,
                advanced search and reservation system, and Google authentication with password recovery.
            </p>

            <p class="pt-8">
                On the technical side, we built Quikbook with React, TypeScript, Vite, Tailwind CSS, and Material
                Tailwind for the frontend, and integrated it with Google Firebase for authentication, Firestore
                database, and secure data storage.
                The use of modern technologies allowed us to deliver a responsive, scalable, and secure solution that
                streamlines booking services online.
            </p>
        </div>
    </dialog>

    <!-- PocketPal Modal -->
    <dialog id="pocketpal_modal" class="modal modal-middle">
        <div class="modal-box w-11/12 max-w-5xl">
            <form method="dialog">
                <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-6">✕</button>
            </form>
            <h3 class="text-2xl font-bold pb-4">Project - PocketPal</h3>
            <Swiper :modules="[Navigation, Pagination]" :navigation="true" :pagination="{ clickable: true }"
                :loop="true" class="w-full sm:h-[400px] h-[400px]">
                <SwiperSlide class="aspect-video sm:aspect-[4/3]">
                    <img :src="pocketPalSwiperImg1" class="w-full h-full object-cover" />
                </SwiperSlide>
                <SwiperSlide class="aspect-video sm:aspect-[4/3]">
                    <img :src="pocketPalSwiperImg2" class="w-full h-full object-cover" />
                </SwiperSlide>
                <SwiperSlide class="aspect-video sm:aspect-[4/3]">
                    <img :src="pocketPalSwiperImg3" class="w-full h-full object-cover" />
                </SwiperSlide>
                <SwiperSlide class="aspect-video sm:aspect-[4/3]">
                    <img :src="pocketPalSwiperImg4" class="w-full h-full object-cover" />
                </SwiperSlide>
                <SwiperSlide class="aspect-video sm:aspect-[4/3]">
                    <img :src="pocketPalSwiperImg5" class="w-full h-full object-cover" />
                </SwiperSlide>
            </Swiper>
            <p class="pt-8">
                PocketPal is a modern web application we developed as a team with Marcel Wójcik and Maciej Rataj to
                simplify personal and family finance management.
                It allows users to track expenses and incomes, categorize transactions, visualize budgets with
                interactive charts, manage shared family budgets, and generate PDF reports.
                The platform features an intuitive interface with notifications for successful or failed actions,
                keeping users fully in control of their finances.
            </p>

            <p class="pt-8">
                Users can register and log in via traditional forms or Google accounts, reset passwords, and manage
                their profiles.
                The family feature lets users create or join shared budget groups, monitor collective spending, invite
                members via codes, and manage roles within the group.
                PocketPal combines simplicity, interactivity, and practical financial tools to help individuals and
                families stay organized and financially aware.
            </p>

            <p class="pt-8">
                On the technical side, PocketPal is built with React and Vite for a fast and reactive frontend, Mantine
                for UI components, Nivo for interactive charts, and Firebase for backend services including Firestore
                for data storage and Authentication for secure login.
                The app also uses React Router for navigation and jsPDF for generating PDF reports.
                This stack ensures a responsive, scalable, and secure application capable of handling user and family
                financial data efficiently.
            </p>
        </div>
    </dialog>

    <!-- SnapStats Modal -->
    <dialog id="snapstats_modal" class="modal modal-middle">
        <div class="modal-box w-11/12 max-w-5xl">
            <form method="dialog">
                <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-6">✕</button>
            </form>
            <h3 class="text-2xl font-bold pb-4">Project - SnapStats</h3>
            <Swiper :modules="[Navigation, Pagination]" :navigation="true" :pagination="{ clickable: true }"
                :loop="true" class="w-full sm:h-[400px] h-[400px]">
                <SwiperSlide class="aspect-video sm:aspect-[4/3]">
                    <img :src="snapStatsSwiperImg1" class="w-full h-full object-cover" />
                </SwiperSlide>
                <SwiperSlide class="aspect-video sm:aspect-[4/3]">
                    <img :src="snapStatsSwiperImg2" class="w-full h-full object-cover" />
                </SwiperSlide>
                <SwiperSlide class="aspect-video sm:aspect-[4/3]">
                    <img :src="snapStatsSwiperImg3" class="w-full h-full object-cover" />
                </SwiperSlide>
                <SwiperSlide class="aspect-video sm:aspect-[4/3]">
                    <img :src="snapStatsSwiperImg4" class="w-full h-full object-cover" />
                </SwiperSlide>
                <SwiperSlide class="aspect-video sm:aspect-[4/3]">
                    <img :src="snapStatsSwiperImg5" class="w-full h-full object-cover" />
                </SwiperSlide>
                <SwiperSlide class="aspect-video sm:aspect-[4/3]">
                    <img :src="snapStatsSwiperImg6" class="w-full h-full object-cover" />
                </SwiperSlide>
                <SwiperSlide class="aspect-video sm:aspect-[4/3]">
                    <img :src="snapStatsSwiperImg7" class="w-full h-full object-cover" />
                </SwiperSlide>
            </Swiper>
            <p class="pt-8">
                SnapStats is an original web application I developed as a solo project for my Engineering Thesis. It was
                created to address the specific needs of professional photographers for an advanced online tool to
                facilitate the sharing and in-depth technical analysis of photographic works. The system fills a market
                gap by offering sophisticated analytical functions, previously found mainly in desktop applications,
                while providing the accessibility and flexibility of a modern web platform.
            </p>

            <p class="pt-8">
                The SnapStats platform allows users to curate their portfolios, compare their work with peers, and seek
                inspiration from the community. A core feature is the ability to view detailed technical parameters
                (EXIF data) of any photograph, including the camera model, ISO, shutter speed, and aperture—an
                invaluable resource for learning and critique. Registered users can like photos, save them to favorites,
                and receive personalized recommendations based on the community's collective preferences. The system is
                designed with distinct user roles (Guest, User, Administrator) and includes advanced filtering
                capabilities, such as sorting photos by equipment brand and model.
            </p>

            <p class="pt-8">
                From a technical perspective, SnapStats is built on a robust and modern stack. The fast and reactive
                frontend is powered by JavaScript and the ReactJS library, with the Material UI component library
                ensuring a clean, modern interface. The backend and data layer leverage the Firebase platform for secure
                user Authentication and reliable data storage via Firestore. This architectural choice ensures the
                application is highly scalable, secure, and provides continuous availability for handling complex
                photographic and community data efficiently.
            </p>
        </div>
    </dialog>

    <!-- RatePlay Modal -->
    <dialog id="rateplay_modal" class="modal modal-middle">
        <div class="modal-box w-11/12 max-w-5xl">
            <form method="dialog">
                <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-6">✕</button>
            </form>
            <h3 class="text-2xl font-bold pb-4">Project - RatePlay</h3>
            <Swiper :modules="[Navigation, Pagination]" :navigation="true" :pagination="{ clickable: true }"
                :loop="true" class="w-full sm:h-[400px] h-[400px]">
                <SwiperSlide class="aspect-video sm:aspect-[4/3]">
                    <img :src="ratePlaySwiperImg1" class="w-full h-full object-cover" />
                </SwiperSlide>
                <SwiperSlide class="aspect-video sm:aspect-[4/3]">
                    <img :src="ratePlaySwiperImg2" class="w-full h-full object-cover" />
                </SwiperSlide>
                <SwiperSlide class="aspect-video sm:aspect-[4/3]">
                    <img :src="ratePlaySwiperImg3" class="w-full h-full object-cover" />
                </SwiperSlide>
                <SwiperSlide class="aspect-video sm:aspect-[4/3]">
                    <img :src="ratePlaySwiperImg4" class="w-full h-full object-cover" />
                </SwiperSlide>
                <SwiperSlide class="aspect-video sm:aspect-[4/3]">
                    <img :src="ratePlaySwiperImg5" class="w-full h-full object-cover" />
                </SwiperSlide>
                <SwiperSlide class="aspect-video sm:aspect-[4/3]">
                    <img :src="ratePlaySwiperImg6" class="w-full h-full object-cover" />
                </SwiperSlide>
                <SwiperSlide class="aspect-video sm:aspect-[4/3]">
                    <img :src="ratePlaySwiperImg7" class="w-full h-full object-cover" />
                </SwiperSlide>
            </Swiper>
            <p class="pt-8">
                RatePlay is a comprehensive web platform created for computer game enthusiasts. The core goal of the
                project is to build an active social community that allows users to rate their favorite titles and
                write detailed reviews. The rating and reviewing system is the heart of this application, fostering
                interaction and exchange of ideas among digital entertainment fans. The application frontend is built
                with Angular and TypeScript, ensuring a robust and scalable structure. A modern and responsive
                user interface is achieved using Tailwind CSS and the DaisyUI component library, which together
                create a minimalist, clean, and cohesive design. The application is fully responsive, working equally
                well on mobile and desktop devices.
            </p>

            <p class="pt-8">
                The project implements full support for all five required API endpoints (public, authentication,
                authenticated, admin, and LLM). The central element is the authentication modal, which contains all
                user account functionalities: login, registration, account activation, password change, and recovery.
                Logged-in users can view, sort, and rate games. All token-authenticated API endpoints have been
                implemented, including key functions related to game reviews (adding, editing, and deleting reviews and
                ratings). For users with administrator privileges, a dedicated panel allows for user management,
                including adding new accounts, controlling their activity status, and granting admin rights.
            </p>

            <p class="pt-8">
                From a technical perspective, the project uses routing to navigate between different views (e.g.,
                game list, admin panel). Business logic and API communication are implemented using five custom
                services (`admin`, `auth`, `games`, `gemini`, `reviews`), which utilize Angular's `HttpClient`.
                Additional features include multiple API uses for sending emails during key processes (registration
                confirmation, temporary password, password reset). A key differentiator is the integration with an LLM
                model API (Gemini AI). These functions are available in a dedicated "Artificial Intelligence" tab and
                include generating random games, fetching games by ID, and generating titles based on a description.
                Furthermore, on each game's page, there is an option to generate an AI review summary.
            </p>
        </div>
    </dialog>

    <!-- Pong Modal -->
    <dialog id="pongstm32_modal" class="modal modal-middle">
        <div class="modal-box w-11/12 max-w-5xl">
            <form method="dialog">
                <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-6">✕</button>
            </form>
            <h3 class="text-2xl font-bold pb-4">Project - Pong STM32</h3>
            <Swiper :modules="[Navigation, Pagination]" :navigation="true" :pagination="{ clickable: true }"
                :loop="true" class="w-full sm:h-[400px] h-[400px]">
                <SwiperSlide class="aspect-video sm:aspect-[4/3]">
                    <img :src="ratePlaySwiperImg1" class="w-full h-full object-cover" />
                </SwiperSlide>
                <SwiperSlide class="aspect-video sm:aspect-[4/3]">
                    <img :src="ratePlaySwiperImg2" class="w-full h-full object-cover" />
                </SwiperSlide>
                <SwiperSlide class="aspect-video sm:aspect-[4/3]">
                    <img :src="ratePlaySwiperImg3" class="w-full h-full object-cover" />
                </SwiperSlide>
                <SwiperSlide class="aspect-video sm:aspect-[4/3]">
                    <img :src="ratePlaySwiperImg4" class="w-full h-full object-cover" />
                </SwiperSlide>
                <SwiperSlide class="aspect-video sm:aspect-[4/3]">
                    <img :src="ratePlaySwiperImg5" class="w-full h-full object-cover" />
                </SwiperSlide>
                <SwiperSlide class="aspect-video sm:aspect-[4/3]">
                    <img :src="ratePlaySwiperImg6" class="w-full h-full object-cover" />
                </SwiperSlide>
                <SwiperSlide class="aspect-video sm:aspect-[4/3]">
                    <img :src="ratePlaySwiperImg7" class="w-full h-full object-cover" />
                </SwiperSlide>
            </Swiper>
            <p class="pt-8">
                RatePlay is a comprehensive web platform created for computer game enthusiasts. The core goal of the
                project is to build an active social community that allows users to rate their favorite titles and
                write detailed reviews. The rating and reviewing system is the heart of this application, fostering
                interaction and exchange of ideas among digital entertainment fans. The application frontend is built
                with Angular and TypeScript, ensuring a robust and scalable structure. A modern and responsive
                user interface is achieved using Tailwind CSS and the DaisyUI component library, which together
                create a minimalist, clean, and cohesive design. The application is fully responsive, working equally
                well on mobile and desktop devices.
            </p>

            <p class="pt-8">
                The project implements full support for all five required API endpoints (public, authentication,
                authenticated, admin, and LLM). The central element is the authentication modal, which contains all
                user account functionalities: login, registration, account activation, password change, and recovery.
                Logged-in users can view, sort, and rate games. All token-authenticated API endpoints have been
                implemented, including key functions related to game reviews (adding, editing, and deleting reviews and
                ratings). For users with administrator privileges, a dedicated panel allows for user management,
                including adding new accounts, controlling their activity status, and granting admin rights.
            </p>

            <p class="pt-8">
                From a technical perspective, the project uses routing to navigate between different views (e.g.,
                game list, admin panel). Business logic and API communication are implemented using five custom
                services (`admin`, `auth`, `games`, `gemini`, `reviews`), which utilize Angular's `HttpClient`.
                Additional features include multiple API uses for sending emails during key processes (registration
                confirmation, temporary password, password reset). A key differentiator is the integration with an LLM
                model API (Gemini AI). These functions are available in a dedicated "Artificial Intelligence" tab and
                include generating random games, fetching games by ID, and generating titles based on a description.
                Furthermore, on each game's page, there is an option to generate an AI review summary.
            </p>
        </div>
    </dialog>

</template>

<style scoped>
.badge {
    background-color: tomato;
    color: white;
    /* font-weight: 500; */
    border: none;
}

.card {
    transition:
        margin-top 0.5s cubic-bezier(0.40, 0.00, 0.20, 1.00),
        transform 0.1s cubic-bezier(0.40, 0.00, 0.20, 1.00);
}

.card:hover {
    transform: scale(1.05);
    cursor: pointer;
    transition: transform 0.1s cubic-bezier(0.40, 0.00, 0.20, 1.00);
    /* szybki scale tylko przy hover */
}

:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
    color: tomato;
}

:deep(.swiper-pagination-bullet) {
    background: gray;
    /* normalne kropki */
}

:deep(.swiper-pagination-bullet-active) {
    background: tomato;
    /* aktywna kropka */
}

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
    transition: all 0.3s ease;
}
</style>
