import { defineComponent } from 'vue'
import HelloWorld from '@/components/HelloWorld'

const Home = defineComponent({
  setup() {
    const msg = 'Welcome to Your Vue.js + TypeScript App'
    return () => <HelloWorld msg={msg} />
  }
})

export default Home
