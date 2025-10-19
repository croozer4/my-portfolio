<script setup lang="ts">
import { ref, provide } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/Navbar.vue';
import Hero from './components/Hero.vue';
import MyProjects from './components/MyProjects.vue';
import MyExperience from './components/MyExperience.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';

const currentLang = ref<'en' | 'pl'>('en');

provide('currentLang', currentLang);

</script>

<template>
  <div id="app" class="dark">
    <Navbar :currentLang="currentLang" />
    <Hero />
    <MyProjects />
    <MyExperience />
    <Contact />
    <Footer />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
