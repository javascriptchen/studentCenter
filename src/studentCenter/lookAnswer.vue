<template>
  <div>
    <div style='display: none;' v-title>查看答卷</div>
    <headTitle :titleParent='parentTitle'></headTitle>
    <div class="content">
      <div class="content-top">
        <img src="../../static/images/ico_submit.png" alt="">
        <span>您已提交答卷</span>
        <p>公客将在3-5个工作日内批复</p>
      </div>
      <div class="view_exam_body">
        <div class="content-center">请认真检查您的答案，有误可在批改前撤回，重新上传</div>
        <div class="content-bottom-left">
          <x-button @click.native="" type="default">检查答案</x-button>
        </div>
        <div class="content-bottom-right">
          <x-button @click.native="" type="warn">重新提交</x-button>
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
        parentTitle: '查看答卷',
      }
    },
    methods: {},
    components: {
      headTitle,
      XInput,
      Group,
      XButton
    },

  }
</script>
<style lang='less'>
  @import '../assets/lookAnswer';
</style>
