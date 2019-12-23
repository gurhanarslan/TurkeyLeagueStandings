import Vue from 'vue'
import Vuex from 'vuex'
import teams from './modules/teams'

Vue.use(Vuex)
export const store = new Vuex.Store({
    modules: {
        teams
    }
})