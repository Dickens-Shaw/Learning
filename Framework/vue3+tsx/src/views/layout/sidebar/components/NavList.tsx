import { defineComponent } from 'vue';
import NavItem from './NavItem';

const NavList = defineComponent({
  props: {
    listData: {
      type: Array,
      default: () => []
    }
  },
  setup(props) {
    return () => (
      <el-menu router>
        {props.listData.map(item => (
          <NavItem itemData={item} />
        ))}
      </el-menu>
    );
  }
});

export default NavList;
