<script lang="ts" setup>
import Chip from '@/components/atoms/Chip.vue'

definePageMeta({
  layout: 'index'
})

const { data } = await useAsyncData('hello', () => queryContent('/').findOne())
</script>

<template>
  <div class="flex flex-col-reverse lg:flex-row lg:justify-between lg:pt-32">
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
    <img src="~/public/assets/images/profile.jpeg" class="lg:ml-8 rounded-full" alt="Vivian SARAZIN profile pic">
  </div>
</template>
