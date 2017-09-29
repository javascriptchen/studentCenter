<template>
  <div class='explain'>
     <div style='display: none;' v-title>活动详情</div>
    <img src="./01explain_01.png" class="explainImg" v-if="img1">
    <img src="./08explain_01.png" class="explainImg" v-if="img2">
    <img src="./15explain_01.png" class="explainImg" v-if="img3">
    <img src="./explain_02.png" class="explainImg">
    <img src="./explain_03.png" class="explainImg">
    <img src="./explain_04.png" class="explainImg">
    <img src="./explain_05.png" class="explainImg">
  </div>
</template>
<script>
export default {

  data () {
    return {
      img1: false,
      img2: false,
      img3: false
    };
  },
  created () {
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
<style lang='less' >
@import './explain';
</style>