<script lang="ts" setup>
import Heading from '@/components/atoms/Heading.vue'
import Card from '@/components/organisms/Card.vue'

const { data } = await useAsyncData('projects', () => queryContent('/projects').find())
// const getImage = await import(data.value.imgSrc).default.replace(/^\/@fs/, '')
</script>

<template>
  <div>
    <!-- Heading -->
    <Heading heading="Projects" :order="1" />
    <!-- Projects -->
    <div class="grid md:grid-cols-2 md:gap-x-8 gap-y-2">
      <div v-for="{ _path, imgSrc, title, description, stack } in data" :key="_path">
        <NuxtLink :to="_path">
          <Card :img-src="imgSrc" :heading="title" :path="_path" :excerpt="description" :tags="stack" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
