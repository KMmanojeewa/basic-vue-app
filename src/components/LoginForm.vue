<template>


    <div class="login-form-component">
        <label>Email</label>
        <input type="text" v-model="email">

        <label>Password</label>
        <input type="password" v-model="password">

        <button class="ui button"  @click="loginAttempt()" >Submit</button>


    </div>


</template>

<script>
    import {mapActions} from 'vuex'
    export default {
        props: {
            redirect: {
                type: String,
                default: '/'
            }
        },
        data () {
            return {
                password: '',
                email: '',
            }
        },
        watch: {

        },
        computed:{
            credential () {
                const { email } = this
                const { password } = this
                return {
                    email,
                    password
                }
            },
        },
        methods:{
            ...mapActions(['login']),
            loginAttempt () {
                this.login(this.credential).then(() => {
                    this.$router.push({ path: this.redirect })
                })
            },
        },
        created() {

        }
    }
</script>

<style>

</style>