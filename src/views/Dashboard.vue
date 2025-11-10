<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts"></script>

<template>
  <div class="dashboard-container">
    <section class="section"></section>
    <section class="section"></section>
    <section class="section"></section>
  </div>
</template>

<style scoped>
.dashboard-container {
  height: 100%;
  padding: 2rem 2rem;
  background-color: #f6f6f7;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
@media screen and (min-width: 768px) {
  .dashboard-container {
    flex-direction: row;
  }
}

.section {
  background-color: #ffffff;
  width: 100%;
  height: 100%;
  border-radius: 8px;
}
</style>
