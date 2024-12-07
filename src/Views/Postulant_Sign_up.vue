<template>
  <div>Pagina de registro</div>
  <Fieldset legend="Registro de Usuario">
    <div class="text-lg pb-12">Ingrese su información y continue con el registro</div>
    <div class="grid grid-cols-2 gap-8">
      <FloatLabel variant="on" class="">
        <InputText id="value1" v-model="value1" />
        <label for="value1">Nombres</label>
      </FloatLabel>

      <FloatLabel variant="on">
        <InputText id="value2" v-model="value2" />
        <label for="value2">Apellidos</label>
      </FloatLabel>

      <FloatLabel variant="on">
        <InputText id="value3" v-model="value3" />
        <label for="value3">Cédula</label>
      </FloatLabel>
      <FloatLabel variant="on">
        <InputText id="value4" v-model="value4" />
        <label for="value4">Correo Electronico</label>
      </FloatLabel>
      <FloatLabel variant="on">
        <Password name="password" placeholder="Contraseña" :feedback="false" toggleMask fluid />
        <label for="value4">Contraseña</label>
      </FloatLabel>
      <FloatLabel variant="on">
        <Password
          name="password"
          v-model="pass"
          placeholder="Contraseña"
          :feedback="false"
          toggleMask
          fluid
        />
        <label for="value4">Repita la contraseña</label>
      </FloatLabel>
      <div>
        <SelectButton v-model="value5" :options="options" /><br />
        <InputGroup v-if="value5 == 'Movil'" class="w-60">
          <InputGroupAddon>+593</InputGroupAddon>
          <FloatLabel variant="on">
            <InputMask id="basic" v-model="movile" mask="99 999 9999" placeholder="99 999 9999" />
            <label for="basic">Telefono</label>
          </FloatLabel>
        </InputGroup>

        <Select
          v-model="phone_ext"
          :options="extensiones"
          optionLabel="code"
          placeholder="elija una elección"
          v-if="value5 == 'Fijo'"
        />
        <FloatLabel variant="on" v-if="value5 == 'Fijo'" class="inline-flex">
          <InputMask id="basic" v-model="phone" mask="999 9999" placeholder="999 9999" />
          <label for="basic">Telefono</label>
        </FloatLabel>
      </div>

      <div>
        <SelectButton v-model="value7" :options="options1" />
        <FloatLabel variant="on" v-if="value7 == 'Si'">
          <InputText id="value6" v-model="value6" />
          <label for="value6">Grado de discapacidad</label>
        </FloatLabel>
      </div>
    </div>
  </Fieldset>
  <div class="flex justify-center">
    <Button
      label="Registrarse"
      icon="pi pi-user-plus"
      severity="info"
      class="w-full max-w-[17.35rem] mx-auto"
    ></Button>
    <Button
      label="Registrarse"
      icon="pi pi-user-plus"
      severity="success"
      class="w-full max-w-[17.35rem] mx-auto"
    ></Button>
  </div>
</template>

<script setup>
import Fieldset from 'primevue/fieldset'
import { ref } from 'vue'

const pass = ref(null)
const phone = ref(null)
const movile = ref(null)
const value1 = ref(null)
const value2 = ref(null)
const value3 = ref(null)
const value4 = ref(null)
const value5 = ref(null)
const value6 = ref(null)
const value7 = ref(null)
const options = ref(['Fijo', 'Movil'])
const options1 = ref(['Si', 'No'])
const extensiones = ref([
  { name: 'ref1', code: '02' },
  { name: 'ref2', code: '03' },
  { name: 'ref3', code: '04' },
  { name: 'ref4', code: '05' },
  { name: 'ref5', code: '06' },
  { name: 'ref6', code: '07' }
])
const phone_ext = ref()
</script>

<style lang="scss" scoped></style>
