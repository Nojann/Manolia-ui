<script setup lang="ts"></script>

<template>
  <div class="layout-topbar">
    <div class="logo-container">
      <img class="logo" src="../assets/svg/manolia-logo.svg" alt="Manolia logo" />
      <span>MANOLIA</span>
    </div>
    <div class="account-cointainer"></div>
  </div>
</template>

<style scoped>
.layout-topbar {
  position: fixed;
  height: 4rem;
  width: 100%;
  padding: 0 2rem;
  background-color: #ffffff;
  display: flex;
  align-items: center;
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
