<template>
<div></div>
</template>

<script>
import router from '../router'
export default {
  name: 'albumShare',
  data() {
   return {
      user:JSON.parse(localStorage.getItem("User")),
   };
  },
  components: {
 
},
methods:{

},
created(){
    if(this.user.userType === '2') {
         router.push({ name: "ArtistAlbumdetails"});
    } else {
         router.push({ name: "FanAlbumDetails"});
    }
},

mounted(){

},

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>