<template>
  <div class="container mt-5 mb-5">
      <div class="row">
          <div class="col-12 col-md-6 offset-md-3 border shadow">
              <div class="text-center mt-5">
                  <h2>Takımlar</h2> <hr>
                  <small class="text-muted">*Takım detayını görmek için 'Takım İşlemleri'nden Takımı oluşturunuz.</small>
              </div>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Takım Adı</th>
                        <th>H</th>
                        <th>G</th>
                        <th>B</th>
                        <th>M</th>
                        <th>Puan</th>
                    </tr>
                </thead>
                <tbody>
                  
   <tr v-for="(team,index) in getTeams" :class="{ 'bg-kume text-danger' : index>14,'bg-winner text-success':index==0, 'bg-league' : index==1,'bg-uefa':index==2|index==3,}">
                  
                        <td>{{index+1}}</td>
                            <router-link :disabled="!team.isValid" style="border-style:none" class="bg-transparent"  tag="button" :to="'/teamDetails/'+team.key">
                        <td>{{team.TeamsName}}</td>
                             </router-link>
                             <td>{{team.week}}</td>
                        <td>{{team.win}}</td>
                        <td>{{team.draw}}</td>
                        <td>{{team.loose}}</td>
                        <td>{{team.score}}</td>
                             
                    </tr>
          
                  
                </tbody>
            </table>
          
              </div>
              
          </div>
          

      </div>
   
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    data(){
        return{
            Teams:{
               TeamsName:""
            },
     
    }
    },
    methods:{
saveTeams(){

        this.$store.dispatch('saveTeams',this.Teams)
    },
    sort(value) {
      let scores = [];
      for (let i = 0; i < value.length; i++) {
        scores.push(value[i].score);
      }
      for (let k = 0; k < 18; k++) {
        for (let j = 0; j < value.length-1; j++) {
          if (value[j].score > value[j + 1].score) {
            let tmp = value[j];
            value[j]= value[j + 1];
            value[j + 1] = tmp;
          }
        }
       
      }
    
    }
    
  },
    computed:{
      ...mapGetters(['getTeams'])
    },   

  
}

</script>

<style>
.bg-kume{
    background-color: rgba(216, 161, 161, 0.616) !important;
}
.bg-winner{
    background-color: rgba(164, 226, 164, 0.582) !important;
}
.bg-league{
    background-color: rgba(181, 181, 228, 0.692) !important;
}
.bg-uefa{
        background-color:rgba(233, 233, 107, 0.651) !important;

}
</style>