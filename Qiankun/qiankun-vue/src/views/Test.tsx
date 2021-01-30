import { defineComponent, ref, Ref, reactive, watchEffect } from 'vue';
import { useStore } from 'vuex';

const Test = defineComponent({
  setup() {
    const store = useStore();

    const state: Ref<string> = ref('');
    watchEffect(() => console.log('监听ref---', state.value));

    const data = reactive({
      value: ''
    });
    watchEffect(() => console.log('监听reactive---', data.value));

    const handleSet = (key: string) => {
      store.commit('userInfo/SET_USER_INFO', {
        key,
        value: key.includes('Name') ? state.value : data.value
      });
    };

    return () => (
      <div>
        <p>修改Vuex-userInfo：</p>
        <br />
        <p>Key(ref): {state.value}</p>
        <el-input placeholder="请输入Key" v-model={state.value} />
        <el-button
          icon="el-icon-setting"
          onClick={() => handleSet('userName')}
        />
        <p>Value(reactive): {data.value}</p>
        <el-input placeholder="请输入Value" v-model={data.value} />
        <el-button icon="el-icon-setting" onClick={() => handleSet('userId')} />
      </div>
    );
  }
});

export default Test;
