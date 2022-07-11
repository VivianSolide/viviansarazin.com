<script lang='ts' setup>
defineProps({
  id: {
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
  <progress :id="id" max="100" :value="value" />
</template>
