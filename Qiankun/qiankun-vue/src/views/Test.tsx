import { defineComponent, ref, Ref, reactive } from 'vue'
import { useStore } from 'vuex'

const Test = defineComponent({
  setup() {
    const store = useStore()
    const States = store.state
    console.log('-------------', store)

    const state: Ref<string> = ref('userName')
    const data = reactive({
      value: 'Shaw'
    })

    const handleSet = () => {
      console.log(state.value)
      store.commit('userInfo/SET_USER_INFO', {
        key: state.value,
        value: data.value
      })
    }

    return () => (
      <div>
        <p>{state.value}</p>
        <p>{data.value}</p>
        {Object.keys(States).map(key => {
          const value = States[key]
          return (
            <p>
              {key}: {typeof value === 'string' ? value : JSON.stringify(value)}
            </p>
          )
        })}
        Key: <el-input placeholder="请输入Key" v-model={state.value} />
        Value: <el-input placeholder="请输入Value" v-model={data.value} />
        <el-button icon="el-icon-search" onClick={handleSet} />
      </div>
    )
  }
})

export default Test
