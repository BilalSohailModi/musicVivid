<template>
<div>
  <div v-if="user">
 <AppHeader></AppHeader>
  </div>
<div class="agreement-text">
    <p><strong>Website disclaimer</strong></p>
<p><strong>1.Introduction</strong></p>
<p>1.1This disclaimer shall govern your use of our website (Music is Vivid website).</p>
<p>1.2By using our website, you accept this disclaimer in full; accordingly, if you disagree with this disclaimer or any part of this disclaimer, you must not use our website.</p>
<p>1.3Our website uses cookies; by using our website or agreeing to this disclaimer, you consent to our use of cookies in accordance with the terms of our [privacy and cookies policy].</p>
<p><strong>2.Copyright notice</strong></p>
<p>2.1Subject to the express provisions of this disclaimer:</p>
<p>(a)we, together with our licensors, own and control all the copyright and other intellectual property rights in our website and the material on our website; and</p>
<p>(b)all the copyright and other intellectual property rights in our website and the material on our website are reserved.</p>
<p><strong>3.Limited warranties</strong></p>
<p>3.1We do not warrant or represent:</p>
<p>(a)the completeness or accuracy of the information published on our website;</p>
<p>(b)that the material on the website is up to date; or</p>
<p>(c)that the website or any service on the website will remain available.</p>
<p>3.2We reserve the right to discontinue or alter any or all of our website services, and to stop publishing our website, at any time in our sole discretion without notice or explanation; and save to the extent expressly provided otherwise in this disclaimer, you will not be entitled to any compensation or other payment upon the discontinuance or alteration of any website services, or if we stop publishing the website.</p>
<p>3.3To the maximum extent permitted by applicable law and subject to Section 4.1, we exclude all representations and warranties relating to the subject matter of this disclaimer, our website and the use of our website.</p>
<p><strong>4.Limitations and exclusions of liability</strong></p>
<p>4.1Nothing in this disclaimer will:</p>
<p>(a)limit or exclude any liability for death or personal injury resulting from negligence;</p>
<p>(b)limit or exclude any liability for fraud or fraudulent misrepresentation;</p>
<p>(c)limit any liabilities in any way that is not permitted under applicable law; or</p>
<p>(d)exclude any liabilities that may not be excluded under applicable law.</p>
<p>4.2The limitations and exclusions of liability set out in this Section 4 and elsewhere in this disclaimer:</p>
<p>(a)are subject to Section 4.1; and</p>
<p>(b)govern all liabilities arising under this disclaimer or relating to the subject matter of this disclaimer, including liabilities arising in contract, in tort (including negligence) and for breach of statutory duty, except to the extent expressly provided otherwise in this disclaimer.</p>
<p>4.3To the extent that our website and the information and services on our website are provided free of charge, we will not be liable for any loss or damage of any nature.</p>
<p>4.4We will not be liable to you in respect of any losses arising out of any event or events beyond our reasonable control.</p>
<p>4.5We will not be liable to you in respect of any business losses, including (without limitation) loss of or damage to profits, income, revenue, use, production, anticipated savings, business, contracts, commercial opportunities or goodwill.</p>
<p>4.6We will not be liable to you in respect of any loss or corruption of any data, database or software.</p>
<p>4.7We will not be liable to you in respect of any special, indirect or consequential loss or damage.</p>
<p>4.8You accept that we have an interest in limiting the personal liability of our officers and employees and, having regard to that interest, you acknowledge that we are a limited liability entity; you agree that you will not bring any claim personally against our officers or employees in respect of any losses you suffer in connection with the website or this disclaimer (this will not, of course, limit or exclude the liability of the limited liability entity itself for the acts and omissions of our officers and employees).</p>
<p><strong>5.Variation</strong></p>
<p>5.1We may revise this disclaimer from time to time.</p>
<p>5.2The revised disclaimer shall apply to the use of our website from the time of publication of the revised disclaimer on the website.</p>
<p><strong>6.Severability</strong></p>
<p>6.1If a provision of this disclaimer is determined by any court or other competent authority to be unlawful and/or unenforceable, the other provisions will continue in effect.</p>
<p>6.2If any unlawful and/or unenforceable provision of this disclaimer would be lawful or enforceable if part of it were deleted, that part will be deemed to be deleted, and the rest of the provision will continue in effect.</p>
<p><strong>7.Law and jurisdiction</strong></p>
<p>7.1This disclaimer shall be governed by and construed in accordance with the law of United States and the State of Florida.</p>
<p>7.2Any disputes relating to this disclaimer shall be subject to the exclusive jurisdiction of the courts of Florida, USA. Any disputes are to be adjudicated in Orlando, Florida as Binding Mediation and shall be conducted according to rules of practice and procedure adopted by the Supreme Court of Florida.</p>
<p>
  <br>
  <br>
</p>

</div>
</div>
</template>
<script>
import router from '../router';
import AppHeader from "@/components/AuthHeader.vue";


export default {
  name: "Disclaimer",
  props: {
    msg: String
  },
  data() {
    return {
      user: JSON.parse(localStorage.getItem("User")),
    };
  },
  components: {
    AppHeader
  },
  methods: {
  },
  created() {},

  mounted() {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .agreement-text {
        margin: 40px;
        box-shadow: 0 1px 6px 0px rgba(0,0,0,0.16);
        padding: 30px;
    }
</style>