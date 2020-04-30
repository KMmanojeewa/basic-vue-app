<template>
    <login-form
            redirect="/home"
            :locale-selectable="true"
    ></login-form>
</template>

<script>
    import LoginForm from './LoginForm'

    export default {
        components: {
            LoginForm
        },
        data() {
            return {

            }
        },
        created() {
            console.log('...login created....')
        }
    }
</script>


<style>



</style>