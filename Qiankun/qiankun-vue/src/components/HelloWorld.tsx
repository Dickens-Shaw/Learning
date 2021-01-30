import { defineComponent, PropType, getCurrentInstance } from 'vue';
import { ElMessage } from 'element-plus';

const HelloWorld = defineComponent({
  props: {
    path: String as PropType<string>
  },
  setup(props) {
    const { ctx }: any = getCurrentInstance();
    const handleShow = (): void => {
      ElMessage.success('跳转' + props.path);
      setTimeout(() => {
        ctx.$router.push({
          path: props.path
        });
      }, 1000);
    };
    return () => (
      <div class="hello">
        <p>
          ELEMENT_PLUS:
          <el-button type="primary" onClick={handleShow}>
            点击跳转
          </el-button>
        </p>
        <br />
        <p>
          ANTD_VUE:
          <a-button type="primary" onClick={handleShow}>
            点击跳转
          </a-button>
        </p>
      </div>
    );
  }
});

export default HelloWorld;
