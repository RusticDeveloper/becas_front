<template>
  <div>Inicio de sesion para administradores</div>
  <Toast position="top-left" group="tl" />
  <div class="card flex justify-center">
    <Form
      v-slot="$form"
      :initialValues
      :resolver
      @submit="onFormSubmit"
      class="flex flex-col gap-4 w-full sm:w-60"
    >
      <div class="flex flex-col gap-1">
        <InputText name="username" type="text" placeholder="Usuario" fluid />
        <template v-if="$form.username?.invalid">
          <Message
            v-for="(error, index) of $form.username.errors"
            :key="index"
            severity="error"
            size="small"
            variant="simple"
            >➤ {{ error.message }}</Message
          >
        </template>
      </div>

      <div class="flex flex-col gap-1">
        <Password name="password" placeholder="Contraseña" :feedback="false" toggleMask fluid />
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
      </div>
      <div class="flex flex-col gap-1">
        <p class="text-sm"><a href="#">¿Olvidaste tu contraseña?</a></p>
      </div>
      <Button type="submit" severity="secondary" label="Ingresar" />
      <pre>    {{ $form }}  </pre>
    </Form>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { zodResolver } from '@primevue/forms/resolvers/zod'
import { z } from 'zod'
import { useToast } from 'primevue/usetoast'

const toast = useToast()

const initialValues = reactive({
  username: '',
  password: ''
})

const resolver = zodResolver(
  z.object({
    username: z
      .string()
      .nonempty('El nombre es requerido')
      .min(3, 'El nombre debe tener al menos 3 caracteres'),
    password: z
      .string()
      .nonempty('El apellido es requerido')
      .min(8, 'La contraseña debe tener al menos 8 caracteres')
  })
)

const onFormSubmit = ({ valid }) => {
  if (valid) {
    toast.add({ severity: 'success', summary: 'Formulario guardado.', group: 'tl', life: 3000 })
  }
}
</script>

<style lang="scss" scoped></style>
