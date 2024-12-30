<template>
  <Toast />
  <Form v-slot="$form" :initialValues :resolver @submit="onFormSubmit">
    <Fieldset legend="Registro de Usuario">
      <div class="text-lg pb-12">Ingrese su información y continue con el registro</div>
      <div class="grid grid-cols-2 gap-8">
        <!-- *Nombre -->
        <FloatLabel variant="on">
          <label for="name">Nombres</label>
          <InputText id="name" name="name" fluid />
          <template v-if="$form.name?.invalid">
            <Message
              v-for="(error, index) of $form.name.errors"
              :key="index"
              severity="error"
              size="small"
              variant="simple"
            >
              ➤ {{ error.message }}</Message
            >
          </template>
        </FloatLabel>
        <!-- * Apellido -->
        <FloatLabel variant="on">
          <label for="lastname">Apellidos</label>
          <InputText id="lastname" name="lastname" fluid />
          <template v-if="$form.lastname?.invalid">
            <Message
              v-for="(error, index) of $form.lastname.errors"
              :key="index"
              severity="error"
              size="small"
              variant="simple"
              >➤ {{ error.message }}</Message
            >
          </template>
        </FloatLabel>
        <!-- * Correo -->
        <FloatLabel variant="on">
          <label for="mail">Correo Electronico</label>
          <InputText id="mail" name="mail" fluid />
          <template v-if="$form.mail?.invalid">
            <Message
              v-for="(error, index) of $form.mail.errors"
              :key="index"
              severity="error"
              size="small"
              variant="simple"
              >➤ {{ error.message }}</Message
            >
          </template>
        </FloatLabel>
        <!-- * Cedula -->
        <FloatLabel variant="on">
          <label for="personalId">Cédula</label>
          <InputMask id="personalId" name="personalId" mask="9999999999" :autoClear="false" fluid />
          <template v-if="$form.personalId?.invalid">
            <Message
              v-for="(error, index) of $form.personalId.errors"
              :key="index"
              severity="error"
              size="small"
              variant="simple"
              >➤ {{ error.message }}</Message
            >
          </template>
        </FloatLabel>
        <!-- *fecha de nacimiento -->
        <FloatLabel variant="on">
          <label for="birthdate">Fecha de nacimiento</label>
          <DatePicker
            name="birthdate"
            id="birthdate"
            dateFormat="dd/mm/yy"
            :manual-input="false"
            :max-date="max_date"
            :min-date="min_date"
            fluid
          />
          <template v-if="$form.birthdate?.invalid">
            <Message
              v-for="(error, index) of $form.birthdate.errors"
              :key="index"
              severity="error"
              size="small"
              variant="simple"
              >➤ {{ error.message }}</Message
            >
          </template>
        </FloatLabel>
        <!--* genero -->
        <div class="grid grid-cols-3">
          <h3 class="col-span-3">Género</h3>
          <RadioButtonGroup name="selectedGenre" class="col-span-3 gap-8">
            <span v-for="gender in genres" :key="gender.key">
              <RadioButton :input-id="gender.key" :value="gender.name" />
              <label :for="gender.key">{{ gender.name }}</label>
            </span>
          </RadioButtonGroup>
          <template v-if="$form.selectedGenre?.invalid">
            <Message
              v-for="(error, index) of $form.selectedGenre.errors"
              :key="index"
              severity="error"
              size="small"
              variant="simple"
              >➤ {{ error.message }}</Message
            >
          </template>
        </div>

        <!-- *estado civil -->
        <div>
          <h3>Estado civil</h3>
          <Select
            name="personStatus"
            :options="civil_status"
            optionLabel="name"
            placeholder="Estado civil"
            fluid
          />
          <template v-if="$form.personStatus?.invalid">
            <Message
              v-for="(error, index) of $form.personStatus.errors"
              :key="index"
              severity="error"
              size="small"
              variant="simple"
              >➤ {{ error.message }}</Message
            >
          </template>
        </div>

        <!-- * Nacionalidad -->
        <FloatLabel variant="on">
          <InputText id="nationality" name="nationality" fluid />
          <label for="nationality">Nacionalidad</label>
          <template v-if="$form.nationality?.invalid">
            <Message
              v-for="(error, index) of $form.nationality.errors"
              :key="index"
              severity="error"
              size="small"
              variant="simple"
              >➤ {{ error.message }}</Message
            >
          </template>
        </FloatLabel>

        <!-- * telefono fijo-->
        <div class="">
          <h3>Telefono fijo</h3>
          <InputGroup class="">
            <InputGroupAddon>+593</InputGroupAddon>
            <InputMask
              id="movile"
              name="movile"
              mask="99 999 9999"
              placeholder="99 999 9999"
              fluid
            />
          </InputGroup>
          <template v-if="$form.movile?.invalid">
            <Message
              v-for="(error, index) of $form.movile.errors"
              :key="index"
              severity="error"
              size="small"
              variant="simple"
              >➤ {{ error.message }}</Message
            >
          </template>
        </div>
        <!-- * telefono celular -->
        <div class="">
          <h3>Telefono movil</h3>

          <InputMask
            id="phone"
            name="phone"
            mask="(09) 999 9999"
            placeholder="(99) 999 9999"
            fluid
          />
          <template v-if="$form.phone?.invalid">
            <Message
              v-for="(error, index) of $form.phone.errors"
              :key="index"
              severity="error"
              size="small"
              variant="simple"
              >➤ {{ error.message }}</Message
            >
          </template>
        </div>

        <FloatLabel variant="on">
          <Password name="password" :feedback="false" toggleMask fluid />
          <label for="password">Contraseña</label>
          <template v-if="$form.password?.invalid">
            <Message
              v-for="(error, index) of $form.password.errors"
              :key="index"
              severity="error"
              size="small"
              variant="simple"
              >➤ {{ error.message }}</Message
            >
          </template>
        </FloatLabel>

        <FloatLabel variant="on">
          <Password name="confirmPassword" :feedback="false" toggleMask fluid />
          <label for="confirmPassword">Repita la contraseña</label>
          <template v-if="$form.confirmPassword?.invalid">
            <Message
              v-for="(error, index) of $form.confirmPassword.errors"
              :key="index"
              severity="error"
              size="small"
              variant="simple"
              >➤ {{ error.message }}</Message
            >
          </template>
        </FloatLabel>
      </div>
    </Fieldset>
    <div class="flex justify-center">
      <Button
        label="Registrarse"
        icon="pi pi-sign-in"
        severity="success"
        class="w-full max-w-[17.35rem] mx-auto"
        type="submit"
      ></Button>
    </div>
    <pre>    {{ $form }}  </pre>
  </Form>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useToast } from 'primevue/usetoast'
