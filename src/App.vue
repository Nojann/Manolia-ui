<script setup lang="ts">
  import { RouterView } from 'vue-router'
  import Toolbar from '@/components/Toolbar.vue';
</script>

<template>
  <header>
    <Toolbar></Toolbar>
  </header>
  <main>
    <RouterView />
  </main>
  <footer>
    https://github.com/Nojann/Manolia-ui
  </footer>
</template>

<style scoped></style>
