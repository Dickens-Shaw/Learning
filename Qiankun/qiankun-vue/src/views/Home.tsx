import { defineComponent } from 'vue'
import HelloWorld from '@/components/HelloWorld'

const Home = defineComponent({
  setup() {
    return () => <HelloWorld msg={'Welcome to Your Vue.js + TypeScript App'} />
  }
})

export default Home
