export default {
  state: {
    limitText: '',
    inputText: ''
  },
  mutations: {
    checkLimitText(state, string) {
      console.log(state.inputText.length);
      state.inputText = string;
      if (state.inputText.length > 40) {
        state.limitText = 'You are over the character limit';
        state.inputText = state.inputText.slice(0, 40);
      } else if (state.inputText.length < 40) {
        let remaining = 40 - string.length;
        state.limitText = 'You have ' + remaining + ' characters left.';
      }
    }
  },
  actions: {
    checkThisLimitText(context, value) {
      context.commit('checkLimitText', value);
    }
  },
  getters: {
    getLimitText: state => {
      return state.limitText;
    }
  }
};
