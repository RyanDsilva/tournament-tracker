<template>
  <div>
    <h2 class="my-2 text-xs-center">RESULTS</h2>
    <v-data-table :headers="headers" :items="scores" hide-actions class="elevation-1">
      <template slot="items" slot-scope="props">
        <td class="text-xs-center">{{ props.item.prop }}</td>
        <td class="text-xs-center">{{ props.item.pscore }}</td>
        <td class="text-xs-center">{{ props.item.opp }}</td>
        <td class="text-xs-center">{{ props.item.oscore }}</td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Admin',
  computed: {
    ...mapState(['currentUser', 'scores']),
  },
  data() {
    return {
      headers: [
        {
          text: 'Proposition',
          align: 'center',
          sortable: false,
          value: 'prop',
        },
        {
          text: 'PScore',
          align: 'center',
          sortable: false,
          value: 'pscore',
        },
        {
          text: 'Opposition',
          align: 'center',
          sortable: false,
          value: 'opp',
        },
        {
          text: 'OScore',
          align: 'center',
          sortable: false,
          value: 'oscore',
        },
      ],
    };
  },
};
</script>

<style>
</style>
