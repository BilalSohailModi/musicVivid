<template>
<div class="homegb">
<AppHeader></AppHeader>
			<div v-if="!$store.state.registerstep2">
				<FanRegisterStep1></FanRegisterStep1>
			</div>
			<div v-else-if="$store.state.registerstep2 && !$store.state.otprecive">
				<FanRegisterStep2></FanRegisterStep2>
			</div>
      <div  v-if="$store.state.otprecive">
        <FanRegisterOtp></FanRegisterOtp>
      </div>
			
	
        <AppFooter></AppFooter>
        </div>
</template>

<script>
import AppHeader from "@/components/UnauthHeader.vue";
import FanRegisterStep1 from "@/components/FanRegisterStep1.vue";
import FanRegisterStep2 from "@/components/FanRegisterStep2.vue";
import axios from "axios";
import AppFooter from "@/components/ComonFotter.vue";
export default {
  name: "FanRegister",
  props: {
    msg: String
  },
  components: {
    AppHeader,
	AppFooter,
FanRegisterStep1,
FanRegisterStep2,

  },
    data() {
      return {
        isError:false,
		errorMessage:"",
		step2:false
      };
	}

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
