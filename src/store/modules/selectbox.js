export default {
  state: {
    shippingText: 'Delivery within 5 days',
    express: false
  },
  mutations: {
    changeShipping(state) {
      state.express = !state.express;
      if (state.express) {
        state.shippingText = 'Express selected, delivery within 3 days.';
      } else {
        state.shippingText = 'Delivery within 5 days';
      }
    }
  },
  actions: {
    changeThisShipping(context) {
      context.commit('changeShipping');
    }
  },
  getters: {
    getShippingText: state => {
      return state.shippingText;
    }
  }
};
