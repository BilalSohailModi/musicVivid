import axios from 'axios';

const dev = 'https://miv.musicisvivid.com/api/';
//var ip=JSON.parse(localStorage.getItem("ipdata")).ip;

export const API = axios.create({
    baseURL: dev,
    headers: {
       
     
       
    }
});


API.interceptors.request.use(function (config) {
    const token = localStorage.getItem('Token');
    // const token = localStorage.getItem('Token');
    // var ip = localStorage.getItem('ipdata');
    // var locale=localStorage.getItem('locale');
    if ( token != null ) {
        config.headers.accessToken = `${token}`;
    }
    // if ( token != null ) {
    //     config.headers.Authorization = `Bearer ${token}`;
    // }
    // if(ip != null ){
    //     config.headers.ip = JSON.parse(localStorage.getItem("ipdata")).ip;
    // }
    // if(locale != null ){
    //     config.headers.locale = locale;
    // }
    return config;
}, function(err) {
    return Promise.reject(err);
});