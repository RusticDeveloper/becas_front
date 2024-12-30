<template>
  <Card>
    <template #title>
      <h2 class="text-[6rem]">404 - Página no encontrada</h2>
      <span class="pi pi-exclamation-triangle" style="font-size: 3rem; color: #ff9800"></span>
    </template>
    <template #content>
      <p class="text-[1.5rem]">La pagina que buscas no existe.</p>
    </template>
    <template #footer>
      <Button label="Regresar al inicio" icon="pi pi-home" @click="router.push('/')" />
    </template>
  </Card>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<style lang="scss" scoped></style>
