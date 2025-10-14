<script setup lang="ts">

import kkLogo from '../assets/img/kk-logo.svg';

defineProps({
    msg: String,
})

</script>

<template>
    <footer class="footer footer-horizontal footer-center bg-tomato text-primary-content p-10">
  <aside>
    <img :src="kkLogo" alt="Logo" class="h-12 stroke-current mb-4" />
    <p class="font-bold">
      Konrad Kulesza
      <br />
      Web and Software Developer
    </p>
    <p>Copyright © 2025 - All right reserved</p>
  </aside>
</footer>
</template>

<style scoped>

.bg-tomato {
    background-color: #ff6347;
  }
  
  .text-primary-content {
    color: #ffffff;
  }
  

</style>
