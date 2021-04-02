<template>

    <div  v-if="$store.state.mp3.length>0" >
      
<aplayer 
      autoplay
     :muted.sync="$store.state.muted"
     :volume.sync="$store.state.volume"
      :music.sync="$store.state.mp3[0]"
     :list="$store.state.songs"
  
  
/>
</div>

</template>

<script>
import Aplayer from 'vue-aplayer'
import {
    API
	} from "@/api/api";

  export default {
    name: 'MusicPlayer',
     props:[ 'music','list'],
     components: {
        Aplayer
    },
    data() {
      return {
  msg: 'Welcome to Your Vue.js App',
  mostlikeduser:[],
  profilepic:"",
 
      }
    },
    methods:{
      doit(){
        alert();
      }
    }
    ,
 created(){


    },
    updated(){
  
   
    },
    mounted(){
      
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
