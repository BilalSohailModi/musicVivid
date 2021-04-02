<template>
<div>
  <div v-if="user">
 <AppHeader></AppHeader>
  </div>
<div class="agreement-text">
    <h2 class="western"><span style="font-size: medium;"><u>Music is Vivid Privacy and Cookies Policy Statement </u></span></h2>
<p align="center"><span style="font-family: Times New Roman, serif;"><span style="font-size: medium;"><em><span style="font-family: Arial, serif;"><span style="font-size: small;"><strong>We are committed to privacy and security for all of our customers.&nbsp; Because we respect your right to privacy, we have developed a Privacy Statement as indicated below.</strong></span></span></em></span></span></p>
<h3 class="western"><br /><br /></h3>
<h3 class="western"><span style="color: #000000;"><span style="font-family: Arial, serif;"><u>YOUR INFORMATION:</u></span></span></h3>
<p><a name="_GoBack"></a> <span style="font-family: Times New Roman, serif;"><span style="font-size: medium;"><span style="color: #656565;"><span style="font-family: Arial, serif;"><span style="font-size: small;">If you are a fan, member or site visitor you may be asked to provide certain contact information and music likes and dislikes and as such you agree when applicable to share your information with musicians and other site visitors. If you purchase something from our store, as part of the buying and selling process, we collect the personal information you give us such as your name, address and email address.</span></span></span> <span style="color: #656565;"><span style="font-family: Arial, serif;"><span style="font-size: small;">If you are a musician, a band or musical group you sign up agreeing to share your data via your Resume, (including your posted music) with other Music is Vivid site visitors, Agents, Agencies and other Musicians and Bands.(A detailed privacy and cookie statement is included with the Artist sign-up agreement).</span></span></span></span></span></p>
<p><span style="color: #656565;"><span style="font-size: small;">With your permission and as part of the sign up process, we may send you emails about our Venues, Contests, Information about Musicians and their genres and store product information and other updates.</span></span></p>
<h3 class="western"><span style="color: #000000;"><span style="font-family: Arial, serif;"><span style="font-size: small;"><u>PERSONAL INFORMATION</u></span></span></span></h3>
<p><span style="font-family: Times New Roman, serif;"><span style="font-size: medium;"><span style="color: #656565;"><span style="font-family: Arial, serif;"><span style="font-size: small;">Under no circumstances do we transfer your email address to any other company, nor do we collect any personal data not included in the Musician resume or visitor/fan sign up process. .</span></span></span></span></span></p>
<p><span style="font-family: Times New Roman, serif;"><span style="font-size: medium;"><span style="color: #656565;"><span style="font-family: Arial, serif;"><span style="font-size: small;">There are two ways you can provide us with and consent to our collection of certain personal information:</span></span></span></span></span></p>
<h3 class="western"><span style="color: #000000;"><span style="font-family: Arial, serif;"><u>E-MAIL REQUEST</u></span></span></h3>
<p><span style="font-family: Times New Roman, serif;"><span style="font-size: medium;"><span style="color: #656565;"><span style="font-family: Arial, serif;"><span style="font-size: small;">Links throughout our site provide you with the opportunity to contact us via e-mail to ask questions, request information and materials, or provide comments and suggestions. You may also be offered the opportunity to have one of our staff contact you personally to provide additional information about our products. To do so, we may request additional personal information from you, such as your name and telephone number, to help us satisfy your request.</span></span></span></span></span></p>
<h3 class="western"><span style="color: #000000;"><span style="font-family: Arial, serif;"><u>SIGNUP OR ENROLLMENT</u></span></span></h3>
<p><span style="font-family: Times New Roman, serif;"><span style="font-size: medium;"><span style="color: #656565;"><span style="font-family: Arial, serif;"><span style="font-size: small;">You may choose to sign up or enroll as an Artist for one of our products or services and we will request certain information from you. Depending on the type of product or service that you request, you may be asked to provide different personal information. For certain products and services, we may require your name, address, telephone number, e-mail address, and credit card number. Other products and services may require different or supplemental information from you in order to apply.</span></span></span></span></span></p>
<h2 class="western"><span style="color: #000000;"><span style="font-family: Arial, serif;"><span style="font-size: small;"><u>YOUR ABILITY TO OPT-OUT OF FURTHER NOTIFICATIONS</u></span></span></span></h2>
<p><span style="font-family: Times New Roman, serif;"><span style="font-size: medium;"><span style="color: #656565;"><span style="font-family: Arial, serif;"><span style="font-size: small;">Periodically, we notify our customers of new products, announcements, and updates. If you would like to opt-out of being notified, please contact us at&nbsp;</span></span></span><span style="font-family: Arial, serif;"><span style="font-size: small;">admin@musicisvivid.com</span></span><span style="color: #656565;"><span style="font-family: Arial, serif;"><span style="font-size: small;"><br /></span></span></span></span></span><br /><br /></p>

</div>
</div>
</template>

<script>
import router from '../router';
import AppHeader from "@/components/AuthHeader.vue";
export default {
  name: 'PrivacyPolicy',
  data() {
   return {
      user: JSON.parse(localStorage.getItem("User")),
   };
  },
  components: {
     AppHeader
},
methods:{

},
created(){

},

mounted(){

},

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.agreement-text {
    margin: 40px;
    box-shadow: 0 1px 6px 0px rgba(0,0,0,0.16);
    padding: 30px;
}
</style>