<template>
  <div class='ranking'>
    <div style='display: none;' v-title>模考成绩排名</div>
    <div class="top-content">
      <div class="top">
      </div>
    </div>
    <img class='middle' src="../../static/images/middle@2x.png" alt="">
    <div class="bottom1">
      <div class="bottom-top " :class='{hide:isNow}'>
        <div class="titleimg">
          <img src="../../static/images/img_title@2x.png" alt="">
        </div>
        <span>实时排名</span>
      </div>
      <div class="bottom-top " :class='{hide:!isNow}'>
        <div class="titleimg">
          <img src="../../static/images/img_title@2x.png" alt="">
        </div>

        <span>最终排名</span>
      </div>

      <div class="bottom-bottom">
        <div class="bottom-border">
          <div class='' :class='{hide:isNow}'>
            <div class="bottom-title">
              本排名非最终排名，最终排名将在2天后17:00公布<br> 最终排名公布后必须在2天内领奖，逾期奖品将失效
              <br> 未按时交卷的同学不纳入本次排名中
            </div>
            <ul class="mine">
              <li>
                <div>{{totalNum}}</div>
              </li>
              <li>
                <div class='center'>{{myRankMsg}}</div>
              </li>
              <li>
                <div>{{myScoreMsg}}</div>
              </li>
            </ul>
            <ul class="me">
              <li>
                <span>参考人数</span>
              </li>
              <li>
                <span>我的排名</span>
              </li>
              <li>
                <span>我的分数</span>
              </li>
            </ul>
          </div>
          <div class='' :class='{hide:!isNow}'>
            <div class="bottom-title">
              请中奖的同学务必在今天内领取奖励，逾期奖品将失效<br> 未按时交卷的同学不纳入本次排名中
            </div>
            <ul class="mine">
              <li>
                <div>{{totalNum}}</div>
              </li>
              <li>
                <div class='center'>{{myRankMsg}}</div>
              </li>
              <li>
                <div>{{myScoreMsg}}</div>
              </li>
            </ul>
            <ul class="me">
              <li>
                <span>参考人数</span>
              </li>
              <li>
                <span>我的排名</span>
              </li>
              <li>
                <span>我的分数</span>
              </li>
            </ul>
            <a href='javascript:void (0)' class="get-award" ref='getAward' :class='{hide:myGift}'>领取奖励</a>

          </div>
          <ul class="border">

            <li>
              <div>排名</div>
              <div>手机号</div>
              <div class='time-top'>提交时间</div>
              <div>分数</div>
            </li>
            <li v-for='(item,index) in downdata'>
              <!--<div v-if='index <=2'>-->
              <!--<img class='medal medal1' src='../../static/images/ico_medal{{index}}@2x.png' alt="">-->
              <!--</div>-->
              <div v-if='index == 0'>
                <img class='medal medal1' src="../../static/images/ico_medal1@2x.png" alt="">
              </div>
              <div v-else-if='index == 1'>
                <img class='medal medal2' src="../../static/images/ico_medal2@2x.png" alt="">
              </div>
              <div v-else-if='index == 2'>
                <img class='medal medal3' src="../../static/images/ico_medal3@2x.png" alt="">
              </div>
              <div v-else>No.{{item.sort}}</div>
              <div>{{item.phone}}</div>
              <div class='time-bottom'>{{item.time}}</div>
              <div>{{item.score}}</div>
            </li>

          </ul>
          <!--<scroll :on-refresh="onRefresh" :on-infinite="onInfinite"> </scroll>-->
        </div>
        <div class='clickMore' @click='clickGet' :class='{hide:isShow,hide:isClick}'>点击加载更多</div>

      </div>
    </div>
  </div>
</template>

<script>
import { Cell, Confirm, XButton, TransferDomDirective as TransferDom } from 'vux'
import { Loading, Group, XSwitch } from 'vux'

import { getRank, clickGetMore } from '../api/api'

export default {
  data() {
    return {
      //        nowList: [],
      downdata: [],  // 上拉更多的数据存放数组
      isNow: false,
      isShow: true,
      token: '',
      totalNum: '',
      myRankMsg: '',
      myScoreMsg: '',
      nextPageUrl: '',
      myGift: true,
      isClick: false,
    }
  },

  created() {
    this.gettoken();
    this.getRank()
  },
  methods: {
    gettoken() {
      if (this.token == '') {
        let str = navigator.userAgent;
        let reg = /token=\[(.*)\]/ig;
        //          let reg = /e(.*)s/ig;
        let token;
        str.replace(reg, function() {
          token = arguments[1];
        });
        this.token = token;
      }
      //如果用户用微信或浏览器打开，会把token保存到localStorage
      if (this.token == '' || this.token == null || this.token == 'undefined') {
        this.token = localStorage.getItem("globalToken")
      }
    },

    getRank() {
      let param = {}
      getRank(param).then(res => {
        console.log(res);
        if (res.status == 500) {
          this.showErr('服务器错误，请联系管理员');
          return;
        }
        if (res.status != 200) {
          this.showErr(res.data.message);
          return;
        }

        // if (res.data.meta.extraData.myGift) {
        //   this.myGift = false
        // }
        this.isShow = false
        this.downdata = res.data.data
        this.nextPageUrl = res.data.meta.nextPageUrl
        //          console.log(this.downdata);
        if (res.data.meta.extraData.isLockRank == 1) {
          this.isNow = !this.isNow
        }
        this.totalNum = res.data.meta.extraData.totalNum
        this.myRankMsg = res.data.meta.extraData.myRankMsg
        this.myScoreMsg = res.data.meta.extraData.myScoreMsg
        this.$refs.getAward.onclick = () => {
          this.$router.push({ path: 'award' });//编程式导航跳转
        }
      }).catch(err => {
        console.log(err);
        this.showErr('')
      })
    },
    clickGet() {
      this.showLoading()
      this.isClick = true
      let param = {}
      let url = this.nextPageUrl
      clickGetMore(url, param).then(res => {
        if (res.status != 200) {
          this.showErr(res.data.message);
          this.$vux.loading.hide()
          return;
        }
        console.log(res);
        for (let i = 0; i < res.data.data.length; i++) {
          this.downdata.push(res.data.data[i])
        }
        this.nextPageUrl = res.data.meta.nextPageUrl
        //          console.log(this.downdata);
        this.$vux.loading.hide()
        this.isClick = false

      }).catch(err => {
        console.log(err);
        this.$vux.loading.hide()
        this.isShow = true
        this.showErr('没有更多数据')
      })
    },
    showErr(msg) {//提示框
      this.$vux.alert.show({
        title: '提示',
        content: (msg),
        hideOnBlur: true,
      })
    },
    showLoading() {
      this.$vux.loading.show({
        text: '请稍等'
      })
    },
  },
  directives: {
    TransferDom
  },
  components: {
    Confirm,
    XButton,
    Cell,
    Loading,
  },
}
</script>

<style scoped lang='less'>
@import "../assets/ranking.less";
</style>
