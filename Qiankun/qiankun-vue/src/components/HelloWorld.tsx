import { defineComponent, PropType } from 'vue'
import { ElMessage } from 'element-plus'

const HelloWorld = defineComponent({
  props: {
    msg: String as PropType<string>
  },
  setup(props) {
    const handleShow = (): void => {
      ElMessage.success(props.msg)
    }
    return () => (
      <div class="hello">
        <el-button type="primary" onClick={handleShow}>
          主页
        </el-button>
      </div>
    )
  }
})

export default HelloWorld
