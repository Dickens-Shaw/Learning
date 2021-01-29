import { defineComponent, PropType } from 'vue';
import { createUseStyles } from 'vue-jss';

const useStyles = createUseStyles({
  header: {
    color: '#e5e5e5',
    lineHeight: '60px',
    backgroundColor: '#23252d'
  }
});

const Header = defineComponent({
  props: {
    title: String as PropType<string>
  },
  setup(props) {
    const classes = useStyles().value;
    return () => <el-header class={classes.header}>{props.title}</el-header>;
  }
});

export default Header;
