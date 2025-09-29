<script setup>
import { ref } from 'vue'

defineProps({
    msg: String,
})

const count = ref(0)
</script>

<template>
    <div class="hero bg-base-200 min-h-screen w-full p-0">
        <div class="w-full hero-content flex-col lg:flex-row-reverse align-start justify-end">
            <div>
                <p class="text-3xl py-6 font-bold">
                    Hi there,
                </p>
                <p class="text-3xl"><span class="font-bold text-blue-500"> > > > </span> I'm Konrad</p>
                <p class="text-4xl py-6 font-bold">
                    Web and Software Developer
                </p>
                <div class="flex gap-4">
                    <button class="btn bg-blue-500">Contact Me</button>
                    <button class="btn btn-outline btn-warning">My resume</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.read-the-docs {
    color: #888;
}
</style>
