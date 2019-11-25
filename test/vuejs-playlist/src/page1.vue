<template>
  <div id="app">

      <h1 style="text-align: center;">Vue.Js</h1>
    <div>VueJs is a front-end framework that’s recently gained its popularity for how simple, flexible, reactive and
        easy it is to use. VueJs is known to be a versatile well-liked beginner friendly framework as it is easy to
        understand and implement as well as being based on traditional web development techniques. The Vue library is
        much smaller than other frameworks such as Angular or React, and is based on HTML, CSS and JS. It works directly
        with DOM implementation and flexible to code in various languages. VueJs’s well defined and efficient ecosystem
        allows developers to work smoothly. This framework is also great for building complex webapps, since projects
        render more efficiently.
        Some drawbacks to using VueJs include it’s over-flexibility. Although flexibility can be a good thing, bigger
        projects with a bigger team can over-complicate projects and cause errors while coding. Additionally, VueJS is
        still a newer framework that rabidly evolving, thus, may be hard to find solutions to problems and lacks a
        variety of extensions.
        Many front-end developers, as well as back-end developers have learned to use VueJs since it’s gained it’s
        popularity. Since it has become so popular amongst front-end developers, it’s become important for back-end
        developers to have some knowledge in VueJS as well. The reason for this is because VueJS has useful reusing
        components that make developing for back-end developers easier, as well as the fact that it is much faster than
        other frameworks. Developers often use VueJs for websites and apps that need instant search bars and order
        forms.</div>
    <h1 style="text-align: center;">Flask</h1>
    <div>Flask is a popular Python web application framework mainly used by back-end web developers who develop
        high-traffic websites. It is popular for being a lightweight web framework, as well as the ability to extend and
        customize flask for project requirements. It has integrated support for unit testing, extensive documentation
        and a container development server and debugger. It also provides functionality to accelerate development of
        simple web applications. Drawbacks to using Flask includes the lack of some built-in features that other
        back-end frameworks provide, for example, the built-in bootstrapping tool that Django offers. In addition, since
        Flask is more geared towards developing simple web applications, larger and more complex web applications would
        be more difficult. </div>
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
