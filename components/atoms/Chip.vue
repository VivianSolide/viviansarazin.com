<script lang="ts" setup>
defineProps({
  chip: {
    type: String,
    required: true
  }
})
</script>

<template>
  <p class="bg-blue-100 border border-blue-500 rounded-full py-2 px-4 text-sm">
    {{ chip }}
  </p>
</template>
