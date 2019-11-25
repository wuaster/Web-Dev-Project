<template>
  <div id="app">
<h1>Credit</h1>
    <table style="width:100%">
        <tr>
            <th>Name</th>
            <th>Picture</th>
            <th>Responsibilities</th>
        </tr>
        <tr>
            <td>Brandon Yan</td>
            <td><img src="brandon.png"></td>
            <td>Page 5, Page 3, Page 4</td>
        </tr>
        <tr>
            <td>Nathalie Ng</td>
            <td><img src="nat.png"></td>
            <td>Page 1, Page 3, Page 4</td>
        </tr>
        <tr>
            <td>Sameer Naumani</td>
            <td><img src="sameer.png"></td>
            <td>Page 2, Page 3, Page 4</td>
        </tr>
    </table>
    <h1>References</h1>
    <div>
        <p>https://dev.to/kaperskyguru/why-i-learn-vuejs-as-a-backend-developer-3mma</p>

        <p> https://dev.to/rachaelray018/why-do-developers-prefer-vuejs-over-other-frameworks-9p8</p>

        <p>https://blog.sourcerer.io/why-you-should-leave-react-for-vue-and-never-use-it-again-5e274bef27c2</p>

        <p>https://naturaily.com/blog/pros-cons-vue-js</p>
        
        <p>http://www.mindfiresolutions.com/blog/2018/05/flask-vs-django/</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      title: 'Dogs'
    }
  },
  methods:{
    greeting: function(){
      return 'Hi! Welcome to our page. We love dogs.';
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
