<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppTopbar from '@/components/AppTopbar.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>

<template>
  <header>
    <AppTopbar />
  </header>
  <main>
    <RouterView />
  </main>
  <footer>
    <AppFooter />
  </footer>
</template>

<style scoped></style>
