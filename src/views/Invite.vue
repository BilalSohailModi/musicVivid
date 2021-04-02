<template>
<div>
<AppHeader></AppHeader>
 <section class="invite-container">
        <div class="invite-inner-top">
            <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="col-12 col-lg-10 text-center">
                        <div class="invite-top-section">
                            <img src="/assets/images/invite-page-img.png" alt="image">
                            <h1>Invite Your Friend to Join MIV</h1>
                            <!-- <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the .</p> -->
                            <div class="invite-url-sec">
                                <div class="input-group">
                                    <input type="text" class="form-control"  value="www.musicisvivid.com" id="myInput">
                                    <div class="input-group-append">
                                        <button class="btn btn-info" type="button" @click="copyurl"><img src="/assets/images/copy-icon.png">Copy Link</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="invite-body-container">
            <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="col-12 col-lg-10">
                        <div class="invite-body-inner">
                            <div class="invite-media media">
                                <img src="/assets/images/share_graphic.png" class="media-img">
                                <div class="media-body">
                                    <h4>Share this link or invite your friend</h4>
                                    <p>Simply enter your friends name and email to send a signup link to sign up. By doing this you are helping independent Artist's become truly known.</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="invite-form-container">
                                        <h1>Through email</h1>
                                        <div class="filds-group mb-20">
                                            <div class="fild-icon">
                                                <img src="/assets/images/card-holder-icon.png">
                                            </div>
                                            <input type="text" class="filds" v-model="name" placeholder="Full Name" id="">
                                            <div class="fild-icon-right">
                                                <i class="icon-warning"></i>
                                            </div>
                                        </div>
                                        <div class="filds-group mb-20" :class="{'input': true, 'error': errors.has('email') }">
                                            <div class="fild-icon">
                                                <img src="/assets/images/grey-mail-icon.png">
                                            </div>
                                            <input type="email" class="filds" v-model="email" name="email" v-validate="'required|email'" placeholder="Email Address" id="">
                                            <div class="fild-icon-right">
                                                <i class="icon-warning">
                                                    	<span class="message" v-show="errors.has('email')">{{ errors.first('email') }}</span>
                                                </i>
                                            </div>
                                        </div>
                                        <div class="text-center">
                                            <button type="button" @click="invitefriend" class="invite-btn">Invite Friend</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="invite-via-social">
                                        <h1>Through Social Media</h1>
                                        <p>Invite your friend through Facebook, Twitter, Instagram, Pinterest and let them join.</p>
                                        <ul class="share-list">
                                            <social-sharing 
                                            url="http://www.musicisvivid.com"
                                            network-tag="li"
                    
                      inline-template>
                      <div>
              
      <network network="facebook">
        <i class="fa fa-facebook"></i> Facebook
      </network>
      <network network="googleplus">
        <i class="fa fa-google-plus"></i> Google +
      </network>
      <network network="twitter">
        <i class="fa fa-twitter"></i> Twitter
      </network>
      
    
      <network network="pinterest">
        <i class="fa fa-pinterest"></i> Pinterest
      </network>
       
                      </div>
                      </social-sharing>
                                            <!-- <li>
                                                <a href="javascript:;" target="_blank"><img src="/assets/images/facebook.png" alt="facebook"></a>
                                            </li>
                                            <li>
                                                <a href="javascript:;" target="_blank"><img src="/assets/images/twitter.png" alt="facebook"></a>
                                            </li>
                                            <li>
                                                <a href="javascript:;" target="_blank"><img src="/assets/images/instagram.png" alt="facebook"></a>
                                            </li>
                                            <li>
                                                <a href="javascript:;" target="_blank"><img src="/assets/images/pinterest.png" alt="facebook"></a>
                                            </li> -->
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
</template>

<script>
import { API } from "@/api/api";
import AppHeader from "@/components/AuthHeader.vue";
export default {
  name: 'Invite',
  props: {
    msg: String
  },
   components: {
    AppHeader
  
  },
    data() {
      return {
          name:'',
          email:'',
           title:'',
          reporttype:[],
         reportId:'',
        description:'',
        reportdata:false,
        descriptiondata:false,
          content:null
      };
    },
    methods:{
        invitefriend(){
            this.$validator.validateAll().then(result => {
          if (result) {
                          let head2 = {
        headers: { "x-access-token": JSON.parse(localStorage.getItem("Token")) }
      };
        API.post("invite-by-email", {email:this.email}, head2)
        .then(response => {
          if (response.data) {
              this.$validator.reset()
              this.name = '' ;
              this.email='';
               
             
            swal("Email Sent!", "Invite Sent Successfuly !", "success");
          }
        })
        .catch(error => {
         
        });



          }});
        },
        copyurl(){
            var copyText = document.getElementById("myInput");

  /* Select the text field */
  copyText.select();

  /* Copy the text inside the text field */
  document.execCommand("copy");
        },
        saveid(e){
            this.reportId = e.target.value;
        },
       submitreport(){
                if(this.reportId==''){
                this.reportdata = true;
                
                }
                else if(this.description==''){
                    this.descriptiondata =true;
                }
                else{  
                      this.reportdata = false;
                       this.descriptiondata =false;
                    let head2 = {
        headers: { "x-access-token": JSON.parse(localStorage.getItem("Token")) }
      };
                         API.post("user-report", {reportId:this.reportId,description:this.description}, head2)
        .then(response => {
          if (response.data) {
              this.reportId = '' ;
              this.description='';
               
              $(".check-report").prop('checked', false);
            swal("Report Sent!", "Report Sent Successfuly !", "success");
          }
        })
        .catch(error => {
         
        });
                }

           
       } 
    },
    created(){
          API.get("cms-data?type=2", {
      
        headers: { "x-access-token": JSON.parse(localStorage.getItem("Token")) }
      })
        .then(response => {
          if (response.data) {
               
             
          }
        })
        .catch(error => {});
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

</style>
