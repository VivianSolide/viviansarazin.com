<script lang='ts' setup>
definePageMeta({
    layout: 'index',
});
const props = defineProps({
    id: {
        type: String,
        required: true,
    },
    value: {
        type: Number,
        required: true,
    }
})
</script>
<template>
    <progress :id="id" max="100" :value="value">
    </progress>
</template>