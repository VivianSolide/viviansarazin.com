<script setup>
import Heading from '@/components/atoms/Heading.vue'
const props = defineProps({
    heading: {
        type: String,
        required: true,
    },
    imgSrc: {
        type: String,
        required: true,
    }
})
</script>
<template>
    <div class="relative">
        <img :src="imgSrc" class="!m-0">
        <Heading :heading="heading" class="text-white rounded-3xl px-4 bg-blue-500 absolute bottom-1 left-1" :order="4" />
    </div>
</template>