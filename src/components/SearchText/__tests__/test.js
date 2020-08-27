import { shallowMount, mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import store from '@/store/index';
import SearchText from '@/components/SearchText/SearchText.vue';

//create a local instance of our vue
const localVue = createLocalVue();
//make our instance use vuex
localVue.use(Vuex);

describe('User types in a searchword', () => {
  test('check so everything renders correctly', async () => {
    const wrapper = shallowMount(SearchText, { store, localVue });
    expect(wrapper.element).toMatchSnapshot();
  });

  test('check so that an empty string searchword returns all items in the array', async () => {
    const wrapper = shallowMount(SearchText, { store, localVue });
    const input = wrapper.find('input');
    await input.setValue('gold');
    await input.trigger('change');
    // Not triggering functions and returning array to list

    // await wrapper.vm.$nextTick();
    let test = await wrapper.findAll('li').length;
    console.log(await wrapper.findAll('li').length, 'counting number of li');

    expect(test).toBeGreaterThan(0);
  });

  // hittar Li elementet array.length toBeGreaterThan(0)

  test('check so that searchword returns item with matching letters', () => {});

  test('check so that searchword with capital letters becomes lowercase', async () => {});

  test('check so that action in vuex is called on keydown', async () => {
    //write code for mocked store here
  });
});
// wrapper.array.length
