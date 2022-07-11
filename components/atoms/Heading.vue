<script setup>
defineProps({
  heading: {
    type: String,
    required: true
  },
  order: {
    type: Number,
    required: false,
    default: 2
  }
})
</script>

<template>
  <Component :is="`h${order}`">
    {{ heading }}
  </Component>
</template>
