<template>
<div>
<AppHeader></AppHeader>
 <div class="profile-dashboard-area edit">
        <div class="row justify-content-center">

            <div class="col-12 col-lg-10">
                <div class="profile-right-section-edit">
                    <div class="privacy-policy-container">
                        <h2>{{title}}</h2>
                        <br>
                        <div v-html="content"></div>
                    </div>
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
  name: 'Leagal',
  props: {
    msg: String
  },
   components: {
    AppHeader
  
  },
    data() {
      return {
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
          API.get("cms-data?type=1", {
      
        headers: { "x-access-token": JSON.parse(localStorage.getItem("Token")) }
      })
        .then(response => {
          if (response.data) {
               
               this.content =  response.data.data.content;
               this.title =  response.data.data.title;

          }
        })
        .catch(error => {});
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

</style>
