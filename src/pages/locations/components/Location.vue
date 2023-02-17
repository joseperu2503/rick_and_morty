<template>
  <div class="border-b border-rick-5 py-6 md:py-8 px-4 flex justify-between">
    <div @click="goLocation()" class="cursor-pointer text-white text-base sm:text-lg md:text-xl lg:text-2xl">
      {{ location.name }}
    </div>
    <div class="text-rick-2" @click="goLocation()">
      <img src="@/assets/arrow-right.svg" class="w-5 h-5 sm:w-6 sm:h-6  lg:w-8 lg:h-8 cursor-pointer">
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: ["location"],
  methods: {
    goLocation() {
      this.$router.push(`locations/${this.location.id}`);
    },
  },
};
</script>
