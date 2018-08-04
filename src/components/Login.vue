<template>
    <v-container>
        <v-form v-model="valid">
        <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
        ></v-text-field>
        <v-text-field
        v-model="password"
        label="Password"
        type="password"
        required
        ></v-text-field>
        </v-form>
        <v-btn @click="submit">Submit</v-btn>
    </v-container>
</template>

<script>
import firebase from 'firebase'

export default {
    name: "Login",
    data(){
        return{
            valid: true,
            password: '',
            email: '',
            //nameRules: [
            //    v => !!v || 'Name is required',
            //    v => v.length <= 10 || 'Name must be less than 10 characters'
            //],
            email: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+/.test(v) || 'E-mail must be valid'
            ]
        }
    },
    methods:{
        submit(){
            const auth = firebase.auth();
            auth.signInWithEmailAndPassword(this.email, this.password).then(response => {
                this.$router.push('/post');
            }).catch(error => {
                alert(error.message);
            });
            //auth.createUserWithEmailAndPassword(this.email, this.password).then(response => {
            //    console.log(response);
            //}).catch(error => {
            //    alert(error.message);
            //})
        }
    }   
}
</script>

<style>

</style>