import { zodResolver } from '@primevue/forms/resolvers/zod'
import { z } from 'zod'

const toast = useToast()
// * valores del formulario
const initialValues = reactive({
  name: '',
  lastname: '',
  mail: '',
  personalId: '',
  birthdate: null,
  selectedGenre: '',
  personStatus: '',
  nationality: '',
  phone: '',
  movile: '',
  password: '',
  confirmPassword: ''
})

// *validacion de campos

const resolver = zodResolver(
  z.object({
    name: z.string().nonempty('El nombre es requerido'),
    lastname: z.string().nonempty('El apellido es requerido'),
    mail: z.string().email('Se requiere un correo con el formato correcto'),
    personalId: z.string().nonempty('La cedula es requerida'),
    selectedGenre: z.string().nonempty('El genero es requerido'),
    nationality: z.string().nonempty('La nacionalidad es requerida'),
    phone: z.string().nonempty('El telefono es requerido'),
    movile: z.string().nonempty('El celular es requerido'),
    birthdate: z.preprocess(
      (val) => {
        if (val === '' || val === null) {
          return null
        }
        return new Date(val)
      },
      z.union([
        z.date(),
        z.null().refine((val) => val !== null, { message: 'La fecha es necesaria.' })
      ])
    ),
    personStatus: z.union([
      z.object({
        name: z.string().nonempty('El estado civil es necesario.')
      }),
      z.any().refine(() => false, { message: 'El estado civil es obligatorio' })
    ]),
    password: z
      .string()
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
        'La contraseña debe tener al menos 8 caracteres, incluir una letra mayúscula, una minúscula, un número y un carácter especial (@#$%^&*).'
      ),
    confirmPassword: z.string().nonempty('La confirmación de la contraseña es requerida')
  })
)

const onFormSubmit = ({ valid }) => {
  if (valid) {
    toast.add({ severity: 'success', summary: 'Form is submitted.', life: 3000 })
  }
}
// *funciones reactivas
const min_date = new Date('01/01/1940')
const max_date = new Date('12/31/2007')

const genres = ref([
  { name: 'Hombre', key: 'Male' },
  { name: 'Mujer', key: 'Female' },
  { name: 'Prefiero no decirlo', key: 'NA' }
])

const civil_status = ref([
  { name: 'Casado', code: 'C' },
  { name: 'Soltero', code: 'S' },
  { name: 'Divorsiado', code: 'D' },
  { name: 'Viudo', code: 'V' },
  { name: 'Union Libre', code: 'UL' }
])
</script>

<style lang="scss" scoped></style>
