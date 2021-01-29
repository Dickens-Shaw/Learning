import { defineComponent, PropType, getCurrentInstance } from 'vue';
import { ElMessage } from 'element-plus';

const HelloWorld = defineComponent({
  props: {
    path: String as PropType<string>
  },
  setup(props) {
    const { ctx }: any = getCurrentInstance();
    const handleShow = (): void => {
      ElMessage.success('1s后跳转' + props.path);
      console.log(ctx);
      setTimeout(() => {
        ctx.$router.push({
          path: props.path
        });
      }, 1000);
    };
    return () => (
      <div class="hello">
        <el-button type="primary" onClick={handleShow}>
          点击跳转
        </el-button>
      </div>
    );
  }
});

export default HelloWorld;
