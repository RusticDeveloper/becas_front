<template>
  <Stepper v-model:value="activeStep" class="basis-[40rem]">
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
          <Divider />
        </div>
      </Step>
    </StepList>
    <StepPanels>
      <StepPanel v-slot="{ activateCallback }" :value="1">
        <div class="flex flex-col gap-2 mx-auto" style="min-height: 16rem; max-width: 20rem">
          <div class="text-center mt-4 mb-4 text-xl font-semibold">Datos academicos</div>
          <div class="field">
            <InputText id="input" v-model="name" type="text" placeholder="Name" fluid />
          </div>
          <div class="field">
            <InputText id="email" v-model="email" type="email" placeholder="Email" fluid />
          </div>
          <div class="field">
            <Password v-model="password" placeholder="Password" fluid />
          </div>
        </div>
        <div class="flex pt-6 justify-end">
          <Button
            label="Next"
            icon="pi pi-arrow-right"
            iconPos="right"
            @click="activateCallback(2)"
          />
        </div>
      </StepPanel>
      <StepPanel v-slot="{ activateCallback }" :value="2">
        <div class="flex flex-col gap-2 mx-auto" style="min-height: 16rem; max-width: 24rem">
          <div class="text-center mt-4 mb-4 text-xl font-semibold">Choose your interests</div>
          <div class="flex flex-wrap justify-center gap-4">
            <ToggleButton v-model="option1" onLabel="Nature" offLabel="Nature" />
            <ToggleButton v-model="option2" onLabel="Art" offLabel="Art" />
            <ToggleButton v-model="option3" onLabel="Music" offLabel="Music" />
            <ToggleButton v-model="option4" onLabel="Design" offLabel="Design" />
            <ToggleButton v-model="option5" onLabel="Photography" offLabel="Photography" />
            <ToggleButton v-model="option6" onLabel="Movies" offLabel="Movies" />
            <ToggleButton v-model="option7" onLabel="Sports" offLabel="Sports" />
            <ToggleButton v-model="option8" onLabel="Gaming" offLabel="Gaming" />
            <ToggleButton v-model="option9" onLabel="Traveling" offLabel="Traveling" />
            <ToggleButton v-model="option10" onLabel="Dancing" offLabel="Dancing" />
          </div>
        </div>
        <div class="flex pt-6 justify-between">
          <Button
            label="Back"
            severity="secondary"
            icon="pi pi-arrow-left"
            @click="activateCallback(1)"
          />
          <Button
            label="Next"
            icon="pi pi-arrow-right"
            iconPos="right"
            @click="activateCallback(3)"
          />
        </div>
      </StepPanel>
      <StepPanel v-slot="{ activateCallback }" :value="3">
        <div class="flex flex-col gap-2 mx-auto" style="min-height: 16rem; max-width: 24rem">
          <div class="text-center mt-4 mb-4 text-xl font-semibold">Choose your interests</div>
          <div class="flex flex-wrap justify-center gap-4">
            <ToggleButton v-model="option1" onLabel="Nature" offLabel="Nature" />
            <ToggleButton v-model="option2" onLabel="Art" offLabel="Art" />
            <ToggleButton v-model="option3" onLabel="Music" offLabel="Music" />
            <ToggleButton v-model="option4" onLabel="Design" offLabel="Design" />
            <ToggleButton v-model="option5" onLabel="Photography" offLabel="Photography" />
            <ToggleButton v-model="option6" onLabel="Movies" offLabel="Movies" />
            <ToggleButton v-model="option7" onLabel="Sports" offLabel="Sports" />
            <ToggleButton v-model="option8" onLabel="Gaming" offLabel="Gaming" />
            <ToggleButton v-model="option9" onLabel="Traveling" offLabel="Traveling" />
            <ToggleButton v-model="option10" onLabel="Dancing" offLabel="Dancing" />
          </div>
        </div>
        <div class="flex pt-6 justify-between">
          <Button
            label="Back"
            severity="secondary"
            icon="pi pi-arrow-left"
            @click="activateCallback(1)"
          />
          <Button
            label="Next"
            icon="pi pi-arrow-right"
            iconPos="right"
            @click="activateCallback(3)"
          />
        </div>
      </StepPanel>
      <StepPanel v-slot="{ activateCallback }" :value="4">
        <div class="flex flex-col gap-2 mx-auto" style="min-height: 16rem; max-width: 24rem">
          <div class="text-center mt-4 mb-4 text-xl font-semibold">Choose your interests</div>
          <div class="flex flex-wrap justify-center gap-4">
            <ToggleButton v-model="option1" onLabel="Nature" offLabel="Nature" />
            <ToggleButton v-model="option2" onLabel="Art" offLabel="Art" />
            <ToggleButton v-model="option3" onLabel="Music" offLabel="Music" />
            <ToggleButton v-model="option4" onLabel="Design" offLabel="Design" />
            <ToggleButton v-model="option5" onLabel="Photography" offLabel="Photography" />
            <ToggleButton v-model="option6" onLabel="Movies" offLabel="Movies" />
            <ToggleButton v-model="option7" onLabel="Sports" offLabel="Sports" />
            <ToggleButton v-model="option8" onLabel="Gaming" offLabel="Gaming" />
            <ToggleButton v-model="option9" onLabel="Traveling" offLabel="Traveling" />
            <ToggleButton v-model="option10" onLabel="Dancing" offLabel="Dancing" />
          </div>
        </div>
        <div class="flex pt-6 justify-between">
          <Button
            label="Back"
            severity="secondary"
            icon="pi pi-arrow-left"
            @click="activateCallback(1)"
          />
          <Button
            label="Next"
            icon="pi pi-arrow-right"
            iconPos="right"
            @click="activateCallback(3)"
          />
        </div>
      </StepPanel>
      <StepPanel v-slot="{ activateCallback }" :value="5">
        <div class="flex flex-col gap-2 mx-auto" style="min-height: 16rem; max-width: 24rem">
          <div class="text-center mt-4 mb-4 text-xl font-semibold">
            Account created successfully
          </div>
          <div class="text-center">
            <img alt="logo" src="https://primefaces.org/cdn/primevue/images/stepper/content.svg" />
          </div>
        </div>
        <div class="flex pt-6 justify-start">
          <Button
            label="Back"
            severity="secondary"
            icon="pi pi-arrow-left"
            @click="activateCallback(2)"
          />
        </div>
      </StepPanel>
    </StepPanels>
  </Stepper>
</template>

<script setup></script>

<style lang="scss" scoped></style>
