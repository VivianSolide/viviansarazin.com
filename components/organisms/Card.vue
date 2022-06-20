<script setup>
import Intro from '@/components/molecules/Intro.vue'
import Excerpt from '@/components/molecules/Excerpt.vue'
const props = defineProps({
    heading: {
        type: String,
        required: true,
    },
    path: {
        type: String,
        required: true,
    },
    imgSrc: {
        type: String,
        required: true,
    },  
    excerpt: {
        type: String,
        required: true,
    },
    tags: {
        type: Array,
        required: true,
    },
})
</script>
<template>
    <div class="border shadow-lg">
        <NuxtLink :to="path">
            <Intro :heading="heading" :imgSrc="imgSrc" />
        </NuxtLink>
        <Excerpt :excerpt="excerpt" :tags="tags" />
    </div>
</template>