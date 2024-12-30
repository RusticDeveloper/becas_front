<template>
  <Card>
    <template #title>
      <h2 class="text-[6rem]">403 - Ubicación prohibida</h2>

      <span class="pi pi-ban" style="font-size: 2rem; color: #ff0000"></span>
    </template>
    <template #content>
      <p class="text-[1.5rem]">No puesdes estar en esta página.</p>
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
