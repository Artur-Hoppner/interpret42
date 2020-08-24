<template>
  <div class="buttonWrapper">
    <button v-if="getToggle" @click="changeThisToggle">
      {{ getButtonText }}
    </button>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'RemoveButton',
  computed: {
    ...mapGetters(['getToggle', 'getButtonText'])
  },
  methods: {
    ...mapActions(['changeThisToggle'])
  }
};
</script>
