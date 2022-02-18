import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import WaveUI from 'wave-ui'
import VueSplide from '@splidejs/vue-splide'
import 'wave-ui/dist/wave-ui.css'

import '@splidejs/splide/dist/css/splide.min.css'
import '@/assets/base.css'
import '@/assets/fancy-button1.css'
import '@/assets/style.css'
const app = createApp(App)

new WaveUI(app, {
  // Some Wave UI options.
})

app.use(createPinia())
app.use(router)
app.use( VueSplide )
app.mount('#app')
