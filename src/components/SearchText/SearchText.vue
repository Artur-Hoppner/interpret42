<template>
  <div>
    <!-- du får en gulstjärna! <3 -->
    <input type="text" @keyup="getByThisKeyword($event.target.value)" /> 
    <ul>
      <li :key="animal" v-for="animal in filteredByKeyword">
        {{ animal }}
      </li>
    </ul>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'SelectBox',
  computed: {
    ...mapGetters(['filteredByKeyword']),

  },
  methods: {
    ...mapActions(['getByThisKeyword'])
  }
};
</script>