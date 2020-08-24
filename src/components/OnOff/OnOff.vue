<template>
  <div class="buttonWrapper">
    <button v-show="getToggle" @click="changeThisToggle">
      {{ getButtonText }}
    </button>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'OnOff',
  computed: {
    ...mapGetters(['getToggle', 'getButtonText'])
  },
  methods: {
    ...mapActions(['changeThisToggle'])
  }
};
</script>
