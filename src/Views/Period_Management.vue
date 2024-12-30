<template>
  <Card>
    <template #header>
      <h2>Establecer periodo de solicitud de servicios</h2>
    </template>
    <template #content>
      <h2>Ultimo periodo</h2>
      <p>{{ periodData.last }}</p>
    </template>
    <template #footer>
      <Button label="Establecer periodo" @click="openPeriodModal" />
    </template>
  </Card>

  <!-- * modal de apelacion -->
  <Dialog v-model:visible="periodDialog" modal maximizable header="Definir Periodo actual">
    <Period_Definition_Modal />
  </Dialog>
</template>

<script setup>
import Period_Definition_Modal from '@/components/Period_Definition_Modal.vue'
import { ref } from 'vue'
const periodData = ref({
  last: '2021-2022',
  current: '2022-2023',
  next: '2023-2024'
})
const periodDialog = ref(false)
const openPeriodModal = () => {
  periodDialog.value = true
}
</script>

<style lang="scss" scoped></style>
