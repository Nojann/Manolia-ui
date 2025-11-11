<script setup lang="ts">
import Card from 'primevue/card'
import { Textarea } from 'primevue'
import { Button } from 'primevue'
import { ArrowRight } from 'lucide-vue-next'
import { ref } from 'vue'

const inputValue = ref('')
</script>

<template>
  <Card>
    <template #title>Discussion</template>
    <template #content>
      <div class="chat-input">
        <Textarea v-model="inputValue" rows="4" fluid placeholder="Interrogez le modèle" />
        <div class="button-container">
          <Button rounded aria-label="Chat">
            <template #icon>
              <ArrowRight color="#ffffff" />
            </template>
          </Button>
        </div>
      </div>
    </template>
  </Card>
</template>

<style scoped>
.p-card {
  height: 100%;
}
:deep(.p-card-body) {
  height: 100%;
}
:deep(.p-card-content) {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
:deep(.p-textarea) {
  border: none;
  box-shadow: none;
}
:deep(.p-button) {
  background-color: var(--manolia-color);
  border: none;
}
:deep(.p-button:not(:disabled):hover) {
  background-color: var(--manolia-color);
  border: none;
}
.chat-input {
  /*PrimeVue textarea style*/
  font-family: inherit;
  font-feature-settings: inherit;
  font-size: 1rem;
  color: var(--p-textarea-color);
  background: var(--p-textarea-background);
  padding-block: var(--p-textarea-padding-y);
  padding-inline: var(--p-textarea-padding-x);
  border: 1px solid var(--p-textarea-border-color);
  transition:
    background var(--p-textarea-transition-duration),
    color var(--p-textarea-transition-duration),
    border-color var(--p-textarea-transition-duration),
    outline-color var(--p-textarea-transition-duration),
    box-shadow var(--p-textarea-transition-duration);
  appearance: none;
  border-radius: var(--p-textarea-border-radius);
  outline-color: transparent;
  box-shadow: var(--p-textarea-shadow);
}
.chat-input:hover {
  /*PrimeVue textarea style*/
  border-color: var(--p-textarea-hover-border-color);
}
.chat-input:focus-within {
  /*PrimeVue textarea style*/
  border-color: var(--p-textarea-focus-border-color);
  box-shadow: var(--p-textarea-focus-ring-shadow);
  outline: var(--p-textarea-focus-ring-width) var(--p-textarea-focus-ring-style)
    var(--p-textarea-focus-ring-color);
  outline-offset: var(--p-textarea-focus-ring-offset);
}
.button-container {
  display: flex;
  justify-content: end;
}
</style>
