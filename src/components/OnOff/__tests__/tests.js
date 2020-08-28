import { shallowMount, mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
// import store from '@/store/index.js';

import OnOff from '@/components/OnOff/OnOff.vue';

//create a local instance of our vue
const localVue = createLocalVue();
//make our instance use vuex
localVue.use(Vuex);

describe('User clicks button', () => {
  let actions, state, getters, store;

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

  test('Button should show when rendered', async () => {
    //mount the component with our store and the local vue instance
    const wrapper = shallowMount(OnOff, {
      store,
      localVue
    });
    const button = wrapper.find('button');
    //check if button is visible
    expect(button.element.style.display).toContain('');
  });

  test('Button goes invisible when clicked', async () => {
    //mount the component with our store and the local vue instance
    const wrapper = shallowMount(OnOff, {
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
    //check if the button is invisible
    expect(wrapper.find('button').element.style.display).toContain('none');
  });
});

/* ÖVNING 1a
1a Skapa en komponent med ett button-element och ett annat synligt element. Button ska ha texten: "Visa/dölj alternativ". När man klickar på knappen ska elementet växla mellan att vara synligt och osynligt. Tips: v-show.
*/
