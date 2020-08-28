import { shallowMount, mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import store from '@/store/index';

import TextField from '@/components/TextField/TextField.vue';

//create a local instance of our vue
const localVue = createLocalVue();
//make our instance use vuex
localVue.use(Vuex);

describe('User types into the textfield', () => {
  test('check so text is empty on rendering', async () => {
    const wrapper = shallowMount(TextField, {
      store,
      localVue
    });

    const limitText = wrapper.find('p');

    expect(limitText.text()).toContain('');
  });

  test('input a string into textfield and check so text displays character left until limit(40)', async () => {
    const wrapper = shallowMount(TextField, {
      store,
      localVue
    });

    const input = wrapper.find('textarea');
    const limitText = wrapper.find('p');

    await input.setValue('some value');
    await input.trigger('change');

    expect(limitText.text().length).toBeGreaterThan(0);
  });

  test('check so that text is responsive when input is over limit', async () => {
    const wrapper = shallowMount(TextField, {
      store,
      localVue
    });

    const input = wrapper.find('textarea');
    const limitText = wrapper.find('p');

    await input.setValue(
      '1234567891012345678910123456789101234567891012345678910'
    );
    await input.trigger('change');

    expect(limitText.text()).toContain('You are over the character limit');
    expect(input.element.value.length).toBe(40);
  });

  test('check so that specific action is triggered on change', async () => {
    //create mock state with spy on action
    const state = {
      limitText: '',
      inputText: ''
    };
    const actions = {
      checkThisLimitText: jest.fn()
    };
    const getters = {
      getLimitText: state => {
        return state.limitText;
      }
    };
    const store = new Vuex.Store({ state, actions, getters });
    const wrapper = shallowMount(TextField, {
      store,
      localVue,
      computed: {
        inputText: {
          get() {
            return store.state.inputText;
          },
          set(value) {
            store.dispatch('checkThisLimitText', value);
          }
        }
      }
    });
    const input = wrapper.find('textarea');

    await input.setValue('ost');
    await wrapper.vm.$nextTick();

    expect(actions.checkThisLimitText).toHaveBeenCalled();
  });
});

/* ÖVNING 4
4a Skapa en komponent med ett textfält. Textfältet har en begränsning på 40 tecken. 
När användaren skriver i fältet, eller klistrar in text, ska komponenten visa ett 
meddelande med hur många tecken man har kvar. (Komponenten behöver inte göra något 
om man överskrider gränsen.) Tips: använd await wrapper.setValue(x) för att testa 
att användaren ändrar värdet.

4b* Om användaren försöker skriva fler än 40 tecken, ska bara de första 40 behållas.
*/
