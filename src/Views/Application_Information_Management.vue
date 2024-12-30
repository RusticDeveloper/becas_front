<template>
  <Card>
    <template #title>Información para las postulaciones </template>
    <template #content>
      <p>Ingrese la informacion relevante para mostrar a los postulantes en la pagina principal</p>
      <Form
        v-slot="$form"
        :resolver="resolver"
        :initialValues="initialValues"
        @submit="onFormSubmit"
        class="flex flex-col gap-4"
      >
        <!-- todo hace que el editor tenga la informacion correcta -->
        <div class="flex flex-col gap-1">
          <Editor name="content">
            <template v-slot:toolbar>
              <span class="ql-formats">
                <button v-tooltip.bottom="'Bold'" class="ql-bold"></button>
                <button v-tooltip.bottom="'Italic'" class="ql-italic"></button>
                <button v-tooltip.bottom="'Underline'" class="ql-underline"></button>
              </span>
            </template>
          </Editor>
          <Message v-if="$form.content?.invalid" severity="error" size="small" variant="simple">{{
            $form.content.error?.message
          }}</Message>
        </div>
        <Button type="submit" severity="secondary" label="Guardar informacion" />
      </Form>
    </template>
  </Card>
</template>

<script setup>
import { ref } from 'vue'
import { zodResolver } from '@primevue/forms/resolvers/zod'

import { z } from 'zod'
// todo: traer la informacion de que se muestra a los postulantes y guardar los cambios de regreso
const initialValues = ref({
  content: ''
})
const resolver = ref(
  zodResolver(
    z.object({
      content: z.string().min(1, { message: 'Se necesita que ingrese algun contenido' })
    })
  )
)

const onFormSubmit = () => {
  console.log('Form submitted')
}
</script>

<style lang="scss" scoped></style>
