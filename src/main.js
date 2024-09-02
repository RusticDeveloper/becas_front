import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// * libreria de componentes de prime
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

import App from './App.vue'

const app = createApp(App)

app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
})

app.use(createPinia())

app.mount('#app')
