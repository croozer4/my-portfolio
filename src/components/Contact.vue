<script setup lang="ts">

// import profileImg from '../assets/img/profile.jpg';
import profileImg from '../assets/img/profile2.jpg';

defineProps({
    msg: String,
})

const openLink = (url: string) => {
  window.open(url, '_blank');
};

</script>

<template>
    <!-- Tekst My Projects -->
    <div id="contact-section" class="w-full mb-16">
        <div class="max-w-screen-xl mx-auto">
            <!-- ciemny kolor -->
            <h1 class="!text-5xl font-bold mt-8 pl-8 text-gray-800 pt-8">Contact Me</h1>

            <div class="w-full flex p-8">

                <div class="card lg:card-side bg-base-100 shadow-sm w-full">
                    <figure class="md:w-100 w-full bg-amber-300">
                        <img :src="profileImg" alt="Profile" class="object-cover" />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">List of my socials</h2>
                        <ul class="list">
                            <li class="list-row px-0 flex flex-col md:flex-row md:items-center md:justify-between">
                                <div flex class="flex gap-4">
                                    <div class="text-4xl font-thin opacity-30 tabular-nums w-11 hidden md:block">01</div>
                                    <div class="bg-white rounded-box w-10 h-10 flex items-center justify-center"><svg
                                            role="img" class="fill-current text-gray-800 h-8 w-8" viewBox="0 0 24 24">
                                            xmlns="http://www.w3.org/2000/svg">
                                            <title>Gmail</title>
                                            <path
                                                d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
                                        </svg></div>
                                    <div class="list-col-grow">
                                        <div>konradkul12@gmail.com</div>
                                        <div class="text-xs uppercase font-semibold opacity-60">GMAIL</div>
                                    </div>
                                </div>
                                <button class="btn btn-ghost btn-c-filled" @click="openLink('mailto:konradkul12@gmail.com')">
                                    Contact
                                </button>
                            </li>

                            <li class="list-row px-0 flex flex-col md:flex-row md:items-center md:justify-between">
                                <div flex class="flex gap-4">
                                    <div class="text-4xl font-thin opacity-30 tabular-nums w-11 hidden md:block">02</div>
                                    <div class="bg-white rounded-box w-10 h-10 flex items-center justify-center">
                                        <svg role="img" class="fill-current text-gray-800 h-9 w-9" viewBox="0 0 640 640"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <title>LinkedIn</title>
                                            <path
                                                d="M196.3 512L103.4 512L103.4 212.9L196.3 212.9L196.3 512zM149.8 172.1C120.1 172.1 96 147.5 96 117.8C96 103.5 101.7 89.9 111.8 79.8C121.9 69.7 135.6 64 149.8 64C164 64 177.7 69.7 187.8 79.8C197.9 89.9 203.6 103.6 203.6 117.8C203.6 147.5 179.5 172.1 149.8 172.1zM543.9 512L451.2 512L451.2 366.4C451.2 331.7 450.5 287.2 402.9 287.2C354.6 287.2 347.2 324.9 347.2 363.9L347.2 512L254.4 512L254.4 212.9L343.5 212.9L343.5 253.7L344.8 253.7C357.2 230.2 387.5 205.4 432.7 205.4C526.7 205.4 544 267.3 544 347.7L544 512L543.9 512z">
                                            </path>
                                        </svg>
                                    </div>
                                    <div class="list-col-grow">
                                        <div>Konrad Kulesza</div>
                                        <div class="text-xs uppercase font-semibold opacity-60">LINKEDIN</div>
                                    </div>
                                </div>
                                <button class="btn btn-ghost btn-c-filled" @click="openLink('https://www.linkedin.com/in/konrad-kulesza/')">
                                    View Profile
                                </button>
                            </li>

                            <li class="list-row px-0 flex flex-col md:flex-row md:items-center md:justify-between">
                                <div flex class="flex gap-4">
                                    <div class="text-4xl font-thin opacity-30 tabular-nums w-11 hidden md:block">03</div>
                                    <div class="bg-white rounded-box w-10 h-10 flex items-center justify-center"><svg
                                            role="img" class="fill-current text-gray-800 h-8 w-8" viewBox="0 0 24 24">
                                            xmlns="http://www.w3.org/2000/svg">
                                            <title>GitHub</title>
                                            <path
                                                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                                        </svg></div>
                                    <div class="list-col-grow">
                                        <div>croozer4</div>
                                        <div class="text-xs uppercase font-semibold opacity-60">GITHUB</div>
                                    </div>
                                </div>
                                <button class="btn btn-ghost btn-c-filled" @click="openLink('https://github.com/croozer4')">
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

figure:hover img {
    transform: scale(1.1);
    transition: transform 0.3s ease;
}

figure img {
    transition: transform 0.3s ease;
}
</style>
