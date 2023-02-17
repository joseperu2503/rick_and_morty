<template>
  <div class="max-w-4xl mx-auto">
    <div class="text-3xl sm:text-4xl font-semibold md:text-5xl text-white mb-4 text-center md:text-left">
      {{ location.name }}
    </div>
    <div class="flex mb-10 gap-4 items-center justify-center md:justify-start">
      <div class="bg-rick-3 px-2 py-1 rounded-md text-sky-900 text-xs sm:text-base md:text-base font-bold ">{{location.dimension}}</div>
      <div class="bg-rick-2 px-2 py-1 rounded-md text-sky-900 text-xs sm:text-base md:text-base font-bold">{{location.type}}</div>

    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-fit mx-auto">
      <Character v-for="item in residents" :key="item.id" :character="item"/>
    </div>
  </div>
</template>
<script>
import { LocationService } from '../../services/locations.service';
import axios from 'axios';
import Character from '../characters/components/Character.vue';

export default {
  data() {
    return {
      location: {},
      locationId: this.$route.params.locationId,
      showLocation: false,
      residents: []
    };
  },
  components: { Character},
  created() {
    console.log(this.$route.params);
    this.getLocation();
  },
  methods: {
    getLocation() {
      LocationService.getLocation(this.locationId)
      .then((response) => {
        console.log(response);
        this.location = response.data;
        this.showLocation = true
        console.log(this.location.residents[0])
        this.location.residents.forEach(r => {
          axios.get(r).then(res => this.residents.push(res.data))
        })
      });
    },
  },
}
</script>
