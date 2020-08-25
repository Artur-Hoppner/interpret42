<template>
  <div class="home">
    <OnOff />
    <RemoveButton />
    <KeyboardInput />
  </div>
</template>

<script>
// @ is an alias to /src
import OnOff from '@/components/OnOff/OnOff.vue';
import RemoveButton from '@/components/RemoveButton/RemoveButton.vue';
import KeyboardInput from '@/components/KeyboardInput/KeyboardInput.vue';

export default {
  name: 'Home',
  components: {
    OnOff,
    RemoveButton,
    KeyboardInput
  }
};
</script>
