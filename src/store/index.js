import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    toggle: true,
    buttonText: 'Click me boi'
  },
  mutations: {
    changeToggle(state) {
      state.toggle = false;
    }
  },
  actions: {
    changeThisToggle(context) {
      context.commit('changeToggle');
    }
  },
  getters: {
    getToggle: state => {
      return state.toggle;
    },
    getButtonText: state => {
      return state.buttonText;
    }
  },
  modules: {}
});
