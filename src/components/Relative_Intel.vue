<template>
  <div>
    <Card>
      <template #title>Informaciòn socio-economica del pariente o postulante</template>
      <template #content>
        <div class="flex flex-wrap gap-6">
          <!-- * Relación con el postulante -->
          <FloatLabel variant="on" class="flex-1">
            <InputText type="text" v-model="relative_relation" variant="filled" />
            <label for="transport">Relación con el postulante</label>
          </FloatLabel>
          <!-- * Nombre y apellido -->
          <FloatLabel variant="on" class="flex-1">
            <InputText type="text" v-model="fullname" variant="filled" />
            <label for="transport">Nombre y apellido</label>
          </FloatLabel>
          <!-- * Cedula -->
          <FloatLabel variant="on" class="flex-1">
            <InputText type="text" v-model="identifier" variant="filled" />
            <label for="transport">Documento de identificación</label>
          </FloatLabel>
          <!-- * Estado civil -->
          <FloatLabel variant="on" class="flex-1">
            <InputText type="text" v-model="civil_status" variant="filled" />
            <label for="transport">Estado Civil</label>
          </FloatLabel>
          <!-- * Fecha de nacimiento-->
          <FloatLabel variant="on">
            <DatePicker v-model="relative_birthdate" />
            <label for="value3">Fecha de nacimiento</label>
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
          <!-- * Actividad -->
          <FloatLabel variant="on" class="flex-1">
            <InputText type="text" v-model="economic_activity" variant="filled" />
            <label for="transport">Actividad economica</label>
          </FloatLabel>
          <!-- * ingresos -->
          <FloatLabel variant="on" class="flex-1">
            <InputText type="text" v-model="income" variant="filled" />
            <label for="transport">Ingreso mensual</label>
          </FloatLabel>
          <!-- * Ingresos complementarios -->
          <FloatLabel variant="on" class="flex-1">
            <InputText type="text" v-model="additional_income" variant="filled" />
            <label for="transport">Ingresos complementarios</label>
          </FloatLabel>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const selected_illness = ref()
const illness_types = ref([
  { name: 'Discapacidad total', value: 'Discapacidad total' },
  { name: 'Discapacidad parcial', value: 'Discapacidad parcial' },
  { name: 'Enfermedad severa', value: 'Enfermedad severa' },
  { name: 'Enfermedad crónica', value: 'Enfermedad crónica' }
])
</script>

<style lang="scss" scoped></style>
