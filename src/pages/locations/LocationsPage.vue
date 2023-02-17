<template>
  <div class="px-0  pb-24">
    <div class="backdrop-blur-sm bg-white/10 rounded-3xl px-10 pb-8 max-w-4xl mx-auto">
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
