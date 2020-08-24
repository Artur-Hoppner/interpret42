<template>
  <div class="buttonWrapper">
    <button v-show="toggle" @click="changeThisToggle()">
      {{ buttonText }}
    </button>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex';
export default {
  name: 'OnOff',
  computed: {
    ...mapState(['toggle', 'buttonText'])
  },
  methods: {
    ...mapActions(['changeThisToggle'])
  }
};
</script>
