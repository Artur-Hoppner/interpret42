import { shallowMount, mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import store from '@/store/index.js';

import SelectBox from '@/components/SelectBox/SelectBox.vue';

//create a local instance of our vue
const localVue = createLocalVue();
//make our instance use vuex
localVue.use(Vuex);

describe('User clicks checkbox', () => {
  const wrapper = shallowMount(SelectBox, {
    store,
    localVue
  });
  test('Check so that text renders correctly', async () => {
    const text = wrapper.find('h2');

    expect(text.text()).toContain('Delivery within 5 days');
  });

  test('Text changes when user clicks checkbox via change trigger', async () => {
    //TODO: add testing code here
    const box = wrapper.find('input');
    const text = wrapper.find('h2');

    await box.setChecked(true);
    await wrapper.vm.$nextTick();

    expect(text.text()).not.toContain('Delivery within 5 days');
  });
});
