<script setup>
import { RouterView } from 'vue-router'
const islogged = false
</script>

<template>
  <header v-if="islogged">
    <slot></slot>
  </header>
  <RouterView />
</template>

<style scoped></style>
