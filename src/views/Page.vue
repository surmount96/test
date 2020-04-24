<template>
    <div class="container-fluid login">
        <div class="row">
            <div class="col-md-6 mx-auto login_1 px-5">
                <p class="login_title_1 text-right mb-5">
                    <img src="../assets/img/logo.png" class="sign_logo">
                </p>
                <h5 class="board_heading">Hey Tshque, let’s get you visible to clients</h5>
                <p class="text-muted mb-5 board_sub_heading">
                    Please showcase your work for clients to view
                </p>
                <form action="" >
                    <div class="form-group mb-2">
                        <label class="board_title mb-3">What profession does your talent fall under?</label>
                        <div class="mb-3">
                            <input type="text" class="board_form" v-model="f_name" placeholder="Photographer">
                        </div>
                    </div>
                    <div class="form-group mb-4">
                        <label class="board_title mb-3">Set-up your gallery</label>
                        <input type="file" placeholder="Photographer Gallery" ref="input_1" style="display: none">
                        <div @click="$refs.input_1.click()" class="page_input_gallery">
                            <p class="page_input_gallery_text">
                                <span>Photography</span>
                                <button class="page_input_gallery_btn_1">uploaded</button>
                            </p>
                            <hr>
                            <p class="page_input_gallery_text">
                                <span>Modelling</span>
                                <button class="page_input_gallery_btn_2">pending</button>
                            </p>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="board_title mb-3">What profession is this for?</label>
                        <input type="text" class="board_form" placeholder="Modelling">
                    </div>
                    <div class="form-group">
                        <label class="board_title mb-3">How many years experience do you have?</label>
                        <input type="text" class="board_form">
                    </div>
                    <div class="form-group">
                        <input type="file" class="page_form_gallery" ref="input_2" style="display: none">
                        <div @click="$refs.input_2.click()" class="page_input_style">
                            <div class="page_input_rounded">+</div>
                            <p class="page_input_text">Please upload up to 4 images to showcase your work</p>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-3 col-sm-3 mx-auto">
                            <button class="btn-orange-sm">Add to Gallery</button>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary btn-block py-3 mt-3 rounded-0" disabled >Next</button>
                    <button class="btn btn-primary" type="button" disabled v-show="updateState">
                        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        Loading...
                    </button>
                    <div class="row mt-2">
                        <div class="col-md-4 mx-auto text-center">
                            <a class="page_link">Skip this step</a>
                        </div>
                    </div>
                </form>
            </div>
            <div class="col-md-6 page_2 ">
                <h5 class="login_title_2 text-uppercase text-center px-5">Step 2 of 4</h5>
                <div class="row">
                    <div class="col-md-10 ml-auto">
                        <div class="board_menu mt-4">
                            <div class="board_menu_head">
                                <div class="board_img"></div>
                                <div class="board_text">
                                    <h5 class="board_text_1">Tshque Harcharan </h5>
                                    <p class="board_text_2">Nail Technician <span class="board_pipe">|</span> Cape Town, South Africa</p>
                                </div>
                            </div>
                            <div class="page_menu_section my-4">

                            </div>

                            <div class="board_container">
                                <div class="page_menu_col">

                                </div>
                                <div class="page_menu_col">

                                </div>
                                <div class="page_menu_col">

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
        name: "Page",
        components: {
            VuePhoneNumberInput
        },
        data(){
            return {
                updateState:false,
                f_name:'',
                l_name:'',
                number:'',
                currency: '',
                country: '',
            };
        },
    }
</script>

<style lang="scss">
    .page{
         &_menu_section{
             background: url('../assets/img/casual-close-up-colors-2829579.png');
             background-size: cover;
             height: 37vh;
          }

        &_2{
            padding-top: 2.5rem;
            height:58rem;
            background: linear-gradient(180deg, #DA7500 -30.57%, rgba(235, 163, 80, 0.6) 140.53%);
            color:#fff;
        }
        &_menu_col{
            background: url('../assets/img/casual-close-up-colors-2829579.png');
            background-size: cover;
            flex: 200rem;

            &:not(:last-child){
                margin-right: .5rem;
            }
        }

        &_form_gallery{
            padding: 1rem 1.5rem;
            border: 1px solid #C4C4C4;
            display: inline-block;
            width: 100%;
            border-radius: 3px;
            height: 100px;

            &:focus{
                outline: none;
                border: 1px solid #EBA350;
            }

        }

        &_form_gallery::placeholder{
            font-weight: 300;
            padding-bottom: .3rem;
            line-height: 22px;
            color:#A6AAB4;
            letter-spacing: 0.2px;
        }

        &_link{
            letter-spacing: 0.2px;
            color: #A6AAB4!important;
        }

        &_input_style{
            height:10vh;
            background: #F9FAFB;
            border: 1px dashed #D6D9E4;
            box-sizing: border-box;
            border-radius: 6px;
            display: flex;
            align-items: center;
            justify-items: center;
            padding: 0 1.5rem;
        }

        &_input_rounded{
            background: #3D8962;
            height: 2.5rem;
            width:2.5rem;
            border-radius: 50%;
            font-size: 1.5rem;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #fff;
            margin-right: 1rem;
            padding-bottom: .3rem;
        }

        &_input_text{
            margin-top: 1rem;
            letter-spacing: 0.2px;
            color: #A6AAB4;
            font-size: .8rem;
        }

        &_input_gallery{
            background: #FFFFFF;
            border: 0.5px solid #A6AAB4;
            box-sizing: border-box;
            border-radius: 5px;
            height: 17vh;
            padding:1rem;

            &_text{
                letter-spacing: 0.2px;
                font-size: 1rem;
                font-weight: 300;
                line-height: 22px;
                color: #A6AAB4;
                display: flex;
                justify-content: space-between;

            }

            &_btn_1, &_btn_2{
                border-radius: 5px;
                text-transform: uppercase;
                border: none;
                font-size: .7rem;
                padding: .2rem .7rem;
                color:#fff;
            }
            &_btn_1{
                background: #F5A03A;
            }

            &_btn_2{
                background: #A6AAB4;
            }
        }
    }
    .btn-orange-sm{
        background: #F5A03A;
        border-radius: 5px;
        color:#fff;
        width:100%;
        display: block;
        border: none;
        padding: .5rem 0;
    }


</style>