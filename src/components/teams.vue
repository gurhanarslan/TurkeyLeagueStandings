<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-12 col-md-6 offset-3 shadow border mt-4">
        <transition-group key="x" mode="out-in" enter-active-class="animated fadeInDown">
          <div key="x" class="mt-5" v-if="!team.length==0">
            <div class="form-group text-center">
              <div v-for="tl in team">
              <h3>
                  <strong>Takım Adı:</strong>
                {{tl.TeamsName}}
              </h3>
                <hr />
              </div>
            </div>

            <div class="from-group">
              <p>
                <strong>Galibiyet Sayısı</strong>
              </p>
              <input class="form-control" v-model.number="stats.win" type="text" />
            </div>
            <div class="form-group">
              <p>
                <strong>Mağlubiyet Sayısı</strong>
              </p>
              <input class="form-control" v-model.number="stats.loose" type="text" />
            </div>
            <div class="form-group">
              <p>
                <strong>Beraberlik Sayısı</strong>
              </p>
              <input class="form-control" v-model.number="stats.draw" type="text" />
            </div>
            <div class="form-group text-right">
              <button
                :disabled="disabledSubmit()"
                @click="putStats"
                class="btn btn-warning"
              >{{text}}</button>
            </div>
          </div>
        </transition-group>
        <transition-group key="y" mode="out-in" leave-active-class="position-absolute animated fadeOutDown">
          <div key="y" class="mt-5" v-if="team.length==0">
            <div class="text-center">
              <h3>Takım İstatistiklerini Ekle</h3>
            </div>
            <hr />

            <div class="form-group">
              <p>Değiştirmek istediğiniz Takımı seçiniz!</p>
              <select v-model="selected" class="form-control rounded" @change="selectedTeam()">
                <option
                  class="font-weight-bold"
                  :disabled="disabledTeam(team.isValid)"
                  v-for="team in getTeams"
                  :value="team.key"
                >{{team.TeamsName}}</option>
              </select>
              <div class="text-right">
                <button @click="putTeams" class="btn btn-primary mt-3">Takimi Getir</button>
              </div>
            </div>
          </div>
        </transition-group>

        <div></div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      text: "Devam edebilmek için İstatistikleri giriniz.",
      team: [],
      selected: null,
      show: true,
      stats: {
        win: null,
        loose: null,
        draw: null,
        TeamsName: null,
        key: null
      }
    };
  },
  computed: {
    ...mapGetters(["getTeams"])
  },
  methods: {
    disabledSubmit() {
      if (this.stats.win > 0 && this.stats.draw > 0 && this.stats.loose > 0) {
        this.text = "Devam Et";
        return false;
      } else {
        return true;
      }
    },
    disabledTeam(value) {
      if (value) {
        return true;
      } else {
        return false;
      }
    },
    putStats() {
      this.$store.dispatch("putStats", this.stats);
    },
    changed() {
      console.log("changed");
    },
    putTeams() {
      this.team = this.$store.getters.getTeam(this.selected);
      this.stats.TeamsName = this.team[0].TeamsName;
      this.stats.key = this.selected;
      this.selectedTeam();
    },
    selectedTeam() {
      //console.log(this.selected)
    }
  }
};
</script>

<style>
</style>