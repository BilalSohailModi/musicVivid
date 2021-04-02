<template>
  <div class="nothome">
    <!-- <AppHeader></AppHeader> -->
    <!-- <div>
            First Name: <input type="text" id="name" name="ssl_first_name" size="25"> <br><br>
            Last Name: <input type="text" id="lastname" name="ssl_last_name" size="25"> <br><br>
            Transaction Amount: <input type="text" id="ssl_amount" name="ssl_amount"> <br> <br>
            <button @click="initiateCheckoutJS()">Click to Confirm Order</button> <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        Transaction Token: <input id="token" type="text" name="token"> <br />

        Card Number: <input id="card" type="text" name="card" value="4124939999999990" /> <br />
        Expiry Date: <input id="exp" type="text" name="exp" value="1219" /> <br />
        CVV2: <input id="cvv" type="text" name="cvv" value="123"> <br />
        Merchant TXN ID: <input id="merchanttxnid" type="text" name="merchanttxnid" value="MerchantTXNIDHere" /> <br />
        <input id="gettoken" type="hidden" name="gettoken" value="y" />
        <input id="addtoken" type="hidden" name="addtoken" value="y" />
        <button onclick="return pay();">Process Payment</button>

        <br>
        <br>
        <br>
        <br>
        Transaction Status:<div id="txn_status"></div>
        <br>
        Transaction Response:<div id="txn_response"></div>
    </div>-->

          <div class="searchmaingb">
      <div class="seacrhsubdiv paymentpage">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="seacrhsubdivtitle pd-20">Make Payment</div>
                
              <div class="alert alert-danger alert-dismissible error-msg" v-if="errorMsg">
                <button type="button" class="close" @click="(errorMsg = false)">&times;</button>
                Please Select a Card
              </div>

              <div class="">
                <div class="row">
                  <div v-for="(card,index) in cardList" :key="index" class="col-md-4 col-sm-6">
                    <div class="card-block">
                      <label>
                        <input
                          @click="selectedCard(card.id)"
                          type="radio"
                          class="caredcheck"
                          name="card-name"
                        >
                        <div class="card-name-box clearfix">
                          <h1 class="card-type float-left">{{card.brand}}</h1>
                          <img
                            v-if="card.brand=='Visa'"
                            src="/assets/images/visa-card-img.png"
                            alt="card-icon"
                            class="float-right card-img"
                          >
                          <img
                            v-if="card.brand=='American Express'"
                            src="/assets/images/american-address-icon.png"
                            alt="card-icon"
                            class="float-right card-img"
                          >
                          <img
                            v-if="card.brand=='Discover'"
                            src="/assets/images/discover-card.png"
                            alt="card-icon"
                            class="float-right card-img"
                          >
                          <img
                            v-if="card.brand=='MasterCard'"
                            src="/assets/images/master-card.png"
                            alt="card-icon"
                            class="float-right card-img"
                          >
                        </div>
                        <div class="pay-card-body">
                          <h1 class="card-number">
                            <span>****</span>
                            <span>****</span>
                            <span>****</span>
                            {{card.last4}}
                          </h1>
                          <p class="exp-date">
                            Expires
                            <span>{{card.exp_month}}/{{card.exp_year}}</span>
                          </p>
                        </div>
                        <div class="action-btn-box">
                          <ul class="list-inline">
                            <li
                              class="card-select-check-mark checkmark"
                              v-if="(card.id === cardId)"
                            >
                              <img src="/assets/images/card-check-icon.png" alt="icon">
                            </li>
                            <!-- <li
                                class="card-select-check-mark"
                                v-if="(card.id !== userDetails.defaultCardId)"
                              >
                                <button @click="deletecard(card.id)">
                                  <i class="icon-rubbish-bin"></i>
                                </button>
                            </li>-->
                          </ul>
                        </div>
                        <span class="check-shadow"></span>
                      </label>
                    </div>
                  </div>
                </div>
                <div class="payment-btn-container text-center">
                  <button
                    v-if="cardList.length && !userDetails.PaymentRecord"
                    @click="paySecurely()"
                  >Pay securely</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="listpopulardiv">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-6 col-lg-6 alignright">
              <div class="membership_plan_outer clearfix">
                <div class="membership_plan">
                  <h3>Membership Plan</h3>
                  <p>First 7 Days Free Members Only Vote</p>
                  <ul>
                    <li>
                      <span class="announcement_icon">
                        <img src="/assets/images/annoucement.svg">
                      </span>
                      <span>
                        Vote for Your Favorite Artist ..
                        Only Members Vote..Your 100% in Charge
                      </span>
                    </li>
                    <li>
                      <span class="announcement_icon">
                        <img src="/assets/images/contest_icon.svg">
                      </span>
                      <span>Unlimited music contest</span>
                    </li>
                    <li>
                      <span class="announcement_icon">
                        <img src="/assets/images/vote_icon.svg">
                      </span>
                      <span>
                        Members only Vote, see results and
                        get Leaderboard access
                      </span>
                    </li>
                  </ul>
                  <div class="member_price">
                    For
                    <sup>$</sup>
                    <font>3.99/</font>mo
                  </div>
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-6 custompaddingm">
              <div class="form-group card-form-group" v-if="userDetails">
                <label>Full Name</label>
                <div class="filds-group mb-20">
                  <div class="fild-icon">
                    <img src="/assets/images/card-holder-icon.png">
                  </div>
                  <input
                    type="text"
                    class="filds input-field"
                    placeholder="Full Name"
                    v-model="userDetails.fullName"
                    disabled
                  >
                  <div class="fild-icon-right">
                    <i class="icon-warning"></i>
                  </div>
                </div>
              </div>
              <div class="form-group card-form-group">
                <label>Email Address</label>
                <div class="filds-group mb-20">
                  <div class="fild-icon">
                    <img src="/assets/images/mail-icon.png">
                  </div>
                  <input
                    type="text"
                    class="filds input-field"
                    placeholder="Email Address"
                    v-model="userDetails.email"
                    disabled
                  >
                  <div class="fild-icon-right">
                    <i class="icon-warning"></i>
                  </div>
                </div>
              </div>
              <div v-if="cardinvalid" class="error-messages">{{errmessage}}</div>
              <div class="card-option">
                <div class="card-tab-nav">
                  <ul class="nav nav-pills custom-card-pill" role="tablist">
                    <li class="nav-item">
                      <a
                        class="nav-link active show"
                        data-toggle="pill"
                        href="#credit-card"
                      >Credit Card</a>
                    </li>
                    <!-- <li class="nav-item">
                      <a class="nav-link" data-toggle="pill" href="#debit-card">Debit Card</a>
                    </li> -->
                  </ul>
                </div>
                <div class="card-tab-info">
                  <div class="tab-content">
                    <div id="credit-card" class="tab-pane active show">
                      <div class="credit-card-wrap">
                        <div class="form-group card-form-group">
                          <label>Card Holder Name</label>
                          <div class="filds-group mb-20">
                            <div class="fild-icon">
                              <img src="/assets/images/card-holder-icon.png">
                            </div>
                            <input type="text" class="filds" placeholder="Card Holder Name"  id="chname">
                            <div class="fild-icon-right">
                              <i class="icon-warning"></i>
                            </div>
                          </div>
                        </div>
                        <div class="form-group card-form-group">
                          <label>Card Number</label>
                          <div
                            class="filds-group mb-20"
                            v-bind:class="{'visa': cardName === 'Visa' && cardNumber, 
                                'masterCard': cardName === 'MasterCard' && cardNumber,
                                'american-express': cardName === 'American Express' && cardNumber,
                                'discover': cardName === 'Discover' && cardNumber}"
                          >
                            <span class="cardIco"></span>
                            <div class="fild-icon">
                              <img src="/assets/images/card-number-icon.png">
                            </div>
                            <input
                              type="text"
                              class="filds creditCardText"
                              placeholder="xxxx-xxxx-xxxx-xxxx"
                              v-model="cardNumber"
                              v-on:keyup="GetCardType()"
                              v-on:keydown="GetCardType()"
                              maxlength="19"
                              id="ccno"
                            >
                            <div class="fild-icon-right">
                              <i class="icon-warning"></i>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-sm-6 col-md-4">
                            <div class="form-group card-form-group">
                              <label>Expiration Date</label>
                              <div class="filds-group mb-20">
                                <input
                                  type="text"
                                  class="filds exp-date"
                                  placeholder="mm/yy"
                                  v-model="cardDate"
                                  v-on:keyup="formatString()"
                                  maxlength="5"
                                  id="card-expiry"
                                >
                                <div class="fild-icon">
                                  <img src="/assets/images/exp-calender.png">
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="col-sm-6 col-md-4">
                            <div class="form-group card-form-group">
                              <label>CVV</label>
                              <div class="filds-group mb-20">
                                <input
                                  type="password"
                                  class="filds cvv-code"
                                  placeholder="***"
                                  maxlength="3"
                                  id="cvv"
                                >
                                <div class="fild-icon">
                                  <img src="/assets/images/cvv-icon.png">
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="payment-btn-container text-center">
                        <button type="submit" @click="subscribe()">Pay securely</button>
                      </div>
                    </div>
                    <!-- <div id="debit-card" class="tab-pane fade">
                      <div class="credit-card-wrap">
                        <div class="form-group card-form-group">
                          <label>Card Holder Name</label>
                          <div class="filds-group mb-20">
                            <div class="fild-icon">
                              <img src="/assets/images/card-holder-icon.png">
                            </div>
                            <input type="text" class="filds" placeholder="Card Holder Name">
                            <div class="fild-icon-right">
                              <i class="icon-warning"></i>
                            </div>
                          </div>
                        </div>
                        <div class="form-group card-form-group">
                          <label>Card Number</label>
                          <div
                            class="filds-group mb-20"
                            v-bind:class="{'visa': cardName === 'Visa' && cardNumberdb, 
                                'masterCard': cardName === 'MasterCard' && cardNumberdb,
                                'american-express': cardName === 'American Express' && cardNumberdb,
                                'discover': cardName === 'Discover' && cardNumberdb}"
                          >
                            <span class="cardIco"></span>
                            <div class="fild-icon">
                              <img src="/assets/images/card-number-icon.png">
                            </div>
                            <input
                              type="text"
                              class="filds creditCardText"
                              placeholder="xxxx-xxxx-xxxx-xxxx"
                              v-model="cardNumberdb"
                              v-on:keyup="GetCardTypedb()"
                              v-on:keydown="GetCardTypedb()"
                              maxlength="19"
                              id="dbccno"
                            >
                            <div class="fild-icon-right">
                              <i class="icon-warning"></i>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-sm-6 col-md-4">
                            <div class="form-group card-form-group">
                              <label>Expiration Date</label>
                              <div class="filds-group mb-20">
                                <input type="text" class="filds exp-date" placeholder="mm/yy"
                                v-on:keyup="formatStringdb()" id="dbcard-expiry" maxlength="5">
                                <div class="fild-icon">
                                  <img src="/assets/images/exp-calender.png">
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="col-sm-6 col-md-4">
                            <div class="form-group card-form-group">
                              <label>CVV</label>
                              <div class="filds-group mb-20">
                                <input
                                  type="password"
                                  class="filds cvv-code"
                                  placeholder="***"
                                  maxlength="3"
                                  id="dbcvv"
                                >
                                <div class="fild-icon">
                                  <img src="/assets/images/cvv-icon.png">
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="payment-btn-container text-center">
                        <button type="submit" @click="subscribe()">Save & Pay</button>
                      </div>
                    </div> -->
                  </div>
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
import { ALL_PATH } from "@/Constants/Constants";
import { HELPER } from "@/Helper/Helper";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import AppHeader from "@/components/UnauthHeader.vue";
import axios from "axios";
import AppFooter from "@/components/ComonFotter.vue";
import InfiniteLoading from "vue-infinite-loading";
import LeftManu from "@/components/LeftManu.vue";
import { API } from "@/api/api";
import router from "../router";

