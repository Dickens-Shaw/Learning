import { defineComponent } from 'vue'

const List = defineComponent({
  setup() {
    return () => (
      <div>
        <el-tag type="success">标签</el-tag>
      </div>
    )
  }
})

export default List
