<template>
  <div>
    <Card>
      <template #title>Informaciòn socio-economica del pariente o postulante</template>
      <template #content>
        <div class="grid grid-cols-2 gap-4">
          <!-- * Relación con el postulante -->
          <FloatLabel variant="on" class="flex-1">
            <FormField
              v-slot="$relativeRelationField"
              :name="`relativeRelation${nameId}`"
              :resolver="relativeRelationSchema"
            >
              <InputText type="text" :id="`relativeRelation${nameId}`" variant="filled" fluid />
              <label :for="`relativeRelation${nameId}`">Relación con el postulante</label>
              <template v-if="$relativeRelationField?.invalid">
                <Message
                  v-for="(error, index) of $relativeRelationField?.errors"
                  :key="index"
                  severity="error"
                  size="small"
                  variant="simple"
                  >➤ {{ error.message }}</Message
                >
              </template>
            </FormField>
          </FloatLabel>
          <!-- * Nombre y apellido -->
          <FloatLabel variant="on" class="flex-1">
            <FormField
              v-slot="$fullnameField"
              :name="`fullname${nameId}`"
              :resolver="fullnameSchema"
            >
              <InputText type="text" :id="`fullname${nameId}`" variant="filled" fluid />
              <label :for="`fullname${nameId}`">Nombre y apellido</label>
              <template v-if="$fullnameField?.invalid">
                <Message
                  v-for="(error, index) of $fullnameField.errors"
                  :key="index"
                  severity="error"
                  size="small"
                  variant="simple"
                  >➤ {{ error.message }}</Message
                >
              </template>
            </FormField>
          </FloatLabel>
          <!-- * Cedula -->
          <FloatLabel variant="on" class="flex-1">
            <FormField
              v-slot="$relativeIdentifierField"
              :name="`relativeIdentifier${nameId}`"
              :resolver="relativeIdentifierSchema"
            >
              <InputMask
                :id="`relativeIdentifier${nameId}`"
                mask="9999999999"
                :autoClear="false"
                fluid
              />

              <label :for="`relativeIdentifier${nameId}`">Documento de identificación</label>
              <template v-if="$relativeIdentifierField?.invalid">
                <Message
                  v-for="(error, index) of $relativeIdentifierField.errors"
                  :key="index"
                  severity="error"
                  size="small"
                  variant="simple"
                  >➤ {{ error.message }}</Message
                >
              </template>
            </FormField>
          </FloatLabel>
          <!-- * Estado civil -->
          <div>
            <FormField
              v-slot="$civilStatusField"
              :name="`civilStatus${nameId}`"
              :resolver="civilStatusSchema"
            >
              <Select
                :options="civilStatus"
                optionLabel="name"
                optionValue="code"
                placeholder="Estado civil"
                fluid
              />
              <template v-if="$civilStatusField?.invalid">
                <Message
                  v-for="(error, index) of $civilStatusField.errors"
                  :key="index"
                  severity="error"
                  size="small"
                  variant="simple"
                  >➤ {{ error.message }}</Message
                >
              </template>
            </FormField>
          </div>
          <!-- * Fecha de nacimiento-->
          <FloatLabel variant="on">
            <FormField
              v-slot="$birthdateField"
              :name="`birthdate${nameId}`"
              :resolver="birthdateSchema"
            >
              <DatePicker
                dateFormat="dd/mm/yy"
                :manual-input="false"
                :max-date="max_date"
                :min-date="min_date"
                :id="`birthdate${nameId}`"
                fluid
              />
              <label for="`birthdate${nameId}`">Fecha de nacimiento</label>
              <template v-if="$birthdateField?.invalid">
                <Message
                  v-for="(error, index) of $birthdateField.errors"
                  :key="index"
                  severity="error"
                  size="small"
                  variant="simple"
                  >➤ {{ error.message }}</Message
                >
              </template>
            </FormField>
          </FloatLabel>
          <!-- *problema de salud  -->
          <div>
            <FormField
              v-slot="$selectedIllnessField"
              :name="`selectedIllness${nameId}`"
              :resolver="selectedIllnessSchema"
            >
              <Select
                :options="illnessTypes"
                optionLabel="name"
                optionValue="value"
                placeholder="Que tipo de enfermedad o discacidad"
                fluid
              />
              <template v-if="$selectedIllnessField?.invalid">
                <Message
                  v-for="(error, index) of $selectedIllnessField.errors"
                  :key="index"
                  severity="error"
                  size="small"
                  variant="simple"
                  >➤ {{ error.message }}</Message
                >
              </template>
            </FormField>
          </div>
          <!-- * Actividad -->
          <FloatLabel variant="on" class="flex-1">
            <FormField
              v-slot="$economicActivityField"
              :name="`economicActivity${nameId}`"
              :resolver="economicActivitySchema"
            >
              <InputText type="text" :id="`economicActivity${nameId}`" variant="filled" fluid />
              <label :for="`economicActivity${nameId}`">Actividad economica</label>
              <template v-if="$economicActivityField?.invalid">
                <Message
                  v-for="(error, index) of $economicActivityField.errors"
                  :key="index"
                  severity="error"
                  size="small"
                  variant="simple"
                  >➤ {{ error.message }}</Message
                >
              </template>
            </FormField>
          </FloatLabel>
          <!-- * ingresos -->
          <FloatLabel variant="on" class="flex-1">
            <FormField v-slot="$incomeField" :name="`income${nameId}`" :resolver="incomeSchema">
              <InputNumber
                :v-model="`income${nameId}`"
                :id="`income${nameId}`"
                :minFractionDigits="2"
                :maxFractionDigits="2"
                :min="0"
                :max="1000"
                fluid
              />
              <label :for="`income${nameId}`">Ingreso mensual</label>
              <template v-if="$incomeField?.invalid">
                <Message
                  v-for="(error, index) of $incomeField.errors"
                  :key="index"
                  severity="error"
                  size="small"
                  variant="simple"
                  >➤ {{ error.message }}</Message
                >
              </template>
            </FormField>
          </FloatLabel>
          <!-- * Ingresos complementarios -->
          <FloatLabel variant="on" class="flex-1">
            <FormField
              v-slot="$additionalIncomeField"
              :name="`additionalIncome${nameId}`"
              :resolver="additionalIncomeSchema"
            >
              <InputNumber
                :v-model="`additionalIncome${nameId}`"
                :id="`additionalIncome${nameId}`"
                :minFractionDigits="2"
                :maxFractionDigits="2"
                :min="0"
                :max="1000"
                fluid
              />
              <label :for="`additionalIncome${nameId}`">Ingresos complementarios</label>
              <template v-if="$additionalIncomeField?.invalid">
                <Message
                  v-for="(error, index) of $additionalIncomeField.errors"
                  :key="index"
                  severity="error"
                  size="small"
                  variant="simple"
                  >➤ {{ error.message }}</Message
                >
              </template>
            </FormField>
          </FloatLabel>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
// const selected_illness = ref()
const illnessTypes = ref([
  { name: 'Discapacidad total', value: 'Discapacidad total' },
  { name: 'Discapacidad parcial', value: 'Discapacidad parcial' },
  { name: 'Enfermedad severa', value: 'Enfermedad severa' },
  { name: 'Enfermedad crónica', value: 'Enfermedad crónica' }
])

const civilStatus = ref([
  { name: 'Casado', code: 'C' },
  { name: 'Soltero', code: 'S' },
  { name: 'Divorsiado', code: 'D' },
  { name: 'Viudo', code: 'V' },
  { name: 'Union Libre', code: 'UL' }
])
</script>

<style lang="scss" scoped></style>
