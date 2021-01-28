const mutations = {
  SET_USER_INFO(state: any, params: { key: string; value: string }) {
    const { key, value } = params
    state[key] = value
  }
}

export default mutations
