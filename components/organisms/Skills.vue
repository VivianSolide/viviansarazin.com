<script lang='ts' setup>
import Skill from '../../components/molecules/Skill.vue'
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
})
definePageMeta({
  layout: 'index',
})
</script>

<template>
  <Skill v-for="skill in data" :key="skill.id" :id="skill.id" :heading="skill.name" :value="skill.value" />
</template>
