<script setup>
import { ref } from 'vue'

defineProps({
    msg: String,
})

const count = ref(0)
</script>

<template>
    <div class="flex flex-row justify-around p-8 w-full ">
        <div class="card bg-base-100 w-96 shadow-sm h-auto">
            <figure>
                <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
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


        <div class="card bg-base-100 w-96 shadow-sm mt-10">
            <figure>
                <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
            </figure>
            <div class="card-body">
                <h2 class="card-title">
                    Quikbook
                    <div class="badge badge-secondary">NEW</div>
                </h2>
                <!-- usługi i rezerwacje -->
                <p>Web app for booking services and managing reservations.</p>
            </div>
        </div>

        <div class="card bg-base-100 w-96 shadow-sm mt-20">
            <figure>
                <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
            </figure>
            <div class="card-body">
                <h2 class="card-title">
                    PocketPal
                    <div class="badge badge-secondary">NEW</div>
                </h2>
                <p>Track your spending and manage finances with ease.</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.read-the-docs {
    color: #888;
}
</style>
