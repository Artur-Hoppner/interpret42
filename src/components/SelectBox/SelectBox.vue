<template>
  <div class="buttonWrapper">
    <h2>{{ getShippingText }}</h2>
    <input type="checkbox" @change="changeThisShipping" />
    <p>Express shipping</p>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'SelectBox',
  computed: {
    ...mapGetters(['getShippingText'])
  },
  methods: {
    ...mapActions(['changeThisShipping'])
  }
};
</script>
