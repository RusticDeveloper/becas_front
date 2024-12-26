<template>
  <div>
    <h1>Es el inicio de secion de la pagina de administrador</h1>
  </div>

  <div class="card">
    <Editor v-model="value" editorStyle="height: 500px" />
  </div>
</template>
<script setup>
import { ref } from 'vue'

const value = ref('')
</script>

<style lang="scss" scoped></style>
