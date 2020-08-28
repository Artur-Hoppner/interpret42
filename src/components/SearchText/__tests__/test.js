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
    //Arrange localVue in shallowmount is not needed to pass test. (Best practice to add it to not polute router?)
    const wrapper = shallowMount(SearchText, { store, localVue });
    const input = wrapper.find('input');
    //Act
    input.setValue('');
    await input.trigger('keyup');
    const lengthOfLi = wrapper.findAll('li').length; // Remove and add in expect()?
    console.log(await wrapper.findAll('li').length, 'counting numbers of li'); // can remove
    //Assert
    expect(lengthOfLi).toBeGreaterThan(0);
  });

  test('check so that searchword returns item with matching letters', async () => {
    //Arrange
    const wrapper = shallowMount(SearchText, { store, localVue });
    const input = wrapper.find('input');
    //Act
    input.setValue('goldfish');
    await input.trigger('keyup');
    //Assert
    expect(wrapper.text()).toBe('goldfish');
  });

  test('check so that searchword with capital letters becomes lowercase', async () => {
    //Arrange
    const wrapper = shallowMount(SearchText, { store, localVue });
    const input = wrapper.find('input');
    //Act
    input.setValue('GOLDFISH');
    await input.trigger('keyup');
    //Assert
    expect(wrapper.text()).toBe('goldfish');
  });

  test('check so that action in vuex is called on keydown', async () => {
    //write code for mocked store here
  });
});
// wrapper.array.length

/* ÖVNaING 5
5a Skapa en komponent för sökning/filtrering. Komponenten ska innehålla ett textfält och visa en lista med alla element som matchar texten i textfältet. Den ska uppdateras varje gång användaren trycker ner ett tecken. (använd key events) Använd en lista med namn på djur: [cat, dog, parrot, goldfish, horse, elephant, ant, snake, crow, cow, eagle, rhinoceros, chimpanzee]. Använd följande testfall:
tom sträng matchar alla element
"d" matchar "dog" och "goldfish"
"ow" matchar "crow" och "cow"
"AnT" matchar "ant" och "elephant"

5b Gör så att listan skickas till komponenten från parent, som en property. Testa så att komponenten fungerar korrekt för en tom lista samt att den fungerar korrekt med listan från uppgift 5a.

5c Testa så att komponenten fungerar korrekt för en lista som innehåller andra saker än djur. Hitta på egna lämpliga testfall.

*/
