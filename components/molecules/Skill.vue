<script lang='ts' setup>
import Heading from '../../components/atoms/Heading.vue'
import Progress from '../../components/atoms/Progress.vue'
defineProps({
  id: {
    type: String,
    required: true
  },
  heading: {
    type: String,
    required: true
  },
  value: {
    type: Number,
    required: true
  }
})
definePageMeta({
  layout: 'index'
})
</script>

<template>
  <div>
    <Heading :heading="heading" :order="4" />
    <Progress :id="id" :value="value" />
  </div>
</template>
