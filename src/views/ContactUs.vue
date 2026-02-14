<template>
    <main>
        <div class="banner contactspage-banner">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <nav-bar-component />
                    </div>
                </div>
                <h1 class="title-big">Contact us</h1>
            </div>
        </div>
        <section class="contacts">
            <div class="container">
                <div class="row">
                    <div class="col col-12 col-lg-6 offset-0 offset-lg-3">
                        <div class="title mt-5">Tell us about your tastes</div>
                        <img class="beanslogo mt-5" src="@/assets/logo/Beans_logo_dark.svg" alt="Beans logo">
                        <form action="#" class="mt-5" @submit.prevent="submit">
                            <div class="form-group row">
                                <div class="col col-12 col-sm-3 d-flex align-items-start">
                                    <label for="name-input" class="mb-0">
                                        Name
                                        <span style="color: red;">*</span>
                                    </label>
                                </div>
                                <div class="col col-12 col-sm-9">
                                    <input v-model="v$.name.$model" type="text" class="form-control" id="name-input">
                                    <span v-for="error in v$.name.$errors" :key="error.$uid">
                                        {{ error.$message }}
                                    </span>

                                </div>
                            </div>

                            <div class="form-group row">
                                <div class="col col-12 col-sm-3 d-flex align-items-start">
                                    <label for="email-input" class="mb-0">
                                        E-mail
                                        <span style="color: red;">*</span>
                                    </label>
                                </div>
                                <div class="col col-12 col-sm-9">
                                    <input v-model="v$.email.$model" type="email" class="form-control" id="email-input">
                                    <span v-for="error in v$.email.$errors" :key="error.$uid">
                                        {{ error.$message }}
                                    </span>
                                </div>
                            </div>

                            <div class="form-group row">
                                <div class="col col-12 col-sm-3 d-flex align-items-start">
                                    <label for="phone-input" class="mb-0">
                                        Phone
                                    </label>
                                </div>
                                <div class="col col-12 col-sm-9">
                                    <input v-model="v$.phone.$model" type="tel" class="form-control" id="phone-input">
                                    <span v-for="error in v$.phone.$errors" :key="error.$uid">
                                        {{ error.$message }}
                                    </span>

                                </div>
                            </div>

                            <div class="form-group row textarea">
                                <div class="col col-12 d-flex justify-content-center">
                                    <label for="pmessage" class="mb-3 mt-3 text-center">
                                        Your message
                                        <span style="color: red;">*</span>
                                    </label>
                                </div>
                                <div class="col col-12">
                                    <textarea v-model="v$.message.$model" class="form-control" name="message"
                                        id="message" rows="5" placeholder="Leave your comments here"></textarea>
                                    <span v-for="error in v$.message.$errors" :key="error.$uid">
                                        {{ error.$message }}
                                    </span>
                                </div>
                            </div>

                            <div class="form-group row checkbox">
                                <div class="col col-12 d-flex align-items-start">
                                    <label  class="mb-3 mt-3 text-center">
                                        <input 
                                        type="checkbox" 
                                        v-model="v$.agreement.$model" 
                                        class="form-control" />
                                    </label>
                                    
                                        <p class="col col-12"> Согласен с договором оферты</p>
                                   
                                    
                                     <span 
                                        v-for="error in v$.agreement.$errors" 
                                        :key="error.$uid" 
                                        class="text-danger">
                                                {{ error.$message }}
                                     </span>
                                </div>
                            </div>


                            <div class="row">
                                <div class="col">
                                    <button class="btn btn-outline-dark send-btn">Send us</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import NavBarComponent from '@/components/NavBarComponent.vue'
import { useVuelidate } from '@vuelidate/core'
import { required, email, maxLength, requiredTrue } from '@vuelidate/validators'
import { helpers } from '@vuelidate/validators'
import { minLength } from '../validators/minLength.js'



export default {
    components: {
        NavBarComponent
    },
    setup() {
        return { v$: useVuelidate() }
    },
    data() {
        return {
            name: '',
            email: '',
            phone: '',
            message: '',
            agreement: true
        }
    },
    validations() {
        return {
            name: { required },
            email: { required, email },
            phone: {},
            message: {
                required,
                maxLength: maxLength(20),
                minLength: helpers.withMessage(
                    'this value min 5',
                    minLength(5)
                )
            },
            agreement: {
             checked: helpers.withMessage(
                'Вы должны согласиться с договором оферты',
                (value) => value === true
            )
        }
        }
    },
    methods: {
        async submit() {
            const isFormCorrect = await this.v$.$validate()
            if (!isFormCorrect) return;

            const message = {
                name: this.name,
                email: this.email,
                phone: this.phone,
                message: this.message,
                 agreement: this.agreement
            }
            fetch('http://localhost:3000/contacts', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(message)
            })
        }
    },
}
</script>