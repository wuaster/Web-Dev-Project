<template>
<div class="dog">
    <h1>Adoption Page</h1>
    <h2>Dogs have feelings too. Please consider adopting these adorable dogs!</h2>
 
    <v-container class="my-3">
        <v-layout row wrap>
            <v-flex xs12 sm6 md4 lg3 v-for="dog in dogs" :key="dog.name">
                <v-card class="text-xs-center ma-3">
                    <v-responsive class="pt-4">
                        <v-avatar size="100">
                            <img :src="dog.avatar">
                        </v-avatar>
                    </v-responsive>
                <v-card-text>
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
        { name: 'Nathalie Ng', breed: 'Shiba', personality: 'Happy', avatar: '/nat.png' },
        { name: 'Brandon Yan', breed: 'Golden Retriever', personality: 'Happy', avatar:'/brandon.png' },
        { name: 'Sameer Naumani', breed: 'Poodle', personality: 'Happy', avatar:'/sameer.png' }
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
