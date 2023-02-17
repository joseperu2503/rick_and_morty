<template>
  <div
    @click="goCharacter()"
    class="relative cursor-pointer hover:scale-110 transition-all max-w-xs"
  >
    <img :src="character.image" class="rounded-2xl w-full" />
    <div
      class="absolute bg-gradient-to-t from-black bottom-0 h-3/5 w-full px-4 flex items-end pb-4 rounded-2xl"
    >
      <h2 class="text-2xl text-white">{{ character.name }}</h2>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: ["character"],
  methods: {
    goCharacter() {
      this.$router.push(`/characters/${this.character.id}`);
    },
  },
};
</script>
