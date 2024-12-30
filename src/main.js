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
import Tooltip from 'primevue/tooltip'
import Ripple from 'primevue/ripple'

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
import DatePicker from 'primevue/datepicker'
import RadioButton from 'primevue/radiobutton'
import { RadioButtonGroup } from 'primevue'
import Message from 'primevue/message'
import InputNumber from 'primevue/inputnumber'
import FileUpload from 'primevue/fileupload'
import Textarea from 'primevue/textarea'
import Card from 'primevue/card'
import Toast from 'primevue/toast'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import ColumnGroup from 'primevue/columngroup'
import Row from 'primevue/row'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'
import Dialog from 'primevue/dialog'
import Knob from 'primevue/knob'
import Image from 'primevue/image'

//  * componente principal para la aplicacion
import App from './App.vue'
import router from './router'
import ToastService from 'primevue/toastservice'
import { FormField } from '@primevue/forms'

const app = createApp(App)
// *define un estilo personalizado

const colorPalete = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{teal.50}',
      100: '{teal.100}',
      200: '{teal.200}',
      300: '{teal.300}',
      400: '{teal.400}',
      500: '{teal.500}',
      600: '{teal.600}',
      700: '{teal.700}',
      800: '{teal.800}',
      900: '{teal.900}',
      950: '{teal.950}'
    },
    colorScheme: {
      light: {
        primary: {
          color: '{teal.950}',
          inverseColor: '#ffffff',
          hoverColor: '{teal.900}',
          activeColor: '{teal.800}'
        },
        surface: {
          0: '#ffffff',
          50: '{teal.50}',
          100: '{teal.100}',
          200: '{teal.200}',
          300: '{teal.300}',
          400: '{teal.400}',
          500: '{teal.500}',
          600: '{teal.600}',
          700: '{teal.700}',
          800: '{teal.800}',
          900: '{teal.900}',
          950: '{teal.950}'
        },
        highlight: {
          background: '{teal.950}',
          focusBackground: '{teal.700}',
          color: '#ffffff',
          focusColor: '#ffffff'
        }
      },
      dark: {
        primary: {
          color: '{slate.50}',
          inverseColor: '{slate.950}',
          hoverColor: '{slate.100}',
          activeColor: '{slate.200}'
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
    preset: colorPalete,
    options: {
      darkModeSelector: 'system',
      cssLayer: {
        name: 'primevue',
        order: 'tailwind-base, primevue, tailwind-utilities'
      }
    }
  },
  locale: {
    dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
    dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
    dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'],
    monthNames: [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre'
    ],
    monthNamesShort: [
      'Ene',
      'Feb',
      'Mar',
      'Abr',
      'May',
      'Jun',
      'Jul',
      'Ago',
      'Sep',
      'Oct',
      'Nov',
      'Dic'
    ]
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
app.component('DatePicker', DatePicker)
app.component('RadioButton', RadioButton)
app.component('RadioButtonGroup', RadioButtonGroup)
app.component('Message', Message)
app.component('InputNumber', InputNumber)
app.component('FileUpload', FileUpload)
app.component('Textarea', Textarea)
app.component('Card', Card)
app.component('Toast', Toast)
app.component('DataTable', DataTable)
app.component('Column', Column)
app.component('ColumnGroup', ColumnGroup)
app.component('Row', Row)
app.component('InputIcon', InputIcon)
app.component('IconField', IconField)
app.component('Dialog', Dialog)
app.component('FormField', FormField)
app.component('Knob', Knob)
app.component('Image', Image)

app.component('Form', Form)

app.use(createPinia())
app.directive('tooltip', Tooltip)
app.directive('ripple', Ripple)
app.use(router)

app.use(ToastService)

app.mount('#app')
