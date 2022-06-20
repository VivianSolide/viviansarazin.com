<script lang="ts" setup>
import Chip from '@/components/atoms/Chip.vue'

const props = defineProps({
    chips: {
        type: Array,
        required: true,
    }
})
</script>
<template>
    <Chip v-for="(chip, i) in chips" :key="i" :chip="chip" />
</template>