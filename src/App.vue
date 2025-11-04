<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppTopbar from '@/components/AppTopbar.vue'
</script>

<template>
  <AppTopbar />
  <main>
    <RouterView />
  </main>
  <footer>https://github.com/Nojann/Manolia-ui</footer>
</template>

<style scoped></style>
