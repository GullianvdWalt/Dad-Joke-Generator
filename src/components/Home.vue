<template>
<v-container>
  <v-row justify="center" class="text-center" align="center" no-gutters>
    <v-col cols="6" style="min-width: 400px;">
      <v-sheet
          class="mt-10"
          color="grey lighten-4"
          elevation="2"
          height="400"
          rounded>
        <v-row justify="center">
          <v-col cols="10" class="mt-8">
            <h3 class="pa-6">{{ joke }}</h3>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="12" class="mt-10">
            <v-btn color="teal lighten-12" class="ma-2 white--text" @click="newJoke">
              Tell Me a Joke
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
// import { mapActions, mapGetters } from 'vuex';
Vue.use(Vuetify);
export default {
  name: "Home",
  computed:{
    joke(){
      return this.$store.getters.getCurrentJoke;
    }
  },
  data: () => ({
    // joke: '',
  }),
  mounted() {
    // this.joke = this.$store.getters.getCurrentJoke;
  },
  methods: {
    newJoke(){
      // Trigger store to get new joke
      this.$store.dispatch("setCurrentJoke");
    }
  }
}
</script>

<style scoped>

</style>