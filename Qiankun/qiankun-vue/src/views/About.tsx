import { defineComponent } from 'vue'

const About = defineComponent({
  setup() {
    return () => (
      <div>
        <el-tag type="success">About me</el-tag>
      </div>
    )
  }
})

export default About
