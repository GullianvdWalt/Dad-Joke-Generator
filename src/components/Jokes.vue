<template>
  <v-container>
    <v-row justify="center" class="text-center" align="center" no-gutters>
      <v-col cols="6" style="min-width: 400px;">
        <v-sheet
            class="mt-10 mb-6"
            color="grey lighten-4"
            elevation="2"
            min-height="400"
            rounded>
          <v-row justify="center">
            <v-col cols="10" class="mt-8 pa-8">
              <h4 v-for="(joke,index) in jokes" :key="index" class="mb-2">
                {{ joke }}
              </h4>
            </v-col>
          </v-row>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "Jokes",
  computed: {
    ...mapGetters({
      jokes: "getAllJokes"
    }),
    // jokes() {
    // return this.$store.getters.getAllJokes;
    // }
  }
}
</script>

<style scoped>

</style>