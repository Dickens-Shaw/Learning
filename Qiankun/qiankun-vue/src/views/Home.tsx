import { defineComponent } from 'vue'
import HelloWorld from '@/components/HelloWorld'

const Home = defineComponent({
  setup() {
    const msg = '主页内容'
    return () => <HelloWorld msg={msg} />
  }
})

export default Home
