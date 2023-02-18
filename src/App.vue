<template>
  <div class="fixed top-0 right-0 left-0 bottom-0">
    <div class="h-32 pb-12 w-full bg-gradient-to-b from-black fixed z-20 top-0 px-8 flex items-center justify-between lg:justify-center">
      <div class="static position lg:absolute left-8 z-2">
        <img src="@/assets/logo.png" class="h-14 cursor-pointer" @click="goHome">
      </div>
      <nav class="hidden text-white text-xl sm:flex gap-4 ">
        <router-link active-class="active" to="/" class="neon">Home</router-link>
        <router-link active-class="active" to="/characters" class="neon">Characters</router-link>
        <router-link active-class="active" to="/locations" class="neon">Locations</router-link>
        <!-- <router-link active-class="active" to="/episodes" class="neon">Episodes</router-link> -->
      </nav>

    </div>
    <div class="bg-black w-full h-20 fixed top-0 z-10" :style="`opacity: ${opacity};`"></div>
    <div class="fixed top-0 bottom-0 w-full px-8 overflow-y-scroll fondo pt-32 md:pt-40 pb-16 md:pb-36" @scroll="scroll">
      <router-view/>
    </div>
  </div>
  <div class="absolute z-20 right-8 h-20 flex items-center">
    <i class="fas fa-bars text-white text-2xl sm:hidden "  @click="toggleSidebar"></i>
  </div>

  <div class="fixed top-0 right-0 left-0 bottom-0 bg-black/70 z-10 backdrop-blur-sm transition-all" :class="[sidebar ? 'translate-x-0' : 'translate-x-full']">
    <div class="flex h-full flex-col items-center justify-center text-white text-xl sm:flex gap-4 ">
      <router-link active-class="active" to="/" class="neon" @click="toggleSidebar">Home</router-link>
      <router-link active-class="active" to="/characters" class="neon" @click="toggleSidebar">Characters</router-link>
      <router-link active-class="active" to="/locations" class="neon" @click="toggleSidebar">Locations</router-link>
      <!-- <router-link active-class="active" to="/episodes" class="neon" @click="toggleSidebar">Episodes</router-link> -->
    </div>

  </div>

</template>
<script>
export default {
  data(){
    return{
      sidebar: false,
      opacity: 0
    }
  },
  methods:{
    goHome(){
      this.$router.push('/')
    },
    toggleSidebar(){
      this.sidebar = !this.sidebar
    },
    scroll(event){
      console.log(event)
      let scroll = event.target.scrollTop
      if(scroll <=80 ){
        this.opacity = scroll / 80
      }else{
        this.opacity = 1
      }
    }
  }
}
</script>
<style scoped>
  .fondo{
    background: url('@/assets/fondo2.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .neon{
    transition: 0.2s;
  }

  .neon:hover{
    transform: scale(105%);
  }

  .neon.active{
    text-shadow: 0 0 5px #35c9dd,
    0 0 8px #35c9dd,
    0 0 13px #35c9dd;
  }

</style>

