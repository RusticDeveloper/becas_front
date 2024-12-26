<template>
  <Card>
    <template #title>Información de salud</template>
    <template #content>
      <h3>Este componente representa a los familiares</h3>
      <div class="flex flex-wrap gap-6">
        <!-- * parentesco -->
        <FloatLabel variant="on" class="flex-1">
          <InputText type="text" v-model="relative" variant="filled" />
          <label for="transport">Relación con el postulante</label>
        </FloatLabel>
        <!-- *problema de salud  -->
        <Select
          :name="enf"
          :options="illness_types"
          v-model="selected_illness"
          optionLabel="name"
          placeholder="Que tipo de enfermedad o discacidad"
          fluid
          class="flex-1"
        />
      </div>
    </template>
  </Card>
</template>

<script setup>
import { ref } from 'vue'

const relative = ref()
const selected_illness = ref()
const illness_types = ref([
  { name: 'Discapacidad total', value: 'Discapacidad total' },
  { name: 'Discapacidad parcial', value: 'Discapacidad parcial' },
  { name: 'Enfermedad severa', value: 'Enfermedad severa' },
  { name: 'Enfermedad crónica', value: 'Enfermedad crónica' }
])
const enf = ref('yolo')
</script>

<style lang="scss" scoped></style>
