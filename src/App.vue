<template>
 
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <span class="font-weight-light"><h1>SAGEMCOM</h1></span>  
      </div>
       
      <v-spacer></v-spacer>
      <v-btn 
            target="_blank"
            text
            @click="login1()"
            >
            <span class="mr-2">Login</span>
            <v-icon right>mdi-account</v-icon>
            </v-btn>|
            <v-btn 
            target="_blank"
            text
            @click="add1()"
            >
            <span class="mr-2">Add-User</span>
            <v-icon right>mdi-account-plus-outline</v-icon>
            </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import router from "./router";
export default {
  name: 'App',

  data: () => ({
    //
  }),
 methods:{
   login1(){
   router.push({ path: '/Login' })
 },
  add1(){
   router.push({ path: '/Add' })
 }
 }
};
</script>
<style>
#app{
  background: fixed;
background: linear-gradient(DodgerBlue,Turquoise);}
</style>