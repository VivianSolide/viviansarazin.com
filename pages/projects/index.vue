<script lang="ts" setup>
import Heading from '@/components/atoms/Heading.vue'
import Card from '@/components/organisms/Card.vue'

definePageMeta({
  layout: "index",
});

const { data } = await useAsyncData('projects', () => queryContent('/projects').find())
</script>
<template>
  <!-- Heading -->
  <Heading heading="Projects" :order="1" class="pt-16" />
  <!-- Projects -->
  <ContentRenderer :value="data">
    <div class="grid grid-cols-2 gap-8">
      <div v-for="project in data" :key="project._path">
        <Card :heading="project.title" :path="project._path" :excerpt="project.description" :tags="project.stack" />
      </div>
    </div>
  </ContentRenderer>
</template>