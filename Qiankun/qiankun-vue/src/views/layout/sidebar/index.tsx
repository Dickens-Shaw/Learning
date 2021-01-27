import { defineComponent } from 'vue'
import { createUseStyles } from 'vue-jss'

const useStyles = createUseStyles({
  sideBar: {
    display: 'flex',
    flexDirection: 'column',
    '& > a': {
      padding: '0 20px',
      height: '56px',
      lineHeight: '56px',
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
        <router-link to="/home">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/todo">Todo</router-link>
      </el-aside>
    )
  }
})

export default Home
