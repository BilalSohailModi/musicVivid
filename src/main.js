
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import VueProgressBar from 'vue-progressbar'
import VeeValidate from "vee-validate"
import axios from 'axios'
import _ from 'lodash'
import moment from 'moment'
import Datetime from 'vue-datetime'
import VueTransmit from "vue-transmit";
import 'vue-datetime/dist/vue-datetime.css'
var SocialSharing = require('vue-social-sharing');
import VueHead from 'vue-head'
import Meta from 'vue-meta';
import VueCropper from 'vue-cropperjs';
import 'cropperjs/dist/cropper.css';
import VueVideoPlayer from 'vue-video-player';
import 'video.js/dist/video-js.css'

import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-default.css';

Vue.component(VueCropper);

Vue.prototype.moment = moment;

const options = {
  color: '#991a2e',
  failedColor: '#991a2e',
  thickness: '3px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  inverse: false
}

Vue.use(VueToast)
Vue.use(SocialSharing);
Vue.use(VeeValidate);
Vue.use(VueTransmit);
Vue.use(Datetime);
Vue.use(VueProgressBar, options);
Vue.use(VueHead)
Vue.use(Meta,{
  keyName: 'metaInfo', // the component option name that vue-meta looks for meta info on.
  attribute: 'data-vue-meta', // the attribute name vue-meta adds to the tags it observes
  ssrAttribute: 'data-vue-meta-server-rendered', // the attribute name that lets vue-meta know that meta info has already been server-rendered
  tagIDKeyName: 'vmid' // the property name that vue-meta uses to determine whether to overwrite or append a tag
});
Vue.use(VueVideoPlayer);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
