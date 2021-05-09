<template>
<v-container>
  <v-row justify="center" class="text-center" align="center" no-gutters style="width: 50%; margin: 0 25%;">
    <v-col cols="6">
      <v-btn color="teal lighten-12" plain class="ma-2 font-weight-black" to="/" style="cursor:pointer;">Home</v-btn>
    </v-col>
    <v-col cols="6">
      <v-btn color="teal lighten-12" plain class="ma-2 font-weight-black" to="/jokes" style="cursor:pointer;">All Jokes</v-btn>
    </v-col>
  </v-row>
  <v-row justify="center" class="text-center" align="center" no-gutters>
    <v-col cols="6" style="min-width: 400px;">
      <v-sheet
          class="mt-10"
          color="grey lighten-4"
          elevation="2"
          height="400"
          rounded>
        <v-row justify="center">
          <v-col cols="12" class="pa-5">
            <span style="color: teal; font-size: 17px;"><b>Tell me a joke:</b></span>
          </v-col>
          <v-col cols="6">
          <v-text-field type="text" placeholder="Joke goes here..." class="pa-4" readonly></v-text-field>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="12" class="mt-10">
            <v-btn color="teal lighten-12" class="ma-2 white--text" to="/jokes" style="cursor:pointer;">
              Joke Me
            </v-btn>
          </v-col>
        </v-row>
      </v-sheet>
    </v-col>
  </v-row>
</v-container>
</template>

<script>
import Vue from 'vue';
import Vuetify from 'vuetify';
Vue.use(Vuetify);
export default {
  name: "Home"
}
</script>

<style scoped>

</style>