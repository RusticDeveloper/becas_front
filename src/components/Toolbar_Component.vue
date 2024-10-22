<template>
  <Toolbar>
    <template #start>
      <Button icon="pi pi-bars" @click="visible = true" rounded text raised />
    </template>

    <template #center>
      <h1 class="bold text-amber-950 dark:text-white">SISTEMA DE BECAS UNIBE</h1>
    </template>

    <template #end>
      <ToggleButton
        v-model="checked"
        unlabel
        onLabel=" "
        offLabel=" "
        onIcon="pi pi-sun"
        offIcon="pi pi-moon"
        class="w-6"
        @click="toggleDarkMode()"
        rounded
      />
      <Avatar label="D" shape="circle" size="large" />
    </template>
  </Toolbar>
  <!-- *la barra lateral -->
  <Drawer v-model:visible="visible">
    <template #header>
      <div class="flex items-center gap-3 bg-stone-400">
        <Avatar label="D" shape="circle" size="large" />
        <h3 class="!mx-2 !px-4 flex-auto bg-cyan-400">Sistema de Becas UNIBE</h3>
      </div>
    </template>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat.
    </p>
    <template #footer>
      <div class="flex items-center gap-2">
        <Button label="Account" icon="pi pi-user" class="flex-auto" outlined></Button>
        <Button
          label="Logout"
          icon="pi pi-sign-out"
          class="flex-auto"
          severity="danger"
          text
        ></Button>
      </div>
    </template>
  </Drawer>
</template>

<script setup>
import { ref } from 'vue'

const checked = ref(false)
const visible = ref(false)

function toggleDarkMode() {
  const element = document.querySelector('html')
  element.classList.toggle('app-dark')
}
</script>

<style lang="scss" scoped></style>
