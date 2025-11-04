<script setup lang="ts">
    import Toolbar from 'primevue/toolbar';
    import Button from 'primevue/button';
</script>

<template>
    <Toolbar>
        <template #start>
            <h1>Manolia</h1>
        </template>
        <template #center>
            <span>Chat</span>
        </template>
        <template #end>
            <Button label="Account" />
        </template>
    </Toolbar>
</template>

<style scoped>

</style>