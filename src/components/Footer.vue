<script setup lang="ts">

defineProps({
  msg: String,
})

</script>

<template>
  <!-- <footer class="footer footer-horizontal footer-center bg-tomato text-primary-content p-10">
  <aside>
    <img :src="kkLogo" alt="Logo" class="h-12 stroke-current mb-4" />
    <p class="font-bold">
      Konrad Kulesza
      <br />
      Web and Software Developer
    </p>
    <p>Copyright © 2025 - All right reserved</p>
  </aside>
</footer> -->

  <footer class="footer footer-horizontal footer-center bg-base-100 text-primary-content p-10">
    <aside>
      <svg class="h-14 mb-4" viewBox="0 0 37.552311 22.0961" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(-216.26818,-168.33352)">
          <path
            d="m -238.57069,189.92963 h 7.05213 v -4.49046 l 1.80823,-2.20002 4.12881,6.69048 h 8.40831 l -7.50419,-11.93437 7.3535,-9.16174 h -8.19734 l -5.99732,7.89597 v -7.89597 h -7.05213 z"
            fill="none" stroke="#ff6347" stroke-linecap="square" transform="scale(-1,1)" />
          <path
            d="m 231.51799,189.92963 h 7.05213 v -4.49046 l 1.80824,-2.20002 4.12881,6.69048 h 8.4083 l -7.50418,-11.93437 7.3535,-9.16174 h -8.19735 l -5.99732,7.89597 v -7.89597 h -7.05213 z"
            fill="#ff6347" stroke="#ff6347" stroke-linecap="square" />
        </g>
      </svg>

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

.text-tomato {
  stroke: #ff6347;
  fill: #ff6347;
  color: #ff6347;
}
</style>
