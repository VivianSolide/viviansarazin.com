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
    default: 'https://blog.vacancesweb.be/wp-content/uploads/2021/09/chan_copy1.jpg',
  },
  url: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <img :src="imgSrc" class="my-0" alt="" srcset="">
  <NuxtLink :to="url">
    <Heading :heading="heading" :order="1" class="mt-4" />
  </NuxtLink>
</template>
