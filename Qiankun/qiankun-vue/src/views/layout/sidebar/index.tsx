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
    const menuList = [
      { url: '/home', text: '主页' },
      { url: '/list', text: '列表' },
      { url: '/detail', text: '详情' },
      { url: '/test', text: '测试' }
    ]
    const classes = useStyles().value
    return () => (
      <el-aside width="200px" class={classes.sideBar}>
        {menuList.map(item => (
          <router-link to={item.url}>{item.text}</router-link>
        ))}
      </el-aside>
    )
  }
})

export default Home
