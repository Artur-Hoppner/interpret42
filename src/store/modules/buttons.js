export default {
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
  }
};
