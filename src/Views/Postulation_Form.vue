<template>
  <Toast position="top-left" group="tl" />
  <Stepper v-model:value="activeStep" linear class="basis-[40rem]">
    <StepList>
      <Step v-slot="{ activateCallback, value, a11yAttrs }" asChild :value="1">
        <div class="flex flex-row flex-auto gap-2" v-bind="a11yAttrs.root">
          <button
            class="bg-transparent border-0 inline-flex flex-col gap-2"
            @click="activateCallback"
            v-bind="a11yAttrs.header"
          >
            <span
              :class="[
                'rounded-full border-2 w-12 h-12 inline-flex items-center justify-center',
                {
                  'bg-primary text-primary-contrast border-primary': value <= activeStep,
                  'border-surface-200 dark:border-surface-700': value > activeStep
                }
              ]"
            >
              <i class="pi pi-users" />
              <!-- * datos personales -->
            </span>
          </button>
          <Divider />
        </div>
      </Step>
      <Step v-slot="{ activateCallback, value, a11yAttrs }" asChild :value="2">
        <div class="flex flex-row flex-auto gap-2 pl-2" v-bind="a11yAttrs.root">
          <button
            class="bg-transparent border-0 inline-flex flex-col gap-2"
            @click="activateCallback"
            v-bind="a11yAttrs.header"
          >
            <span
              :class="[
                'rounded-full border-2 w-12 h-12 inline-flex items-center justify-center',
                {
                  'bg-primary text-primary-contrast border-primary': value <= activeStep,
                  'border-surface-200 dark:border-surface-700': value > activeStep
                }
              ]"
            >
              <i class="pi pi-graduation-cap" />
              <!-- *  Datos academicos/profesionales -->
            </span>
          </button>
          <Divider />
        </div>
      </Step>
      <Step v-slot="{ activateCallback, value, a11yAttrs }" asChild :value="3">
        <div class="flex flex-row flex-auto gap-2 pl-2" v-bind="a11yAttrs.root">
          <button
            class="bg-transparent border-0 inline-flex flex-col gap-2"
            @click="activateCallback"
            v-bind="a11yAttrs.header"
          >
            <span
              :class="[
                'rounded-full border-2 w-12 h-12 inline-flex items-center justify-center',
                {
                  'bg-primary text-primary-contrast border-primary': value <= activeStep,
                  'border-surface-200 dark:border-surface-700': value > activeStep
                }
              ]"
            >
              <i class="pi pi-id-card" />

              <!-- * Fortalezas, debilidades educativaas -->
            </span>
          </button>
          <Divider />
        </div>
      </Step>
      <Step v-slot="{ activateCallback, value, a11yAttrs }" asChild :value="4">
        <div class="flex flex-row flex-auto gap-2 pl-2" v-bind="a11yAttrs.root">
          <button
            class="bg-transparent border-0 inline-flex flex-col gap-2"
            @click="activateCallback"
            v-bind="a11yAttrs.header"
          >
            <span
              :class="[
                'rounded-full border-2 w-12 h-12 inline-flex items-center justify-center',
                {
                  'bg-primary text-primary-contrast border-primary': value <= activeStep,
                  'border-surface-200 dark:border-surface-700': value > activeStep
                }
              ]"
            >
              <i class="pi pi-users" />
              <!-- * fortalesas, debilidades sociales -->
            </span>
          </button>
          <Divider />
        </div>
      </Step>
      <Step v-slot="{ activateCallback, value, a11yAttrs }" asChild :value="5">
        <div class="flex flex-row flex-auto gap-2 pl-2" v-bind="a11yAttrs.root">
          <button
            class="bg-transparent border-0 inline-flex flex-col gap-2"
            @click="activateCallback"
            v-bind="a11yAttrs.header"
          >
            <span
              :class="[
                'rounded-full border-2 w-12 h-12 inline-flex items-center justify-center',
                {
                  'bg-primary text-primary-contrast border-primary': value <= activeStep,
                  'border-surface-200 dark:border-surface-700': value > activeStep
                }
              ]"
            >
              <i class="pi pi-file" />
              <!-- * Descripciom -->
            </span>
          </button>
        </div>
      </Step>
    </StepList>
    <StepPanels>
      <Form v-slot="$form" :initialValues :resolver @submit="onFormSubmit">
        <StepPanel v-slot="{ activateCallback }" :value="1">
          <Fieldset legend="Datos personales">
            <div class="grid grid-cols-2 gap-8 py-8">
              <!-- * Tipo de beca -->
              <!-- ! TODO: verificar si acepto el obejeto o solo el valor -->
              <div class="col-span-2">
                <Select
                  name="selectedScholarship"
                  :options="Scholarships_types"
                  optionLabel="name"
                  placeholder="Escoja una beca"
                  class="flex"
                />
                <template v-if="$form.selectedScholarship?.invalid">
                  <Message
                    v-for="(error, index) of $form.selectedScholarship.errors"
                    :key="index"
                    severity="error"
                    size="small"
                    variant="simple"
                    >➤ {{ error.message }}</Message
                  >
                </template>
                <Message severity="secondary"
                  >{{ $form.selectedScholarship?.value.description }}
                </Message>
              </div>
              <!-- * Es independiente -->
              <div>
                <h3>¿Es independiente economicamente?</h3>
                <SelectButton
                  name="isIndependent"
                  :options="yesNoOption"
                  optionLabel="name"
                  optionValue="value"
                />
                <template v-if="$form.isIndependent?.invalid">
                  <Message
                    v-for="(error, index) of $form.isIndependent.errors"
                    :key="index"
                    severity="error"
                    size="small"
                    variant="simple"
                    >➤ {{ error.message }}</Message
                  >
                </template>
              </div>
              <!-- *  Vive solo -->
              <div>
                <h3>¿vive solo?</h3>
                <SelectButton
                  name="liveAlone"
                  :options="yesNoOption"
                  optionLabel="name"
                  optionValue="value"
                />
                <template v-if="$form.liveAlone?.invalid">
                  <Message
                    v-for="(error, index) of $form.liveAlone.errors"
                    :key="index"
                    severity="error"
                    size="small"
                    variant="simple"
                    >➤ {{ error.message }}</Message
                  >
                </template>
              </div>

              <!-- *Tiene Hijos -->
              <!-- ! Todo: validar que el campo se limpie si no se renderiza -->
              <div>
                <h3>¿Tiene Hijos?</h3>
                <SelectButton
                  name="hasChildren"
                  :options="yesNoOption"
                  optionLabel="name"
                  optionValue="value"
                />
                <template v-if="$form.hasChildren?.invalid">
                  <Message
                    v-for="(error, index) of $form.hasChildren.errors"
                    :key="index"
                    severity="error"
                    size="small"
                    variant="simple"
                    >➤ {{ error.message }}</Message
                  >
                </template>
                <InputNumber
                  v-if="$form.hasChildren?.value === true"
                  name="childQuantity"
                  prefix="# "
                  :min="1"
                  :max="20"
                  fluid
                />
                <template v-if="$form.childQuantity?.invalid">
                  <Message
                    v-for="(error, index) of $form.childQuantity.errors"
                    :key="index"
                    severity="error"
                    size="small"
                    variant="simple"
                    >➤ {{ error.message }}</Message
                  >
                </template>
              </div>
              <!-- * Foto -->
              <!-- ! Todo: revisar como validar y subir el archivo junto con el formulario -->
              <div>
                <h3>Suba una fotografia del postulante</h3>
                <FileUpload
                  name="photo[]"
                  url="/api/upload"
                  @upload="onAdvancedUpload($event)"
                  :multiple="true"
                  ref="photo"
                  accept="image/*"
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
              <!-- *tipo de vivienda -->
              <div class="col-span-2">
                <Select
                  name="selectedHouseType"
                  :options="houseTypes"
                  optionLabel="name"
                  optionValue="value"
                  placeholder="Tipo de vivienda"
                  fluid
                />
                <template v-if="$form.selectedHouseType?.invalid">
                  <Message
                    v-for="(error, index) of $form.selectedHouseType.errors"
                    :key="index"
                    severity="error"
                    size="small"
                    variant="simple"
                    >➤ {{ error.message }}</Message
                  >
                </template>
              </div>
              <!-- *Direcciòn -->
              <h3>Dirección del postulante</h3>
              <div class="col-span-2 flex gap-4 flex-wrap">
                <FloatLabel variant="on" class="flex-1">
                  <InputText id="streets" name="streets" />
                  <label for="streets">Calles</label>
                  <template v-if="$form.streets?.invalid">
                    <Message
                      v-for="(error, index) of $form.streets.errors"
                      :key="index"
                      severity="error"
                      size="small"
                      variant="simple"
                      >➤ {{ error.message }}</Message
                    >
                  </template>
                </FloatLabel>
                <FloatLabel variant="on" class="flex-1">
                  <InputText id="department" name="department" />
                  <label for="department">Departamento</label>
                  <template v-if="$form.department?.invalid">
                    <Message
                      v-for="(error, index) of $form.department.errors"
                      :key="index"
                      severity="error"
                      size="small"
                      variant="simple"
                      >➤ {{ error.message }}</Message
                    >
                  </template>
                </FloatLabel>
                <FloatLabel variant="on">
                  <InputText id="houseNumber" name="houseNumber" />
                  <label for="houseNumber">Número de residencia o lote</label>
                  <template v-if="$form.houseNumber?.invalid">
                    <Message
                      v-for="(error, index) of $form.houseNumber.errors"
                      :key="index"
                      severity="error"
                      size="small"
                      variant="simple"
                      >➤ {{ error.message }}</Message
                    >
                  </template>
                </FloatLabel>
                <FloatLabel variant="on">
                  <InputText id="floor" name="floor" />
                  <label for="floor">Piso</label>
                  <template v-if="$form.floor?.invalid">
                    <Message
                      v-for="(error, index) of $form.floor.errors"
                      :key="index"
                      severity="error"
                      size="small"
                      variant="simple"
                      >➤ {{ error.message }}</Message
                    >
                  </template>
                </FloatLabel>
                <FloatLabel variant="on">
                  <InputText id="neighborhood" name="neighborhood" />
                  <label for="neighborhood">Barrio</label>
                  <template v-if="$form.neighborhood?.invalid">
                    <Message
                      v-for="(error, index) of $form.neighborhood.errors"
                      :key="index"
                      severity="error"
                      size="small"
                      variant="simple"
                      >➤ {{ error.message }}</Message
                    >
                  </template>
                </FloatLabel>
                <FloatLabel variant="on">
                  <InputText id="district" name="district" />
                  <label for="district">Sector</label>
                  <template v-if="$form.district?.invalid">
                    <Message
                      v-for="(error, index) of $form.district.errors"
                      :key="index"
                      severity="error"
                      size="small"
                      variant="simple"
                      >➤ {{ error.message }}</Message
                    >
                  </template>
                </FloatLabel>
              </div>
            </div>

            <div class="flex pt-6 justify-end">
              <Button
                label="Siguiente"
                icon="pi pi-arrow-right"
                iconPos="right"
                @click="activateCallback(2)"
              />
            </div>
          </Fieldset>
        </StepPanel>
        <StepPanel v-slot="{ activateCallback }" :value="2">
          <Fieldset legend="Datos del grupo familiar">
            <div class="grid grid-cols-2 gap-8 py-8">
              <h3>Ingrese los gastos mensuales</h3>
              {{ initialValues }}
              <!-- *Gastos mensuales -->
              <div class="col-span-2 grid grid-cols-2 gap-4">
                <FloatLabel variant="on" class="flex-1">
                  <InputNumber
                    name="food"
                    inputId="food"
                    v-model="initialValues.food"
                    :minFractionDigits="2"
                    :maxFractionDigits="2"
                    :min="0"
                    :max="1000"
                    fluid
                  />
                  <label for="food">Alimentos</label>
                  <template v-if="$form.food?.invalid">
                    <Message
                      v-for="(error, index) of $form.food.errors"
                      :key="index"
                      severity="error"
                      size="small"
                      variant="simple"
                      >➤ {{ error.message }}</Message
                    >
                  </template>
                </FloatLabel>
                <FloatLabel variant="on" class="flex-1">
                  <InputNumber
                    name="rent"
                    v-model="initialValues.rent"
                    inputId="rent"
                    :minFractionDigits="2"
                    :maxFractionDigits="2"
                    :min="0"
                    :max="1000"
                    fluid
                  />
                  <label for="rent">Alquiler</label>
                  <template v-if="$form.rent?.invalid">
                    <Message
                      v-for="(error, index) of $form.rent.errors"
                      :key="index"
                      severity="error"
                      size="small"
                      variant="simple"
                      >➤ {{ error.message }}</Message
                    >
                  </template>
                </FloatLabel>
                <FloatLabel variant="on">
                  <InputNumber
                    name="electricity"
                    v-model="initialValues.electricity"
                    inputId="electricity"
                    :minFractionDigits="2"
                    :maxFractionDigits="2"
                    :min="0"
                    :max="1000"
                    fluid
                  />
                  <label for="electricity">Luz eléctrica </label>
                  <template v-if="$form.electricity?.invalid">
                    <Message
                      v-for="(error, index) of $form.electricity.errors"
                      :key="index"
                      severity="error"
                      size="small"
                      variant="simple"
                      >➤ {{ error.message }}</Message
                    >
                  </template>
                </FloatLabel>
                <FloatLabel variant="on">
                  <InputNumber
                    name="water"
                    v-model="initialValues.water"
                    inputId="water"
                    :minFractionDigits="2"
                    :maxFractionDigits="2"
                    :min="0"
                    :max="1000"
                    fluid
                  />
                  <label for="water">Agua potable</label>
                  <template v-if="$form.water?.invalid">
                    <Message
                      v-for="(error, index) of $form.water.errors"
                      :key="index"
                      severity="error"
                      size="small"
                      variant="simple"
                      >➤ {{ error.message }}</Message
                    >
                  </template>
                </FloatLabel>
                <FloatLabel variant="on">
                  <InputNumber
                    name="internet"
                    v-model="initialValues.internet"
                    inputId="internet"
                    :minFractionDigits="2"
                    :maxFractionDigits="2"
                    :min="0"
                    :max="1000"
                    fluid
                  />
                  <label for="internet">Internet</label>
                  <template v-if="$form.internet?.invalid">
                    <Message
                      v-for="(error, index) of $form.internet.errors"
                      :key="index"
                      severity="error"
                      size="small"
                      variant="simple"
                      >➤ {{ error.message }}</Message
                    >
                  </template>
                </FloatLabel>
                <FloatLabel variant="on">
                  <InputNumber
                    name="telephonePayment"
                    v-model="initialValues.telephonePayment"
                    inputId="telephonePayment"
                    :minFractionDigits="2"
                    :maxFractionDigits="2"
                    :min="0"
                    :max="1000"
                    fluid
                  />
                  <label for="telephonePayment">Teléfono fijo</label>
                  <template v-if="$form.telephonePayment?.invalid">
                    <Message
                      v-for="(error, index) of $form.telephonePayment.errors"
                      :key="index"
                      severity="error"
                      size="small"
                      variant="simple"
                      >➤ {{ error.message }}</Message
                    >
                  </template>
                </FloatLabel>
                <FloatLabel variant="on">
                  <InputNumber
                    name="medicine"
                    v-model="initialValues.medicine"
                    inputId="medicine"
                    :minFractionDigits="2"
                    :maxFractionDigits="2"
                    :min="0"
                    :max="1000"
                    fluid
                  />
                  <label for="medicine">Medicina</label>
                  <template v-if="$form.medicine?.invalid">
                    <Message
                      v-for="(error, index) of $form.medicine.errors"
                      :key="index"
                      severity="error"
                      size="small"
                      variant="simple"
                      >➤ {{ error.message }}</Message
                    >
                  </template>
                </FloatLabel>
                <FloatLabel variant="on">
                  <InputNumber
                    name="cableTv"
                    v-model="initialValues.cableTv"
                    inputId="cableTv"
                    :minFractionDigits="2"
                    :maxFractionDigits="2"
                    :min="0"
                    :max="1000"
                    fluid
                  />
                  <label for="cableTv">Televición por cable o IPtv</label>
                  <template v-if="$form.cableTv?.invalid">
                    <Message
                      v-for="(error, index) of $form.cableTv.errors"
                      :key="index"
                      severity="error"
                      size="small"
                      variant="simple"
                      >➤ {{ error.message }}</Message
                    >
                  </template>
                </FloatLabel>
                <FloatLabel variant="on">
                  <InputNumber
                    name="education"
                    v-model="initialValues.education"
                    inputId="education"
                    :minFractionDigits="2"
                    :maxFractionDigits="2"
                    :min="0"
                    :max="1000"
                    fluid
                  />
                  <label for="education">Educación</label>
                  <template v-if="$form.education?.invalid">
                    <Message
                      v-for="(error, index) of $form.education.errors"
                      :key="index"
                      severity="error"
                      size="small"
                      variant="simple"
                      >➤ {{ error.message }}</Message
                    >
                  </template>
                </FloatLabel>
                <FloatLabel variant="on">
                  <InputNumber
                    name="transport"
                    v-model="initialValues.transport"
                    inputId="transport"
                    :minFractionDigits="2"
                    :maxFractionDigits="2"
                    :min="0"
                    :max="1000"
                    fluid
                  />
                  <label for="transport">Transporte</label>
                  <template v-if="$form.transport?.invalid">
                    <Message
                      v-for="(error, index) of $form.transport.errors"
                      :key="index"
                      severity="error"
                      size="small"
                      variant="simple"
                      >➤ {{ error.message }}</Message
                    >
                  </template>
                </FloatLabel>
                <label for="monthlyExpences">Total de gastos mensuales</label>
                <InputNumber
                  name="monthlyExpences"
                  inputId="monthlyExpences"
                  :minFractionDigits="2"
                  :maxFractionDigits="2"
                  v-model="monthly_expences"
                  disabled
                  prefix="$ "
                  fluid
                />
              </div>
              <!-- * vehiculos -->
              <div class="col-span-2">
                <h3>Vehiculos</h3>
                <Button label="Nuevo Vehiculo" icon="pi pi-plus" @click="add_vehicle" v-ripple />
                <div v-for="vehicle in vehicles" v-bind:key="vehicle.id" id="vehicle.id">
                  <Vehicle :nameId="carCounter" />
                  <Button
                    type="button"
                    label="Quitar"
                    icon="pi pi-trash"
                    @click="remove_vehicle(vehicle.id)"
                    v-ripple
                  />
                </div>
              </div>
              <!-- * problemas de salud del grupo familiar conviviente -->
              <div class="col-span-2">
                <h3>Problemas de salud del grupo familiar conviviente</h3>
                <h4>
                  Indique si algun pariente tiene algun problema de salud o discapacidad, y tenga a
                  mano la documentacion, que se pedira al final
                </h4>
                <Button label="Agregar pariente" icon="pi pi-plus" @click="add_relative" v-ripple />
                <div v-for="relative in relatives" v-bind:key="relative.id" id="relative.id">
                  <Relative_Health_Information />
                  <Button
                    type="button"
                    label="Quitar"
                    icon="pi pi-trash"
                    @click="remove_relative(relative.id)"
                    v-ripple
                  />
                </div>
              </div>
              <!-- * ayuda gubernamental -->
              <div class="grid grid-cols-3">
                <h3 class="col-span-3">¿Recibe ayuda gubernamental?</h3>
                <span v-for="gobermentAid in aidTypes" :key="gobermentAid.key">
                  <RadioButton
                    v-model="selectedAid"
                    :inputId="gobermentAid.key"
                    name="selectedAid"
                    :value="gobermentAid.value"
                  />
                  <label :for="gobermentAid.key">{{ gobermentAid.name }}</label>
                </span>
                <template v-if="$form.selectedAid?.invalid">
                  <Message
                    v-for="(error, index) of $form.selectedAid.errors"
                    :key="index"
                    severity="error"
                    size="small"
                    variant="simple"
                    >➤ {{ error.message }}</Message
                  >
                </template>
              </div>
              <!-- * situaciones particulares -->
              <div class="grid grid-cols-3">
                <h3 class="col-span-3">¿Tiene alguna situacion particular?</h3>
                <span v-for="particularSituation in situations" :key="particularSituation.key">
                  <RadioButton
                    v-model="selectedSituation"
                    :inputId="particularSituation.key"
                    name="selectedSituation"
                    :value="particularSituation.value"
                  />
                  <label :for="particularSituation.key">{{ particularSituation.name }}</label>
                </span>
                <template v-if="$form.selectedSituation?.invalid">
                  <Message
                    v-for="(error, index) of $form.selectedSituation.errors"
                    :key="index"
                    severity="error"
                    size="small"
                    variant="simple"
                    >➤ {{ error.message }}</Message
                  >
                </template>
                <Textarea
                  v-if="selectedSituation == 'NA'"
                  v-model="situationDescription"
                  name="situationDescription"
                  rows="5"
                  cols="30"
                /><template v-if="$form.situationDescription?.invalid">
                  <Message
                    v-for="(error, index) of $form.situationDescription.errors"
                    :key="index"
                    severity="error"
                    size="small"
                    variant="simple"
                    >➤ {{ error.message }}</Message
                  >
                </template>
              </div>
            </div>
            <pre>    {{ $form }}  </pre>
            <div class="flex pt-6 justify-between">
              <Button
                label="Atras"
                severity="secondary"
                icon="pi pi-arrow-left"
                @click="activateCallback(1)"
              />
              <Button
                label="Siguiente"
                icon="pi pi-arrow-right"
                iconPos="right"
                @click="activateCallback(3)"
              />
            </div>
          </Fieldset>
        </StepPanel>
        <StepPanel v-slot="{ activateCallback }" :value="3">
          <Fieldset legend="Informaciòn socio-economica del grupo familiar">
            <div class="grid grid-cols-2 gap-8 py-8">
              <div class="col-span-2">
                <h3>
                  Ingrese la informacion socio-económica de las personas mayores de edad que
                  conviven con el postulante
                </h3>
                <Button
                  label="Agregar información del pariente"
                  icon="pi pi-plus"
                  @click="add_relative_info"
                  v-ripple
                />
                <div
                  v-for="relative_intel in relatives_intel"
                  v-bind:key="relative_intel.id"
                  id="relative_intel.id"
                >
                  <Relative_Intel />
                  <Button
                    type="button"
                    label="Quitar"
                    icon="pi pi-trash"
                    @click="remove_relative_intel(relative_intel.id)"
                    v-ripple
                  />
                </div>
              </div>
            </div>
            <div class="flex pt-6 justify-between">
              <Button
                label="Atras"
                severity="secondary"
                icon="pi pi-arrow-left"
                @click="activateCallback(2)"
              />
              <Button
                label="Siguiente"
                icon="pi pi-arrow-right"
                iconPos="right"
                @click="activateCallback(4)"
              />
            </div>
          </Fieldset>
        </StepPanel>
        <StepPanel v-slot="{ activateCallback }" :value="4">
          <Fieldset legend="Descripcion de la situacion actual del estudiante">
            <div class="grid grid-cols-2 gap-8 py-8">
              <!-- * justificacion de la situacion actual del postulante  -->
              <FloatLabel variant="on" class="col-span-2">
                <label for="transport">justifique su situacion actual</label>
                <Textarea v-model="justification_postulant" rows="5" cols="30" />
              </FloatLabel>
              <!-- * justificacion de la situacion del postulante (beca discapacidad) -->
              <FloatLabel variant="on" class="col-span-2">
                <label for="transport">justifique su situacion y trayectoria educativa</label>
                <Textarea v-model="justification_disability" rows="5" cols="30" />
              </FloatLabel>
              <FloatLabel variant="on" class="col-span-2">
                <label for="transport"
                  >justifique su situacion social y relacion con docentes y estudiantes</label
                >
                <Textarea v-model="justification_educational" rows="5" cols="30" />
              </FloatLabel>
            </div>
          </Fieldset>
          <div class="flex pt-6 justify-between">
            <Button
              label="Atras"
              severity="secondary"
              icon="pi pi-arrow-left"
              @click="activateCallback(3)"
            />
            <Button
              label="Siguiente"
              icon="pi pi-arrow-right"
              iconPos="right"
              @click="activateCallback(5)"
            />
          </div>
        </StepPanel>
        <StepPanel v-slot="{ activateCallback }" :value="5">
          <Fieldset legend="Documentaciòn requerida">
            <div class="grid grid-cols-2 gap-8 py-8">
              <Message class="col-span-2">
                suba un documento con toda la informacion requerida misma que se muestra a
                continuacion informacion sobre cada tipo de beca
              </Message>
              <!-- * Documentacion requerida -->
              <div class="col-span-2">
                <h3>Suba la documentacion necesaria</h3>
                <FileUpload
                  name="demo[]"
                  url="/api/upload"
                  @upload="onAdvancedUpload($event)"
                  :multiple="true"
                  ref="photo"
                  accept="image/*"
                  :maxFileSize="1000000"
                  chooseLabel="seleccionar"
                  cancelLabel="Cancelar"
                  :show-upload-button="false"
                >
                  <template #empty>
                    <span>Arrastre y suelte su el documento aqui.</span>
                  </template>
                </FileUpload>
              </div>
            </div>
          </Fieldset>
          <div class="flex pt-6 justify-between">
            <Button
              label="Atras"
              severity="secondary"
              icon="pi pi-arrow-left"
              @click="activateCallback(4)"
            />
            <Button label="Enviar" type="submit" severity="secondary" icon="pi pi-upload" />
          </div>
        </StepPanel>
      </Form>
    </StepPanels>
  </Stepper>
