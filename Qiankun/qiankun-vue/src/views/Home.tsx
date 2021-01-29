import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld';

const Home = defineComponent({
  setup() {
    const path = '/list';
    return () => <HelloWorld path={path} />;
  }
});

export default Home;
