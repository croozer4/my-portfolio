<script setup lang="ts">

import { inject, Ref, computed } from 'vue';

defineProps({
    msg: String,
})

const currentLang = inject<Ref<'pl' | 'en'>>('currentLang');

const experienceText = computed(() => ({
    title: currentLang?.value === 'pl' ? 'Doświadczenie' : "My Experience",
    description: currentLang?.value === 'pl' ? 'Silnie zmotywowany absolwent informatyki (magister i inżynier), specjalizujący się w programowaniu aplikacji webowych i biznesowych. Świetnie odnajduję się w roli full-stack developera.' : 'A highly motivated IT Graduate (Master\'s and Bachelor\'s degrees in Computer Science) specializing in Web Application Programming and Business Applications. I excel as a Full-stack Developer.',
    description2: currentLang?.value === 'pl' ? 'Moją największą zaletą jest trzymanie się zasady „zrobić raz a porządnie” oraz szybkie przyswajanie nowych technologii.' : 'My core strength is my dedication to the "do it once, do it right" principle, combined with a quick learning ability.',
    description3: currentLang?.value === 'pl' ? 'Mam za sobą wartościowe, międzynarodowe staże IT w Portugalii i Wielkiej Brytanii, które dały mi praktyczne umiejętności rozwiązywania problemów i szersze spojrzenie na branżę.' : 'My professional journey includes valuable international IT internships in Portugal and the UK , providing me with real-world problem-solving skills and a broader perspective.',
    description4: currentLang?.value === 'pl' ? 'Jestem gotów wnieść świeże pomysły i solidne umiejętności techniczne do wymagającej roli developera.' : 'I am ready to bring my innovative approach and technical proficiency to a challenging developer role.',
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
            <p class="pl-8 pr-8 pt-4">{{ experienceText.description2 }}</p>
            <p class="pl-8 pr-8 pt-4">{{ experienceText.description3 }}</p>
            <p class="pl-8 pr-8 pt-4 pb-8">{{ experienceText.description4 }}</p>

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
                        <div class="timeline-end timeline-box text-center text-sm bg-tomato">KB Systems</div>
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
                        <div class="timeline-end timeline-box text-center text-sm bg-tomato">Chip7</div>
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
                        <div class="timeline-end timeline-box text-center text-sm bg-tomato">TK Laptops</div>
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
                        <div class="timeline-end timeline-box text-center text-sm bg-tomato">{{ experienceText.technik }}</div>
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
                        <div class="timeline-end timeline-box text-center text-sm bg-tomato">KB Systems</div>
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
                        <div class="timeline-end timeline-box text-center text-sm bg-tomato">{{ experienceText.inżynier }}</div>
                        <hr />
                    </li>
                    <li class="flex-1">
                        <hr />
                        <div class="timeline-start">10.2025</div>
                        <div class="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                class="h-5 w-5">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div class="timeline-end timeline-box text-center text-sm bg-tomato">{{ experienceText.magister }}</div>
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

.bg-tomato {
  background-color: tomato !important;
  /* font-weight: bold; */
  border: none !important;
  margin-top: 15px;
  padding: 0.6em 1.2em;
    /* font-size: 1em; */
    font-weight: 500;
margin-bottom: 15px;
}
</style>
