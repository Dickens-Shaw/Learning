import { defineComponent } from 'vue'
import { ElMessage } from 'element-plus'

const HelloWorld = defineComponent({
  props: {
    msg: String
  },
  setup() {
    const handleShow = () => {
      ElMessage.success('OK')
    }
    return () => (
      <div class="hello">
        <el-button type="primary" onClick={handleShow}>
          HelloWorld
        </el-button>
      </div>
    )
  }
})

export default HelloWorld
