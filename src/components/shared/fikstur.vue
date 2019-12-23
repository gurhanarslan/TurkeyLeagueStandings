<template>
  <div class="container border shadow">
    <div class="text-center mt-5" v-if="week1.length==0">
      <button @click="weekend" class="btn btn-danger">Fikstürü Göster</button>
    </div>

    <div class="row ml-5" v-if="!week1.length==0">
      <div class="col-12 col-md-3 mt-3 border border-info mx-4 shadow">
        <div class="form-group">
          <div class="text-center">
            <strong>1.HAFTA</strong>
          </div>
        </div>
        <div class="form-group">
          <table class="table table-striped text-center">
            <tbody>
              <tr v-for="match in week1">{{match}} </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="col-12 col-md-3 mt-3 border border-info mx-4 shadow">
        <div class="form-group">
          <div class="text-center">
            <strong>2.HAFTA</strong>
          </div>
        </div>
        <div class="form-group">
          <table class="table table-striped text-center">
            <tbody>
              <tr v-for="match in week2">{{match}}</tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="col-12 col-md-3 mt-3 border border-info mx-4 shadow">
        <div class="form-group">
          <div class="text-center">
            <strong>3.HAFTA</strong>
          </div>
        </div>
        <div class="form-group">
          <table class="table table-striped text-center">
            <tbody>
              <tr v-for="match in week3">{{match}}</tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="col-12 col-md-3 mt-3 border border-info mx-4 shadow">
        <div class="form-group">
          <div class="text-center">
            <strong>4.HAFTA</strong>
          </div>
        </div>
        <div class="form-group">
          <table class="table table-striped text-center">
            <tbody>
              <tr v-for="match in week4">{{match}}</tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="col-12 col-md-3 mt-3 border border-info mx-4 shadow">
        <div class="form-group">
          <div class="text-center">
            <strong>5.HAFTA</strong>
          </div>
        </div>
        <div class="form-group">
          <table class="table table-striped text-center">
            <tbody>
              <tr v-for="match in week5">{{match}}</tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="col-12 col-md-3 mt-3 border border-info mx-4 shadow">
        <div class="form-group">
          <div class="text-center">
            <strong>6.HAFTA</strong>
          </div>
        </div>
        <div class="form-group">
          <table class="table table-striped text-center">
            <tbody>
              <tr v-for="match in week6">{{match}}</tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="col-12 col-md-3 mx-4 mt-3 border border-info shadow">
        <div class="form-group">
          <div class="text-center">
            <strong>7.HAFTA</strong>
          </div>
        </div>
        <div class="form-group">
          <table class="table table-striped text-center">
            <tbody>
              <tr v-for="match in week7">{{match}}</tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="col-12 col-md-3 mt-3 border border-info mx-4 shadow">
        <div class="form-group">
          <div class="text-center">
            <strong>8.HAFTA</strong>
          </div>
        </div>
        <div class="form-group">
          <table class="table table-striped text-center">
            <tbody>
              <tr v-for="match in week8">{{match}}</tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="col-12 col-md-3 mt-3 border border-info mx-4 shadow">
        <div class="form-group">
          <div class="text-center">
            <strong>9.HAFTA</strong>
          </div>
        </div>
        <div class="form-group">
          <table class="table table-striped text-center">
            <tbody>
              <tr v-for="match in week9">{{match}}</tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="col-12 col-md-3 mt-3 border border-info mx-4 shadow">
        <div class="form-group">
          <div class="text-center">
            <strong>10.HAFTA</strong>
          </div>
        </div>
        <div class="form-group">
          <table class="table table-striped text-center">
            <tbody>
              <tr v-for="match in week10">{{match}}</tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="col-12 col-md-3 mt-3 border border-info mx-4 shadow">
        <div class="form-group">
          <div class="text-center">
            <strong>11.HAFTA</strong>
          </div>
        </div>
        <div class="form-group">
          <table class="table table-striped text-center">
            <tbody>
              <tr v-for="match in week11">{{match}}</tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="col-12 col-md-3 mt-3 border border-info mx-4 shadow">
        <div class="form-group">
          <div class="text-center">
            <strong>12.HAFTA</strong>
          </div>
        </div>
        <div class="form-group">
          <table class="table table-striped text-center mx-2">
            <tbody>
              <tr v-for="match in week12">{{match}}</tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="col-12 col-md-3 mt-3 border border-info mx-4 shadow">
        <div class="form-group">
          <div class="text-center">
            <strong>13.HAFTA</strong>
          </div>
        </div>
        <div class="form-group">
          <table class="table table-striped text-center mx-2">
            <tbody>
              <tr v-for="match in week13">{{match}}</tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="col-12 col-md-3 mt-3 border border-info mx-4 shadow">
        <div class="form-group">
          <div class="text-center">
            <strong>14.HAFTA</strong>
          </div>
        </div>
        <div class="form-group">
          <table class="table table-striped text-center mx-2">
            <tbody>
              <tr v-for="match in week14">{{match}}</tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="col-12 col-md-3 mt-3 border border-info mx-4 shadow">
        <div class="form-group">
          <div class="text-center">
            <strong>15.HAFTA</strong>
          </div>
        </div>
        <div class="form-group">
          <table class="table table-striped text-center mx-2">
            <tbody>
              <tr v-for="match in week15">{{match}}</tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="col-12 col-md-3 mx-4 border border-info  mt-3 shadow">
                  <div class="form-group">
          <div class="text-center">
            <strong>16.HAFTA</strong>
          </div>
        </div>
        <div class="form-group">
          <table class="table table-striped text-center mx-2">
            <tbody>
              <tr v-for="match in week16">{{match}}</tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="col-12 col-md-3 mx-4 border border-info mt-3 shadow">
                  <div class="form-group">
          <div class="text-center">
            <strong>17.HAFTA</strong>
          </div>
        </div>
        <div class="form-group">
          <table class="table table-striped text-center mx-2">
            <tbody>
              <tr v-for="match in week17">{{match}}</tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      teams1: [
        "Sivasspor",
        "Beşiktaş",
        "İstanbul Başakşehir",
        "Trabzonspor",
        "Fenerbahçe",
        "Galatasaray",
        "Yeni Malatyaspor",
        "Alanyaspor",
        "Denizlispor"
      ],
      teams2: [
        "Göztepe",
        "Gaziantep FK",
        "Gençlerbirliği",
        "Rizespor",
        "Kasımpaşa",
        "Konyaspor",
        "Antalyaspor",
        "Ankaragücü",
        "Kayserispor"
      ],
      matches: [],
      week1: [],
      week2: [],
      week3: [],
      week4: [],
      week5: [],
      week6: [],
      week7: [],
      week8: [],
      week9: [],
      week10: [],
      week11: [],
      week12: [],
      week13: [],
      week14: [],
      week15: [],
      week16: [],
      week17: []
    };
  },
  methods: {
    Draw() {
      for (let j = 0; j < 9; j++) {
        let mac = this.teams1[j] + "-" + this.teams2[j];
        this.matches.push(mac);
        this.splitWeek();
      }

      for (let i = 0; i < 16; i++) {
        let tmp = this.teams1[0]; //1

        let lasttmp = this.teams1[8]; //17
        this.teams1.pop();
        this.teams1.shift(); // 3 5 7 9 ..
        this.teams1.unshift(this.teams2[0]); // 2 3 5 7 9 11
        this.teams1.unshift(tmp); //  1 2 3 5 7 -- 2 4 6 8 10 12...
        this.teams2.shift(); //4 6 8 10
        this.teams2.push(lasttmp); // ... 16 18 17
        for (let j = 0; j < 9; j++) {
          let mac = this.teams1[j] + "-" + this.teams2[j];
          this.matches.push(mac);
        }
      }

      console.log(this.teams1);
      console.log(this.teams2);
      console.log(this.matches);
    },

    splitWeek(value, from, to) {
      for (let i = from; i < to; i++) {
        value.push(this.matches[i]);
      }
    },
    weekend() {
      this.splitWeek(this.week1, 0, 8);
      this.splitWeek(this.week2, 9, 17);
      this.splitWeek(this.week3, 18, 26);
      this.splitWeek(this.week4, 27, 35);
      this.splitWeek(this.week5, 36, 44);
      this.splitWeek(this.week6, 45, 53);
      this.splitWeek(this.week7, 54, 62);
      this.splitWeek(this.week8, 63, 71);
      this.splitWeek(this.week9, 72, 80);
      this.splitWeek(this.week10, 81, 89);
      this.splitWeek(this.week11, 90, 98);
      this.splitWeek(this.week12, 99, 107);
      this.splitWeek(this.week13, 108, 116);
      this.splitWeek(this.week14, 117, 125);
      this.splitWeek(this.week15, 126, 134);
      this.splitWeek(this.week16, 135, 143);
      this.splitWeek(this.week17, 144, 152);

      /*      console.log(this.week1);
      console.log(this.week2);
      console.log(this.week3);
      console.log(this.week4);
      console.log(this.week5);
      console.log(this.week6);
      console.log(this.week7);
      console.log(this.week8);
      console.log(this.week9);
      console.log(this.week10);
      console.log(this.week11);
      console.log(this.week12);
      console.log(this.week13);
      console.log(this.week14);
      console.log(this.week15);
      console.log(this.week16);
      console.log(this.week17);*/
    },
    splitTeam(){
        let mte=this.week1.split(',')
        console.log(mte)
    }
  },
  created() {
    this.Draw();
  }
};
</script>

<style>
</style>