<template>
  <Form v-slot="$form" :resolver :initialValues>
    <div class="grid grid-cols-2 gap-4 w-full">
      <!-- * fecha de inicio del periodo -->
      <FloatLabel variant="on">
        <label for="periodStartDate">Fecha de inicio del periodo</label>
        <DatePicker
          name="periodStartDate"
          id="periodStartDate"
          dateFormat="dd/mm/yy"
          :manual-input="false"
          :min-date="new Date()"
          fluid
        />

        <template v-if="$form.periodStartDate?.invalid">
          <Message
            v-for="(error, index) of $form.periodStartDate.errors"
            :key="index"
            severity="error"
            size="small"
            variant="simple"
            >➤ {{ error.message }}</Message
          >
        </template>
      </FloatLabel>
      <!-- * fecha de finalizacion del periodo -->
      <FloatLabel variant="on">
        <label for="periodEndDate">Fecha de finalizacion del periodo</label>
        <DatePicker
          name="periodEndDate"
          id="periodEndDate"
          dateFormat="dd/mm/yy"
          :manual-input="false"
          :min-date="new Date()"
          fluid
        />

        <template v-if="$form.periodEndDate?.invalid">
          <Message
            v-for="(error, index) of $form.periodEndDate.errors"
            :key="index"
            severity="error"
            size="small"
            variant="simple"
            >➤ {{ error.message }}</Message
          >
        </template>
      </FloatLabel>
      <!-- * fecha de inicio de postulaciones  -->
      <FloatLabel variant="on">
        <label for="applicationStartDate">Fecha de inicio de postulaciones</label>
        <DatePicker
          name="applicationStartDate"
          id="applicationStartDate"
          dateFormat="dd/mm/yy"
          :manual-input="false"
          :min-date="new Date()"
          fluid
        />

        <template v-if="$form.applicationStartDate?.invalid">
          <Message
            v-for="(error, index) of $form.applicationStartDate.errors"
            :key="index"
            severity="error"
            size="small"
            variant="simple"
            >➤ {{ error.message }}</Message
          >
        </template>
      </FloatLabel>
      <!-- *fecha de fin de postulaciones -->
      <FloatLabel variant="on">
        <label for="applicationEndDate">Fecha de finalización de postulaciones</label>
        <DatePicker
          name="applicationEndDate"
          id="applicationEndDate"
          dateFormat="dd/mm/yy"
          :manual-input="false"
          :min-date="new Date()"
          fluid
        />

        <template v-if="$form.applicationEndDate?.invalid">
          <Message
            v-for="(error, index) of $form.applicationEndDate.errors"
            :key="index"
            severity="error"
            size="small"
            variant="simple"
            >➤ {{ error.message }}</Message
          >
        </template>
      </FloatLabel>
      <!-- * fecha de inicio de apelaciones -->
      <FloatLabel variant="on">
        <label for="appealStartDate">Fecha de inicio de apelaciones </label>
        <DatePicker
          name="appealStartDate"
          id="appealStartDate"
          dateFormat="dd/mm/yy"
          :manual-input="false"
          :min-date="new Date()"
          fluid
        />

        <template v-if="$form.appealStartDate?.invalid">
          <Message
            v-for="(error, index) of $form.appealStartDate.errors"
            :key="index"
            severity="error"
            size="small"
            variant="simple"
            >➤ {{ error.message }}</Message
          >
        </template>
      </FloatLabel>
      <!-- * fecha de fin de apelaciones -->
      <FloatLabel variant="on">
        <label for="appealEndDate">Fecha de finalización de apelaciones</label>
        <DatePicker
          name="appealEndDate"
          id="appealEndDate"
          dateFormat="dd/mm/yy"
          :manual-input="false"
          :min-date="new Date()"
          fluid
        />

        <template v-if="$form.appealEndDate?.invalid">
          <Message
            v-for="(error, index) of $form.appealEndDate.errors"
            :key="index"
            severity="error"
            size="small"
            variant="simple"
            >➤ {{ error.message }}</Message
          >
        </template>
      </FloatLabel>
      <div class="col-span-2 flex gap-4 mt-1">
        <Button label="Cancelar" severity="secondary" outlined class="w-full" />
        <Button label="Establecer periodo" type="submit" class="w-full" />
      </div>
    </div>
    <pre>{{ $form }}</pre>
  </Form>
</template>

<script setup>
// todo: manage validations and data submission

import { zodResolver } from '@primevue/forms/resolvers/zod'
import { z } from 'zod'

const initialValues = {
  periodStartDate: null,
  periodEndDate: null,
  applicationStartDate: null,
  applicationEndDate: null,
  appealStartDate: null,
  appealEndDate: null
}

const resolver = zodResolver(
  z.object({
    periodStartDate: z.preprocess(
      (val) => {
        if (val === '' || val === null) {
          return null
        }

        return new Date(val)
      },
      z.union([
        z.date(),
        z.null().refine((val) => val !== null, { message: 'La fecha es requerida.' })
      ])
    ),
    periodEndDate: z.preprocess(
      (val) => {
        if (val === '' || val === null) {
          return null
        }

        return new Date(val)
      },
      z.union([
        z.date(),
        z.null().refine((val) => val !== null, { message: 'La fecha es requerida.' })
      ])
    ),
    applicationStartDate: z.preprocess(
      (val) => {
        if (val === '' || val === null) {
          return null
        }

        return new Date(val)
      },
      z.union([
        z.date(),
        z.null().refine((val) => val !== null, { message: 'La fecha es requerida.' })
      ])
    ),
    applicationEndDate: z.preprocess(
      (val) => {
        if (val === '' || val === null) {
          return null
        }

        return new Date(val)
      },
      z.union([
        z.date(),
        z.null().refine((val) => val !== null, { message: 'La fecha es requerida.' })
      ])
    ),
    appealStartDate: z.preprocess(
      (val) => {
        if (val === '' || val === null) {
          return null
        }

        return new Date(val)
      },
      z.union([
        z.date(),
        z.null().refine((val) => val !== null, { message: 'La fecha es requerida.' })
      ])
    ),
    appealEndDate: z.preprocess(
      (val) => {
        if (val === '' || val === null) {
          return null
        }

        return new Date(val)
      },
      z.union([
        z.date(),
        z.null().refine((val) => val !== null, { message: 'La fecha es requerida.' })
      ])
    )
  })
)
</script>

<style lang="scss" scoped></style>
