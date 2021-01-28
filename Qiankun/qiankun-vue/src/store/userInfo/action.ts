import { Commit } from 'vuex'

export const userLogin = async (
  context: { commit: Commit },
  userInfo: object
) => {
  context.commit('SET_USER_INFO', userInfo)
}
