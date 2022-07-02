<script lang='ts' setup>
import Logo from '~/components/molecules/Nav/Logo.vue'
import Links from '~/components/molecules/Nav/Links.vue'
import Socials from '~/components/molecules/Nav/Socials.vue'
</script>

<template>
  <nav
    class="flex md:justify-between items-center h-16 px-2 md:px-16 bg-blue-100 border-b-blue-200 shadow-md fixed w-full z-10">
    <!-- Left -->
    <div class="flex space-x-4 ">
      <Logo />
      <Links />
    </div>
    <!-- Right -->
    <div>
      <!-- Social -->
      <Socials class="hidden md:flex" />
    </div>
  </nav>
</template>
