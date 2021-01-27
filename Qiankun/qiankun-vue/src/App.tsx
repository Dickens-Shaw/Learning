import { defineComponent } from 'vue'
import '@/assets/scss/app.scss'

const App = defineComponent({
  setup() {
    return () => <router-view />
  }
})

export default App
