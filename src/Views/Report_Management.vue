<template>
  <Card>
    <template #content>
      <div class="grid grid-cols-2 gap-10">
        <Button label="Reporte general de postulaciones" class="w-full" @click="getGeneralReport" />
        <Button label="Reporte general de becas" class="w-full" @click="getScholarshipReport" />
        <Button
          label="Reporte general de ayudas economicas"
          class="w-full"
          @click="getEconomicSupportReport"
        />
        <Button
          label="Reporte general de servicios de guarderia"
          class="w-full"
          @click="getDaycareReport"
        />
        <h3 class="col-span-2 justify-center">Reporte de postulaciones</h3>

        <InputText v-model="applicantID" placeholder="busque el estudiante" />
        <Button label="Buscar postulante" @click="searchApplicantInfo()" />

        <div v-if="applicant == undefined || applicant == null" class="col-span-2">
          Postulante no encontrado
        </div>
        <div v-if="applicant !== undefined && Object.keys(applicant).length > 0" class="col-span-2">
          <p>{{ applicant.name }}</p>
          <p>{{ applicant.lastname }}</p>
          <p>{{ applicant.personIdentification }}</p>
          <Button
            label="Descargar Reporte"
            class="w-full"
            @click="downloadReport(applicant.documentationUrl)"
          />
        </div>
      </div>
    </template>
    <template #footer> </template>
  </Card>
</template>

<script setup>
import { ref } from 'vue'
const applicantID = ref('')
const applicant = ref()
const applicants = ref([
  {
    id: 1,
    personIdentification: '123456789',
    name: 'Reinaldo',
    lastname: 'Gonzalez',
    documentationUrl: 'sample.pdf'
  },
  {
    id: 2,
    personIdentification: '123456339',
    name: 'Edward',
    lastname: 'Tijeras',
    documentationUrl: 'sample1.pdf'
  },
  {
    id: 3,
    personIdentification: '123456449',
    name: 'Luis',
    lastname: 'Perez',
    documentationUrl: 'sample2.pdf'
  }
])

const searchApplicantInfo = () => {
  applicant.value = applicants.value.find(
    (person) => person.personIdentification === applicantID.value
  )
  console.log(applicant.value)
}

const downloadReport = (url) => {
  window.open(url, '_blank')
}
const getGeneralReport = () => {
  // todo:implementar la logica para obtener el reporte general de postulaciones
  console.log('Reporte general de postulaciones')
}

const getScholarshipReport = () => {
  // todo: implementar la logica para obtener el reporte de becas
  console.log('Reporte general de becas')
}
const getEconomicSupportReport = () => {
  // todo: implementar la logica para obtener el reporte de apoyo economico
  console.log('Reporte general de ayudas economicas')
}
const getDaycareReport = () => {
  // todo: implementar la logica para obtener el reporte de guarderias
  console.log('Reporte general de servicios de guarderia')
}
</script>

<style lang="scss" scoped></style>
