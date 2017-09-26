<template>
  <div class='main cc0916-main'>
    <div style='display: none;' v-title>2018国考申论模考大赛</div>
    <div>
      <div class='imgDiv' v-for="src in list" style="">
        <span style="font-size:20px;">正在加载</span>
        <x-img :src="src" :webp-src="`${src}?type=webp`" @on-success="success" @on-error="error" class="ximg-demo"
               error-class="ximg-error" :offset="-100" container="#vux_view_box_body"></x-img>
      </div>

      <!--立即报名-->
      <!--saleProduct-->
      <div class="nowApply" :class='{hide:isSaleProduct}'>
        <a href='javascript:void(0)' class="left">已有 <span>{{orderCount}}</span> 人报名</a>
        <a href='javascript:void(0)' class="right" ref='getAlert'>
          <x-button class='ccbtn' type="warn">{{ ('立即报名') }}</x-button>
        </a>
      </div>
      <!--模考倒计时-->
      <!--waitMock-->
      <div class="wait" :class='{hide:isWaitMock}'>
        <div class="left">模考倒计时
          <div class="time">
            <span id="t_d" class='time-border'></span><span class='size'> 天</span>
            <span id="t_h" class='time-border'></span><span class='size'> 时</span>
            <span id="t_m" class='time-border'></span><span class='size'> 分</span>
            <span id="t_s" class='time-border'></span><span class='size'> 秒</span>
          </div>
        </div>
        <a href='javascript:void(0)' class="right">报名成功</a>
      </div>


      <!--距模考结束-->
      <!--answering-->
      <div class="wait-finish" :class='{hide:isAnswering}'>
        <div class="left">距模考结束
          <div class="time">
            <span id="t-d" class='time-border'></span><span class='size'> 天</span>
            <span id="t-h" class='time-border'></span><span class='size'> 时</span>
            <span id="t-m" class='time-border'></span><span class='size'> 分</span>
            <span id="t-s" class='time-border'></span><span class='size'> 秒</span>
          </div>
        </div>
        <a :href='myMock' class="right">我的模考</a>
      </div>

      <!--模考结束-->
      <!--saleEnd-->
      <div class="finish" :class='{hide:isSaleEnd}'>
        <a href='javascript:void(0)' class="left">已有 <span>{{orderCount}}</span> 人报名</a>
        <a href='javascript:void(0)' class="right">报名截止</a>
      </div>

      <!--三个按钮，立即抽奖-->
      <!--mockEnd-->
      <div class="nowAward" :class='{hide:isMockEnd}'>
        <a :href='myMock' class="left">我的模考</a>
        <a class="center" ref='getRank'>成绩排名</a>
        <a class="right" ref='getAward'>幸运抽奖</a>
      </div>
      <!--立即购买-->
      <!--<div class="nowApply" :class='{hide:isnowBuy}'>-->
      <!--<cell class='ccMockEnd' @click.native="showTrue">立即购买</cell>-->
      <!--</div>-->
    </div>
  </div>
</template>

