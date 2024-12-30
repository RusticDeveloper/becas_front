<template>
  <div class="grid grid-cols-3">
    <!-- todo: agreagr mas estadisticas en relacion con el numero de soicitudes y talves un tabla -->
    <!-- * cantidad de postulaciones a servicios -->
    <div>
      <h1 class="text-teal-900 text-[5rem]">{{ statisticsData.serviceApplications }}</h1>
      <p>Postulaciones durante el periodo</p>
    </div>
    <!-- * cantidad de postulaciones a becas -->
    <div>
      <Knob
        v-model="statisticsData.scholarshipsApplications"
        :valueTemplate="formatKnobValue"
        :strokeWidth="5"
        readonly
        :size="200"
        valueColor="SlateGray"
        rangeColor="MediumTurquoise"
        :max="statisticsData.serviceApplications"
        :pt="{
          text: { style: { fontSize: '15px' } }
        }"
      />
      <p>Postulaciones a becas durante el periodo</p>
    </div>
    <!-- * cantidad de  postulaciones a ayudas economicas-->
    <div>
      <Knob
        v-model="statisticsData.economicSupportApplications"
        :valueTemplate="formatKnobValue"
        :strokeWidth="5"
        readonly
        :size="200"
        valueColor="SlateGray"
        rangeColor="MediumTurquoise"
        :max="statisticsData.serviceApplications"
        :pt="{
          text: { style: { fontSize: '15px' } }
        }"
      />
      <p>Postulaciones de ayudas economicas durante el periodo</p>
    </div>
    <!-- * cantidad de  postulaciones a guarderia-->
    <div>
      <Knob
        v-model="statisticsData.dayCareApplications"
        :valueTemplate="formatKnobValue"
        :strokeWidth="5"
        readonly
        :size="200"
        valueColor="SlateGray"
        rangeColor="MediumTurquoise"
        :max="statisticsData.serviceApplications"
        :pt="{
          text: { style: { fontSize: '15px' } }
        }"
      />
      <p>Postulaciones al servicio de guarderia durante el periodo</p>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const formatKnobValue = (value) => {
  return `${value} / ${statisticsData.value.serviceApplications}`
}
// todo: fetch data from api
const statisticsData = ref({
  serviceApplications: 1000,
  scholarshipsApplications: 700,
  economicSupportApplications: 200,
  dayCareApplications: 100
})
</script>

<style scoped></style>
