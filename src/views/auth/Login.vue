<template>
    <div>
        <h1> Connexion</h1>

        <form @submit.prevent="login">
            <div class="formGroup">
                <label for="user_login">Login</label>
                <input v-model="user.login" type="text" id="user_login"/>
            </div>

            <div class="formGroup">
                <label for="user_password">Mot de passe</label>
                <input v-model="user.password" type="text" id="user_password"/>
            </div>
              
            <div class="formGroup">
                <button type="submit" class="button">Connexion</button>
                
            </div>
        </form>
    </div>
</template>
<script>
export default {
    name:"Login",
    data(){
        return {
            user:{
                login:'',
                password:''
            }
        }
    },
    methods:{
        login(){
            console.log("user", this.user);
        }
    }
}
</script>
<style 
>
    
</style>