export default {
  name: "makePayment",
  props: ["tokenId"],
  components: {
    AppHeader,
    AppFooter,
    LeftManu,
    Loading,
    InfiniteLoading
  },
  data() {
    return {
      cardList: [],
      user: "",
      userDetails: {},
      cardId: "",
      errmessage: "",
      cardName: "",
      cardNumber: "",
      cardNumberdb: "",
      cardinvalid: false,
      cardDate: "",
      newCardId: "",
      errorMsg: false
    };
  },
  methods: {
   // get card type
    GetCardType() {
      let number = $("#ccno").val();
      var re = new RegExp("^4");
      if (number.match(re) != null) this.cardName = "Visa";

      re = new RegExp("^(34|37)");
      if (number.match(re) != null) this.cardName = "American Express";

      re = new RegExp("^5[1-5]");
      if (number.match(re) != null) this.cardName = "MasterCard";

      re = new RegExp("^6011");
      if (number.match(re) != null) this.cardName = "Discover";

      $(".creditCardText").keyup(function() {
        var foo = $(this)
          .val()
          .split("-")
          .join(""); // remove hyphens
        if (foo.length > 0) {
          foo = foo.match(new RegExp(".{1,4}", "g")).join("-");
        }
        $(this).val(foo);
      });
    },

    formatString() {
      $("#dbcard-expiry").val("");
      this.inputChar = String.fromCharCode(event.keyCode);
      var code = event.keyCode;
      var allowedKeys = [8];
      if (allowedKeys.indexOf(code) !== -1) {
        return;
      }
      event.target.value = event.target.value
        .replace(
          /^([1-9]\/|[2-9])$/g,
          "0$1/" // 3 > 03/
        )
        .replace(
          /^(0[1-9]|1[0-2])$/g,
          "$1/" // 11 > 11/
        )
        .replace(
          /^1([3-9])$/g,
          "01/$1" // 13 > 01/3 //UPDATED by NAVNEET
          // ).replace(
          //   /^(0?[1-9]|1[0-2])([0-9]{2})$/g, '$1/$2' // 141 > 01/41
        )
        .replace(
          /^0\/|0+$/g,
          "0" // 0/ > 0 and 00 > 0 //UPDATED by NAVNEET
        )
        .replace(
          /[^\d|^\/]*/g,
          "" // To allow only digits and `/` //UPDATED by NAVNEET
        )
        .replace(
          /\/\//g,
          "/" // Prevent entering more than 1 `/`
        );
    },


    // save card details
    // pay() {
    //   this.cardinvalid = false;
    //   this.errmessage = "";
    //   let cardObj = {
    //     number: $("#ccno").val() || $("#dbccno").val(),
    //     cvc: $("#cvv").val() || $("#dbcvv").val(),
    //     exp: $("#card-expiry").val() || $("#dbcard-expiry").val(),
    //     name: $("#chname").val() || $("#dbchname").val()
    //   };
    //   window.Stripe["card"].createToken(cardObj, (result, response) => {
    //     if (response.error) {
    //       this.cardinvalid = true;
    //       this.errmessage = response.error.message;
    //     } else {
    //       console.log("result", result, response.id);
    //       this.addCard(response.id);
    //       this.inputChar = "";
    //       $(":input").val("");
    //       this.cardNumberdb = "";
    //       this.cardNumber = "";
    //     }
    //   });
    // },

    // // card add
    // addCard(tokenId) {
    //   let head2 = {
    //     headers: {
    //       "x-access-token": localStorage.getItem("appUserToken")
    //     }
    //   };
    //   API.post("stripe/add-card", { source: tokenId }, head2)
    //     .then(response => {
    //       if (response.data) {
    //         this.newCardId = response.data.data.cardId;
    //         console.log("new card id ==>", this.newCardId);
    //         this.payment(this.newCardId);
    //         // swal("Card Added!", "Card Added Successfully !", "success");
    //       }
    //     })
    //     .catch(error => {});
    // },

    subscribe() {
      let cardNumber = $("#ccno").val().replace(/-/g, "");
      let expDate = $("#card-expiry").val().replace(/[\/\\]/g,'');
      let name = $("#chname").val().split(/(?<=^\S+)\s/);
      let firstName =name[0];
      let lastName = name[1];
      let cvvNumber = $("#cvv").val();
      let head2 = {
        headers: { "x-access-token": localStorage.getItem("appUserToken") }
      };
      console.log(cardNumber,expDate,name);
      API.post("elavon/subscription", {
         card_number: cardNumber,
         exp_date : expDate,
         first_name:  firstName,
         last_name: lastName,
         cvv: cvvNumber
         }, head2)
        .then(response => {
          console.log(response);
          this.loginUserDetails();
          window.location.href = '/payment-success';
        })
        .catch(error => {
           if (error.response.status === 400) {
            if(error.response.data.error_msg) {
                this.errmessage = error.response.data.error_msg;
            } else {
                this.errmessage = error.response.data.errorName;
            }   
          }
        });
    },

    // log in user details
    loginUserDetails() {
      let head2 = {
        headers: {
          "x-access-token": localStorage.getItem("appUserToken")
        }
      };
      API.get("me", head2)
        .then(response => {
          console.log(
            "user details res ==>",
            JSON.parse(JSON.stringify(response)));
          this.userDetails = response.data;
        })
        .catch(error => {});
    },
    
  },
  created() {
    this.loginUserDetails();
  },

  mounted() {},

  updated() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.card-img {
  height: 43px;
  width: 63px;
}
.cardIco {
  display: block;
  position: absolute;
  top: 2px;
  right: 8px;
  width: 32px;
  height: 32px;
  background: url(/assets/images/card-icon.png) no-repeat 0 32px;
}
.visa .cardIco {
  background-position: 0 0;
}
.masterCard .cardIco {
  background-position: 0 -32px;
}
.american-express .cardIco {
  background-position: 0 -96px;
}
.discover .cardIco {
  background-position: 0 -128px;
}
.input-field {
  font-weight: bold;
}
.pd-20 {
  padding: 20px 0px;
}
</style>
