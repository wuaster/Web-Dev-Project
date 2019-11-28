<template>
    <nav>
    <v-toolbar flat app>
        <v-app-bar-nav-icon class="grey--text" @click="drawer=!drawer"></v-app-bar-nav-icon>
        <img class="mr-3" :src="require('../assets/dog.png')" height="40"/>
        <v-toolbar-title class="text-uppercase grey--text">
            <span class="front-weight-light">Doggies</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn href="/flaskapp/app/templates/contact.html">Contact</v-btn>
    </v-toolbar>

    <v-navigation-drawer app v-model="drawer" temporary class="black">
        <v-list>
            <v-list-item v-for="link in links" :key="link.text" router :to="link.route"> 
                <v-list-item-icon>
                    <v-icon class="grey--text">{{link.icon}}</v-icon>
                </v-list-item-icon>
                <v-list-title-content>
                    <v-list-item-title class="grey--text">{{link.text}}</v-list-item-title>
                </v-list-title-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
    </nav>
</template>

<script>
export default {
    data(){
        return {
            drawer: false,
            links: [
                {icon: 'mdi-home', text: 'Home', route: '/'},
                {icon: 'mdi-paperclip', text: 'Summary', route: '/page1'},
                {icon: 'mdi-download', text: 'Download', route: '/page2'},
                {icon: 'mdi-book', text: 'Tutorial', route: '/page3'},
                {icon: 'mdi-dog', text: 'Demo', route: '/page4'},
                {icon: 'mdi-check', text: 'Conclusion', route: '/page5'},
                {icon: 'mdi-account', text: 'Credit', route: '/page6'},
            ]
        }

    }

}

</script>