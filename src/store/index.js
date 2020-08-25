import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    toggle: true,
    buttonText: 'Click me boi',
    outputText: 'You pressed: '
  },
  mutations: {
    changeToggle(state) {
      state.toggle = false;
    },
    handleKey(state, keyEvent) {
      const charCode = keyEvent.keyCode;
      if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        state.outputText = 'You pressed: ' + keyEvent.key;
      } else if (
        charCode > 31 &&
        (charCode < 65 || charCode > 90) &&
        (charCode < 97 || charCode > 122)
      ) {
        state.outputText = 'You pressed: ' + keyEvent.key;
      } else {
        state.outputText = '';
      }
    }
  },
  actions: {
    changeThisToggle(context) {
      context.commit('changeToggle');
    },
    handleThisKey(context, keyEvent) {
      context.commit('handleKey', keyEvent);
    }
  },
  getters: {
    getToggle: state => {
      return state.toggle;
    },
    getButtonText: state => {
      return state.buttonText;
    },
    getOutputText: state => {
      return state.outputText;
    }
  },
  modules: {}
});
