<template>
  <div class="products">
      <div class="container">

        <div class="intro h-100">
            <div class="row h-100 align-items-center">
              <div class="col-md-6 ml-3">
                    <h3>Profile settings</h3>

                 <p>
                   Change your profile settings here
                 </p>
              </div>
            </div>
          </div>


          <div class="profile-content">

          <ul class="nav nav-pills ml-3" id="myTab" role="tablist">

            <li class="nav-item notiflowish">
              <a class="nav-link active" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="true">Profile</a>
            </li>

            <li class="nav-item notiflowish">
              <a class="nav-link"  id="account-tab" data-toggle="tab" href="#account" role="tab" aria-controls="account" aria-selected="false">Reset Password</a>
            </li>

          </ul>

            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active pt-3" id="profile" role="tabpanel" aria-labelledby="profile-tab">

                  <div class="container">
                      <div class="row">

                        <div class="col-md-5">
                          <div class="form-group">
                            <input type="text" name="" v-model="profile.name" placeholder="Full name" class="form-control">
                          </div>
                        </div>

                        <div class="col-md-5">
                          <div class="form-group">
                            <input type="text"  v-model="profile.phone" placeholder="Phone Number" class="form-control">
                          </div>
                        </div>

                        <div class="col-md-6 mt-2">
                          <div class="form-group">
                            <input type="text"  v-model="profile.email" placeholder="Confirm Email Address" class="form-control">
                          </div>
                        </div>

                        <div class="col-md-6 mt-2">
                          <div class="form-group">
                            <input type="text"  v-model="profile.address" placeholder="Farm Address (Optional)" class="form-control">
                          </div>
                        </div>


                        <div class="col-md-8">
                          <div class="form-group">
                              <input type="submit" @click="updateProfile" value="Save Changes" class="btn btn-primary w-100">
                          </div>
                        </div>
                        <div class="col-md-2">

                        </div>

                      </div>
                  </div>

                </div>

                <div class="tab-pane fade pt-3" id="account" role="tabpanel" aria-labelledby="account-tab">
                  <div class="container">
                      <div class="row">

                        <hr>

                        <div class="col-md-1">

                        </div>
                        <div class="col-md-10 notiflow">
                          <div class="form-group">
                              <input type="button" @click="resetPassword"value="Reset Password Using Email" class="btn btn-success w-100">
                          </div>
                        </div>
                        <div class="col-md-1">

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
import { VueEditor } from "vue2-editor";
import { fb, db} from '../firebase';

export default {
  name: "profile",
  components: {
    VueEditor
  },
  props: {
    msg: String
  },

  data(){
    return {
        profile: {
          name:null,
          phone:null,
          address:null,
          email:null,
          county:null,
        },

        selected: 'selected',

        account:{
            name:null,
            email:null,
            photoUrl:null,
            emailVerified:null,
            password:null,
            confirmPassword:null,
            uid:null
        }
    }
  },

  firestore(){
      const user = fb.auth().currentUser;
      return {
        profile: db.collection('profiles').doc(user.uid),
      }
  },
  methods:{
      resetPassword(){
          const auth = fb.auth();

          auth.sendPasswordResetEmail(auth.currentUser.email).then(() =>  {
               Toast.fire({
                type: 'success',
                title: 'Check Email To Reset Password'
              })
          }).catch((error) =>  {
              console.log(error);
          });
      },

      updateProfile(){
          this.$firestore.profile.update(this.profile);
          Toast.fire({
            type: 'success',
            title: 'Profile Updated Successfully'
          });
          this.$router.replace('/admin/products');
      },
      uploadImage(){}
  },
  created(){
  }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
