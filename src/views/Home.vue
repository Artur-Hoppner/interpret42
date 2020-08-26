<template>
  <div class="home">
    <OnOff />
    <br />
    <RemoveButton />
    <br />
    <KeyboardInput />
    <br />
    <SelectBox />
    <br />
    <TextField />
    <br />
    <SearchText />
  </div>
</template>

<script>
// @ is an alias to /src
import OnOff from '@/components/OnOff/OnOff.vue';
import RemoveButton from '@/components/RemoveButton/RemoveButton.vue';
import KeyboardInput from '@/components/KeyboardInput/KeyboardInput.vue';
import SelectBox from '@/components/SelectBox/SelectBox.vue';
import TextField from '@/components/TextField/TextField.vue';
import SearchText from '@/components/SearchText/SearchText.vue';

export default {
  name: 'Home',
  components: {
    OnOff,
    RemoveButton,
    KeyboardInput,
    SelectBox,
    TextField,
    SearchText
  }
};
</script>
