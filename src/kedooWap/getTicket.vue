<template>
  <div>
    <div style='display: none;' v-title>优惠券</div>

    <div id="content">
      <!--<div class="title">-->
      <!--<div class="title-left">-->
      <!--<img class="return" src="../../static/images/返回 copy.png" alt="">-->
      <!--</div>-->
      <!--<span>优惠码</span>-->
      <!--</div>-->
      <div class='ticketUse ' :class='{hide: isticketUse}'>
        <img src="../../static/images/img_no_coupon@2x.png" alt="">
        <p>您还没有优惠券</p>
      </div>
      <ul>
        <li class="ticket" v-for='(item,index) in ticketList'>
          <div class="ticket-top">
            <div class="ticket-top-left">
              <span>￥</span>
              <b>{{item.amount}}</b>
            </div>
            <div class="ticket-top-right">
              <div class="ticket-top-right-title">
                {{item.name}}
              </div>
            </div>
          </div>
          <div class="ticket-bottom">
            <p>有效期：{{item.startTime}}-{{item.endTime}}</p>
            <div :class='{hide:!isUsed}' @click='useTicket(item.couponId)' id='useId'>立即使用</div>
            <div class='notUse' :class='{hide:isUsed}'>已使用</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Cell, Confirm, XButton, TransferDomDirective as TransferDom } from 'vux'
import { getTicketList, useTicket } from '../api/api'
import { changeUrl } from '../common/common'

export default {
  data() {
    return {
      ticketList: [],
      isticketUse: true,
      token: '',
      couponid: '',
      isUsed: true
    }
  },
  created() {
    this.gettoken()
    this.getTicketList()
  },
  methods: {
    gettoken() {
      if (this.token == '') {
        var str = navigator.userAgent;
        var reg = /token=\[(.*)\]/ig;
        var token;
        str.replace(reg, function() {
          token = arguments[1];
        });
        this.token = token;
      }
      //如果用户用微信或浏览器打开，会把token保存到sessionStorage
      //        if(this.token == '' || this.token ==null){
      //          this.token = sessionStorage.getItem("globalToken")
      //        }

    },
    getTicketList() {
      let param = {}
      getTicketList(param).then(res => {
        console.log(res);
        this.ticketList = res.data.data;
        if (res.data.data.length == 0) {
          this.isticketUse = false
        }
        if (res.data.data.isUsed == 1) {
          this.isUsed = false
        }
      }).catch(err => {
        this.isticketUse = false
        console.log(err);
      })
    },
    useTicket(couponId) {
      let param = { coupon_id: couponId }
      useTicket(param).then(res => {
        console.log(res);
        if (res.status == 200) {
          this.$router.push({ path: '/mixun' });//跳转

        }
        if (res.status != 200) {
          this.showErr(res.data.message)
          return;
        }
      }).catch(err => {
        console.log(err);
        //          this.showErr(err.data.message)
      })
    },
    showErr(msg) {
      this.$vux.alert.show({
        title: '提示',
        content: (msg),
        hideOnBlur: true,

      })
    },
  },
  directives: {
    TransferDom
  },
  components: {
    Confirm,
    XButton,
    Cell
  },
}
</script>

<style scoped lang='less'>
@import '../assets/getTicket.less';

.ticketUse {
  position: absolute;
  img {
    display: block;
    width: 231px;
    height: 260px;
  }
  color: #B5B5B5;
  left: 50%;
  margin: 100px 0 0 -115px;
  z-index: -1;
  p {
    position: absolute;
    left: 50%;
    margin-left: -55px;
    width: 120px;
  }
}

.hide {
  display: none;
}
</style>
