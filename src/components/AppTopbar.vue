<script setup lang="ts">
import { CircleUser } from 'lucide-vue-next'
import Button from 'primevue/button'
</script>

<template>
  <div class="topbar-container">
    <div class="logo-container">
      <img class="logo" src="../assets/svg/manolia-logo.svg" alt="Manolia logo" />
      <span>MANOLIA</span>
    </div>
    <div class="account-cointainer">
      <Button variant="text" rounded aria-label="Account">
        <template #icon>
          <CircleUser strokeWidth="{2}" />
        </template>
      </Button>
    </div>
  </div>
</template>

<style scoped>
.topbar-container {
  height: 4rem;
  width: 100%;
  padding: 0 2rem;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo-container {
  width: 20rem;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  gap: 0.5rem;
  font-family: Overpass Medium;

  img {
    width: 2rem;
  }
}
</style>
