import { defineComponent, watch, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';

const Child = defineComponent({
  setup() {
    let title = '';
    const route = useRoute();
    function routerChange(): void {
      title = route.meta.title;
    }
    onBeforeMount(() => {
      routerChange();
    });
    watch(
      () => route.path,
      () => {
        routerChange();
      }
    );
    return () => <>监听路由改变(watch&useRoute): {title}</>;
  }
});

export default Child;
