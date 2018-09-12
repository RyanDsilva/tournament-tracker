<template>
  <div>
    <h2 class="my-2 text-xs-center">Current Standings</h2>
    <v-data-table :headers="headers" :items="results" hide-actions class="elevation-1">
      <template slot="items" slot-scope="props">
        <td class="text-xs-center">{{ props.item.team }}</td>
        <td class="text-xs-center">{{ props.item.won }}</td>
        <td class="text-xs-center">{{ props.item.lost }}</td>
        <td class="text-xs-center">{{ props.item.speaker1 }}</td>
        <td class="text-xs-center">{{ props.item.speaker2 }}</td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Table',
  computed: {
    ...mapState(['currentUser', 'scores']),
  },
  mounted() {
    // eslint-disable-next-line
    this.scores.forEach(score => {
      if (score.pscore > score.oscore) {
        const winner = parseInt(parseFloat(score.prop), 10);
        const loser = parseInt(parseFloat(score.opp), 10);
        this.results[winner - 1].won += 1;
        this.results[loser - 1].lost += 1;
      } else {
        const winner = parseInt(parseFloat(score.opp), 10);
        const loser = parseInt(parseFloat(score.prop), 10);
        this.results[winner - 1].won += 1;
        this.results[loser - 1].lost += 1;
      }
    });
  },
  data() {
    return {
      results: [
        {
          team: 'CMD01',
          won: 0,
          lost: 0,
          speaker1: 0,
          speaker2: 0,
        },
        {
          team: 'CMD02',
          won: 0,
          lost: 0,
          speaker1: 0,
          speaker2: 0,
        },
        {
          team: 'CMD03',
          won: 0,
          lost: 0,
          speaker1: 0,
          speaker2: 0,
        },
        {
          team: 'CMD04',
          won: 0,
          lost: 0,
          speaker1: 0,
          speaker2: 0,
        },
        {
          team: 'CMD05',
          won: 0,
          lost: 0,
          speaker1: 0,
          speaker2: 0,
        },
        {
          team: 'CMD06',
          won: 0,
          lost: 0,
          speaker1: 0,
          speaker2: 0,
        },
        {
          team: 'CMD07',
          won: 0,
          lost: 0,
          speaker1: 0,
          speaker2: 0,
        },
        {
          team: 'CMD08',
          won: 0,
          lost: 0,
          speaker1: 0,
          speaker2: 0,
        },
        {
          team: 'CMD09',
          won: 0,
          lost: 0,
          speaker1: 0,
          speaker2: 0,
        },
        {
          team: 'CMD10',
          won: 0,
          lost: 0,
          speaker1: 0,
          speaker2: 0,
        },
        {
          team: 'CMD11',
          won: 0,
          lost: 0,
          speaker1: 0,
          speaker2: 0,
        },
        {
          team: 'CMD12',
          won: 0,
          lost: 0,
          speaker1: 0,
          speaker2: 0,
        },
        {
          team: 'CMD13',
          won: 0,
          lost: 0,
          speaker1: 0,
          speaker2: 0,
        },
        {
          team: 'CMD14',
          won: 0,
          lost: 0,
          speaker1: 0,
          speaker2: 0,
        },
        {
          team: 'CMD15',
          won: 0,
          lost: 0,
          speaker1: 0,
          speaker2: 0,
        },
        {
          team: 'CMD16',
          won: 0,
          lost: 0,
          speaker1: 0,
          speaker2: 0,
        },
        {
          team: 'CMD17',
          won: 0,
          lost: 0,
          speaker1: 0,
          speaker2: 0,
        },
        {
          team: 'CMD18',
          won: 0,
          lost: 0,
          speaker1: 0,
          speaker2: 0,
        },
        {
          team: 'CMD19',
          won: 0,
          lost: 0,
          speaker1: 0,
          speaker2: 0,
        },
        {
          team: 'CMD20',
          won: 0,
          lost: 0,
          speaker1: 0,
          speaker2: 0,
        },
        {
          team: 'CMD21',
          won: 0,
          lost: 0,
          speaker1: 0,
          speaker2: 0,
        },
        {
          team: 'CMD22',
          won: 0,
          lost: 0,
          speaker1: 0,
          speaker2: 0,
        },
        {
          team: 'CMD23',
          won: 0,
          lost: 0,
          speaker1: 0,
          speaker2: 0,
        },
        {
          team: 'CMD24',
          won: 0,
          lost: 0,
          speaker1: 0,
          speaker2: 0,
        },
        {
          team: 'CMD25',
          won: 0,
          lost: 0,
          speaker1: 0,
          speaker2: 0,
        },
        {
          team: 'CMD26',
          won: 0,
          lost: 0,
          speaker1: 0,
          speaker2: 0,
        },
        {
          team: 'CMD27',
          won: 0,
          lost: 0,
          speaker1: 0,
          speaker2: 0,
        },
        {
          team: 'CMD28',
          won: 0,
          lost: 0,
          speaker1: 0,
          speaker2: 0,
        },
        {
          team: 'CMD29',
          won: 0,
          lost: 0,
          speaker1: 0,
          speaker2: 0,
        },
        {
          team: 'CMD30',
          won: 0,
          lost: 0,
          speaker1: 0,
          speaker2: 0,
        },
        {
          team: 'CMD31',
          won: 0,
          lost: 0,
          speaker1: 0,
          speaker2: 0,
        },
        {
          team: 'CMD32',
          won: 0,
          lost: 0,
          speaker1: 0,
          speaker2: 0,
        },
      ],
      headers: [
        {
          text: 'Team Code',
          align: 'center',
          value: 'team',
          sortable: false,
        },
        {
          text: 'Won',
          align: 'center',
          sortable: true,
          value: 'won',
        },
        {
          text: 'Lost',
          align: 'center',
          sortable: true,
          value: 'lost',
        },
        {
          text: 'Speaker 1',
          align: 'center',
          sortable: true,
          value: 'speaker1',
        },
        {
          text: 'Speaker 2',
          align: 'center',
          sortable: true,
          value: 'speaker2',
        },
      ],
    };
  },
};
</script>