<script>

  import {XImg,Cell, Confirm, XButton, TransferDomDirective as TransferDom} from 'vux'
  import {callNativeFunction} from '../common/common'
  import {getDetail} from '../api/api'

  export default {
    data() {
      return {
        isMockEnd: true,
        isSaleProduct: true,
        isWaitMock: true,
        isAnswering: true,
        isSaleEnd: true,
        orderCount: 0,
        products: [],//传给客户端的参数
        saleProductMsg: '',
        myMock: '',//我的模考按钮url
//        myRanking: '',//成绩排名按钮url
        myAward: '',//抽奖按钮url
        myEnd: '',//距离考试多久的按钮
        token: '',
        timetest: '',
        list: [
          '../../kedooWap/static/images/app_talk_01.jpg',
          '../../kedooWap/static/images/app_talk_02.jpg',
          '../../kedooWap/static/images/app_talk_03.jpg',
          '../../kedooWap/static/images/app_talk_04.jpg',
          '../../kedooWap/static/images/app_talk_05.jpg',
          '../../kedooWap/static/images/app_talk_06.jpg',
        ]
      }
    },
    created() {
      this.gettoken();
      this.getDetail();
    },
    methods: {

      gettoken() {
        if (this.token == '') {
          let str = navigator.userAgent;
          let reg = /token=\[(.*)\]/ig;
//          let reg = /e(.*)s/ig;
          let token;
          str.replace(reg, function () {
            token = arguments[1];
          });
          this.token = token;
//          sessionStorage.setItem("globalToken", this.token)
        }
//如果用户用微信或浏览器打开，会把token保存到sessionStorage
        if (this.token == '' || this.token == null) {
          this.token = localStorage.getItem("globalToken")
        }
      },
      getDetail() {
        let para = {}
        getDetail(para).then(res => {
          console.log(res);
          if (res.status == 401) {
            this.showTrue(res.data.message)
          }
          if (res.data.type == 'mockEnd') {
            this.isMockEnd = false
            this.$refs.getRank.onclick = () => {
              if (res.data.detail.boardBtn.canClick == 0) {
                this.showTrue(res.data.detail.boardBtn.msg)
                return;
              }
              if (res.data.detail.boardBtn.canClick == 1) {
                this.$router.push({path: 'ranking'});//编程式导航跳转
                return false
              }

            }
            this.$refs.getAward.onclick = () => {
//              if (res.data.detail.lotteryBtn.canClick == 1) {
              this.$router.push({path: 'nowAward'});//编程式导航跳转
//                return false
//              }
            }

//                this.myRanking = res.data.detail.boardBtn.url//排行按钮url
            this.myMock = res.data.detail.myMockBtn.url + '?token=' + this.token//我的模考按钮url
//              this.myAward = res.data.detail.lotteryBtn.url//抽奖按钮url
          }
          if (res.data.type == 'saleProduct') {
            this.isSaleProduct = false
            this.orderCount = res.data.detail.orderCount
            if (res.data.detail.canBuyBtn.canClick == 0) {
              this.$refs.getAlert.onclick = () => {
                this.$vux.confirm.show({
                  title: '提示',
//                  content: '请24小时后点击查看',
                  content: res.data.detail.canBuyBtn.msg,
                });
              }
            }
            if (res.data.detail.canBuyBtn.canClick == 1) {
              this.products = res.data.detail.products
              this.$refs.getAlert.onclick = () => {
                //调用源生程序
                this.callNativeBuyProducts(this.products)
              }
            }
          }
          if (res.data.type == 'waitMock') {
            this.isWaitMock = false
            //模考倒计时时间控件
            this.timetest = res.data.detail.leftTime
            setInterval(this.GetRTime, 1000);

          }
          if (res.data.type == 'answering') {
            this.isAnswering = false
            if (res.data.detail.myMockBtn.canClick) {
              this.myMock = res.data.detail.myMockBtn.url + '?token=' + this.token//我的模考按钮
            }
            //距离模考结束倒计时时间控件
            this.timetest = res.data.detail.leftTime
            setInterval(this.GetRTime, 1000);


          }
          if (res.data.type == 'saleEnd') {
            this.isSaleEnd = false
            this.orderCount = res.data.detail.orderCount
          }
        }).catch(err => {
          console.log(err);
          this.showTrue('请先登录')
        })
      },
      callNativeBuyProducts() {//传给客户端数据的方法
        let json = {'products': this.products};
        callNativeFunction("buyProduct", json, function (ret) {
          console.log(ret);
        })
      },
      showTrue(msg) {
        this.$vux.alert.show({
          title: '提示',
          content: (msg),
          hideOnBlur: true,
        })
      },
      GetRTime() {
        let EndTime = new Date(this.timetest);
        let NowTime = new Date();
        let t = EndTime.getTime() - NowTime.getTime();
        let d = 0;
        let h = 0;
        let m = 0;
        let s = 0;
        if (t > 1) {
          d = Math.floor(t / 1000 / 60 / 60 / 24);
          h = Math.floor(t / 1000 / 60 / 60 % 24);
          m = Math.floor(t / 1000 / 60 % 60);
          s = Math.floor(t / 1000 % 60);
        }
        if (t == 1) {
          window.location.reload();
          return;
        }
        document.getElementById("t_d").innerHTML = d;
        document.getElementById("t_h").innerHTML = h;
        document.getElementById("t_m").innerHTML = m;
        document.getElementById("t_s").innerHTML = s;
        document.getElementById("t-d").innerHTML = d;
        document.getElementById("t-h").innerHTML = h;
        document.getElementById("t-m").innerHTML = m;
        document.getElementById("t-s").innerHTML = s;
      },
      success(src, ele) {
        const span = ele.parentNode.querySelector('span')
        ele.parentNode.removeChild(span)
      },
      error(src, ele, msg) {
        const span = ele.parentNode.querySelector('span')
        span.innerText = '加载失败'
      }
    },
    directives: {
      TransferDom
    },
    components: {
      Confirm,
      XButton,
      Cell,
      XImg
    },
  }


  //  try {
  //    console.log(a);
  //  }catch(e){
  //
  //  }
  //屏蔽所有错误
  //  function ResumeError() {
  //    return true;
  //  }
  //  window.onerror = ResumeError;

</script>

<style lang='less'>
  @import '../assets/apply.less';

  .cc0916-main {
    padding-bottom: 50px !important;
  }
</style>
