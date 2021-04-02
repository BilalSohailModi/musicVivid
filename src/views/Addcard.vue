<template>
  <div>
    <AppHeader></AppHeader>
    <section class="payment-method-container">
      <div class="payment-header">
        <div class="container-fluid">
          <div class="row justify-content-center">
            <div class="col-12 col-lg-10 text-center payment-bg">
              <h1>Payment Method</h1>
            </div>
          </div>
        </div>
      </div>

      <div class="card-wraper-outer">
        <div class="container-fluid">
          <div class="row justify-content-center">
            <div class="col-12 col-lg-10 text-center">
              <div class="payment-card-list-container">
                <div class="card-tab-section">
                  <h1
                    class="innerheading"
                  >{{subDetails ?'Subscription Details' : 'Add Card Details'}}</h1>
                  <div class="payment-info-box" v-if="(subDetails)">
                    <p>
                      <b>Start date :</b>
                      {{subStartDate}}
                    </p>
                    <p>
                      <b>End date :</b>
                      {{subEndDate}}
                    </p>
                    <div
                      v-if="(userDetails.PaymentRecord && (!(userDetails.PaymentRecord.cancelledAt)))"
                    >
                      <a
                        class="cancel-subscription-btn"
                        href="javascript:void(0);"
                        @click="cancelSub()"
                      >Cancel Subscription</a>
                    </div>
                  </div>
                  <div class="card-option" v-if="(!subDetails)">
                    <div class="card-tab-nav">
                      <ul class="nav nav-pills custom-card-pill" role="tablist">
                        <li class="nav-item">
                          <a
                            class="nav-link active"
                            data-toggle="pill"
                            href="#credit-card"
                            v-on:click="cardTypeCheck('credit')"
                          >Credit Card</a>
                        </li>
                      </ul>
                    </div>
                    <!-- <Card
                      class="stripe-card"
                      stripe="pk_test_tf1KQQsDP91dELlJAn0Hk2il"
                      :class="{ complete }"
                      @change="complete = $event.complete"
                    ></Card>-->

                    <div v-if="errmessage" class="error-messages">{{errmessage}}</div>
                    <div class="card-tab-info">
                      <div class="tab-content">
                        <div id="credit-card" class="tab-pane active">
                          <div class="credit-card-wrap">
                            <div class="form-group card-form-group">
                              <label>Card Holder Name</label>
                              <div class="filds-group mb-20">
                                <div class="fild-icon">
                                  <img src="/assets/images/card-holder-icon.png">
                                </div>
                                <input
                                  type="text"
                                  class="filds"
                                  placeholder="Card Holder Name"
                                  id="chname"
                                >
                                <div class="fild-icon-right">
                                  <i class="icon-warning"></i>
                                </div>
                              </div>
                            </div>
                            <div class="form-group card-form-group">
                              <label>Card Number</label>
                              <!-- <img src="/assets/images/card-group.png" class="card-group-img"> -->

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
                            <button type="button" @click="pay('credit')">Pay Securely</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="m-3">
                  <img src="/assets/images/payment-icons.png">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- cancel subscription confirmation modal -->
    <div class="modal contest-modal" id="cancel_subscription_modal">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <!-- Modal body -->
          <div class="modal-body">
            <div class="modal-inner-body">
              <p>Are you sure you want to cancel this subscription?</p>
              <div class="text-center">
                <button class="modal-learn-more">Confirm</button>
                <button class="modal-cancel" data-dismiss="modal">Not Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- card update confirmation modal -->
    <div class="modal contest-modal" id="card_update_modal">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <!-- Modal body -->
          <div class="modal-body">
            <div class="modal-inner-body">
              <p>Are you sure you want to set this card?</p>
              <div class="text-center">
                <button class="modal-learn-more" @click="updateCard()">Confirm</button>
                <button class="modal-cancel" data-dismiss="modal">Not Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { API } from "@/api/api";
import AppHeader from "@/components/AuthHeader.vue";

