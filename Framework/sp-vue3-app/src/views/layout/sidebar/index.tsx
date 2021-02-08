import { defineComponent, getCurrentInstance } from 'vue';
import { createUseStyles } from 'vue-jss';
import NavList from './components/NavList';

const useStyles = createUseStyles({
  sideBar: {
    display: 'flex',
    flexDirection: 'column',
    borderRight: '1px solid #e6e6e6',
    '& > a': {
      padding: '0 20px',
      height: '56px',
      lineHeight: '56px',
      '&:hover': {
        backgroundColor: '#edf1fe'
      },
      '&.router-link-exact-active': {
        color: '#4974f5'
      }
    }
  }
});

const Home = defineComponent({
  setup() {
    const { ctx }: any = getCurrentInstance();
    const router: [] = ctx.$router.options.routes[0].children;
    const classes = useStyles().value;
    return () => (
      <el-aside width="200px" class={classes.sideBar}>
        <NavList listData={router} />
      </el-aside>
    );
  }
});
export default Home;
