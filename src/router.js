import TeamsAdmin from './components/teamsAdmin'
import Teams from './components/teams'
import result from './components/matchResult'
import TeamPlayer from './components/teamplayers'
import teamDetails from './components/teamDetails'
import fikstur from './components/shared/fikstur'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);
export const routes=[
    {path:'/', component:TeamsAdmin, name:'teamsAdmin'},
    {path:'/teams',component:Teams,name:'teams'},
    {path:'/fikstur',component:fikstur,name:'fikstur'},
    {path:'/result',component:result,name:'result'},
    {path:'/teams/:id',component:TeamPlayer,name:'teamsid'},
    {path:'/teamPlayer',component:TeamPlayer,name:'teamPlayer'},
    {path:'/teamDetails/:id',component:teamDetails,name:'teamDetails'}

]

export const router = new VueRouter({
    routes,
    mode:"history"
})