</template>

<script setup>
import Relative_Health_Information from '@/components/Relative_Health_Information.vue'
import Relative_Intel from '@/components/Relative_Intel.vue'
import Vehicle from '@/components/vehicle.vue'
import { ref, watchEffect, reactive, computed } from 'vue'
import { zodResolver } from '@primevue/forms/resolvers/zod'
import { z } from 'zod'
import { useToast } from 'primevue/usetoast'

const toast = useToast()
const activeStep = ref(2)

// ! TODO: agregar datos iniciales del formulario
const initialValues = reactive({
  selectedScholarship: {},
  isIndependent: null,
  liveAlone: null,
  hasChildren: null,
  childQuantity: null,
  selectedHouseType: '',
  streets: '',
  department: '',
  houseNumber: '',
  floor: '',
  neighborhood: '',
  district: '',
  food: 0,
  rent: 0,
  electricity: 0,
  internet: 0,
  water: 0,
  telephonePayment: 0,
  medicine: 0,
  cableTv: 0,
  education: 0,
  transport: 0,
  monthlyExpences: 0
})

// validacion de los formularios
const resolver = zodResolver(
  z.object({
    selectedScholarship: z.union([
      z.object({
        name: z.string().nonempty('Seleccione una beca o una ayuda económica.')
      }),
      z.any().refine(() => false, { message: 'Seleccione una beca o una ayuda económica.' })
    ]),
    isIndependent: z.boolean({
      required_error: 'Seleccione una opcion',
      invalid_type_error: 'Es necesario seleccionar una opcion'
    }),
    liveAlone: z.boolean({
      required_error: 'Seleccione una opcion',
      invalid_type_error: 'Es necesario seleccionar una opcion'
    }),
    hasChildren: z.boolean({
      required_error: 'Seleccione una opcion',
      invalid_type_error: 'Es necesario seleccionar una opcion'
    }),
    childQuantity: z
      .number({
        invalid_type_error: 'Ingrese un numero entre 1 y 20',
        required_error: 'Debe indicar la cantidad de hijos'
      })
      .int('Debe tener al menos un hijo, sin fracciones')
      .optional(),
    selectedHouseType: z
      .string({
        required_error: 'Seleccione una opcion',
        invalid_type_error: 'Es necesario seleccionar una opcion'
      })
      .nonempty('Seleccione un tipo de vivienda'),
    streets: z.string().nonempty('Ingrese la calle donde vive'),
    department: z.string().nonempty('Ingrese el departamento donde vive'),
    houseNumber: z.string().nonempty('Ingrese el numero de la casa'),
    floor: z.string().nonempty('Ingrese el piso donde vive'),
    neighborhood: z.string().nonempty('Ingrese el barrio donde vive'),
    district: z.string().nonempty('Ingrese el sector donde vive'),
    food: z
      .number({
        required_error: 'ingrese un valor en comida',
        invalid_type_error: 'Ingrese un valor valido'
      })
      .refine((val) => /^\d+(\.\d{1,2})?$/.test(val.toString()), {
        message: 'Must have at most 2 decimal places'
      })
  })
)

