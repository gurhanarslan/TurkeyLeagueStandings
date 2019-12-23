<template>
  <div id="app">
    <app-header></app-header>
    <transition enter-active-class="animated rotateInDownRight" mode="out-in" leave-active-class="animated rotateOutUpLeft">
   <router-view></router-view>
    </transition>
  <app-footer></app-footer>
  </div>
</template>

<script>
import footer from './components/shared/footer'
import header from './components/shared/header'
import { mapGetters } from 'vuex';
export default {
components:{
  appHeader:header,
  appFooter:footer
},
methods:{
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
  computed:{
    ...mapGetters(['getTeams'])
  },
 created() {
    this.$store.dispatch("allTeams");
        this.getTeams.reverse()
  },
  watch:{
    getTeams(){
      this.sort(this.getTeams)
     
    }
  }
}
</script>

<style>

</style>
