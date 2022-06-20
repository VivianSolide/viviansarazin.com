<script lang="ts" setup>
import Chip from '@/components/atoms/Chip.vue'
definePageMeta({
  layout: "index",
});
const { data } = await useAsyncData('hello', () => queryContent('/').findOne())

</script>
<template>
  <div class="flex flex-col-reverse lg:flex-row lg:justify-between">
    <div class="flex flex-col justify-center">
      <ContentRenderer :value="data" />
      <div>
        <NuxtLink to="/projects">
          <Chip chip="See my projects" />
        </NuxtLink>
        <NuxtLink to="/resume">
          <Chip chip="See my resume" />
        </NuxtLink>
      </div>
    </div>

    <img src="~/assets/images/profile.jpeg" class="rounded-full" alt="" srcset="">
  </div>

</template>