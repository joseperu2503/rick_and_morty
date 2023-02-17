<template>
  <div class="flex gap-4">
    <div
      class="bg-rick-1 text-white font-bold px-4 py-1 rounded-md flex items-center w-28 justify-center value"
    >
      {{ label }}
    </div>
    <div
      class="px-4 py-1 w-72 border border-rick-1 rounded-md text-white font-semibold text-lg text-center value"
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
