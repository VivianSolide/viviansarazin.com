<script lang='ts' setup>
import Heading from '@/components/atoms/Heading.vue'
const { data } = await useAsyncData('team', () => queryContent('/team').find())
</script>

<template>
  <div>
    <!-- Heading -->
    <Heading heading="Teammates" :order="1" />
    <p>I use to work with these folks.</p>
    <!-- Team -->
    <div class="grid md:grid-cols-2 md:gap-x-8 gap-y-2">
      <div v-for="mate in data" :key="mate._path">
        <NuxtLink :to="mate._path">
          {{ mate.title }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
