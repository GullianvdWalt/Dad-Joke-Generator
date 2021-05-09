<template>
  <v-app>
    <v-app-bar color="teal lighten-1" text-color="white" dense app>
      <v-icon color="white" class="mx-3">mdi-vuetify</v-icon>
       <v-toolbar-title class="ml-2" style="color: white;">Dad Joke Generator</v-toolbar-title>



    </v-app-bar>
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <Home/>
<!--        &lt;!&ndash; If using vue-router &ndash;&gt;-->
<!--        <router-view></router-view>-->
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
import Home from "@/components/Home";

export default {
  name: 'App',

  components: {
    Home,
  },

  data: () => ({
    //
  }),
};
</script>
