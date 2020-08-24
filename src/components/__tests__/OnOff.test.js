import { shallowMount, mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';

import OnOff from '@/components/OnOff.vue';

//create a local instance of our vue
const localVue = createLocalVue();
//make our instance use vuex
localVue.use(Vuex);

describe('User clicks button', () => {
  let actions;
  let store;

  beforeEach(() => {
    //mock function
    actions = {
      changeThisToggle: jest.fn()
    };
    //mock our store
    store = new Vuex.Store({
      state: {
        toggle: true
      },
      actions
    });
  });

  test('Button goes invisible when clicked', async () => {
    //Arrange
    const wrapper = shallowMount(OnOff, { store, localVue });
    const button = wrapper.find('button');

    //Act
    await button.trigger('click');

    //Assert
    expect(actions.changeThisToggle).toHaveBeenCalled();
  });
});
