<template>
  <div>
    <textarea v-model="inputText" />
    <p>{{ getLimitText }}</p>
  </div>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
  name: 'TextField',
  computed: {
    ...mapGetters(['getLimitText']),
    inputText: {
      get() {
        return this.$store.state.textfield.inputText;
      },
      set(value) {
        this.$store.dispatch('checkThisLimitText', value)
      }
    }
  },
};
</script>