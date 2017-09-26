<template>
  <div class='paperAnswer' style='padding-top:8px;'>
    <div style='display: none;' v-title>试卷答案</div>
    <div class="title">仅供购买《申论精选真题集》的同学参考</div>
    <router-link to="/paperAnswer/basic" class="cc-banner">
      <img src="./ico_test@2x.png" alt="" class='left'>
      <div class="banner-up-down">
        <div class="up">2016 年国家公务员录用考试</div>
        <div class="down">河南省考申论真题《基层治理》</div>
      </div>
      <div class="right"></div>
      <div class="right2"></div>
    </router-link>
    <router-link to="/paperAnswer/risk" class="cc-banner">
      <img src="./ico_test@2x.png" alt="" class='left'>
      <div class="banner-up-down">
        <div class="up">2017 年国家公务员录用考试</div>
        <div class="down">北京市考申论真题《冒险创新》</div>
      </div>
      <div class="right"></div>
      <div class="right2"></div>
    </router-link>
    <router-link to="/paperAnswer/city" class="cc-banner">
      <img src="./ico_test@2x.png" alt="" class='left'>
      <div class="banner-up-down">
        <div class="up">2017 年国家公务员录用考试</div>
        <div class="down">国考申论真题《城市与水》（市地以上）</div>
      </div>
      <div class="right"></div>
      <div class="right2"></div>
    </router-link>
    <router-link to="/paperAnswer/teacher" class="cc-banner">
      <img src="./ico_test@2x.png" alt="" class='left'>
      <div class="banner-up-down">
        <div class="up">2017 年国家公务员录用考试</div>
        <div class="down">国考申论真题《以水为师》（省级以上）</div>
      </div>
      <div class="right"></div>
      <div class="right2"></div>
    </router-link>
    <router-link to="/paperAnswer/fast" class="cc-banner">
      <img src="./ico_test@2x.png" alt="" class='left'>
      <div class="banner-up-down">
        <div class="up">2017 年国家公务员录用考试</div>
        <div class="down">重庆市考申论真题《求快风气》</div>
      </div>
      <div class="right"></div>
      <div class="right2"></div>
    </router-link>
    <router-view></router-view>
  </div>
</template>
<script>
export default {

  data() {
    return {
    };
  }
}
</script>
<style lang='less'>
@import './paperAnswer.less';
</style>