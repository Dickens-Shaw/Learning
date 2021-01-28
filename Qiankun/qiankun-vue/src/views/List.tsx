import { defineComponent } from 'vue'

const List = defineComponent({
  setup() {
    return () => (
      <div>
        <el-tag type="success">列表</el-tag>
      </div>
    )
  }
})

export default List
