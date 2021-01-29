import { createStore } from 'vuex';
import userInfo from './userInfo';

export default createStore({
  state: {
    client: 'PC',
    browser: 'Chorme'
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    userInfo
  }
});
