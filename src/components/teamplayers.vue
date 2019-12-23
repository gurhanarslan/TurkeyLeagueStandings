<template>
  <div class="container p-0 mb-5">
    <div class="row">
      <div class="col-12 col-md-12 border shadow">
        <div class="text-center">
          <h3>Takım OYUNCU EKLEME SAYFASI</h3>
        </div>
        <hr />
        <div class="text-center">
          <strong>Takım Adı :</strong>
          {{Team.TeamsName}}
        </div>
        <hr />
      </div>

      <div
        v-if="Team.TeamsName.length==0"
        class="col-md-12 border shadow text-center text-danger bg-warning"
      >
        <p>
          <strong>Böyle Bir Takım bulunmamaktadır!</strong>
        </p>
      </div>
      <div v-if="!Team.TeamsName.length==0" class="col-12 form-group bg">
        <div class="row">
          <div class="form-group mt10 col-4 offset-4">
         
            <input placeholder="Kaleci" v-model="Team.players.Oyuncu1" type="text" class="form-control" />
          </div>
          <div class="col-md-4 "></div>
          <div class="form-group col-md-3 mt10">
           
            <input placeholder="Sağ Bek" v-model="Team.players.Oyuncu2" type="text" class="form-control" />
          </div>
          <div class="form-group col-md-3 mt10">
           
           
            <input placeholder="Defans" v-model="Team.players.Oyuncu3" type="text" class="form-control" />
          </div>
          <div class="form-group col-md-3 mt10">
          
            <input placeholder="Defans" v-model="Team.players.Oyuncu4" type="text" class="form-control" />
          </div>
          <div class="form-group col-md-3 mt10">
           
            <input placeholder="Sol Bek" v-model="Team.players.Oyuncu5" type="text" class="form-control" />
          </div>
          <div class="form-group col-md-3 mt10">
           
            <input placeholder="Orta Saha" v-model="Team.players.Oyuncu6" type="text" class="form-control" />
          </div>
          <div class="form-group col-md-3 mt10">
            
            <input placeholder="Orta Saha" v-model="Team.players.Oyuncu7" type="text" class="form-control" />
          </div>
          <div class="form-group col-md-3 mt10">
           
            <input placeholder="Orta Saha" v-model="Team.players.Oyuncu8" type="text" class="form-control" />
          </div>
          <div class="form-group col-md-3 mt10">
           
            <input placeholder="Orta Saha" v-model="Team.players.Oyuncu9" type="text" class="form-control" />
          </div>
          <div class="form-group col-md-3 mt10 offset-3">
          
            <input placeholder="Forvet" v-model="Team.players.Oyuncu10" type="text" class="form-control" />
          </div>
          <div class="form-group col-md-3 mt10">
           
            <input  placeholder="Forvet" v-model="Team.players.Oyuncu11" type="text" class="form-control" />
          </div>
            <div class="col-md-3"></div>
          <div class="col-12 form-group text-center mt10">
              <button class="btn btn-warning" @click="putPlayer">Kayıt İşlemini Tamamla</button>

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
      show:false,
      gettingTeam: null,
      Team: {
        win: null,
        loose: null,
        draw: null,
        TeamsName: "",
        isValid: false,
        players: {
          Oyuncu1: null,
          Oyuncu2: null,
          Oyuncu3: null,
          Oyuncu4: null,
          Oyuncu5: null,
          Oyuncu6: null,
          Oyuncu7: null,
          Oyuncu8: null,
          Oyuncu9: null,
          Oyuncu10: null,
          Oyuncu11: null
        }
      }
    };
  },
  computed: {
    ...mapGetters(["getTeams"])
  },
  methods: {
    putPlayer() {
      this.Team.isValid = true;
      this.Team.key = this.id;
      this.show=true
                     console.log("team2");

console.log(this.Team);
      this.$store.dispatch("putPlayers", this.Team);
    },
    selectedTeam() {
      console.log(this.selected);
    },
    putTeams() {
      this.gettingTeam = this.$store.getters.getTeam(this.id);
      this.Team.TeamsName = this.gettingTeam[0].TeamsName;
      this.Team.draw = this.gettingTeam[0].draw;
      this.Team.win = this.gettingTeam[0].win;
      this.Team.loose = this.gettingTeam[0].loose;
      this.Team.isValid = true;
         this.Team.key = this.id;
               console.log("getting");

      console.log(this.gettingTeam);
               console.log("team");

console.log(this.Team);
    }
  },
  created() {
    this.putTeams();
  },
  beforeRouteLeave(to, from, next) {
   if(!this.show){
       if(confirm('Oyuncuları Henüz Kaydetmedin Çıkmak istediğinize emin misiniz ?')){
           next();
       }
       else{
           next(false);
       }
   }
   else{
     next();
   }   
  }
};
</script>

<style >
.mt10{
    margin-top: 10rem; 
   
}
.bg{
     background-image:url(/src/assets/soccer-field-4321814_1920.jpg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>