export default {
  name: "Addcard",
  props: {
    msg: String
  },
  components: {
    AppHeader
    // Card
  },
  data() {
    return {
      user: JSON.parse(localStorage.getItem("User")),
      cardList: [],
      complete: false,
      title: "",
      reporttype: [],
      reportId: "",
      description: "",
      reportdata: false,
      descriptiondata: false,
      content: null,
      cardinvalid: false,
      errmessage: "",
      disabled: true,
      cardId: "",

      defaultCdId: "",

      cardNumber: "",
      cardNumberdb: "",
      cardName: "",
      cardDate: "",
      inputChar: "",
      type: "",
      payBtn: false,
      userDetails: {},

      cardSubBtn: false,
      errorMsg: false,

      subStartDate: "",
      subEndDate: "",
      subDetails: Boolean,
    };
  },
  methods: {
    // subscription

    pay() {
      let cardNumber = $("#ccno")
        .val()
        .replace(/-/g, "");
      let expDate = $("#card-expiry")
        .val()
        .replace(/[\/\\]/g, "");
       let cvvNumber = $("#cvv").val();
      let name = $("#chname")
        .val()
        .split(/(?<=^\S+)\s/);
      let firstName = name[0];
      let lastName = name[1];
      let head2 = {
        headers: { "x-access-token": JSON.parse(localStorage.getItem("Token")) }
      };

      API.post(
        "elavon/subscription",
        {
          card_number: cardNumber,
          exp_date: expDate,
          first_name: firstName,
          last_name: lastName,
          cvv: cvvNumber
        },
        head2
      )
        .then(response => {
          // let CurrentUser = JSON.parse(localStorage.getItem("User"));
          //   CurrentUser.PaymentRecord = response.data;
          //   localStorage.setItem("User", JSON.stringify(CurrentUser));
           swal(
            "Subscription successfully!",
            "Subscription successfully!",
            "success"
          );
          this.loginUserDetails();
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

    // cancel subscription
    cancelSub() {
      if (this.userDetails.PaymentRecord.paymentType === 1) {
      
        let head2 = {
          headers: {
            "x-access-token": JSON.parse(localStorage.getItem("Token"))
          }
        };
        API.post("elavon/cancel-subscription", {}, head2)
          .then(response => {
            swal("Cancel Subscription!", "Cancel Subscription!", "success");
            this.loginUserDetails();
          })
          .catch(error => {
             if(error.response.status === 400) {
               swal("Cancel Subscription!", error.response.data.msg, "error");
               this.errmessage = error.errorName;
             }

          });
      } else {
         swal("Cancel Subscription!", "In app subscription can not be cancelled from here", "error");
      }
    },

    // log in user details

    loginUserDetails() {
      let head2 = {
        headers: { "x-access-token": JSON.parse(localStorage.getItem("Token")) }
      };
      API.get("me", head2)
        .then(response => {
          this.userDetails = response.data;
          if (this.userDetails.PaymentRecord) {
            let subStartDate = new Date(
              this.userDetails.PaymentRecord.initiatedAt
            );
            this.subStartDate = subStartDate.toLocaleDateString();
            if (this.userDetails.PaymentRecord.membershipEndsAt) {
              let subEndDate = new Date(
                this.userDetails.PaymentRecord.membershipEndsAt
              );
              this.subEndDate = subEndDate.toLocaleDateString();
            } else {
              let subEndDateAdd = subStartDate.setMonth(
                subStartDate.getMonth() + 1
              );
              this.subEndDate = new Date(subEndDateAdd).toLocaleDateString();
            }
          }

          if(this.userDetails.PaymentRecord) {
            if(this.userDetails.PaymentRecord.paymentType === 1) {
              if(this.userDetails.PaymentRecord.isActive === 1) {
                this.subDetails = true;
              } else {
                this.subDetails = false;
              }
            } else {
               if(this.userDetails.PaymentRecord.isActive === 1) {
                this.subDetails = true;
               } else {
                  this.subDetails = false;
               }
            }  
          } else {
             this.subDetails = false;
          }
           let CurrentUser = JSON.parse(localStorage.getItem("User"));
            CurrentUser = response.data;
            setTimeout(() => {
              localStorage.setItem("User", JSON.stringify(CurrentUser));
            }, 1000);
            
        })
        .catch(error => {});
    },

    // paymemt section //
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
    }
  },

  created() {
    this.loginUserDetails();
  },

  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.reactive-btn {
  width: auto !important;
  padding: 3px 15px;
  margin: 0px 5px !important;
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
.error-msg {
  width: 30%;
  margin: 0px auto;
}
.card-img {
  height: 43px;
  width: 63px;
}
.payment-info-box {
  background: #f7f7f7;
  max-width: 450px;
  margin: 25px auto;
  padding: 20px 15px;
}
.payment-info-box p:first-child {
  margin-bottom: 0;
}
.cancel-subscription-btn,
.cancel-subscription-btn:hover {
  background: #574995;
  color: #fff;
  padding: 8px 17px;
  text-decoration: none;
  border-radius: 19px;
  font-weight: 600;
  font-size: 14px;
}
</style>
