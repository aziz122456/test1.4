<template>

<div class="divAll1">
  <p class="login1">Add User</p>
   <v-col class="UserName1"
          cols="8"
          sm="15"
          md="15"
        >
          <v-text-field 
            label=" Saisir UserName"
            outlined
          ></v-text-field>
          <v-text-field type="password" 
            label="New PasseWord"
            outlined
            :rules="inputRule2"
          ></v-text-field>
          <v-text-field type="password" 
            label="Confirm PasseWord"
            outlined
            :rules="inputRule2"
          ></v-text-field>
        </v-col>
        <v-btn class="button1" 
              color="blue"
              dark
              large
            >
               Add 
            </v-btn>
</div>          
</template>

<script>
export default {
  name: 'Add_user',
data(){
  return{
     inputRule2:[
     ch=>ch.length>=8 || 'Minimaum caracter 8'
   ],
  }
},
methods:{

}
}
</script>

<style>
.divAll1{
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
.login1{
  font-family: "Segoe UI";
font-weight: normal;
font-size: 60px;
line-height: 100px;
text-align: left;
color: rgb(22, 130, 202);
position:absolute;
top: 10%;
left: 25%;
}
.UserName1{
position:absolute;
top: 30%;
left: 15%;
}
.button1{
  position:absolute;
top: 75%;
left: 39%;
}
</style>