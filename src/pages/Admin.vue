<template>
  <div class="admin">
<div class="page-wrapper default-theme sidebar-bg bg1">
        <a id="show-sidebar" @click="closeMenu" class="btn btn-sm btn-dark" href="#">
            <i class="fas fa-bars"></i>
        </a>
        <nav id="sidebar" class="sidebar-wrapper">
            <div class="sidebar-content">
                <!-- sidebar-brand  -->
                <div class="sidebar-item sidebar-brand">
                    <a href="#">Vue Shop</a>
                    <div id="close-sidebar" @click="closeMenu">
                        <i class="fas fa-times"></i>
                    </div>
                </div>
                <!-- sidebar-header  -->
                <div class="sidebar-item sidebar-header">
                    <div class="user-info">
                        <span class="user-name">
                          <span> <i class="fas fa-envelope"></i> Account's Email Address</span>  <strong> {{email}} </strong>
                        </span>
                        <span class="user-status">
                            <i class="fa fa-circle"></i>
                            <span>Verified <i class="fas fa-check"></i></span>
                        </span>
                    </div>
                </div>
                <!-- sidebar-search  -->
                <div class="sidebar-item sidebar-search">
                    <div>
                        <div class="input-group">
                            <input type="text" class="form-control search-menu" placeholder="Search...">
                            <div class="input-group-append">
                                <span class="input-group-text">
                                    <i class="fa fa-search" aria-hidden="true"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- sidebar-menu  -->
                <div class=" sidebar-item sidebar-menu">
                    <ul>
                        <li class="header-menu">
                            <span>Menu</span>
                        </li>

                        <li>
                            <router-link to="/admin/products">
                                <i class="fas fa-shopping-bag"></i>
                                <span>Products</span>
                            </router-link>
                        </li>

                        <!-- <li>
                            <router-link to="/admin/orders">
                                <i class="fa fa-shopping-cart"></i>
                                <span>Posts</span>
                            </router-link>
                        </li> -->

                        <li>
                            <router-link to="/admin/farmer">
                                <i class="fa fa-user"></i>
                                <span>Profile</span>
                            </router-link>
                        </li>
                    </ul>
                </div>
                <!-- sidebar-menu  -->
            </div>

            <div class="sidebar-footer">


                <div class="dropdown">
                    <router-link to="/" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fa fa-home"> Soko Sasa Home</i>
                    </router-link>
                </div>
                <div>
                    <a >
                        <i class="fa fa-power-off" @click="logout()"> Logout</i>
                    </a>
                </div>
                <div class="pinned-footer">
                    <a href="#">
                    </a>
                </div>
            </div>

        </nav>
        <!-- sidebar-content  -->
        <main class="page-content">
            <router-view/>
        </main>
        <!-- page-content" -->
    </div>
    <!-- page-wrapper -->




  </div>
</template>

<script>

import {fb, db} from '@/firebase';

export default {

  watch: {

    '$route' () {
      $(".page-wrapper").toggleClass("toggled");
    }
  },

  name: "admin",

  data(){
      return{
        profile: {
          name:null,
          phone:null,
          address:null,
          postcode:null,
        },

          name:null,
          email:null,
      }
  },

  firestore(){
      const user = fb.auth().currentUser;
      return {
        profile: db.collection('profiles').doc(user.uid),
      }
  },

  components: {

  },

  methods:{

    closeMenu(){

          $(".page-wrapper").toggleClass("toggled");
    },

    logout(){

      fb.auth().signOut()
      .then(() => {
          this.$router.replace('/');
      })
      .catch((err) =>{
          console.log(err);
      });

    },

  },

  created(){

      let user = fb.auth().currentUser;
      this.email = user.email;
      this.name = user.displayName;
  }


};

</script>

<style>

</style>
