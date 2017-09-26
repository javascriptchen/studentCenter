<template>
  <div>
    <div style='display: none;' v-title>查看试卷</div>
    <headTitle :titleParent='parentTitle'></headTitle>
    <div class="content">
      <div class="content-top">
        <img src="../../static/images/ico_submit.png" alt="">
        <p>您选择的是</p>
        <span>{{title}}</span>
      </div>
      <div class="view_exam_body">
        <div class="content-center">本试卷已发送至邮箱：{{email}}</div>
        <div class="content-bottom" style="padding: 20px; margin-top:15px;">
          <x-button @click.native="" type="warn">查看PDF</x-button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { XButton } from 'vux'
import headTitle from '../component/title.vue'
import { lookPaper } from '../api/api'

export default {
  data() {
    return {
      parentTitle: '查看试卷',
      title: '',
      email: '',
      paperContent: ''
    }
  },
  methods: {
    lookPaper() {
      let param = {
        email: this.email
      }
      lookPaper(param).then(res => {
        console.log(res);
        this.title = res.data.title
        this.email = res.data.email
      }).catch(err => {
        console.log(err);
        this.showErr('未知错误')
      })
    },
  },
  components: {
    headTitle,
    XButton
  },

}
</script>
<style lang='less'>
@import '../assets/viewExam';
</style>
