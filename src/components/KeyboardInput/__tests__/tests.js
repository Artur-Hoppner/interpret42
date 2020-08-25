import { shallowMount, mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import store from '@/store/index';

import KeyboardInput from '@/components/KeyboardInput/KeyboardInput.vue';

//create a local instance of our vue
const localVue = createLocalVue();
//make our instance use vuex
localVue.use(Vuex);

describe('User clicks input and enters a key', () => {
  const wrapper = shallowMount(KeyboardInput, {
    store,
    localVue
  });

  test('check so that output only displays letters & numbers', async () => {
    //Arrange
    const input = wrapper.find('input');
    const output = wrapper.find('p');
    const test = ['1', 'k', 'ö', 's'];
    const keyCodes = ['49', '75', '186', '83'];

    expect(input.exists()).toBe(true);
    expect(output.exists()).toBe(true);

    for (let i = 0; i < test.length; i++) {
      await input.trigger('keydown', {
        key: test[i],
        keyCode: keyCodes[i]
      });
      expect(output.text()).toContain('You pressed: ' + test[i]);
    }
    expect(output.text().length).toBeGreaterThan(0);
  });

  test('check so input key Shift doesnt work', async () => {
    //Arrange
    const input = wrapper.find('input');
    const output = wrapper.find('p');

    await input.trigger('keydown', {
      key: test,
      keyCode: '16'
    });

    expect(output.text().length).toBe(0);
  });

  test('check so that action is called correctly on keyup', async () => {
    //Arrange
    //create mock state with spy on action
    const state = {
      outputText: 'You pressed key: '
    };
    const actions = {
      handleThisKey: jest.fn()
    };
    const getters = {
      getOutputText: state => {
        return state.outputText;
      }
    };
    const store = new Vuex.Store({ state, actions, getters });
    //mount component with our mocked state
    const wrapper = shallowMount(KeyboardInput, {
      store,
      localVue
    });

    const input = wrapper.find('input');

    await input.trigger('keydown', {
      key: 'k'
    });

    expect(actions.handleThisKey).toHaveBeenCalled();
  });
});
