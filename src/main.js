import './assets/tailwind.css'
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// * libreria de componentes de prime
import PrimeVue from 'primevue/config'
import { Form } from '@primevue/forms'
import Aura from '@primevue/themes/aura'
import 'primeicons/primeicons.css'
import { definePreset } from '@primevue/themes'

// * componentes de prime vue
import ColorPicker from 'primevue/colorpicker'
import Button from 'primevue/button'
import Toolbar from 'primevue/toolbar'
import ToggleButton from 'primevue/togglebutton'
import Drawer from 'primevue/drawer'
import Avatar from 'primevue/avatar'
import Editor from 'primevue/editor'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import Stepper from 'primevue/stepper'
import StepList from 'primevue/steplist'
import StepPanels from 'primevue/steppanels'
import StepItem from 'primevue/stepitem'
import Step from 'primevue/step'
import StepPanel from 'primevue/steppanel'
import Divider from 'primevue/divider'
import Panel from 'primevue/panel'
import FloatLabel from 'primevue/floatlabel'
import InputMask from 'primevue/inputmask'
import Fieldset from 'primevue/fieldset'
import SelectButton from 'primevue/selectbutton'
import InputGroup from 'primevue/inputgroup'
import InputGroupAddon from 'primevue/inputgroupaddon'
import Select from 'primevue/select'

//  * componente principal para la aplicacion
import App from './App.vue'
import router from './router'
import ToastService from 'primevue/toastservice'

const app = createApp(App)
// *define un estilo personalizado

const Noir = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{zinc.50}',
      100: '{zinc.100}',
      200: '{zinc.200}',
      300: '{zinc.300}',
      400: '{zinc.400}',
      500: '{zinc.500}',
      600: '{zinc.600}',
      700: '{zinc.700}',
      800: '{zinc.800}',
      900: '{zinc.900}',
      950: '{zinc.950}'
    },
    colorScheme: {
      light: {
        primary: {
          color: '{zinc.950}',
          inverseColor: '#ffffff',
          hoverColor: '{zinc.900}',
          activeColor: '{zinc.800}'
        },
        surface: {
          0: '#ffffff',
          50: '{zinc.50}',
          100: '{zinc.100}',
          200: '{zinc.200}',
          300: '{zinc.300}',
          400: '{zinc.400}',
          500: '{zinc.500}',
          600: '{zinc.600}',
          700: '{zinc.700}',
          800: '{zinc.800}',
          900: '{zinc.900}',
          950: '{zinc.950}'
        },
        highlight: {
          background: '{zinc.950}',
          focusBackground: '{zinc.700}',
          color: '#ffffff',
          focusColor: '#ffffff'
        }
      },
      dark: {
        primary: {
          color: '{zinc.50}',
          inverseColor: '{zinc.950}',
          hoverColor: '{zinc.100}',
          activeColor: '{zinc.200}'
        },
        surface: {
          0: '#ffffff',
          50: '{slate.50}',
          100: '{slate.100}',
          200: '{slate.200}',
          300: '{slate.300}',
          400: '{slate.400}',
          500: '{slate.500}',
          600: '{slate.600}',
          700: '{slate.700}',
          800: '{slate.800}',
          900: '{slate.900}',
          950: '{slate.950}'
        },
        highlight: {
          background: 'rgba(250, 250, 250, .16)',
          focusBackground: 'rgba(250, 250, 250, .24)',
          color: 'rgba(255,255,255,.87)',
          focusColor: 'rgba(255,255,255,.87)'
        }
      }
    }
  }
})

// * para usar primevue y un tema predefinido
app.use(PrimeVue, {
  ripple: true,
  theme: {
    preset: Noir,
    options: {
      darkModeSelector: ':root.app-dark',
      cssLayer: {
        name: 'primevue',
        order: 'tailwind-base, primevue, tailwind-utilities'
      }
    }
  }
})

// * Para usar los componentes dentro de Vue
app.component('Button', Button)
app.component('ColorPicker', ColorPicker)
app.component('Toolbar', Toolbar)
app.component('ToggleButton', ToggleButton)
app.component('Drawer', Drawer)
app.component('Avatar', Avatar)
app.component('Editor', Editor)
app.component('InputText', InputText)
app.component('Password', Password)
app.component('Stepper', Stepper)
app.component('StepList', StepList)
app.component('StepPanels', StepPanels)
app.component('Step', Step)
app.component('StepItem', StepItem)
app.component('StepPanel', StepPanel)
app.component('Divider', Divider)
app.component('Panel', Panel)
app.component('FloatLabel', FloatLabel)
app.component('InputMask', InputMask)
app.component('Fieldset', Fieldset)
app.component('SelectButton', SelectButton)
app.component('InputGroupAddon', InputGroupAddon)
app.component('InputGroup', InputGroup)
app.component('Select', Select)

app.use(createPinia())
app.use(router)
app.use(ToastService)

app.mount('#app')
