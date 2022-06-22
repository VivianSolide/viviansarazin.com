<script lang='ts' setup>
import Nav from '~/components/organisms/Nav.vue'
import Footer from '~/components/organisms/Footer.vue'
definePageMeta({
    layout: 'index',
});
</script>
<template >
    <div class="lg:min-h-screen bg-blue-50">
        <Nav />

        <div class="px-4 md:max-w-screen-xl mx-auto prose pt-32">
            <NuxtPage />
        </div>

        <Footer />
    </div>
</template>

