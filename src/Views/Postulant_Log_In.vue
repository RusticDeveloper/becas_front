<template>
  <Panel header="Sistema Web de becas, ayudas economicas y guarderias">
    <div class="flex flex-col md:flex-row">
      <div class="w-full md:w-5/12 flex flex-col items-center justify-center gap-3 py-5">
        <Form v-slot="$form" :initialValues :resolver="Resolver" @submit="onFormSubmit">
          <div class="flex flex-col gap-2">
            <label for="username">Usuario</label>
            <InputText name="username" id="username" fluid />
            <template v-if="$form.username?.invalid">
              <Message
                v-for="(error, index) of $form.username.errors"
                :key="index"
                severity="error"
                size="small"
                variant="simple"
              >
                ➤ {{ error.message }}</Message
              >
            </template>
          </div>
          <div class="flex flex-col gap-2">
            <label for="password">Contraseña</label>
            <Password
              id="password"
              name="password"
              placeholder="Contraseña"
              :feedback="false"
              toggleMask
              fluid
            />
            <template v-if="$form.password?.invalid">
              <Message
                v-for="(error, index) of $form.password.errors"
                :key="index"
                severity="error"
                size="small"
                variant="simple"
              >
                ➤ {{ error.message }}</Message
              >
            </template>
          </div>
          <div class="flex">
            <Button label="Ingresar" icon="pi pi-user" type="submit" @click="onFormSubmit" />
          </div>
          <p>¿Olvido su contraseña?</p>
          <pre>    {{ $form }}  </pre>
        </Form>
      </div>
      <div class="w-full md:w-2/12 flex">
        <Divider layout="vertical" class="!hidden md:!flex" />
        <Divider layout="horizontal" class="!flex md:!hidden" align="center" />
      </div>
      <div class="w-full md:w-5/12 flex items-center justify-center py-5">
        <Button
          label="Registrarse"
          icon="pi pi-user-plus"
          severity="success"
          class="w-full max-w-[17.35rem] mx-auto"
          @click="router.push('/registrar')"
        ></Button>
      </div>
    </div>
  </Panel>
</template>

<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useToast } from 'primevue/usetoast'
import { z } from 'zod'
import { zodResolver } from '@primevue/forms/resolvers/zod'

const toast = useToast()
const router = useRouter()
const initialValues = reactive({ username: '', password: '' })

const Resolver = zodResolver(
  z.object({
    username: z
      .string()
      .nonempty({ message: 'El usuario es requerido.' })
      .min(3, { message: 'El usuario debe tener al menos 3 caracteres.' }),
    password: z.string().nonempty({ message: 'La contraseña es requerida.' })
  })
)

const onFormSubmit = ({ valid }) => {
  if (valid) {
    // *ToDO: Implementar la lógica de inicio de sesión
    toast.add({ severity: 'success', summary: 'Form is submitted.', life: 3000 })
  }
}
</script>

<style lang="scss" scoped></style>
