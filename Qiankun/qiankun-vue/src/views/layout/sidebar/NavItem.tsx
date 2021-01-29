import { defineComponent, PropType, computed } from 'vue';

type NavProp = {
  path: string;
  name?: string;
  redirect?: string;
  children?: NavProp[];
  meta?:
    | {
        title?: string;
      }
    | any;
};

const NavItem = defineComponent({
  props: {
    itemData: {
      type: Object as PropType<NavProp> | any,
      default: () => ({})
    }
  },
  setup(props) {
    const { path, meta, children, redirect } = computed(
      () => props.itemData
    ).value;

    if (children) {
      return () => (
        <el-submenu
          index={path}
          v-slots={{
            title: () => <span>{meta.title}</span>
          }}
        >
          {children.map((child: NavProp) => (
            <el-menu-item index={child.path} data-path={child.path}>
              {child.meta.title}
            </el-menu-item>
          ))}
        </el-submenu>
      );
    } else if (!redirect && !path.includes('/:')) {
      return () => <el-menu-item index={path}>{meta.title}</el-menu-item>;
    } else {
      return () => '';
    }
  }
});

export default NavItem;
