<script setup lang="ts">

import { inject, Ref, computed } from 'vue';

defineProps({
    msg: String,
})

const currentLang = inject<Ref<'pl' | 'en'>>('currentLang');

const experienceText = computed(() => ({
    title: currentLang?.value === 'pl' ? 'Doświadczenie' : "My Experience",
    description: currentLang?.value === 'pl' ? 'Absolwent IT z pasją do technologii webowych i nie tylko. Jestem w pełni zmotywowany, aby zdobyć cenne doświadczenie zawodowe. Moje mocne strony to zaangażowanie, szybkie uczenie się oraz dążenie do innowacyjnych i bezbłędnych rozwiązań. Posiadam już początkowe doświadczenie zawodowe, zdobyte częściowo poprzez międzynarodowe staże.' : 'A graduate in IT with a passion for web technologies and beyond. I am fully motivated to gain valuable professional experience. My strengths include dedication, quick learning, and a commitment to innovative and flawless solutions. I already have initial professional experience, gained partly through international internships.',
    technik: currentLang?.value === 'pl' ? 'Technik Informatyk (TZN)' : 'IT Technician (TZN)',
    inżynier: currentLang?.value === 'pl' ? 'Inżynier (PCz)' : 'Engineer (PCz)',
    magister: currentLang?.value === 'pl' ? 'Magister (PCz)' : 'Master’s Degree (PCz)',
    obecnie: currentLang?.value === 'pl' ? 'Obecnie' : 'Currently',

}));

</script>

<template>
    <!-- Tekst My Projects -->
    <div class="w-full bg-base-100">
        <div class="max-w-screen-xl mx-auto">
            <!-- ciemny kolor -->
            <h1 class="!text-5xl font-bold my-8 pl-8 text-white pt-8">{{ experienceText.title }}</h1>

            <!-- cos tu napisz -->

            <p class="pl-8 pr-8">{{ experienceText.description }}</p>

            <div class="w-full flex p-8 pl-0">

                <ul class="timeline timeline-vertical lg:timeline-horizontal w-full flex justify-between">
                    <li class="flex-1">
                        <div class="timeline-start">02.2018</div>
                        <div class="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                class="h-5 w-5">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div class="timeline-end timeline-box text-center text-sm">KB Systems</div>
                        <hr />
                    </li>
                    <li class="flex-1">
                        <hr />
                        <div class="timeline-start">07.2018</div>
                        <div class="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                class="h-5 w-5">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div class="timeline-end timeline-box text-center text-sm">Chip7</div>
                        <hr />
                    </li>
                    <li class="flex-1">
                        <hr />
                        <div class="timeline-start">01.2020</div>
                        <div class="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                class="h-5 w-5">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div class="timeline-end timeline-box text-center text-sm">TK Laptops</div>
                        <hr />
                    </li>
                    <li class="flex-1">
                        <hr />
                        <div class="timeline-start">04.2020</div>
                        <div class="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                class="h-5 w-5">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div class="timeline-end timeline-box text-center text-sm">{{ experienceText.technik }}</div>
                        <hr />
                    </li>
                    <li class="flex-1">
                        <hr />
                        <div class="timeline-start">07.2023</div>
                        <div class="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                class="h-5 w-5">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div class="timeline-end timeline-box text-center text-sm">KB Systems</div>
                        <hr />
                    </li>
                    <li class="flex-1">
                        <hr />
                        <div class="timeline-start">01.2024</div>
                        <div class="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                class="h-5 w-5">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div class="timeline-end timeline-box text-center text-sm">{{ experienceText.inżynier }}</div>
                        <hr />
                    </li>
                    <li class="flex-1">
                        <hr />
                        <div class="timeline-start">Currently</div>
                        <div class="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                class="h-5 w-5">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div class="timeline-end timeline-box text-center text-sm">{{ experienceText.magister }}</div>
                    </li>
                </ul>
            </div>

        </div>
    </div>

</template>

<style scoped>
.read-the-docs {
    color: #888;
}

.timeline hr {
  background-color: tomato !important;
}

.timeline svg {
  color: tomato !important;
}

</style>
