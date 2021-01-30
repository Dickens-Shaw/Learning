import { createStore } from 'vuex';
import userInfo from './userInfo';

export default createStore({
  state: {
    time: new Date(),
    userAgent: navigator.userAgent
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    userInfo
  }
});
