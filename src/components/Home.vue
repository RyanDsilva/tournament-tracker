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
          <td class="text-xs-center">{{ props.item.tincharge }}</td>
        </template>
      </v-data-table>
      <h1 class="text-xs-center my-2">Rooms</h1>
      <v-data-table :headers="rheaders" :items="rooms" hide-actions class="elevation-1">
        <template slot="items" slot-scope="props">
          <td class="text-xs-center">{{ props.item.floor }}</td>
          <td class="text-xs-center">{{ props.item.room }}</td>
          <td class="text-xs-center">{{ props.item.rincharge }}</td>
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
        { text: 'Team In-charge', value: 'tincharge', align: 'center' },
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
      ],
      rooms: [
        {
          value: false,
          floor: '5',
          room: 'Seminar Hall',
          rincharge: 'Pranay & Harkirat',
        },
        {
          value: false,
          floor: '5',
          room: '508',
          rincharge: 'Kevin',
        },
        {
          value: false,
          floor: '5',
          room: '511',
          rincharge: 'Surya',
        },
        {
          value: false,
          floor: '6',
          room: '606',
          rincharge: 'Riya',
        },
        {
          value: false,
          floor: '6',
          room: '607',
          rincharge: 'Nolita',
        },
        {
          value: false,
          floor: '7',
          room: '706',
          rincharge: 'Sakshi',
        },
        {
          value: false,
          floor: '7',
          room: '707',
          rincharge: 'Ridhika',
        },
        {
          value: false,
          floor: '7',
          room: '701',
          rincharge: 'Sanfer',
        },
      ],
      teams: [
        {
          value: false,
          teamcode: 'CMD01',
          tincharge: 'Sherwyn Pillai',
        },
        {
          value: false,
          teamcode: 'CMD02',
          tincharge: 'Mayank Srivastava',
        },
        {
          value: false,
          teamcode: 'CMD03',
          tincharge: 'Franky Pinto',
        },
        {
          value: false,
          teamcode: 'CMD04',
          tincharge: 'Harsh Singhania',
        },
        {
          value: false,
          teamcode: 'CMD05',
          tincharge: 'Nirav Sthalekar',
        },
        {
          value: false,
          teamcode: 'CMD06',
          tincharge: 'Neeraj Karande',
        },
        {
          value: false,
          teamcode: 'CMD07',
          tincharge: 'Nachiket Nisal',
        },
        {
          value: false,
          teamcode: 'CMD08',
          tincharge: 'Ethan Pallani',
        },
        {
          value: false,
          teamcode: 'CMD09',
          tincharge: 'Abhishek Gupta',
        },
        {
          value: false,
          teamcode: 'CMD10',
          tincharge: 'Anurag Chavan',
        },
        {
          value: false,
          teamcode: 'CMD11',
          tincharge: 'Ankit Jha',
        },
        {
          value: false,
          teamcode: 'CMD12',
          tincharge: 'Maxwell Almeida',
        },
        {
          value: false,
          teamcode: 'CMD13',
          tincharge: 'Dylan Dsouza',
        },
        {
          value: false,
          teamcode: 'CMD14',
          tincharge: 'Pratik Chaudhary',
        },
        {
          value: false,
          teamcode: 'CMD15',
          tincharge: 'Shubham Bhate',
        },
        {
          value: false,
          teamcode: 'CMD16',
          tincharge: 'Ayush Chaube',
        },
        {
          value: false,
          teamcode: 'CMD17',
          tincharge: 'Saumeel Gabhare',
        },
        {
          value: false,
          teamcode: 'CMD18',
          tincharge: '',
        },
        {
          value: false,
          teamcode: 'CMD19',
          tincharge: 'Mayank Mishra',
        },
        {
          value: false,
          teamcode: 'CMD20',
          tincharge: 'Ashish Kumar',
        },
        {
          value: false,
          teamcode: 'CMD21',
          tincharge: 'Allen Xavier',
        },
        {
          value: false,
          teamcode: 'CMD22',
          tincharge: '',
        },
        {
          value: false,
          teamcode: 'CMD23',
          tincharge: 'Mahesh Desai',
        },
        {
          value: false,
          teamcode: 'CMD24',
          tincharge: 'Swarup Saju',
        },
        {
          value: false,
          teamcode: 'CMD25',
          tincharge: 'Albin Tharayil',
        },
        {
          value: false,
          teamcode: 'CMD26',
          tincharge: 'Chyank Kumar',
        },
        {
          value: false,
          teamcode: 'CMD27',
          tincharge: 'Jeswin Thomas',
        },
        {
          value: false,
          teamcode: 'CMD28',
          tincharge: 'Roger Fernando',
        },
        {
          value: false,
          teamcode: 'CMD29',
          tincharge: 'Akhshaye Nair',
        },
        {
          value: false,
          teamcode: 'CMD30',
          tincharge: 'Abhiram Iyengar',
        },
        {
          value: false,
          teamcode: 'CMD31',
          tincharge: 'Samuel Matthew',
        },
        {
          value: false,
          teamcode: 'CMD32',
          tincharge: 'Gaurav Dashpute',
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
