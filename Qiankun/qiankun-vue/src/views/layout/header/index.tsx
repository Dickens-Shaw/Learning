import { defineComponent, PropType } from 'vue';
import { createUseStyles } from 'vue-jss';
import { useStore } from 'vuex';

const useStyles = createUseStyles({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
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
    const store = useStore();
    const States = store.state;
    return () => (
      <el-header class={classes.header}>
        <h1>{props.title}</h1>
        <p>{States.userInfo.userName + '/' + States.userInfo.userId}</p>
      </el-header>
    );
  }
});

export default Header;
