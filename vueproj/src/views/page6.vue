<template>
  <div class="team">
    <h1 class="subheading grey--text">Credit</h1>
    <v-container class="my-3">
    
        <v-layout row wrap>
          <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
            <v-card class="text-xs-center ma-3">
              <v-responsive class="pt-4">
                <v-avatar size="100">
                  <img :src="person.avatar">
                </v-avatar>
              </v-responsive>
              <v-card-text>
                <div class="subheading">{{person.name}}</div>
                <div class="grey--text">{{person.role}}</div>
              </v-card-text>

            </v-card>
          </v-flex>
          
        </v-layout>

    </v-container>

    <h1 style="text-align: center;">References</h1>
    <div style="text-align: center;">
        <p>https://dev.to/kaperskyguru/why-i-learn-vuejs-as-a-backend-developer-3mma</p>

        <p> https://dev.to/rachaelray018/why-do-developers-prefer-vuejs-over-other-frameworks-9p8</p>

        <p>https://blog.sourcerer.io/why-you-should-leave-react-for-vue-and-never-use-it-again-5e274bef27c2</p>

        <p>https://naturaily.com/blog/pros-cons-vue-js</p>
        
        <p>http://www.mindfiresolutions.com/blog/2018/05/flask-vs-django/</p>
        <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    </div>
  </div>
</template>
<script>
export default{
  data(){
    return {
      team: [
        { name: 'Nathalie Ng', role: 'Front-end', avatar: '/nat.png' },
        { name: 'Brandon Yan', role: 'Front-end', avatar:'/brandon.png' },
        { name: 'Sameer Naumani', role: 'Back-end', avatar:'/sameer.png' }
      ]
    }
  }
}
</script>