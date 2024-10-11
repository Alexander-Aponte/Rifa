<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@/components/HeaderApp.vue'
</script>

<template>
  <Header class="header" />
  <RouterView />
</template>

<style scoped>
.header {
  margin-block-end: 2.4rem;
}
</style>
