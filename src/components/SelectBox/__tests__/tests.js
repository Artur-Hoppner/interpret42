import { shallowMount, mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import store from '@/store/index.js';

import SelectBox from '@/components/SelectBox/SelectBox.vue';

//create a local instance of our vue
const localVue = createLocalVue();
//make our instance use vuex
localVue.use(Vuex);

describe('User clicks checkbox', () => {
  test('Text changes when user clicks checkbox via change trigger', () => {
    //TODO: add testing code here
    expect(true).toBe(true);
  });
});
