import { shallowMount, mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';

import RemoveButton from '@/components/RemoveButton/RemoveButton.vue';

//create a local instance of our vue
const localVue = createLocalVue();
//make our instance use vuex
localVue.use(Vuex);

describe('User clicks button', () => {
  let state, getters, actions, store;

  //beforeEach with our mock store not to pollute between tests
  beforeEach(() => {
    //create replica of actual store
    actions = {
      //add spy to changeThisToggle
      changeThisToggle: jest.fn()
    };
    state = {
      toggle: true,
      buttonText: 'Click me boi'
    };
    getters = {
      getToggle: state => {
        return state.toggle;
      },
      getButtonText: state => {
        return state.buttonText;
      }
    };
    store = new Vuex.Store({ state, actions, getters });
  });

  test('Check so button exists on rendering', async () => {
    //mount the component with our store and the local vue instance
    const wrapper = shallowMount(RemoveButton, {
      store,
      localVue
    });
    // //mount the component with our store and the local vue instance
    const button = wrapper.find('button');
    //check if button is visible
    expect(button.exists()).toBe(true);
  });

  test('Button gets destroyed when clicked', async () => {
    //mount the component with our store and the local vue instance
    const wrapper = shallowMount(RemoveButton, {
      store,
      localVue
    });
    //Arrange
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
    //check if the button is destroyed
    expect(wrapper.find('button').exists()).toBe(false);
  });
});
