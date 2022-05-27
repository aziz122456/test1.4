<template>
  <nav>
      <v-app-bar 
      flat 
      app
      color="primary"
      dark
      elevation="4"
     >
      <v-app-bar-nav-icon @click="visible = ! visible" ></v-app-bar-nav-icon>
        <v-toolbar-titel classe="text uppercase white--text">
            <span class="font-weight-light"><h1>SAGEMCOM</h1></span>
            
            </v-toolbar-titel>
            <v-spacer></v-spacer> 
            <v-btn 
            target="_blank"
            text>
            <span class="mr-2">Sign Out</span>
            <v-icon right>mdi-open-in-new</v-icon>
            </v-btn>
      </v-app-bar>
      <v-navigation-drawer v-model="visible" app class="blue darken-3" >
      <v-list elevation="4">
          <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
              <v-list-item-action>
                 <v-icon class="white--text">{{link.icon}}</v-icon> 
              </v-list-item-action>
              <v-list-item-content>
                  <v-list-item-title class="white--text">{{link.text}}</v-list-item-title>
              </v-list-item-content>
          </v-list-item>
      </v-list>
      </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
data(){
    return{
    visible:false,
    links :[
     {icon: 'mdi-view-dashboard', text:'Dashboard',route:'/'},
     {icon: 'mdi-plus', text:'Add Article',route:'/AddArticle'},
     {icon: 'mdi-pencil', text:'Edit',route:'/ModifierArticle'},
     {icon: 'mdi-delete', text:'Delete',route:'/DeleteArticle'}

    ]
    }
}
}
</script>

<style>

</style>