<template>
  <div class='getSuccess'>
     <div style='display: none;' v-title>领取成功</div>
    <img class="getSuccess" src="./getSuccess01.jpg" alt="">
    <img class="getSuccess" src="./getSuccess02.jpg" alt="">
    <img class="getSuccess" src="./10.1_03.jpg" alt="" v-if="img1">
    <img class="getSuccess" src="./10.8_03.jpg" alt="" v-if="img2">
    <img class="getSuccess" src="./10.15_03.jpg" alt="" v-if="img3">
    <img class="getSuccess" src="./getSuccess04.jpg" alt="">
  </div>
</template>
<script>
export default {

  data() {
    return {
      img1: false,
      img2: false,
      img3: false
    };
  },
  created() {
    let myDate = new Date();
    let mytime = myDate.toLocaleString();
    console.log(Math.round(new Date().getTime() / 1000));
    if (1506751200 - Math.round(new Date().getTime() / 1000) > 0) {
      this.img1 = true
    }
    //9.30日14点1506751200
    if (1506751200 - Math.round(new Date().getTime() / 1000) <= 0) {
      this.img1 = false      
      this.img2 = true
    }
    //10.5日14点1507183200
    if (1507183200 - Math.round(new Date().getTime() / 1000) <= 0) {
      this.img2 = false      
      this.img3 = true
    }
  }
}
</script>
<style lang='less'>
@import './getSuccess.less';
</style>