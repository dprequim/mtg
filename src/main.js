import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import WaveUI from 'wave-ui'
import 'wave-ui/dist/wave-ui.css'

import '@/assets/base.css'
import '@/assets/fancy-button1.css'
import '@/assets/style.css'

import '@/assets/fonts/jost/stylesheet.css'
import '@/assets/fonts/aBlackLives/stylesheet.css'
const app = createApp(App)

new WaveUI(app, {
  // Some Wave UI options.
})

app.use(createPinia())
app.use(router)
app.mount('#app')
