import { defineComponent } from 'vue';

const Children = defineComponent({
  setup() {
    return () => <router-view />;
  }
});

export default Children;
