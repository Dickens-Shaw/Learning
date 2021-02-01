import { defineComponent } from 'vue';
import { useStore } from 'vuex';
import HelloWorld from '@/components/HelloWorld';

const Home = defineComponent({
  setup() {
    const store = useStore();
    const States = store.state;
    const path = '/list';
    return () => (
      <>
        <p>Vuex(useStore)：</p>
        {Object.keys(States).map(key => {
          const value = States[key];
          return (
            <p>
              {key}: {typeof value === 'string' ? value : JSON.stringify(value)}
            </p>
          );
        })}
        <br />
        <p>Router(getCurrentInstance)：</p>
        <HelloWorld path={path} />
      </>
    );
  }
});

export default Home;
