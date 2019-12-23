import Vue from 'vue'
import {router} from '../../router'

const state= {
    teams:[]
}
const getters= {
    getTeams(state){
          
        return state.teams;
    },
    getTeam(state){
        return key=> state.teams.filter(response=>{
            return response.key==key
        })
    },
    gettingTeam(state){
        return key=> state.teams.filter(response=>{
            if(response.key==key){
                return response.TeamsName
            }
        })
    }
}

const mutations= {
    saveTeamsProject(state,payload){
        payload.week=payload.win+payload.draw+payload.loose
        payload.score=payload.win*3+payload.draw*1
       
       state.teams.push(payload)
       
    }
}

const actions= {
 
    putStats({commit},payload){
        Vue.http.put('https://turkiye-ligi.firebaseio.com/Teams/'+payload.key+'.json',payload)
        router.replace('/teams/'+payload.key)
      
    },
    putPlayers({commit},payload){
        console.log("dispatch");

        console.log(payload)
        Vue.http.put('https://turkiye-ligi.firebaseio.com/Teams/'+payload.key+'.json',payload)
        
    },
    saveTeams({commit},payload){
      
        Vue.http.post('https://turkiye-ligi.firebaseio.com/Teams.json', payload)
        .then(response=>{
           payload.key=response.data.name
           console.log(payload)             
        commit('saveTeamsProject',payload)
        })
    
    },
    allTeams({commit}){
        Vue.http.get('https://turkiye-ligi.firebaseio.com/Teams.json')
        .then(response=>{
            let data = response.body
            for(let key in data){
                data[key].key = key
                console.log('Takımlar Eklendi.')
                commit('saveTeamsProject',data[key])
            }
        })
   
    },
    putTeams({commit},payload){
        console.log(payload.key)
        Vue.http.put('https://turkiye-ligi.firebaseio.com/Teams/'+payload.key+'.json',payload)
        commit('saveTeamsProject',payload)
        
    },
    putResult({commit},payload){
        console.log(payload)
        Vue.http.patch('https://turkiye-ligi.firebaseio.com/Teams/'+payload.key+'/.json',{ draw:payload.draw})
        Vue.http.patch('https://turkiye-ligi.firebaseio.com/Teams/'+payload.key+'/.json',{ win:payload.win})
        Vue.http.patch('https://turkiye-ligi.firebaseio.com/Teams/'+payload.key+'.json',{ loose:payload.loose})
       
     
    }
 

    
   
}

export default{
    state,
    getters,
    mutations,
    actions
}