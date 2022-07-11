<script setup>
import Intro from '@/components/molecules/Intro.vue'
import Excerpt from '@/components/molecules/Excerpt.vue'
defineProps({
  heading: {
    type: String,
    required: true
  },
  path: {
    type: String,
    required: true
  },
  imgSrc: {
    type: String,
    required: true
  },
  excerpt: {
    type: String,
    required: true
  },
  tags: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="border shadow-lg">
    <Intro :heading="heading" :img-src="imgSrc" />
    <Excerpt :excerpt="excerpt" :tags="tags" />
  </div>
</template>
