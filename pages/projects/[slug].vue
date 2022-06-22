<script lang='ts' setup>
definePageMeta({
    layout: 'index',
})
const { params } = useRoute()
const { data, pending } = await useAsyncData(`project-${params.slug}`, () => queryContent(`/projects/${params.slug}`).findOne())
</script>
<template>
    <div v-if="!pending">
        <ContentRenderer :value="data">
            <template #empty>
                <h1>Document is empty</h1>
            </template>
            <template #not-found>
                <h1 class="text-2xl">
                    Page not found
                </h1>
            </template>
        </ContentRenderer>
    </div>
    <div v-else>
        <p>Fetching...</p>
    </div>
</template>