const onFormSubmit = ({ valid }) => {
  if (valid) {
    toast.add({ severity: 'success', summary: 'Formulario guardado.', group: 'tl', life: 3000 })
  }
}

const photo = ref()
const yesNoOption = ref([
  { name: 'Si', value: true },
  { name: 'No', value: false }
])
// const Children = ref()
// const streets = ref()
// const department = ref()
// const house_id = ref()
// const floor = ref()
// const neigbor = ref()
// const district = ref()
const justification_postulant = ref()
const justification_disability = ref()
const justification_educational = ref()
const situationDescription = ref()
// const monthly_expences = ref()
let monthly_expences = computed(() => {
  return (
    initialValues.food +
    initialValues.rent +
    initialValues.electricity +
    initialValues.internet +
    initialValues.water +
    initialValues.telephonePayment +
    initialValues.medicine +
    initialValues.cableTv +
    initialValues.education +
    initialValues.transport
  )
})
// suma automatica

// watchEffect(() => {
//   console.log(
//     initialValues.food +
//       initialValues.rent +
//       initialValues.electricity +
//       initialValues.internet +
//       initialValues.water +
//       initialValues.telephonePayment +
//       initialValues.medicine +
//       initialValues.cableTv +
//       initialValues.education +
//       initialValues.transport
//   )
// })
// const food = ref(0)
// const rent = ref(0)
// const ligth = ref(0)
// const internet = ref(0)
// const water = ref(0)
// const telephone_payment = ref(0)
// const medicine = ref(0)
// const cable_tv = ref(0)
// const education = ref(0)
// const transport = ref(0)
// const selectedScholarship = ref()
// const selectedHouseType = ref()

