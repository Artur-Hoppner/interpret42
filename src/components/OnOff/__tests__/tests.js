import { shallowMount, mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
// import store from '@/store/index.js';

import OnOff from '@/components/OnOff/OnOff.vue';

//create a local instance of our vue
const localVue = createLocalVue();
//make our instance use vuex
localVue.use(Vuex);

//create replica of actual store
const actions = {
  //add spy to changeThisToggle
  changeThisToggle: jest.fn()
};
const state = {
  toggle: true,
  buttonText: 'Click me boi'
};
const getters = {
  getToggle: state => {
    return state.toggle;
  },
  getButtonText: state => {
    return state.buttonText;
  }
};
const store = new Vuex.Store({ state, actions, getters });

describe('User clicks button', () => {
  test('Button should show when rendered', async () => {
    const wrapper = shallowMount(OnOff, {
      store,
      localVue
    });

    const button = wrapper.find('button');
    //check if button is visible
    expect(button.element.style.display).toContain('');
  });

  test('Button goes invisible when clicked', async () => {
    //Arrange
    //mount the component with our store and the local vue instance
    const wrapper = shallowMount(OnOff, {
      store,
      localVue
    });
    const button = wrapper.find('button');

    //Act
    await button.trigger('click');

    //Assert
    //check if action has been called on click
    expect(actions.changeThisToggle).toHaveBeenCalled();
    //manually change the data that is changed in the action
    store.state.toggle = false;
    //update vue
    await wrapper.vm.$nextTick();
    //check if the button is invisible
    expect(wrapper.find('button').element.style.display).toContain('none');
  });
});
