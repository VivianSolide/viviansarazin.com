<script lang="ts" setup>
const props = defineProps({
    chip: {
        type: String,
        required: true,
    }
})
</script>
<template>
    <p class="bg-green-100 border border-green-300 rounded-2xl py-2 px-4">
        {{ chip }}
    </p>
</template>