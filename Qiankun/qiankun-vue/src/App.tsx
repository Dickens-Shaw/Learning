
import { defineComponent } from 'vue'
import '@/assets/scss/app.scss'

const App = defineComponent({
  setup() {
    return () => (
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/todo">Todo</router-link>
        <router-view />
      </div>
    )
  }
})

export default App
