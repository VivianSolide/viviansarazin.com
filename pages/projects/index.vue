<script lang="ts" setup>
import Heading from '@/components/atoms/Heading.vue'
import Card from '@/components/organisms/Card.vue'

const { data } = await useAsyncData('projects', () => queryContent('/projects').find())
</script>

<template>
  <div>

    <!-- Heading -->
    <Heading heading="Projects" :order="1" />
    <!-- Projects -->
    <div class="grid md:grid-cols-2 md:gap-x-8 gap-y-2">
      <div v-for="project in data" :key="project._path">
        <NuxtLink :to="project._path">
          <Card :img-src="project.imgSrc" :heading="project.title" :path="project._path" :excerpt="project.description"
            :tags="project.stack" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
