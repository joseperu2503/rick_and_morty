<template>
  <div class="text-white border-b border-rick-5 py-8 px-4 text-2xl flex justify-between">
    <div @click="goLocation()" class="cursor-pointer">
      {{ location.name }}
    </div>
    <div class="text-rick-2" @click="goLocation()">
      <img src="@/assets/arrow-right.svg" class="w-10 h-10 cursor-pointer">
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
