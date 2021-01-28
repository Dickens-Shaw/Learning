import state from './state'
import mutations from './mutation'
import * as actions from './action'
import * as getters from './getter'

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
