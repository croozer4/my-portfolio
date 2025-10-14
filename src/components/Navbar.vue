<script setup>
import { ref } from 'vue';
import kkLogo from '../assets/img/kk-logo.svg';

defineProps({
    msg: String,
})

</script>

<template>
    <div class="navbar bg-base-100 shadow-sm">
        <div class="flex-1">
            <a class="btn btn-ghost text-xl"><img :src="kkLogo" alt="Logo" class="h-8 stroke-current" />
            </a>
        </div>
        <div class="flex-none">
            <label class="swap swap-flip">
                <!-- hidden checkbox -->
                <input type="checkbox" class="hidden" />

                <!-- elementy swap -->
                <div class="swap-on btn btn-square btn-ghost">PL</div>
                <div class="swap-off btn btn-square btn-ghost">EN</div>
            </label>
        </div>
    </div>
</template>

<style scoped>
.read-the-docs {
    color: #888;
}
</style>
