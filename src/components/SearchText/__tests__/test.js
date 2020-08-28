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
    // Arrange
    const wrapper = shallowMount(SearchText, { store });
    const input = wrapper.find('input');
    // Act
    input.setValue('');
    await input.trigger('keyup');
    let liLength = await wrapper.findAll('li').length;
    console.log(await wrapper.findAll('li').length, 'counting numbers of li');
    //Assert
    expect(liLength).toBeGreaterThan(0);
  });

  test('check so that searchword returns item with matching letters', () => {
    // Arrange
    // const wrapper = shallowMount(SearchText, {store, localVue})
  });

  test('check so that searchword with capital letters becomes lowercase', async () => {});

  test('check so that action in vuex is called on keydown', async () => {
    //write code for mocked store here
  });
});
// wrapper.array.length
