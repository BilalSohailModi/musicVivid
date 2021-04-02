import { API } from "@/api/api";

export const HELPER = {
  getUser(imgUrl="", callback) {
    var head = { headers: { 'x-access-token':JSON.parse(localStorage.getItem("Token"))} }
    API.get("edit-profile-details", head ).then(response => {
      if (response.data) {
        if(imgUrl=='profile'){
          callback(response.data.data);
        }
        if(imgUrl==''){
          callback(response.data.data.user);
        }
      }
    }).catch(error => {
      console.error(error)
    });        
  }
}