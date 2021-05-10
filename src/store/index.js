import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// API
const url = "https://icanhazdadjoke.com";
const headers = { Accept: "application/json" };

export default new Vuex.Store({
    state:{
        currentJoke: "Joke test",
        allJokes: []
    },
    mutations: { // Synchronous
        setCurrentJoke(state, payload){
            state.currentJoke = payload;
            state.allJokes.push(payload);
        }
    }, // Actions - commit
    actions: { // Asynchronous
        async setCurrentJoke(state) {
            const joke = await fetch(url, { headers });
            const j = await joke.json();
            state.commit("setCurrentJoke", j.joke);
        }
    },
    modules:{},
    getters: {
        getCurrentJoke: state => state.currentJoke,
        getAllJokes: state => state.allJokes
    }
})
