<template>
  <div class="h-full min-h-[400px]">
    <Slider :characters="characters"/>

    <div class="flex justify-center items-center h-1/2">
      <Button @click="enter"/>
    </div>
  </div>
</template>
<script>
import { CharacterService } from "@/services/characters.service.js";
import Slider from './components/Slider.vue'
import Button from './components/Button.vue'

export default {
  data() {
    return {
      characters: [],
    };
  },
  components: { Slider, Button },
  created() {
    this.getSomeCharacters();
  },
  methods: {
    getSomeCharacters() {
      CharacterService.getSomeCharacters().then((response) => {
        console.log(response);
        this.characters = response.data;
      });
    },
    enter(){
      this.$router.push('/characters')
    }
  },
};
</script>

