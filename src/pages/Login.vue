<template>
    <div class="page-header clear-filter" filter-color="orange">
        <div
                class="page-header-image"
                style="background-image: url('img/images/bg.jpg')"
        ></div>
        <div class="content">
            <div class="container  mt-5">
                <div class="col-md-5 ml-auto mr-auto">
                    <card type="login" plain>
                        <h1 class="brand">SOKO SASA</h1>

                        <!-- <div class="">
                            <fg-input
                                    class="no-border input-lg"
                                    addon-left-icon="fas fa-edit"
                                    placeholder="Login Using Your Phone"
                                    v-model.trim="phone"
                            >
                            </fg-input>

                            <div class="row">
                                <div class="col-md-5">
                                    <button type="button" name="button" class="btn btn-primary btn-sm"><i
                                            class="fas fa-paper-plane"> </i> Send
                                    </button>
                                </div>
                                <div class="col-md-2 mt-2">
                                    <input type="text" id="code" class="form-group" placeholder="Enter the Code">
                                </div>
                            </div>
                            <hr>
                        </div>
                        <div class="card-footer text-center">
                            <a
                                    href="#Welcome"
                                    class="btn btn-primary btn-round btn-lg btn-block"
                                    @click="login"
                            > <span> <i class="fas fa-sign-in-alt"></i> LOGIN USING PHONE</span> </a
                            >
                        </div> -->
                        <div class=" mt-3">
                            <fg-input
                                    class="no-border input-lg"
                                    addon-left-icon="fas fa-edit"
                                    placeholder="Login Using Your Email"
                                    v-model.trim="email"
                            >
                            </fg-input>
                            <fg-input
                                    class="no-border input-lg"
                                    addon-left-icon="now-ui-icons text_caps-small"
                                    placeholder="Type your Password"
                                    @keyup.enter="login"
                                    v-model.trim="password"
                                    type="password"
                            >
                            </fg-input>
                        </div>

                        <template slot="raw-content">
                            <div class="card-footer text-center">
                                <a
                                        href="#Welcome"
                                        class="btn btn-primary btn-round btn-lg btn-block"
                                        @click="login"
                                > <span> <i class="fas fa-sign-in-alt"></i> LOGIN USING EMAIL</span> </a
                                >
                            </div>
                            <hr>
                            <div class="pull-left">
                                <h6>
                                    <router-link to="/register">
                                        <n-button type="primary">
                                            <span> <i class="fas fa-user-plus"></i> Register</span>
                                        </n-button>
                                    </router-link>
                                </h6>
                            </div>
                            <div class="pull-right">
                                <h6>
                                    <n-button type="primary" @click.native="modals.mini = true"
                                              class="link footer-link">
                                        <span> <i class="fas fa-redo"></i> Reset Password</span>
                                    </n-button>
                                    <!-- <a  href="#Reset"class="link footer-link"  @click="resetPassword()">Forgot Password?</a> -->
                                </h6>
                            </div>
                        </template>
                    </card>
                </div>
            </div>

            <!-- small modal -->
            <modal
                    :show.sync="modals.mini"
                    class="modal-primary"
                    :show-close="false"
                    headerClasses="justify-content-center"
                    type="mini"
            >
                <div slot="header" class="modal-profile">
                    <i class="now-ui-icons users_circle-08"></i>
                </div>
                <p>Reset Password</p>

                <div v-if="!showSuccess">
                    <p>Enter your email to reset your password</p>
                    <form @submit.prevent>
                        <input v-model.trim="this.email" type="email" placeholder="you@email.com"/>
                    </form>
                    <p v-if="errorMsg !== ''" class="error">{{ errorMsg }}</p>
                    <button @click="resetPassword()" class="btn btn-sm btn-success">Reset</button>
                </div>
                <p v-else>Success! Check your email for a reset link.</p>
                <template slot="footer">
                    <n-button type="neutral" link @click.native="modals.mini = false"
                    >Close
                    </n-button
                    >
                </template>
            </modal>

        </div>
        <main-footer></main-footer>
    </div>
</template>
<script>
    import {Card, Button, Modal, FormGroupInput} from '@/components';
    import MainFooter from '@/layout/MainFooter';

    // Importing Firebase
    import {fb, db} from '@/firebase'

    export default {
        name: 'login-page',
        bodyClass: 'login-page',
        components: {
            Modal,
            Card,
            MainFooter,
            [Button.name]: Button,
            [FormGroupInput.name]: FormGroupInput
        },
        data() {
            return {
                phone: '',
                email: '',
                password: null,

                email: this.email,
                showSuccess: false,
                errorMsg: '',

                modals: {
                    classic: false,
                    mini: false
                }
            }
        },

        methods: {

            togglePasswordReset() {
                this.showPasswordReset = !this.showPasswordReset
            },

            resetPassword() {
                const auth = fb.auth();
                auth.sendPasswordResetEmail(this.email).then(() => {
                    Toast.fire({
                        type: 'success',
                        title: 'Check Email To Reset Password'
                    })
                }).catch((error) => {
                    console.log(error);
                });
            },


            login() {

                fb.auth().signInWithEmailAndPassword(this.email, this.password)
                    .then(() => {
                        this.$router.replace('admin/products');
                        Toast.fire({
                          type: 'success',
                          title: 'Karibu Soko Sasa!'
                        });
                    })
                    .catch(function (error) {
                        // Handle Errors here.
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        if (errorCode === 'auth/wrong-password') {
                            alert('Wrong password.');
                        } else {
                            alert(errorMessage);
                        }
                        console.log(error);
                    });

            },


        }
    };
</script>
<style></style>
