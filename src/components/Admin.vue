<template>
  <div>
    <ul>
      <li v-for="score in scores" v-bind:key="score.id">
        {{score.prop}} - {{score.pscore}} || {{score.opp}} - {{score.oscore}}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Admin',
  computed: {
    ...mapState(['currentUser', 'scores']),
  },
};
</script>

<style>
</style>