// ! seleccion con radio button
const carCounter = ref(0)
const selectedAid = ref()
const aidTypes = ref([
  { name: 'Ningun Integrante', value: 'None' },
  { name: 'Algunos Integrantes', value: 'some' },
  { name: 'Toda la familia', value: 'all' }
])
// 1 seleccion con radio button
const selectedSituation = ref()
const situations = ref([
  { name: 'Hermanos que estudien en universidades privadas', value: 'Male' },
  { name: 'Fallecimiento de los padres', value: 'Female' },
  { name: 'Otras dificultades que puedan tener', value: 'NA' }
])
// ! agregar vehiculos
const vehicles = ref([])

const add_vehicle = () => {
  vehicles.value.push({ id: Date.now() })
  carCounter.value++
}
const remove_vehicle = (id) => {
  vehicles.value = vehicles.value.filter((c) => c.id !== id)
}

// ! agregar informacion de salud
const relatives = ref([])

const add_relative = () => {
  relatives.value.push({ id: Date.now() })
}
const remove_relative = (id) => {
  relatives.value = relatives.value.filter((c) => c.id !== id)
}

// ! agregar informacion socioenomica
const relatives_intel = ref([])

const add_relative_info = () => {
  relatives_intel.value.push({ id: Date.now() })
}
const remove_relative_intel = (id) => {
  relatives_intel.value = relatives_intel.value.filter((c) => c.id !== id)
}

const onAdvancedUpload = () => {
  console.log('hello')
}

const Scholarships_types = ref([
  {
    name: 'Beca para Deportistas destacados a nivel Nacional e Internacional',
    code: 'RM',
    description: 'beca mmamlona'
  },
  { name: 'Beca Socioeconómicas	', code: 'LDN', description: 'beca dd' },
  { name: 'Beca Actividades Culturales', code: 'IST', description: 'beca ss' },
  { name: 'Beca por Desarrollo Profesional', code: 'PRS', description: 'beca sdfg' }
])
const houseTypes = ref([
  { name: 'Propia', value: 'Propia' },
  { name: 'Cedida', value: 'Cedida' },
  { name: 'alquilada', value: 'alquilada' },
  {
    name: 'Prestamo con IESS u otras instituciones bancarias',
    value: 'IESS/Otros'
  }
])
</script>

<style lang="scss" scoped></style>
