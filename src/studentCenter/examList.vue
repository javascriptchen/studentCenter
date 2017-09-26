<template>
  <div class=''>
    <div style='display: none;' v-title>套餐详情</div>
    <headTitle :titleParent='parentTitle'></headTitle>
    <div class="include-top">
      <p>该套餐包括以下试卷</p>
      <router-link to='/sendEmailAgin' class="email">收不到邮件</router-link>
    </div>
    <div class="content">
      <div class="include-bottom " v-for='item in examList'>
        <div class="include-bottom-top">
          <img src="../../static/images/ico_title.png" alt="">
          <span>{{item.color}}</span>
        </div>
        <div class="include-bottom-center">
          <div class="include-bottom-bottom-left">
            <img src="../../static/images/ico_package.png" alt="">
          </div>
          <div class="include-bottom-bottom-right">
            <p>{{item.name}}</p>
            <span>{{item.birth}}</span>
          </div>
        </div>
        <div class="include-bottom-bottom" v-for="one in item.shuzu">
          <span>{{one.string}}</span>
          <span>{{one.word}}</span>
        </div>
        <div class="include-bottom-footer" v-for="two in item.my_num">
          <a href="javascript:void(0)" @click="toExamDetail(1)" v-if="two.first">查看试卷</a>
          <a href="javascript:void(0)" @click="toExamDetail(2)" v-if="two.middle">提交答卷</a>
          <a href="javascript:void(0)" @click="toExamDetail(3)" v-if="two.last">评价</a>
          <a href="javascript:void(0)" @click="toExamDetail(4)" v-if="two.full">公客点评</a>
          <a href="javascript:void(0)" @click="toExamDetail(5)" v-if="two.regexp1">查看答卷</a>
          <a href='javascript:void(0)' v-if="two.regexp2">点击观看</a>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { Group, Cell } from 'vux'
import headTitle from '../component/title.vue'
import { getExamDetail, toExamDetail } from '../api/api'
import { adapterExams } from "../adapter/userAdapter";

export default {
  data() {
    return {
      parentTitle: '套餐详情',
      test: '',
      examList: ''
    }
  },
  created() {
    this.getExamDetail();
  },
  methods: {
    getExamDetail() {
      let param = {}
      getExamDetail(param).then(res => {
        console.log(res);
        if (res.status == 200) {
          this.examList = adapterExams(res.data.users);
        }
      }).catch(err => {
        console.log(err);
      })
    },
    toExamDetail(couponId) {
      let param = { id: couponId }
      // toExamDetail(param).then(res => {
      //   console.log(res);
      //   if (res.status != 200) {
      //     this.showErr(res.data.message)
      //     return;
      //   }

      // }).catch(err => {
      //   console.log(err);
      // })
      if(param.id==1){
        this.$router.push({path:'viewExam'})
      }
      if(param.id==2){
        this.$router.push({path:'postAnswer'})
      }
      if(param.id==3){
        this.$router.push({path:'evaluate'})
      }
      if(param.id==4){
        this.$router.push({path:'gkComment'})
      }
      if(param.id==5){
        this.$router.push({path:'lookAnswer'})
      }
    },
  },
  components: {
    headTitle,
    Group,
    Cell,
  },
}
</script>
<style lang='less'>
@import "../assets/detail";
</style>
