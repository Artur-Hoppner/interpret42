<template>
  <div class="buttonWrapper">
    <input type="text" @keyup="handleThisKey" />
    <p id="textOutput">{{ getOutputText }}</p>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'KeyboardInput',
  computed: {
    ...mapGetters(['getOutputText'])
  },
  methods: {
    ...mapActions(['handleThisKey'])
  }
};
</script>
