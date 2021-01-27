import { defineComponent, PropType } from 'vue'
import { createUseStyles } from 'vue-jss'

const useStyles = createUseStyles({
  header: {
    lineHeight: '60px',
    border: '1px solid gray'
  }
})

const Header = defineComponent({
  props: {
    title: String as PropType<string>
  },
  setup(props) {
    const classes = useStyles().value
    return () => <el-header class={classes.header}>{props.title}</el-header>
  }
})

export default Header
