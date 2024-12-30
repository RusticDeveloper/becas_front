<template>
  <!-- todo:hacer que reciba y muestre la informacion de la postulacion -->
  <Panel header="Información del postulante" toggleable>
    <p class="m-0">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </Panel>
  <Panel header="Información del grupo familiar" toggleable>
    <p class="m-0">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </Panel>
  <Panel header="Documentación de respaldo" toggleable>
    <p class="m-0">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </Panel>
  <Panel header="Evaluación de la solicitud" toggleable>
    <Form v-slot="$form" :resolver>
      <div class="grid grid-cols-2 gap-4 w-full">
        <!-- * justificacion  y objeservaciones de la resolucion -->
        <div class="col-span-2">
          <FloatLabel variant="on">
            <Textarea name="justification" cols="100" autoResize />
            <label for="justification">justification</label>
            <template v-if="$form.justification?.invalid">
              <Message
                v-for="(error, index) of $form.justification.errors"
                :key="index"
                severity="error"
                size="small"
                variant="simple"
                >➤ {{ error.message }}</Message
              >
            </template>
          </FloatLabel>
        </div>
        <!-- * resolucion de la solicitud -->
        <div>
          <h3>¿Resolucion de la postulación?</h3>
          <SelectButton
            name="applicationResolution"
            :options="reolutionOptions"
            optionLabel="name"
            optionValue="value"
          />
          <template v-if="$form.applicationResolution?.invalid">
            <Message
              v-for="(error, index) of $form.applicationResolution.errors"
              :key="index"
              severity="error"
              size="small"
              variant="simple"
              >➤ {{ error.message }}</Message
            >
          </template>
        </div>
        <!-- * puntaje de la solicitud -->
        <FloatLabel variant="on" class="flex-1">
          <InputNumber
            name="applicationScore"
            inputId="applicationScore"
            :minFractionDigits="2"
            :maxFractionDigits="2"
            :min="0"
            :max="50"
            fluid
          />
          <label for="applicationScore"
            >Puntaje obtenido, si es nuevo deje este campo sin llenar
          </label>
          <template v-if="$form.applicationScore?.invalid">
            <Message
              v-for="(error, index) of $form.applicationScore.errors"
              :key="index"
              severity="error"
              size="small"
              variant="simple"
              >➤ {{ error.message }}</Message
            >
          </template>
        </FloatLabel>
        <!-- * porcentaje de la solicitud -->
        <FloatLabel variant="on" class="flex-1">
          <InputNumber
            name="applicationPercentage"
            inputId="applicationPercentage"
            :minFractionDigits="2"
            :maxFractionDigits="2"
            :min="0"
            :max="100"
            suffix=" %"
            fluid
          />
          <label for="applicationPercentage">Porcentaje de la beca</label>
          <template v-if="$form.applicationPercentage?.invalid">
            <Message
              v-for="(error, index) of $form.applicationPercentage.errors"
              :key="index"
              severity="error"
              size="small"
              variant="simple"
              >➤ {{ error.message }}</Message
            >
          </template>
        </FloatLabel>
        <!-- * fecha de entrega de la solicitud -->
        <FloatLabel variant="on">
          <label for="adjudicationDateTime">fecha y hora de entrega de la beca</label>
          <DatePicker
            name="adjudicationDateTime"
            id="adjudicationDateTime"
            dateFormat="DD, dd 'de' MM 'de' yy 'a las' "
            :manual-input="false"
            :min-date="new Date()"
            showTime
            hourFormat="24"
            fluid
          />

          <template v-if="$form.adjudicationDateTime?.invalid">
            <Message
              v-for="(error, index) of $form.adjudicationDateTime.errors"
              :key="index"
              severity="error"
              size="small"
              variant="simple"
              >➤ {{ error.message }}</Message
            >
          </template>
        </FloatLabel>
        <!-- todo: darle funcionalidad a los botones -->
        <div class="col-span-2 flex gap-4 mt-1">
          <Button label="Cancelar" severity="secondary" outlined class="w-full" />
          <Button label="Guardar resolución" class="w-full" />
        </div>
      </div>
      <pre>{{ $form }}</pre>
    </Form>
  </Panel>
</template>

<script setup>
// todo: haccer que reciba toda la informacion de la postulacion
import { ref } from 'vue'
const reolutionOptions = ref([
  { name: 'Aprobado', value: 'Aproved' },
  { name: 'Rechazado', value: 'Rejected' }
])
</script>

<style lang="scss" scoped></style>
