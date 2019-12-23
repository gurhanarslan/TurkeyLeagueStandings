<template>
  <div class="container mb-5">
    <div class="row">
      <div class="col-12 col-md-6 offset-md-3 border shadow">
        <table class="table table-hover">
          <thead>
            <tr>
              <th>Takım</th>
              <th>Galibiyet</th>
              <th>Beraberlik</th>
              <th>Mağlubiyet</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(team,index) in getTeams" class="text-right">
              <td>{{team.TeamsName}}</td>
              <td>
                {{team.win}}
                <span class="ml-3">
                  <button
                    @click="putResultW(team.win,team.draw,team.loose,team.key,index)"
                    class="btn btn-sm btn-success"
                  >Win</button>
                </span>
              </td>
              <td>
                {{team.draw}}
                <span class="ml-3">
                  <button
                    @click="putResultD(team.win,team.draw,team.loose,team.key,index)"
                    class="btn btn-sm btn-secondary"
                  >Draw</button>
                </span>
              </td>
              <td>
                {{team.loose}}
                <span class="ml-3">
                  <button
                    @click="putResultL(team.win,team.draw,team.loose,team.key,index)"
                    class="btn btn-sm btn-danger"
                  >Loose</button>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      result: null
    };
  },
  computed: {
    ...mapGetters(["getTeams"])
  },
  methods: {
     
    putResultW(winner, drawed, looser, keygen,value) {
      winner++;
      this.result = {
        win: winner,
        draw: drawed,
        loose: looser,
        key: keygen
      };

    },
    putResultD(winner, drawed, looser, keygen,value) {
      drawed++;
      this.result = {
        win: winner,
        draw: drawed,
        loose: looser,
        key: keygen
      };
     
    },
    putResultL(winner, drawed, looser, keygen,value) {
      looser++;
      this.result = {
        win: winner,
        draw: drawed,
        loose: looser,
        key: keygen
      };
      
    },
      sort(value) {
     for (let k = 0; k < 18; k++) {
        for (let j = 0; j < value.length-1; j++) {
          if (value[j].score < value[j + 1].score) { //0-11< 1-10
            let tmp = value[j]; //tmp:11
            value[j]= value[j + 1]; //  0-11 1-10
            value[j + 1] = tmp;
          }
        }
      
      }
}
  
  },
  watch: {
    result() {
      console.log(this.result);
    this.$store.dispatch("putResult", this.result);
    },
    getTeams() {
      this.sort(this.getTeams);
    }
  }
};
</script>

<style>
</style>