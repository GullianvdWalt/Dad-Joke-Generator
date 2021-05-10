<template>
  <v-app>
    <v-app-bar color="teal lighten-1" text-color="white" dense app>
      <v-icon color="white" class="mx-3">mdi-vuetify</v-icon>
       <v-toolbar-title class="ml-2" style="color: white;">Dad Joke Generator</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <v-row justify="center" class="text-center" align="center" no-gutters>
          <v-col cols="3">
            <router-link to="/" class="text-decoration-none">
                <v-btn color="teal lighten-12" plain class="ma-2 font-weight-black">
                  Home
                </v-btn>
              </router-link>
          </v-col>
          <v-col cols="3">
            <router-link to="/jokes" class="text-decoration-none">
              <v-btn color="teal lighten-12" plain class="ma-2 font-weight-black">
                All Jokes
              </v-btn>
            </router-link>
          </v-col>
        </v-row>
<!--        <Home/>-->
        <router-view />
      </v-container>
    </v-main>
    <v-footer color="teal lighten-1" app>
      <v-row justify="center" no-gutters>
        <v-col
            class="teal lighten-1 py-4 text-center white--text"
            cols="12">
          {{ new Date().getFullYear() }} — <strong>Gullian Van Der Walt</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>


export default {
  name: 'App',
  mounted() {
    this.$store.dispatch("setCurrentJoke");
  }
};
</script>
