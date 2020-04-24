<template>
    <div class="container-fluid login">
        <div class="row">
            <div class="col-md-5 mx-auto login_1 px-5">
                <div class="login_title_1 ">
                    <div>
                        <img src="../assets/img/logo.png" class="sign_logo">
                    </div>
                   <div>
                      <p>Already Have an account? <button class="sign_btn">Sign in</button></p>
                   </div>
                </div>
                <form action="" @submit.prevent="login">
                    <div class="form-group mb-3">
                        <label for="#email" class="sign_label">Email address</label>
                        <mail-icon size="18"></mail-icon>
                        <input type="text" id="#email" class="login_form" v-model="email" placeholder="Email address">
                    </div>
                    <div class="form-group mb-3">
                        <label for="#password" class="sign_label">Password</label>
                        <lock-icon class="sign_icon" size="18"></lock-icon>
                        <input :type="passwordFieldType" id="#password" v-model="password" class="login_form" placeholder="Password">
                        <div class="d-flex justify-content-between mt-2">
                            <small class="text-muted" v-for="error in errors" v-if="error.password">{{error.password}}</small>
                            <small class="show_pass" @click="switchVisibility">show password</small>
                        </div>
                    </div>
                    <div class="form-group mb-3">
                        <label for="#promo" class="sign_label">Promocode</label>
                        <lock-icon class="sign_icon" size="18"></lock-icon>
                        <input type="password" id="#promo" class="login_form" placeholder="Promocode">
                    </div>
                    <button type="submit" class="btn btn-primary btn-block py-3 rounded-0">Sign up</button>
                    <button class="btn btn-primary" type="button" disabled v-show="state">
                        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        Loading...
                    </button>
                    <div class="sign_or">
                       <hr width="150" class="hr"> <span class="mx-5">or </span><hr width="150" class="hr">
                    </div>

                    <button class="btn-orange">
                        <span class="pr-5"><img src="../assets/img/th.png" class="sign_img"></span>
                        <span>Sign up with Google</span>
                    </button>
                    <div class="row">
                        <div class="col-12">
                            <div class="text-center">
                                <p class="sign_lead">By signing up, you are indicating that you have read and agree to the <span class="text-orange">Terms of use</span><span class="text-orange"> and Privacy Policy</span></p>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div class="col-md-7 login_2 px-5">
                <h5 class="login_title_2 mb-5">Sign up to BookingAfrica - it's free</h5>
                <div class="pr-5">
                    <p>
                        Bookings Africa is the largest platform for creative talents to get booked
                        and paid across Africa.
                    </p>
                    <p>
                        Over 4,000 talents use BookingsAfrica across Nigeria, Ghana and South
                        Africa to get booked and paid.
                    </p>
                    <p>
                        Our mission is to unlock the earning potential of talents and catalyse
                        Password
                        commerce across Africa. We uniquely leverage technology to
                        economically empower and connect African professionals to millions of customers
                    </p>
                    <p>
                        Talents love the simplicity and open experience while clients enjoy the
                        ease and security our platform provides them.
                    </p>
                    <p>
                        Thank you for signing up and we look forward to growing your talent and
                        being a reliable partner to you.
                    </p>
                    <p class="mt-5">
                        <img src="../assets/img/signature.png">
                    </p>
                    <p>Founder / CEO</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    import {url} from "../config"
    import axios from "axios";
    import {MailIcon,LockIcon } from "vue-feather-icons";

    export default {
        name: 'SignUp',
        components: {
            MailIcon,
            LockIcon

        },
        data () {
            return {
                state:false,
                email:'',
                password:'',
                number:'',
                passwordFieldType: 'password',
                errors:[
                    {password:'At least 6 characters longer is better'}
                ]
            };
        },
        methods:{
            login() {
                let params = {
                    email:this.email,
                    password: this.password
                };

                if(this.password.length <= 5 ){
                    this.errors.push({password:'At least 6 characters longer is better'})
                }
                this.state = true;
                axios.post(url,params)
                    .then(res=>{
                        this.state = false;
                        const authUser  = res.data.token;
                        window.localStorage.setItem('authUser',authUser);
                        this.$router.push({path:'/onboarding'});
                    })
                    .catch(err=>console.log(err));
            },
            switchVisibility() {
                this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password'
            }
        }
    }
</script>

<style lang="scss">
    $color-white:#fff;
    $color-gray:#C4C4C4;
    $color-primary:#EBA350;

    .login{

        &_form{
            padding: 1rem 3rem;
            border: 1px solid $color-gray;
            display: inline-block;
            width: 100%;
            border-radius: 3px;


            &:focus{
                outline: none;
                border: 1px solid $color-primary;
            }
        }

        &_form::placeholder{
            font-weight: 300;
            line-height: 22px;
            color:#A6AAB4;
            letter-spacing: 0.2px;
        }
        &_1{
            padding: 2.5rem 0;
        }

        &_2{
            padding-top: 2.5rem;
            height:100vh;
            background: linear-gradient(180deg, rgba(235, 163, 80, 0.6) 0%, #DA7500 100%);
            color:$color-white;
        }

        &_title_1{
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
        }

        &_title_2{
            color:#000;
            font-weight: 700;
        }
    }
    .btn-orange{
        background: $color-primary;
        border-radius: 4px;
        color:#fff;
        width:100%;
        display: block;
        border: none;
        padding: 1rem 0;
    }

    .btn-primary{
        background: #206CE0;
        border-radius: 4px;
        line-height: 19px;
    }
    .sign{
        &_lead{
            font-size: .8rem;
            margin: 1rem 0;
        }

        &_btn{
            color:$color-primary;
            border: 1px solid $color-primary;
            padding:.3rem 1rem;
            background-color: #fff;
        }

        &_or{
            display: flex;
            width:100%;
            align-items: center;
            justify-content: center;
        }

        &_logo{
            width:7.2rem;
        }
        &_img{
            width:1.2rem;
        }

        &_label{
            display: block;
            font-family: Circular Std;
            font-style: normal;
            font-weight: 300;
            font-size: 18px;
            line-height: 22px;
            letter-spacing: 0.2px;
            color: #262626;
        }
    }

    .text-orange {
        color:$color-primary;
    }
    .hr{
        border:1px solid #666666;
    }
    .feather{

        &-mail{
            margin-left: .7rem;
            margin-right: -2rem;
            position: relative;
            z-index: 99;
            color:$color-gray;
        }

        &-lock{
            margin-right: -2rem;
            margin-left: .7rem;
            position: relative;
            z-index: 99;
            color:$color-gray;
        }
    }

    .show_pass{
        font-weight: 700;
        cursor: pointer;
        color:#206CE0;
    }
@media screen and (max-width: 760px){
    .login{
        &_2{
            display: none;
        }
    }
}
</style>
