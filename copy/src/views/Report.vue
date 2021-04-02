<template>
<div>
<AppHeader></AppHeader>
  <div class="profile-dashboard-area edit">
        <div class="row justify-content-center">

            <div class="col-12 col-lg-10">
                <div class="profile-right-section-edit report-content-area">
                    <form>
                        <div class="changr-pswd-contaoner">
                            <p class="text-center">
                                <img src="/assets/images/report.png" class="img-fluid">

                            </p>
                            <h1 class="change-pswd-heading">Report</h1>
                            <div class="form-group mb-3">
                                <label>Classify</label>
                                <div class="report-radio-btn-container" v-if=" this.reporttype.length>0">
                                    <div class="error-messages" v-if="reportdata"> Please Select Report Type</div>
                                    <label class="report-radio-btn">
                                      
											<input type="radio" :value="reporttype[0].id" @change="saveid" class="check-report" name="report-category">
											<span class="report-check">
													<img src="/assets/images/general-discussion.png" alt="icon">
											</span>
											<span class="report-check-text">General Discussion</span>
										</label>
                                    <label class="report-radio-btn">
												<input type="radio" :value="reporttype[1].id"  class="check-report"  @change="saveid" name="report-category">
												<span class="report-check">
														<img src="assets/images/problem-width-ac.png" alt="icon">
												</span>
												<span class="report-check-text">Problem with Account</span>
											</label>
                                    <label class="report-radio-btn">
													<input type="radio" :value="reporttype[2].id" class="check-report"   @change="saveid"  name="report-category">
													<span class="report-check">
															<img src="/assets/images/others-category.png" alt="icon">
													</span>
													<span class="report-check-text">Other</span>
												</label>
                                </div>
                            </div>
                            <div class="form-group mb-3">
                                <label>Specify</label>
                                <textarea class="form-control report-specify-area" v-model="description"></textarea>
                                <div class="error-messages"  v-if="descriptiondata">Please Specify Your Report</div>
                            </div>
                            <div class="row justify-content-center">
                                <div class="col-auto">
                                    <button class="btn-signin d-inline-block" @click="submitreport" type="button">Save</button>
                                    <router-link :to="`/profile`" class="btn-cancel" >Cancel</router-link>
                                </div>
                            </div>
                        </div>

                    </form>
                </div>


            </div>
        </div>
    </div>
    </div>
</template>

<script>
import { API } from "@/api/api";
import AppHeader from "@/components/AuthHeader.vue";
export default {
  name: 'Report',
  props: {
    msg: String
  },
   components: {
    AppHeader
  
  },
    data() {
      return {
          reporttype:[],
         reportId:'',
        description:'',
        reportdata:false,
        descriptiondata:false,
      };
    },
    methods:{
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
          API.get("report", {
      
        headers: { "x-access-token": JSON.parse(localStorage.getItem("Token")) }
      })
        .then(response => {
          if (response.data) {
                this.reporttype=  response.data.data;
                console.log(this.reporttype);
          }
        })
        .catch(error => {});
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

</style>
