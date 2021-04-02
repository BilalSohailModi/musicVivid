<template>
  <div id="app">
    <!-- <MusicPlayer v-if="$store.state.mp3.length>0" :key="$store.state.songid"></MusicPlayer> -->
    <AudioPlayer v-if="$store.state.sound!==null" :key="$store.state.songid+Math.random()" :preload="true"></AudioPlayer>
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>
<script>
import {Howl, Howler} from 'howler';
import { ALL_PATH } from "@/Constants/Constants";
import MusicPlayer from "@/components/MusicPlayer.vue";
import AudioPlayer from "@/components/AudioPlayer.vue";
import { HELPER } from "@/Helper/Helper";
export default {
  name: 'AuthHeader',
  props: {
    msg: String
  },
  components:{
    MusicPlayer,
    AudioPlayer
  },
	data: function() {
    return {
      user:"" ,
      profilemage:"",
      sound:null,
      audioList: [
        'http://txh-cdn.96qbhy.com/20180817175211dtC1vE3z.mp3',
        'http://txh-cdn.96qbhy.com/20181106105737sOcozMqw.mp3'
      ]
    }
	},
	
	methods:{},

  mounted: function(){
    window.onpopstate = event => {};    
	},

	created: function(){ },

  updated: function(){ }
}
</script>
<style>

</style>
