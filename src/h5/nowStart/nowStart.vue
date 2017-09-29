<template>
  <div class='nowStart'>
     <div style='display: none;' v-title>考前提醒</div>
    <img class="nowStartImg" src="./10.1_01.jpg" alt="" v-if="img1">
    <img class="nowStartImg" src="./10.8_01.jpg" alt="" v-if="img2">
    <img class="nowStartImg" src="./10.15_01.jpg" alt="" v-if="img3">
    <img class="nowStartImg" src="./10.1_02.jpg" alt="" v-if="img4">
    <img class="nowStartImg" src="./10.8_02.jpg" alt="" v-if="img5">
    <img class="nowStartImg" src="./10.15_02.jpg" alt="" v-if="img6">
    <img class="nowStartImg" src="./start03.jpg" alt="">
  </div>
</template>
<script>
export default {

  data() {
    return {
      img1: false,
      img2: false,
      img3: false,
      img4: false,
      img5: false,
      img6: false
    };
  },
  created() {
    let myDate = new Date();
    let mytime = myDate.toLocaleString();
    console.log(Math.round(new Date().getTime() / 1000));
    if (1506751200 - Math.round(new Date().getTime() / 1000) > 0) {
      this.img1 = true
      this.img4 = true
    }
     //9.30日14点1506751200
    if (1506751200 - Math.round(new Date().getTime() / 1000) <= 0) {
      this.img1 = false
      this.img4 = false
      this.img2 = true
      this.img5 = true
    }
    //10.7日14点1507356000
    if (1507356000 - Math.round(new Date().getTime() / 1000) <= 0) {
      this.img2 = false
      this.img5 = false
      this.img3 = true
      this.img6 = true
    }
  }
}
</script>
<style lang='less'>
@import './nowStart.less';
</style>