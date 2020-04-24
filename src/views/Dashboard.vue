<template>
    <div class="container-fluid login">
        <div class="row">
            <div class="col-md-6 mx-auto login_1 px-5">
                <p class="login_title_1 text-right mb-5">
                    <img src="../assets/img/logo.png" class="sign_logo">
                </p>
                <h5 class="board_heading">Welcome to Booking Africa</h5>
                <p class="text-muted mb-5 board_sub_heading">
                    Tell us about yourself
                </p>
                <form @submit.prevent="onBoard" >
                    <div class="form-group mb-2">
                        <label class="board_title mb-3">What is your name</label>
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <input type="text" class="board_form" v-model="f_name" placeholder="First name">
                            </div>
                            <div class="col-md-6">
                                <input type="text" class="board_form" v-model="l_name" placeholder="Last name">
                            </div>
                        </div>
                    </div>
                    <div class="form-group mb-4">
                        <label class="board_title mb-3">What is your telephone number?</label>
                        <vue-phone-number-input :no-use-browser-locale="false" fetch-country color="#c67a23" size="lg" v-model="number"  class=" mb-3"/>
                    </div>
                    <div class="form-group">
                        <label class="board_title mb-3">What would you like to do?</label>
                        <input type="text" class="board_form" placeholder="Discover talents" @input="validating">
                    </div>
                    <small>
                        Appears as if you are in
                        Nigeria and your currency is Naira <span class="board_title">Change this</span>
                    </small>
                    <button type="submit" class="btn btn-primary btn-block py-3 mt-3 rounded-0" :class="{'disabled': !state}" >Next</button>
                    <button class="btn btn-primary" type="button" disabled v-show="updateState">
                        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        Loading...
                    </button>
                </form>
            </div>
            <div class="col-md-6 board_2 ">
                <h5 class="login_title_2 text-uppercase text-center px-5">Step 1 of 4</h5>
                <div class="row">
                    <div class="col-md-10 ml-auto">
                        <div class="board_menu mt-4">
                            <div class="board_menu_head">
                                <div class="board_img"></div>
                                <div class="board_text">
                                    <h5 class="board_text_1"> {{ f_name ? f_name : 'Tshque '}} {{ l_name ? l_name : 'Harcharan'}}</h5>
                                    <p class="board_text_2">Nail Technician <span class="board_pipe">|</span> Cape Town, South Africa</p>
                                </div>
                            </div>
                            <div class="board_menu_section my-4">

                            </div>

                            <div class="board_container">
                                <div class="board_menu_col">

                                </div>
                                <div class="board_menu_col">

                                </div>
                                <div class="board_menu_col">

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
    import VuePhoneNumberInput from 'vue-phone-number-input';
    import 'vue-phone-number-input/dist/vue-phone-number-input.css';
    import {url} from "../config"
    import axios from "axios";
    import {MailIcon,LockIcon } from "vue-feather-icons";

    export default {
        name: "Dashboard",
        components: {
            VuePhoneNumberInput
        },
        data(){
            return {
                state:false,
                updateState:false,
                f_name:'',
                l_name:'',
                number:'',
                currency: '',
                country: '',
            };
        },
        methods:{
            onBoard(){
                let params = {
                    firstname:this.f_name,
                    lastname:this.l_name,
                    phone:this.number,
                    country:this.country,
                    currency:this.currency
                };
                if(this.state){
                    this.$router.push({path:'/page'});
                }
                // this.updateState = true;
                // axios.patch(url,params)
                //     .then(res => {
                //         this.updateState = false;
                //         this.$router.push({path:'/page'});
                //     }).catch(err => alert(err));
            },
            getInput(e){
                console.log(e);
            },
            validating(e){
                if(this.f_name != null && this.l_name != null && this.number != null){
                    this.state = true;

                }
            }
        }
    }
</script>

<style lang="scss">
    .board{
        &_title{
            color: #EBA350;
            font-weight: 400;
            line-height: 20px;
        }

        &_2{
            padding-top: 2.5rem;
            height:100vh;
            background: linear-gradient(180deg, #DA7500 -30.57%, rgba(235, 163, 80, 0.6) 140.53%);
            color:#fff;
        }
        &_heading{
            line-height: 23px;
            font-weight: bold;
        }

        &_sub_heading{
            letter-spacing: 0.2px;
            color: #A6AAB4;
        }

        &_form{
            padding: 1rem 1.5rem;
            border: 1px solid #C4C4C4;
            display: inline-block;
            width: 100%;
            border-radius: 3px;

            &:focus{
                outline: none;
                border: 1px solid #EBA350;
            }

        }

        &_form::placeholder{
            font-weight: 300;
            line-height: 22px;
            color:#A6AAB4;
            letter-spacing: 0.2px;
        }

        &_container{
            display: flex;
            height: 15vh;
        }
        &_menu{
            height: 80vh;
            margin-right: -1rem;
            background: #F8F8F8;
            box-shadow: 5px 8px 6px rgba(0, 0, 0, 0.25);
            border-radius: 20px 0px 0px 20px;
            padding: 1.5rem;

            &_head{
                height: 10vh;
                display: flex;
                align-items: center;
                background: #FFFFFF;
                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
                border-radius: 5px 0px 0px 5px;
            }

            &_section{
                background: #D7D7D7;
                height: 32vh;
            }
            &_col{
                background: #D7D7D7;
                flex: 200rem;

                &:not(:last-child){
                    margin-right: .5rem;
                }
            }
        }

        &_img{
            background:  #C4C4C4;
            height:3rem;
            width: 3rem;
            border-radius: 50%;
            margin: 0 1rem;
        }

        &_text{
            display: flex;
            flex-direction: column;
            height: 6vh;

            &_1{
                font-size: 16px;
                color: #4D575E;
                font-weight: 700;
                margin-bottom: .1rem;
            }
            &_2{
                font-size: 12px;
                line-height: 22px;
                letter-spacing: 0.2px;
                color: #A6AAB4;
                mix-blend-mode: normal;
                opacity: 0.6;
            }
        }

        &_pipe{
            color: #EBA350;
        }

    }

</style>