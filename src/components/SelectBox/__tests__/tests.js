import { shallowMount, mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import store from '@/store/index.js';

import SelectBox from '@/components/SelectBox/SelectBox.vue';

//create a local instance of our vue
const localVue = createLocalVue();
//make our instance use vuex
localVue.use(Vuex);

describe('User clicks checkbox', () => {
  test('Check so that text renders correctly', async () => {
    const wrapper = shallowMount(SelectBox, {
      store,
      localVue
    });
    const text = wrapper.find('h2');

    expect(text.text()).toContain('Delivery within 5 days');
  });

  test('Text changes when user clicks checkbox via change trigger', async () => {
    const wrapper = shallowMount(SelectBox, {
      store,
      localVue
    });

    const box = wrapper.find('input');
    const text = wrapper.find('h2');

    await box.setChecked(true);
    await wrapper.vm.$nextTick();

    expect(text.text()).not.toContain('Delivery within 5 days');
  });
});

/* ÖVNING 3
3 Skapa en komponent med en kryssruta. Komponenten ska initialt visa 
texten "Leverans om 5 dagar". När man kryssar i rutan ska texten ändras 
till "Valde express, leverans om 3 dagar". Använd en change event i 
stället för click event.
*/
