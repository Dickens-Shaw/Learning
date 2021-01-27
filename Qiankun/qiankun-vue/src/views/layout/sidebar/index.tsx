import { defineComponent } from 'vue'
import { createUseStyles } from 'vue-jss'

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
})

const Home = defineComponent({
  setup() {
    const classes = useStyles().value
    return () => (
      <el-aside width="200px" class={classes.sideBar}>
        <router-link to="/home">主页</router-link>
        <router-link to="/list">列表</router-link>
        <router-link to="/detail">详情</router-link>
      </el-aside>
    )
  }
})

export default Home
