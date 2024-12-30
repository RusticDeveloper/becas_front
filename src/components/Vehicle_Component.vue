<template>
  <Card>
    <template #title>Vehiculo</template>
    <!-- ! todo: hacer que sean dinamicas las validadciones  -->
    <template #content>
      <div class="flex flex-wrap gap-6">
        <!-- * Tipo de vehiculo -->
        <FormField
          v-slot="$VehicleTypeField"
          :name="`selectedVehicle${nameId}`"
          :resolver="selectedVehicleSchema"
        >
          <Select
            :options="vehicleTypes"
            optionLabel="name"
            optionValue="value"
            placeholder="Que tipo de vehiculo tiene"
            fluid
            class="flex-1"
          />

          <template v-if="$VehicleTypeField?.invalid">
            <Message
              v-for="(error, index) of $VehicleTypeField?.errors"
              :key="index"
              severity="error"
              size="small"
              variant="simple"
              >➤ {{ error.message }}</Message
            >
          </template>
        </FormField>
        <!-- * Marca -->
        <FormField v-slot="$carBrandField" :name="`carBrand${nameId}`" :resolver="carBrandSchema">
          <FloatLabel variant="on" class="flex-1">
            <InputText type="text" :id="`carBrand${nameId}`" variant="filled" />
            <label :for="`carBrand${nameId}`">Marca</label>
          </FloatLabel>
          <template v-if="$carBrandField?.invalid">
            <Message
              v-for="(error, index) of $carBrandField?.errors"
              :key="index"
              severity="error"
              size="small"
              variant="simple"
              >➤ {{ error.message }}</Message
            >
          </template>
        </FormField>
        <!-- * Modelo -->
        <FormField v-slot="$carModelField" :name="`carModel${nameId}`" :resolver="carModelSchema">
          <FloatLabel variant="on" class="flex-1">
            <InputText type="text" :id="`carModel${nameId}`" variant="filled" />
            <label :for="`carModel${nameId}`">Modelo</label>
          </FloatLabel>
          <template v-if="$carModelField?.invalid">
            <Message
              v-for="(error, index) of $carModelField?.errors"
              :key="index"
              severity="error"
              size="small"
              variant="simple"
              >➤ {{ error.message }}</Message
            >
          </template>
        </FormField>
        <!-- * Año -->
        <FormField v-slot="$carYearField" :name="`carYear${nameId}`" :resolver="carYearSchema">
          <FloatLabel variant="on" class="flex-1">
            <InputMask :id="`carYear${nameId}`" mask="9999" placeholder="9999" />

            <label :for="`carYear${nameId}`">Año</label>
          </FloatLabel>
          <template v-if="$carYearField?.invalid">
            <Message
              v-for="(error, index) of $carYearField?.errors"
              :key="index"
              severity="error"
              size="small"
              variant="simple"
              >➤ {{ error.message }}</Message
            >
          </template>
        </FormField>
      </div>
    </template>
  </Card>
</template>

<script setup>
import { ref } from 'vue'
import { z } from 'zod'
import { zodResolver } from '@primevue/forms/resolvers/zod'
const vehicleTypes = ref([
  { value: 'motocicleta', name: 'Motocicleta' },
  { value: 'automovil', name: 'Automovil' }
])
// ! todo: hacer que las validaciones sean dinamicas
// validacion de los formularios
const selectedVehicleSchema = zodResolver(z.string().nonempty())
const carBrandSchema = zodResolver(
  z.string().nonempty().min(3, 'La marca debe tener al menos 3 caracteres')
)
const carModelSchema = zodResolver(
  z.string().nonempty().min(3, 'El modelo debe tener al menos 3 caracteres')
)
const carYearSchema = zodResolver(
  z.string().nonempty().min(3, 'El año debe tener al menos 3 caracteres')
)

// Define props
defineProps({
  nameId: Number
})
</script>

<style lang="scss" scoped></style>
