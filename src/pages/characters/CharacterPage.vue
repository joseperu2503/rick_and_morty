<template>
  <div class="relative md:h-full">
    <div class="flex flex-col md:flex-row gap-2 md:gap-12 lg:24 justify-center static md:absolute md:top-1/2 md:-translate-y-1/2 right-0 left-0">
      <div class="flex items-center justify-center">
        <img :src="character.image" class="w-2/3 max-w-xs md:w-full md:max-w-80 rounded-full opacity-0 transition-all duration-700 scale-0" :class="{'opacity-100 scale-100': showCharacter}"/>
      </div>

      <div class="max-w-md lg:max-w-xl mx-auto w-full md:mx-0">
        <div class="flex flex-col gap-3 items-center md:items-start ">
          <h1 class="text-white text-3xl md:text-5xl lg:text-6xl mb-4 lg:mb-8 font-bold opacity-0 -translate-x-full transition-all duration-300" :class="{'opacity-100 translate-x-0': showCharacter}" >{{character.name}}</h1>
          <Feature label="GENDER" :value="character.gender" class="opacity-0 -translate-x-full transition-all duration-300 delay-75" :class="{'opacity-100 translate-x-0': showCharacter}"/>
          <Feature label="SPECIE" :value="character.species" class="opacity-0 -translate-x-full transition-all duration-300 delay-100" :class="{'opacity-100 translate-x-0': showCharacter}"/>
          <Feature label="STATUS" :value="character.status" class="mb-8 opacity-0 -translate-x-full transition-all duration-300 delay-150" :class="{'opacity-100 translate-x-0': showCharacter}"/>

          <Feature label="ORIGIN" :value="character.origin?.name" class="opacity-0 -translate-x-full transition-all duration-300 delay-200" :class="{'opacity-100 translate-x-0': showCharacter}"/>
          <Feature @click="goLocation()" label="LOCATION" :value="character.location?.name" class="cursor-pointer opacity-0 -translate-x-full transition-all duration-300 delay-300" :class="{'opacity-100 translate-x-0': showCharacter}"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { CharacterService } from "@/services/characters.service.js";
import  Feature from "./components/Feature.vue";
export default {
  data() {
    return {
      character: {},
      characterId: this.$route.params.characterId,
      showCharacter: false
    };
  },
  components: { Feature },
  created() {
    console.log(this.$route.params);
    this.getCharacter();
  },
  methods: {
    getCharacter() {
      CharacterService.getCharacter(this.characterId).then((response) => {
        console.log(response);
        this.character = response.data;
        this.showCharacter = true
      });
    },
    goLocation(){
      let locationId = this.getLocartionId()
      this.$router.push(`/locations/${locationId}`)
    },
    getLocartionId(){
      let array = this.character.location.url.split('/')
      return array[array.length - 1]
    }
  },
};
</script>
