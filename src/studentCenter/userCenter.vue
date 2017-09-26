<template>
  <div>
    <div style='display: none;' v-title>申论批改</div>

    <headTitle :titleParent='parentTitle'></headTitle>

    <header>
      <img src="../../static/images/img_head_normal.png" alt="">
      <p>欢迎您，{{userName}}</p>
    </header>

    <main>

      <div class='left'>
        <router-link to='/orderList' class="studyCenter">
          <img class='userImg' src="../../static/images/ico_student_centre.png" alt="">
          学习中心
        </router-link>
      </div>
      <div class='right'>
        <router-link to='/userInfo' class="myData">
          <img class='userImg' src="../../static/images/ico_data .png" alt="">
          我的资料
        </router-link>
      </div>
    </main>
  </div>

</template>


<script>
  import headTitle from '../component/title.vue'

  export default {
    data() {
      return {
        parentTitle: '套餐详情',
        userName: ''
      }
    },
    methods: {},
    components: {
      headTitle,
    },
  }
</script>
<style lang='less'>
  @import '../assets/userCen';

</style>
