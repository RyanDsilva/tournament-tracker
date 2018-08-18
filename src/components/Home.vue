<template>
  <div>
    <v-container fluid>
      <div id="intro" class="text-xs-center">
        <img src="../../static/android-chrome-192x192.png" alt="LOGO">
        <h1>Fr. Conceicao Rodrigues Memorial Debate 2018</h1>
      </div>
      <v-divider class="my-2"></v-divider>
      <h1 class="text-xs-center mb-2">Teams</h1>
      <v-data-table :headers="theaders" :items="teams" hide-actions class="elevation-1">
        <template slot="items" slot-scope="props">
          <td class="text-xs-center">{{ props.item.teamcode }}</td>
          <td class="text-xs-center">{{ props.item.name }}</td>
          <td class="text-xs-center">{{ props.item.tincharge }}</td>
          <td class="text-xs-center">{{ props.item.contact }}</td>
        </template>
      </v-data-table>
      <h1 class="text-xs-center my-2">Rooms</h1>
      <v-data-table :headers="rheaders" :items="rooms" hide-actions class="elevation-1">
        <template slot="items" slot-scope="props">
          <td class="text-xs-center">{{ props.item.floor }}</td>
          <td class="text-xs-center">{{ props.item.room }}</td>
          <td class="text-xs-center">{{ props.item.rincharge }}</td>
          <td class="text-xs-center">{{ props.item.contact }}</td>
        </template>
      </v-data-table>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      theaders: [
        {
          text: 'Team Code',
          align: 'center',
          sortable: true,
          value: 'teamcode',
        },
        { text: 'Name', value: 'name', align: 'center' },
        { text: 'Team In-charge', value: 'tincharge', align: 'center' },
        { text: 'Contact', value: 'contact', align: 'center' },
      ],
      rheaders: [
        {
          text: 'Floor',
          align: 'center',
          sortable: true,
          value: 'floor',
        },
        { text: 'Room', value: 'room', align: 'center' },
        { text: 'Room In-charge', value: 'rincharge', align: 'center' },
        { text: 'Contact', value: 'contact', align: 'center' },
      ],
      rooms: [
        {
          value: false,
          floor: '5',
          room: 'Seminar Hall',
          rincharge: 'Person',
          contact: '9876543210',
        },
        {
          value: false,
          floor: '5',
          room: '508',
          rincharge: 'Person',
          contact: '9876543210',
        },
        {
          value: false,
          floor: '5',
          room: '511',
          rincharge: 'Person',
          contact: '9876543210',
        },
        {
          value: false,
          floor: '6',
          room: '607',
          rincharge: 'Person',
          contact: '9876543210',
        },
        {
          value: false,
          floor: '6',
          room: '608',
          rincharge: 'Person',
          contact: '9876543210',
        },
        {
          value: false,
          floor: '7',
          room: '707',
          rincharge: 'Person',
          contact: '9876543210',
        },
        {
          value: false,
          floor: '7',
          room: '708',
          rincharge: 'Person',
          contact: '9876543210',
        },
        {
          value: false,
          floor: '8',
          room: '807',
          rincharge: 'Person',
          contact: '9876543210',
        },
        {
          value: false,
          floor: '8',
          room: '808',
          rincharge: 'Person',
          contact: '9876543210',
        },
      ],
      teams: [
        {
          value: false,
          teamcode: 'CMD01',
          name: 'Team',
          tincharge: 'Person',
          contact: '9876543210',
        },
        {
          value: false,
          teamcode: 'CMD02',
          name: 'Team',
          tincharge: 'Person',
          contact: '9876543210',
        },
        {
          value: false,
          teamcode: 'CMD03',
          name: 'Team',
          tincharge: 'Person',
          contact: '9876543210',
        },
        {
          value: false,
          teamcode: 'CMD04',
          name: 'Team',
          tincharge: 'Person',
          contact: '9876543210',
        },
        {
          value: false,
          teamcode: 'CMD05',
          name: 'Team',
          tincharge: 'Person',
          contact: '9876543210',
        },
        {
          value: false,
          teamcode: 'CMD06',
          name: 'Team',
          tincharge: 'Person',
          contact: '9876543210',
        },
        {
          value: false,
          teamcode: 'CMD07',
          name: 'Team',
          tincharge: 'Person',
          contact: '9876543210',
        },
        {
          value: false,
          teamcode: 'CMD08',
          name: 'Team',
          tincharge: 'Person',
          contact: '9876543210',
        },
        {
          value: false,
          teamcode: 'CMD09',
          name: 'Team',
          tincharge: 'Person',
          contact: '9876543210',
        },
        {
          value: false,
          teamcode: 'CMD10',
          name: 'Team',
          tincharge: 'Person',
          contact: '9876543210',
        },
        {
          value: false,
          teamcode: 'CMD11',
          name: 'Team',
          tincharge: 'Person',
          contact: '9876543210',
        },
        {
          value: false,
          teamcode: 'CMD12',
          name: 'Team',
          tincharge: 'Person',
          contact: '9876543210',
        },
        {
          value: false,
          teamcode: 'CMD13',
          name: 'Team',
          tincharge: 'Person',
          contact: '9876543210',
        },
        {
          value: false,
          teamcode: 'CMD14',
          name: 'Team',
          tincharge: 'Person',
          contact: '9876543210',
        },
        {
          value: false,
          teamcode: 'CMD15',
          name: 'Team',
          tincharge: 'Person',
          contact: '9876543210',
        },
        {
          value: false,
          teamcode: 'CMD16',
          name: 'Team',
          tincharge: 'Person',
          contact: '9876543210',
        },
        {
          value: false,
          teamcode: 'CMD17',
          name: 'Team',
          tincharge: 'Person',
          contact: '9876543210',
        },
        {
          value: false,
          teamcode: 'CMD18',
          name: 'Team',
          tincharge: 'Person',
          contact: '9876543210',
        },
        {
          value: false,
          teamcode: 'CMD19',
          name: 'Team',
          tincharge: 'Person',
          contact: '9876543210',
        },
        {
          value: false,
          teamcode: 'CMD20',
          name: 'Team',
          tincharge: 'Person',
          contact: '9876543210',
        },
        {
          value: false,
          teamcode: 'CMD21',
          name: 'Team',
          tincharge: 'Person',
          contact: '9876543210',
        },
        {
          value: false,
          teamcode: 'CMD22',
          name: 'Team',
          tincharge: 'Person',
          contact: '9876543210',
        },
        {
          value: false,
          teamcode: 'CMD23',
          name: 'Team',
          tincharge: 'Person',
          contact: '9876543210',
        },
        {
          value: false,
          teamcode: 'CMD24',
          name: 'Team',
          tincharge: 'Person',
          contact: '9876543210',
        },
        {
          value: false,
          teamcode: 'CMD25',
          name: 'Team',
          tincharge: 'Person',
          contact: '9876543210',
        },
        {
          value: false,
          teamcode: 'CMD26',
          name: 'Team',
          tincharge: 'Person',
          contact: '9876543210',
        },
        {
          value: false,
          teamcode: 'CMD27',
          name: 'Team',
          tincharge: 'Person',
          contact: '9876543210',
        },
        {
          value: false,
          teamcode: 'CMD28',
          name: 'Team',
          tincharge: 'Person',
          contact: '9876543210',
        },
        {
          value: false,
          teamcode: 'CMD29',
          name: 'Team',
          tincharge: 'Person',
          contact: '9876543210',
        },
        {
          value: false,
          teamcode: 'CMD30',
          name: 'Team',
          tincharge: 'Person',
          contact: '9876543210',
        },
        {
          value: false,
          teamcode: 'CMD31',
          name: 'Team',
          tincharge: 'Person',
          contact: '9876543210',
        },
        {
          value: false,
          teamcode: 'CMD32',
          name: 'Team',
          tincharge: 'Person',
          contact: '9876543210',
        },
      ],
    };
  },
};
</script>

<style scoped>
.intro {
  margin: 0 auto;
}
</style>
