<template>
    <div>
        <h1>Login !</h1>
        <input v-model="formLogin" placeholder="Login">
        <button @click="connect">Connect</button>
        <div v-if="!isWaiting">{{userId}}</div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            formLogin: "",
        }
    },
    created(){
        console.log(this)
    },
    computed: {
        isWaiting(){
            return this.$store.state.isWaiting;
        },
        userId(){
            console.log("state : " , this.$store.state)
            if (!this.$store.state.userData){
                return "Pas connecté."
            }
            return "user id : " + this.$store.state.userData.id + " / name : " +  this.$store.state.userData.name;
        },
    },
    methods:{
        connect(){
            console.log(this.formLogin)
            this.$store.dispatch("login_in", {userName: this.formLogin, router: this.$router})
            this.formLogin = ""
        }
    }
}
</script>

<style>

</style>