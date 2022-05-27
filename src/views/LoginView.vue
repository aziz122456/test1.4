<template>

<div class="divAll">
  
  <h1 class="login">Login</h1>
   <v-col class="UserName"
          cols="8"
          sm="15"
          md="15"
        >
          <v-text-field v-model="UserName"
            label="UserName"
            outlined
            :rules="inputRule1" 

          ></v-text-field >
          <v-text-field type="password" v-model="PassWord" 
            label="PasseWord"
            outlined
            :rules="inputRule"
          ></v-text-field>
        </v-col>
        <v-btn class="button" 
              color="blue"
              dark large
              :loading="loding"
              @click="    () "
            >
               Login</v-btn>
               <v-img
               class="image"
                max-height="140"
                max-width="200"
                src="../assets/index.png"
></v-img>
</div>          
</template>

<script>
import axios from "axios";

export default {
  name: 'login_user',
data(){
  return{
  UserName:'',
  PassWord:'',
  loding:false,
   inputRule:[
ch=>ch.length>=8 || 'Minimaum caracter 8' ],
  }
},
methods:{
Afficher: function () {
  if(this.UserName[0]=="a"){
      alert('erreur')
}else alert('ok')},
Login :function(){

 




const form = new FormData();
form.append("UserName", "Super");
form.append("Password", "Super");

const options = {
  method: 'GET',
  url: 'http://localhost:3001/api/Login',
  headers: {
    'Content-Type': 'multipart/form-data',
    'content-type': 'multipart/form-data; boundary=---011000010111000001101001'
  },
  data: '[form]'
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});

}
}
}
</script>

<style>
.divAll{
  width: 541px;
height: 648px;
border-radius: 15px;
background:rgb(255, 255, 255);
border: 1px solid rgba(238, 243, 245, 0.16);
box-shadow: 5px 3px 6px rgba(22, 20, 20, 0.16);

position:absolute;
top: 15%;
left: 35%;
}
.image{
top: 5%;
left: 30%;

}
.login{
  font-family: "Segoe UI";
font-weight: normal;
font-size: 60px;
line-height: 100px;
text-align: left;
color: rgb(22, 130, 202);
position:absolute;
top: 28%;
left: 35%;
}
.UserName{
position:absolute;
top: 45%;
left: 15%;
}
.button{
  position:absolute;
top: 75%;
left: 39%;
}
</style>





