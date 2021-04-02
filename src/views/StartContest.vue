<template>
  <div>
    <AppHeader></AppHeader>
    <div class="contest-section">
      <div class="contest-banner">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12">
              <div class="contest-banner-inner">
                <h1 class="contest-heading">Contest</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="contest-body">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12">
              <div class="contest-body-inner">
                <h1 class="choose-contest">Choose contest Type</h1>
                <ul class="contest-listing">
                  <li>
                    <label class="contest-radio">
                      <input type="radio" value="1" @change="goToContest" name="contest_type">
                      <span>
                        <img src="/assets/images/live-contest.png" alt="image">
                        <img src="/assets/images/success-img.png" class="check-mark">
                      </span>
                    </label>
                  </li>
                  <li>
                    <label class="contest-radio">
                      <input value="2" @change="goToContest" type="radio" name="contest_type">
                      <span>
                        <img src="/assets/images/draft-contest.png" alt="image">
                        <img src="/assets/images/success-img.png" class="check-mark">
                      </span>
                    </label>
                  </li>
                </ul>
                <div class="btnset text-center">
                    <span class="t">For more information</span>
                    <button class="btn-signin d-inline-block" @click="infoPopup()"><i class="fa fa-info-circle"></i>&nbsp;&nbsp;Click here</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- modal -->

    <div class="modal contest-modal" id="info-video" data-backdrop="static" data-keyboard="false">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" @click="closeModel()" aria-hidden="true">×</button>
          </div>
          <div class="modal-body">
            <div class="modal-inner-body">
              <iframe
                class="youtube-player"
                id="player"
                type="text/html"
                v-bind:src="videoSrc"
                frameborder="0" allow="autoplay"
              >&lt;br /&gt;</iframe>
              <div class="text-center">
                <!-- <button class="modal-learn-more" @click="cancelSub()">Confirm</button>
                <button class="modal-cancel" data-dismiss="modal">Not Now</button>-->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
import AppFooter from "@/components/ComonFotter.vue";
import InfiniteLoading from "vue-infinite-loading";
import LeftManu from "@/components/LeftManu.vue";
import { API } from "@/api/api";
export default {
  name: "StartContest",
  props: {
    msg: String
  },
  data() {
    return {
      songid: "",
      songlist: [],
      songids: [],
      albumInformation: null,
      playlistid: "",
      user: JSON.parse(localStorage.getItem("User")),
      profilemage: null,
      isLoading: false,
      iscoverupload: false,
      istiltleGiven: false,
      ischacked: true,
      coverpictur: 1,
      fullPage: true,
      coverpicurl: "",
      title: "",
      myPlayList: [],
      coverFile: "",
      allpath: ALL_PATH,
      page: 1,
      title1: "",
      amBumUserInformation: {},
      tempsong: [],
      page1: 1,
      currentsongid: "",
      videoSrc : "",
    };
  },
  components: {
    AppHeader,
    AppFooter,
    LeftManu,
    Loading,
    InfiniteLoading
  },
  methods: {
    goToContest(e) {
      var id = e.target.value;
      router.push(`/contest/${id}`);
      console.log("vote page");
    },

    infoPopup() {
      this.videoSrc="https://www.youtube.com/embed/kzoA0kOPhxA?autoplay=1&enablejsapi=1";
      $("#info-video").modal("show");
      $("#info-video").modal({
        backdrop: "static",
        keyboard: false
      });
    },
    closeModel() {
      $("#info-video").modal("hide");
      this.videoSrc = "";
    }
  },
  created() {},

  mounted() {
    //open btn
    //	alert("Alert");
    $(".all-check").click(function() {
      if ($(this).prop("checked") == true) {
        $(".track-check").prop("checked", "true");
        $(this)
          .parent(".btn-check")
          .find(".text")
          .text("Deselect All");
        $(".playlist-list")
          .find(".dynamic-action-btn")
          .css("display", "inline-block");
      } else {
        $(".track-check").prop("checked", false);
        $(this)
          .parent(".btn-check")
          .find(".text")
          .text("Select All");
        $(".playlist-list")
          .find(".dynamic-action-btn")
          .css("display", "none");
      }
    });
    //         $('.open-playlist').click(function(){
    // 	$('.playlist-overlay').css('display','block');
    // 	$('.add-play-list-aside').addClass('open_add-play-list-aside');
    // });
    // $('.sidebar-close').click(function(){
    // 	$('.playlist-overlay').css('display','none');
    // 	$('.add-play-list-aside').removeClass('open_add-play-list-aside');
    // });
    // $('.open-track-menu').mouseenter(function(){
    // 	$(this).siblings('.track-action-box ul').css("display", "block");
    // });
    // $('.open-track-menu').mouseleave(function(){
    // 	$(this).siblings('.track-action-box ul').css("display", "none");
    // });
  },
  destroyed() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.youtube-player {
  height: 300px;
  width: 100%;
}
.btnset{display: block; margin: 20px 0 0 0;}
.btnset .t{
    display: block;
    margin: 0 0 14px 0;
    font-size: 18px;
    line-height: 20px;
    font-weight: 400;
}
</style>