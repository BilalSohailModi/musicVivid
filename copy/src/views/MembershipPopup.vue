<template>
<div>
  <AppHeader></AppHeader> 
    <div class="view-profile-overlay"></div>
    <div class="live-contest-section screen-bg">
  <!-- live contest modal -->
    <div class="modal contest-modal" id="live_contest_modal">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <!-- Modal body -->
          <div class="modal-body">
            <div class="modal-inner-body">
              <img src="/assets/images/membership-images.png">
              <p class="mail-title">
                This feature is for
                <br>Members only
              </p>
              <p v-if="!user.PaymentRecord">You have 1 week Free Trial member</p>
              <h1 class="sub-price">
                For
                <span>3.99</span>/mo
              </h1>
              <div class="text-center">
                <button
                  class="modal-learn-more"
                  data-toggle="modal"
                  data-target="#membershipPlan_modal"
                >Learn More</button>
                <br>
                <button class="modal-cancel" @click="closemodal">Not Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  


    <!-- Membership -->
    <div class="modal contest-modal" id="membershipPlan_modal">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <!-- Modal body -->
          <div class="modal-body">
            <div class="modal-inner-body">
              <h1 class="modal-main-heading">Membership plan</h1>
              <p class="mail-title">
                Get unlimited access for 30 days with
                <br>premium features
              </p>
              <ul class="subscribe-features">
                <li>
                  <img src="/assets/images/vote.png" class="list-icon-img">
                  Vote for your favorite artist
                </li>
                <li>
                  <img src="/assets/images/contest_result.png" class="list-icon-img">
                  Review contest results
                </li>
                <li>
                  <img src="/assets/images/leaderboard.png" class="list-icon-img">
                  Unlock leaderboard access
                </li>
                 <li>
                  <img src="/assets/images/7_days_logo.jpg" class="list-icon-img free-week">
                   1 Week Free membership, We don't charge your Card until then
                </li>
              </ul>
              <h1 class="sub-price">
                For
                <span>3.99</span>/mo
              </h1>
              <div class="text-center">
                <button class="modal-learn-more" @click="memberView">Become A Member</button>
                <br>
                <button class="modal-cancel" @click="closeModal1">No, I dont want to subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>

</div>
   
</template>

<script>
import router from '../router'
import { ALL_PATH } from "@/Constants/Constants";
import AppHeader from '@/components/AuthHeader.vue'

export default {
  name: 'MembershipPopup',
  props: {
    msg: String
  },
    data() {
        return {
        user:JSON.parse(localStorage.getItem("User")),
        };
    },
  components: {
    AppHeader,
  },
   methods:{
    closemodal(){
     $('#live_contest_modal').modal('hide');
      router.push({ path: '/fan-profile'});
    },

    closeModal1() {
     $('#membershipPlan_modal').modal('hide'); 
    },

    memberView() {
      $('.modal-backdrop').remove();
       this.$store.state.ispopup = true;
      router.push({ path: '/addcard'});
      this.$store.state.isLeaderBoaedPayment = true;
    },

   },
   created(){

	
   },

   mounted(){
    if(!this.user.PaymentRecord) {
      $("#live_contest_modal").modal("show");
      $("#live_contest_modal").modal({
       backdrop: "static",
       keyboard: false
      });
    }
   },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.screen-bg {
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
    background: #000000a1;
}

</style>