<template>
  <div class="px-24 pb-24">
    <div class="backdrop-blur-sm bg-white/10 rounded-3xl px-10 pb-8">
      <div class="flex flex-col">
        <Location v-for="item in locations" :key="item.id" :location="item"/>
      </div>
    </div>

  </div>
</template>
<script>
import { LocationService } from "@/services/locations.service.js";
import Location from "./components/Location.vue";
export default {
  data() {
    return {
      locations: [],
    };
  },
  components: { Location },
  created() {
    this.getAllLocations();
  },
  methods: {
    getAllLocations() {
      LocationService.getAllLocations().then((response) => {
        console.log(response.data.results);
        this.locations = response.data.results
      });
    },
  },
};
</script>
