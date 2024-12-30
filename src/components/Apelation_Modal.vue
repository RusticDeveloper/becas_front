<template>
  <Card>
    <template #content>
      <div>
        <h2>Observaciones de la apelación</h2>
        <Textarea v-model="value" rows="5" cols="30" />
      </div>
      <div>
        <h2>Observaciones de la apelación</h2>
        <Textarea v-model="value" rows="5" cols="30" />
        <!-- * Documento con toda la informacion  -->
        <h3>
          Si en las observaciones se pide aumentar documentacion, vuelva a subir la documentacion
          completa
        </h3>
        <FileUpload
          name="documentation"
          url="/api/upload"
          @upload="onAdvancedUpload($event)"
          accept="application/pdf"
          :maxFileSize="1000000"
          chooseLabel="seleccionar"
          cancelLabel="Cancelar"
          :show-upload-button="false"
        >
          <template #empty>
            <span>Arrastre y suelte su foto aqui.</span>
          </template>
        </FileUpload>
      </div>
    </template>
    <template #footer>
      <div class="flex gap-4 mt-1">
        <Button label="Cancelar" severity="secondary" outlined class="w-full" />
        <Button label="Apelar" class="w-full" />
      </div>
    </template>
  </Card>

  <!-- * modal de confirmación -->
  <Dialog
    v-model:visible="apelationDialogConfirmation"
    :style="{ width: '450px' }"
    header="Confirmacion de apelación"
    :modal="true"
  >
    <div class="flex items-center gap-4">
      <i class="pi pi-exclamation-triangle !text-3xl" />
      <span v-if="product">¿Desea enviar la apelacion?</span>
    </div>
    <template #footer>
      <Button label="No" icon="pi pi-times" text @click="apelationDialogConfirmation = false" />
      <Button label="Si" icon="pi pi-check" @click="sendApelation" />
    </template>
  </Dialog>
</template>

<script setup>
import { ref } from 'vue'
// todo: hacer que el padre reciba el valor falso al pulsar en cancelar
// todo recibir la informacion enviada por el padre con props
const apelationDialogConfirmation = ref(false)
</script>

<style lang="scss" scoped></style>
