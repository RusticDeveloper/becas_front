<template>
  <Panel header="Header" class="flex flex-col md:flex-row">
    <!-- <div class="flex flex-col md:flex-row"> -->
    <div class="w-full md:w-5/12 flex flex-col items-center justify-center gap-3 py-5">
      <div class="flex flex-col gap-2">
        <label for="username">Usuario</label>
        <InputText id="username" type="text" />
      </div>
      <div class="flex flex-col gap-2">
        <label for="password">Contraseña</label>
        <Password name="password" placeholder="Contraseña" :feedback="false" toggleMask fluid />
      </div>
      <div class="flex">
        <Button label="Ingresar" icon="pi pi-user" class="w-full max-w-[17.35rem] mx-auto"></Button>
      </div>
      <p><a href="#">¿Olvido su contraseña?</a></p>
    </div>
    <div class="w-full md:w-2/12 flex">
      <Divider layout="vertical" class="!hidden md:!flex"><b>OR</b></Divider>
      <Divider layout="horizontal" class="!flex md:!hidden" align="center"><b>OR</b></Divider>
    </div>
    <div class="w-full md:w-5/12 flex items-center justify-center py-5">
      <Button
        label="Registrarse"
        icon="pi pi-user-plus"
        severity="success"
        class="w-full max-w-[17.35rem] mx-auto"
      ></Button>
    </div>
    <!-- </div> -->
  </Panel>
</template>

<script setup></script>

<style lang="scss" scoped></style>
