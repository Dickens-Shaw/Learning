import { defineComponent,PropType } from 'vue';

const Layout = defineComponent({
  props: {
    title: String as PropType<string>
  },
  setup(props) {
    return () => <div>布局{props.title}</div>;
  }
});
export default Layout;

