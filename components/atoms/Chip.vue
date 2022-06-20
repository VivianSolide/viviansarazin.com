<script lang="ts" setup>
const props = defineProps({
    chip: {
        type: String,
        required: true,
    }
})
</script>
<template>
    <p class="bg-indigo-100 border border-indigo-300 rounded-2xl py-1 px-4 text-sm">
        {{ chip }}
    </p>
</template>