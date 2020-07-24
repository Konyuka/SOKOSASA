import Vue from 'vue';
import App from './App.vue';
import router from './router';
import NowUiKit from './plugins/now-ui-kit';
import { Modal } from '@/components';
Vue.use(NowUiKit);

//jQuery, Bootstrap & Popper.js
import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;
import 'popper.js';
import 'bootstrap';


// Importing Firebase
import {fb}   from './firebase';
import VueFirestore from 'vue-firestore';
require('firebase/firestore');

Vue.use(VueFirestore, {
  key: 'id',         // the name of the property. Default is '.key'.
  enumerable: true  //  whether it is enumerable or not. Default is true.
});

Vue.component(Modal);

Vue.use(VueFirestore);

//Firebase Mobile Auth
// Create a Recaptcha verifier instance globally
// Calls submitPhoneNumberAuth() when the captcha is verified
// window.recaptchaVerifier = new fb.auth.RecaptchaVerifier(
//     "recaptcha-container",
//     {
//     size: "normal",
//     callback: function(response) {
//         submitPhoneNumberAuth();
//     }
//     }
// );

// Import Store
import store from '@/store.js';

//Sweet Alert
import Swal from 'sweetalert2';
window.Swal = Swal;
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 6000
});
window.Toast = Toast;


// Loadash
import VueLodash from 'vue-lodash';
import lodash from 'lodash';


// Vue Filters
import Vue2Filters from 'vue2-filters';
Vue.use(Vue2Filters);

//Font fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faUserSecret);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.use(NowUiKit);


let app = '';

fb.auth().onAuthStateChanged(user => {

  if(!app){

    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");

  }

});
