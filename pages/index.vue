<script lang="ts" setup>
import { Vue3Lottie } from 'vue3-lottie'
import 'vue3-lottie/dist/style.css'
import animationData from '~/assets/animation.json'

import Chip from '@/components/atoms/Chip.vue'

definePageMeta({
  layout: 'index'
})

const { data } = await useAsyncData('hello', () => queryContent('/').findOne())

</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8 pt-48">
    <div class="flex flex-col justify-center">
      <ContentRenderer :value="data" />
      <div class="grid grid-cols-2 space-x-2">
        <NuxtLink to="/projects">
          <Chip chip="See my projects" class="text-center" />
        </NuxtLink>
        <NuxtLink to="/resume">
          <Chip chip="See my resume" class="text-center" />
        </NuxtLink>
      </div>
    </div>
    <div
      class="h-auto w-auto"
    >
      <Vue3Lottie :animation-data="animationData" />
    </div>
  </div>
</template>
