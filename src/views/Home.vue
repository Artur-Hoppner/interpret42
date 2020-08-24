<template>
  <div class="home">
    <OnOff />
    <RemoveButton />
  </div>
</template>

<script>
// @ is an alias to /src
import OnOff from '@/components/OnOff/OnOff.vue';
import RemoveButton from '@/components/RemoveButton/RemoveButton.vue';

export default {
  name: 'Home',
  components: {
    OnOff
  }
};
</script>
