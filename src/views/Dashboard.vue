<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import SectionSources from '@/components/SectionSources.vue'
import SectionChat from '@/components/SectionChat.vue'
import SectionTools from '@/components/SectionTools.vue'
</script>

<template>
  <div class="dashboard-container">
    <section class="section">
      <SectionSources />
    </section>
    <section class="section section-main">
      <SectionChat />
    </section>
    <section class="section">
      <SectionTools />
    </section>
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
  height: 100%;
  border-radius: 8px;
}

.section-main {
  order: -1;
}
@media screen and (min-width: 768px) {
  .section-main {
    flex-grow: 2;
    order: 0;
  }
}
</style>
