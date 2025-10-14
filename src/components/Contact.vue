<script setup lang="ts">

// import profileImg from '../assets/img/profile.jpg';
import profileImg from '../assets/img/profile2.jpg';



defineProps({
    msg: String,
})

</script>

<template>
    <!-- Tekst My Projects -->
    <div class="w-full">
        <div class="max-w-screen-xl mx-auto">
            <!-- ciemny kolor -->
            <h1 class="!text-5xl font-bold my-8 pl-8 text-gray-800 pt-8">Contact Me</h1>

            <div class="w-full flex p-8">

                <div class="card lg:card-side bg-base-100 shadow-sm w-full">
                    <figure class="md:w-100 w-full bg-amber-300">
                        <img :src="profileImg" alt="Profile" class="object-cover" />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">List of my socials</h2>
                        <ul class="list">
                            <li class="list-row pl-0">
                                <div class="text-4xl font-thin opacity-30 tabular-nums w-11">01</div>
                                <div><img class="size-10 rounded-box"
                                        src="https://img.daisyui.com/images/profile/demo/1@94.webp" /></div>
                                <div class="list-col-grow">
                                    <div>konradkul12@gmail.com</div>
                                    <div class="text-xs uppercase font-semibold opacity-60">GMAIL</div>
                                </div>
                                <button class="btn btn-ghost btn-c-filled">
                                    Contact
                                </button>
                            </li>

                            <li class="list-row pl-0">
                                <div class="text-4xl font-thin opacity-30 tabular-nums w-11">02</div>
                                <div><img class="size-10 rounded-box"
                                        src="https://img.daisyui.com/images/profile/demo/1@94.webp" /></div>
                                <div class="list-col-grow">
                                    <div>Konrad Kulesza</div>
                                    <div class="text-xs uppercase font-semibold opacity-60">LINKEDIN</div>
                                </div>
                                <button class="btn btn-ghost btn-c-filled">
                                    <!-- co tu napisac do linkedin (nie contact) -->
                                    View Profile
                                </button>
                            </li>

                            <li class="list-row pl-0">
                                <div class="text-4xl font-thin opacity-30 tabular-nums w-11">03</div>
                                <div><img class="size-10 rounded-box"
                                        src="https://img.daisyui.com/images/profile/demo/1@94.webp" /></div>
                                <div class="list-col-grow">
                                    <div>croozer4</div>
                                    <div class="text-xs uppercase font-semibold opacity-60">GITHUB</div>
                                </div>
                                <button class="btn btn-ghost btn-c-filled">
                                    <!-- co tu napisac do linkedin (nie contact) -->
                                    View Profile
                                </button>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>

        </div>
    </div>

</template>

<style scoped>
.read-the-docs {
    color: #888;
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
</style>
