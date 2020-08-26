import Vue from 'vue';
import Vuex from 'vuex';
import selectbox from './modules/selectbox';
import keyboardinput from './modules/keyboardinput';
import buttons from './modules/buttons';
import textfield from './modules/textfield';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    selectbox,
    keyboardinput,
    buttons,
    textfield
  }
  // strict: process.env.NODE_ENV !== 'production'
});
