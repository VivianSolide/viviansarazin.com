<script lang='ts' setup>
import Skill from '../../components/molecules/Skill.vue'
defineProps({
  data: {
    type: Object,
    required: true
  }
})
definePageMeta({
  layout: 'index'
})
</script>

<template>
  <div>
    <Skill v-for="skill in data" :id="skill.id" :key="skill.id" :heading="skill.name" :value="skill.value" />
  </div>
</template>
