<template>
<div class="dog">

    <h1 style="background-color: pink;">Home of Dogs</h1>
    <h2 style="text-align: center; color: brown;">Browse adorable dogs!</h2>
    <img src="main-banner.jpg" alt="" width=100% height=25%>
    
    
    <v-toolbar flat app>
       <v-toolbar-title style="font-family: 'Arial', cursive; text-align: center;">Dog Home</v-toolbar-title>
    </v-toolbar>


    <v-container class="my-3">
        <v-layout align-center row wrap>
            <v-flex xs12 sm6 md4 lg3 v-for="dog in dogs" :key="dog.name">
                <v-card class="text-xs-center ma-3">
                    <v-responsive class="pt-4">
                      <v-layout column align-center>
                        <v-avatar justify-center size="80%">
                            <img :src="dog.avatar">
                        </v-avatar>
                      </v-layout>

                    </v-responsive>
                <v-card-text class="text-center">
                    <div class="subheading">{{dog.name}}</div>
                    <div class="grey--text">{{dog.breed}}</div>
                    <div class="grey--text">{{dog.personality}}</div>
              </v-card-text>

            </v-card>
          </v-flex>
        </v-layout>
    </v-container>
</div>
</template>

<script>

export default {
  data(){
    return {
      dogs: [
        { name: 'Calvin', breed: 'Shiba', personality: 'Loyal, Aggressive', avatar: '/shiba.jpeg' },
        { name: 'Brandon', breed: 'Golden Retriever', personality: 'Happy, Playful', avatar:'/golden.jpeg' },
        { name: 'Cooper', breed: 'Poodle', personality: 'Shy, Jumpy', avatar:'/poodle.jpg' },
        { name: 'Ajax', breed: 'Pug', personality: 'Sleepy, Shy', avatar: '/pug.jpg' },
        { name: 'Shadow', breed: 'Beagle', personality: 'Dominant, Loyal', avatar:'/beagle.jpg' },
        { name: 'Bobo', breed: 'Bulldog', personality: 'Kind, Playful', avatar:'/bull.jpg' },
        { name: 'Jax', breed: 'Chihuahua', personality: 'Hyper, Happy', avatar: '/chi.jpg' },
        { name: 'Subie', breed: 'Samoyed', personality: 'Loyal, Smart', avatar:'/sam.png' },
        { name: 'Tofu', breed: 'Corgi', personality: 'Happy, Playful', avatar:'/corgi.jpg' },
        { name: 'Sushi', breed: 'Pomeranian', personality: 'Shy, Hyper', avatar: '/pom.jpg' },
        { name: 'Chilli', breed: 'Siberian Husky', personality: 'Loyal, Feisty', avatar:'/husky.jpg' },
        { name: 'Coco', breed: 'Papillon', personality: 'Feisty, Joyful', avatar:'/papi.jpg' }
      ]
    }
  }

}
</script>
<style>
h1{
  font-family:Arial, Helvetica, sans-serif;
  text-align: center;
}
</style>
