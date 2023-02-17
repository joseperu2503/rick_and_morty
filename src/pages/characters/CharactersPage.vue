<template>
  <div class="max-w-7xl mx-auto">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-fit mx-auto">
      <Character v-for="item in characters" :key="item.id" :character="item"/>
    </div>
  </div>
</template>
<script>
import { CharacterService } from "@/services/characters.service.js";
import Character from "./components/Character.vue";
export default {
  data() {
    return {
      characters: [],
    };
  },
  components: { Character },
  created() {
    this.getAllCharacters();
  },
  methods: {
    getAllCharacters() {
      CharacterService.getAllCharacters().then((response) => {
        console.log(response);
        this.characters = response.data.results;
      });
    },
  },
};
</script>
