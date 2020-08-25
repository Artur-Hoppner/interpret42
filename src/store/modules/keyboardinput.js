export default {
  state: {
    outputText: 'You pressed: '
  },
  mutations: {
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
    handleThisKey(context, keyEvent) {
      context.commit('handleKey', keyEvent);
    }
  },
  getters: {
    getOutputText: state => {
      return state.outputText;
    }
  }
};
