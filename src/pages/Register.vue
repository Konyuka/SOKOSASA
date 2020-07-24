<template>
  <div class="page-header clear-filter" filter-color="orange">
    <div
      class="page-header-image"
      style="background-image: url('img/images/bg.jpg')"
    ></div>
    <div class="content mt-5">
      <div class="container">
        <div class="col-md-5 ml-auto mr-auto">
          <card type="login" plain>
            <h1 class="brand">SOKO SASA</h1>

            <fg-input
              class="no-border input-lg form-group"
              addon-left-icon="fas fa-edit"
              placeholder="Name"
              v-model.trim="name"
              type="text"
              id="name"
            >
            </fg-input>

            <fg-input
            class="no-border input-lg form-group"
            addon-left-icon="fas fa-edit"
            placeholder="Phone"
            v-model.trim="phone"
            type="text"
            id="phone"
            >
          </fg-input>

            <fg-input
              class="no-border input-lg"
              addon-left-icon="fas fa-edit"
              placeholder="Email"
              v-model.trim="email"
              type="email"
              id="email"
            >
            </fg-input>


            <fg-input
              class="no-border input-lg"
              addon-left-icon="now-ui-icons text_caps-small"
              placeholder="Password"
              v-model.trim="password"
              type="password"
              id="password"
              @keyup.enter="register"
            >
            </fg-input>

            <template slot="raw-content">
              <div class="card-footer text-center">
                <button
                  href=""
                  class="btn btn-primary btn-round btn-lg btn-block"
                  @click="register"
                  > <span> <i class="fas fa-user-plus"></i> REGISTER</span> </button
                >
              </div>
              <hr>
              <div class="pull-left">
                <h6>
                  <router-link to="/login">
                  <n-button type="primary">
                    <span> <i class="fas fa-sign-in-alt"></i> LOGIN</span>
                  </n-button>
                  </router-link>
                </h6>
              </div>
              <div class="pull-right">
                <h6>
                  <n-button type="primary">
                    <span> <i class="fas fa-question"></i> ENQUIRIES</span>
                  </n-button>
                </h6>
              </div>
            </template>
          </card>
        </div>
      </div>
    </div>
    <main-footer></main-footer>
  </div>
</template>
<script>
import { Card, Button, FormGroupInput } from '@/components';
import MainFooter from '@/layout/MainFooter';

// Importing Firebase
import {fb,db} from '@/firebase'


export default {
  name: 'login-page',
  bodyClass: 'login-page',
  components: {
    Card,
    MainFooter,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
  },

  watch: {

    '$route' () {
      $(".page-wrapper").toggleClass("toggled");
    }
  },

  data(){
      return {
          name:'',
          email:null,
          phone:null,
          password:null,
          id:null,
      }
  },
  methods:{
      register(){
            const { user }  =  fb.auth().createUserWithEmailAndPassword(this.email, this.password)
                .then((user) => {

                    db.collection("profiles").doc(user.user.uid).set({
                        name: this.name,
                        email: this.email,
                        phone: this.phone
                    })
                    .then(() => {
                      // fetch user profile
                      const userProfile = db.collection("profiles").doc(user.uid).get()
                      console.log(this.userProfile.uid);
                      // set user profile in state
                      // commit('setUserProfile', userProfile.data())


                    })
                    .catch((error) => {
                        console.error("Error writing document: ", error);
                    });

                    this.$router.replace('/admin/products');
                    Toast.fire({
                      type: 'success',
                      title: 'Karibu Soko Sasa!'
                    });



                })
                .catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                if (errorCode == 'auth/weak-password') {
                    alert('The password is too weak.');
                } else {
                    alert(errorMessage);
                }
                console.log(error);
            });

      }

  }
};
</script>
<style></style>
