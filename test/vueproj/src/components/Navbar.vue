<template>
    <nav>
    <v-toolbar flat app>
        <v-app-bar-nav-icon class="grey--text" @click="drawer=!drawer"></v-app-bar-nav-icon>
        <v-toolbar-title class="text-uppercase grey--text">
            <span class="front-weight-light">Doggies</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn href="google.com">Contact Us</v-btn>
    </v-toolbar>

    <v-navigation-drawer app v-model="drawer" class="black">
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
                {icon: '*', text: 'Home', route: '/'},
                {icon: '*', text: 'Summary', route: '/page1'},
                {icon: '*', text: 'Tutorial', route: '/page2'},
                {icon: '*', text: 'Tutorial pt.2', route: '/page3'},
                {icon: '*', text: 'Demo', route: '/page4'},
                {icon: '*', text: 'Conclusion', route: '/page5'},
                {icon: '*', text: 'Credit', route: '/page6'},
            ]
        }

    }

}

</script>