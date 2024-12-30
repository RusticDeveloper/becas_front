<template>
  <div>
    <DataTable
      :value="postulations"
      paginator
      :rows="5"
      :rowsPerPageOptions="[5, 10, 20, 50]"
      v-model:filters="filters"
      dataKey="id"
      filterDisplay="menu"
      :loading="loading"
      :globalFilterFields="['name', 'lastname', 'status']"
      tableStyle="min-width: 50rem"
    >
      <template #header>
        <div class="flex justify-between">
          <Button
            type="button"
            icon="pi pi-filter-slash"
            label="Limpiar filtros"
            outlined
            @click="clearFilter()"
          />
          <IconField>
            <InputIcon class="pi pi-search pb-4" />
            <InputText v-model="filters['global'].value" placeholder="busque el estudiante" />
          </IconField>
        </div>
      </template>
      <template #empty> No customers found. </template>
      <template #loading> Loading customers data. Please wait. </template>
      <Column
        v-for="col of columns"
        :key="col.field"
        :field="col.field"
        :header="col.header"
        :sortable="col.sortable"
      ></Column>
      <Column :exportable="false" header="Acciones">
        <template #body="slotProps">
          {{ slotProps.data }}
          <Button
            icon="pi pi-eye"
            v-tooltip.bottom="'Revisar postulación'"
            outlined
            rounded
            class="mr-2"
            @click="checkPostulation(slotProps.data)"
          />
          <Button
            v-if="slotProps.data.status === 'Rechazado'"
            icon="pi pi-exclamation-triangle"
            v-tooltip.bottom="'Apelar resultado'"
            outlined
            rounded
            severity="danger"
            @click="apelateDesision(slotProps.data)"
          />
        </template>
      </Column>
    </DataTable>
  </div>

  <!-- * ventanas modales -->
  <!-- * modal de apelacion -->
  <Dialog v-model:visible="apelationDialog" modal header="Apelar postulación">
    <Apelation_Modal />
  </Dialog>
  <!-- * modal de detalles de postulación-->
  <Dialog v-model:visible="detaillsDialog" modal header="Apelar postulación">
    <Postulation_Details_Modal />
  </Dialog>
</template>

<script setup>
import Apelation_Modal from '@/components/Apelation_Modal.vue'
import Postulation_Details_Modal from '@/components/Application_Details_Modal.vue'
import { ref, onMounted } from 'vue'
import { FilterMatchMode } from '@primevue/core/api'
// todo : fetch data from api
const filters = ref()
const apelationDialog = ref(false)
const detaillsDialog = ref(false)

const checkPostulation = () => {
  detaillsDialog.value = true
}
const apelateDesision = () => {
  apelationDialog.value = true
}

onMounted(() => {
  console.log('Todo: Fetch products from API')
})
const loading = ref(false)
const clearFilter = () => {
  initFilters()
}

const initFilters = () => {
  console.log('filters', filters.value)
  filters.value = {
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    lastName: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    status: { value: null, matchMode: FilterMatchMode.EQUALS },
    postulationDate: { value: null, matchMode: FilterMatchMode.EQUALS }
  }
}

initFilters()

const postulations = ref([
  {
    id: 1,
    name: 'John Doe',
    lastname: 'Doe',
    type: 'Beca Socioeconómica',
    status: 'Pendiente',
    liveAlone: false,
    houseType: 'Casa',
    postulationDate: '2021-10-10',
    address: 'Calle 123'
  },
  {
    id: 2,
    name: 'Jane Doe',
    lastname: 'Doe',
    type: 'Ayuda económica',
    status: 'Rechazado',
    liveAlone: true,
    houseType: 'Departamento',
    postulationDate: '2021-10-10',
    address: 'Calle 456'
  },
  {
    id: 3,
    name: 'Alice',
    lastname: 'Doe',
    type: 'Beca Discapacidad',
    status: 'Aprobado',
    liveAlone: false,
    houseType: 'Casa',
    postulationDate: '2021-10-10',
    address: 'Calle 789'
  }
])
const columns = [
  { header: 'Nombres', field: 'name' },
  { header: 'Apellidos ', field: 'lastname' },
  { header: 'Tipo postulación', field: 'type' },
  { header: 'Estado', field: 'status', sortable: true },
  { header: 'fecha de postulacion', field: 'postulationDate' }
]
</script>

<style lang="scss" scoped></style>
