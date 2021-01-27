import { defineComponent } from 'vue'
import Header from './header/index'
import Sidebar from './sidebar/index'
import '@/assets/scss/app.scss'

export default defineComponent({
  components: {
    Header
  },
  setup() {
    return () => (
      <el-container class="main-container is-vertical">
        <Header title={'后台管理'} />
        <el-container class="block-border">
          <Sidebar />
          <el-main class="block-border">
            <router-view />
          </el-main>
        </el-container>
      </el-container>
    )
  }
})
