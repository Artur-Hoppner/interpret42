<template>
  <div class="home">
    <OnOff />
  </div>
</template>

<script>
// @ is an alias to /src
import OnOff from '@/components/OnOff.vue';

export default {
  name: 'Home',
  components: {
    OnOff
  }
};
</script>
