<template>
  <div>
    <div style='display: none;' v-title>公客点评</div>
    <headTitle :titleParent='parentTitle'></headTitle>
    <div class="content">
      <div class="content-top">
        <img src="../../static/images/ico_emali.png" alt="">
        <span>已发送</span>
      </div>
      <div class="view_exam_body">
        <div class="content-center">诊断报告已发送至邮箱：909366413@qq.com</div>
        <router-link to="/sendEmailAgin" class="answePdf">未收到报告？</router-link>
        <div class="content-bottom" style="padding: 20px; margin-top:15px;">
          <x-button @click.native="lookPaper" type="warn">查看报告</x-button>
        </div>
      </div>
    </div>
  </div>

</template>


<script>
  import {XInput, Group, XButton} from 'vux'
  import headTitle from '../component/title.vue'

  export default {
    data() {
      return {
        parentTitle: '公客点评',
      }
    },
    methods: {
      lookPaper(){
        
      }
    },
    components: {
      headTitle,
      XInput,
      Group,
      XButton
    },

  }
</script>
<style lang='less'>
  @import '../assets/gkComment';
</style>
