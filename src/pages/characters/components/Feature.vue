<template>
  <div class="flex gap-4 w-full">
    <div
      class="bg-rick-1 text-white text-xs sm:text-sm md:text-base font-semibold px-2 md:px-4 py-1 rounded-md flex items-center w-1/3 md:w-1/4 justify-center value"
    >
      {{ label }}
    </div>
    <div
      class="px-2 md:px-4 py-1 w-3/4 md:w-3/5 border border-rick-1 rounded-md text-white font-semibold text-sm sm:text-base text-center value"
    >
      {{ value }}
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: ["label", "value"],
};
</script>
<style>
  .value{
    box-shadow: 0 1px 3px 0 #4cb5c3 inset, 0 1px 8px #4cb5c3;
  }
</style>
