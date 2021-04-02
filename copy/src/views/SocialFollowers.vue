<template>
<div>
  <body class="inner-page">
    <AppHeader></AppHeader>
     <div class="live-contest-section">
       <div class="live-contest-header">
         <h1>Social Followers</h1>
       </div>

        <div class="">
          <div class="m-5">
           <a class="btn btn-social-icon btn-facebook" @click="facebook()">
            <span class="fa fa-facebook"></span>
           </a>
          </div>
          <div class="m-5">
           <a class="btn btn-social-icon btn-instagram"  @click="instagram()">
            <span class="fa fa-instagram"></span>
           </a>
          </div>

          <div class="m-5">
           <a class="btn btn-social-icon btn-instagram"  @click="saveData()">
            <span class="fa fa-instagram"></span>
           </a>
          </div>
        </div>


     </div>
  </body>
</div>
</template>

<script>
import router from "../router";
import { ALL_PATH } from "@/Constants/Constants";
import { HELPER } from "@/Helper/Helper";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import AppHeader from "@/components/AuthHeader.vue";
import axios from "axios";
import { API } from "@/api/api";
export default {
  name: "SocialFollowers",
  props: {
    msg: String
  },
  data() {
    return {
      user: JSON.parse(localStorage.getItem("User")),
      allpath: ALL_PATH,
      follows : Number
    };
  },
  components: {
    AppHeader
  },

  methods: {
    facebook() {
      window.fbAsyncInit = function() {
        FB.init({
          appId      : '312588969643910',
          cookie     : true,
          xfbml      : true,
          version    : 'v3.2'
        });
      };
    },




    instagram() {
     $.ajax({
      url: 'https://api.instagram.com/v1/users/self',
      dataType: 'jsonp',
      type: 'GET',
      data: {access_token: '7235681046.52f4a1e.34f20cf7a38143d3b2f82b807a45fa2a'},
      success: (data)=> {

          this.follows = data['data']['counts']['followed_by'];
           console.log(data);
      },
      error: (data)=> {
          console.log(data);
        }
      });
    },

    saveData(data) {
       let head2 = {
         headers: { "x-access-token": JSON.parse(localStorage.getItem("Token")) }
       };
         API.put("update-social-followers", { socialFollowersType: 2 , countSocialFollowers : this.follows }, head2)
         .then(response => {
        })
        .catch(error => {});
    },
    
  },

  created() {

  },

  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>