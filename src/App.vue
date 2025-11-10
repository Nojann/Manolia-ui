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

<style>
#app {
  width: 100%;
  display: flex;
  flex-direction: column;
}

main {
  height: 100%;
}

@media screen and (min-width: 768px) {
  #app {
    height: 100vh;
  }
}
</style>
