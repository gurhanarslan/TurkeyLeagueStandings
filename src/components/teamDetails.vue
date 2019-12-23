<template>
  <div class="containe-fluid p-3">
    <div class="row">
      <div class="col-12 col-md-12 border shadow bg-white animated fadeInLeftBig">
        <div class="text-center">
      
        </div>
        <hr />
        <div class="text-center ">
            <h3>  <strong>{{gettingTeam[0].TeamsName}}</strong></h3>

        </div>
        <hr />
      </div>

      <div
        v-if="gettingTeam[0].players.Oyuncu1.length==0"
        class="col-md-12 border shadow text-center text-danger bg-warning animated" :class="{'fadeIn':this.fade, 'fadeOut':!this.fade}"
      >
        <p>
    
          <strong>Böyle Bir Takım bulunmamaktadır!</strong> <br>
          <router-link tag="a" to="/teams/" class="btn btn-info mt-4"> Takımını Ekle</router-link>
        </p>
      </div>
      <div v-if="!gettingTeam[0].players.Oyuncu1.length==0" class="col-12 form-group">
        <div class="row">
          <div class="col-12 col-md-6 offset-3 border shadow bg-info animated fadeInDownBig " >
              <table class="table text-center text-white">
                  <tbody>
                      <tr>
                          <td><h4><strong>Galibiyet :</strong> {{gettingTeam[0].win}}</h4></td>
                          <td><h4><strong>Beraberlik :</strong> {{gettingTeam[0].draw}}</h4></td>
                          <td><h4><strong>Mağlubiyet :</strong> {{gettingTeam[0].loose}}</h4></td>
   
                      </tr>
                  </tbody>
              </table>

          </div>
          <div class="col-md-3"></div>
          <div class="col-12 col-md-2 offset-5 text-center border bg-white shadow animated fadeInDownBig"><h6><strong>Puan : </strong>{{gettingTeam[0].score}}</h6></div>
          <div class="col-12 col-md-8 text-center offset-2 mt-5 border bg-white shadow animated fadeInRightBig delay-1s">
                <table class="table table-hover">
                    <thead  class="bg-info text-white">
                        <tr>
                            <th>Oyuncular</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{{gettingTeam[0].players.Oyuncu1}}</td>
                        </tr>
                          <tr>
                            <td>{{gettingTeam[0].players.Oyuncu2}}</td>
                        </tr>
                          <tr>
                            <td>{{gettingTeam[0].players.Oyuncu3}}</td>
                        </tr>
                          <tr>
                            <td>{{gettingTeam[0].players.Oyuncu4}}</td>
                        </tr>
                          <tr>
                            <td>{{gettingTeam[0].players.Oyuncu5}}</td>
                        </tr>
                          <tr>
                            <td>{{gettingTeam[0].players.Oyuncu6}}</td>
                        </tr>
                          <tr>
                            <td>{{gettingTeam[0].players.Oyuncu7}}</td>
                        </tr>
                          <tr>
                            <td>{{gettingTeam[0].players.Oyuncu8}}</td>
                        </tr>
                          <tr>
                            <td>{{gettingTeam[0].players.Oyuncu9}}</td>
                        </tr>
                          <tr>
                            <td>{{gettingTeam[0].players.Oyuncu10}}</td>
                        </tr>
                          <tr>
                            <td>{{gettingTeam[0].players.Oyuncu11}}</td>
                        </tr>

                    </tbody>
                </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      selected: null,
      id: this.$route.params.id,
       fade:true,
      gettingTeam: null,
     
    };
  },
  computed: {
    ...mapGetters(["getTeams"]),
   
  },
  methods: {
    putPlayer() {
      this.$store.dispatch("putPlayers", this.Team);
    },
    selectedTeam() {
      console.log(this.selected);
    },
  
    putTeams() {
      this.gettingTeam = this.$store.getters.getTeam(this.id);
      

      console.log(this.gettingTeam);
    },
    interval(){
        setInterval(()=>{
            if(this.fade){
                return this.fade=false
                console.log('ek')
            }
            else{
                return this.fade=true
            }
        },500)
    }
  },
  created() {
    this.putTeams();
  },
};
</script>

<style >
</style>