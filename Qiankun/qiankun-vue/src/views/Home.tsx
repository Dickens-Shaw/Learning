import { defineComponent } from 'vue'
import HelloWorld from '@/components/HelloWorld'

const Home = defineComponent({
  setup() {
    const msg = 'HelloWorld'
    return () => <HelloWorld msg={msg} />
  }
})

export default Home
