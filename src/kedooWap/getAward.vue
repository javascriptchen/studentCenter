<template>
  <div>
    <div style='display: none;' v-title>领取奖励</div>

    <div id="content">
      <div class='ticketUse' :class='{hide:isticketUse}'>
        <img src="../../static/images/img_no_coupon@2x.png" alt="">
        <p>您暂时没有奖励</p>
      </div>
      <ul>
        <li v-for='(item,index) in ticketList' class="ticket">
          <div class="ticket-top">
            <div class="ticket-top-left">
              <span>￥</span>
              <b>{{item.desc}}</b>
            </div>
            <div class="ticket-top-right">
              {{item.name}}
            </div>
          </div>
          <div class="ticket-bottom">
            <p :class='{hide:!item.startTime}'>有效期：{{item.startTime}}-{{item.endTime}}</p>
            <div
              :class='{hide:item.isPickUp}'
              @click='getNow(item.userLotteryGiftId,item.type,item.resourceId)'
              style='background: #FEBC4B; border: 1px solid #FEBC4B;'>
              立即领取
            </div>
            <div class='notUse' :class='{hide:!item.isPickUp}'>已领取</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {Cell, Confirm, XButton, TransferDomDirective as TransferDom} from 'vux'
  import {getAwardList, getNow,} from '../api/api'
  import $ from 'jquery'
  import {changeUrl} from '../common/common'

  export default {
    data() {
      return {
        ticketList: [],
        isticketUse: true,
        token: '',
        giftId: '',
        type: '',
        resourceid: ''
      }
    },
    created() {
      this.gettoken()
      this.getAwardList()
    },
    methods: {
      gettoken() {
        if (this.token == '') {
          var str = navigator.userAgent;
          var reg = /token=\[(.*)\]/ig;
          var token;
          str.replace(reg, function () {
            token = arguments[1];
          });
          this.token = token;
          localStorage.setItem("token", this.token)

          if (this.token == '') {
            this.token = localStorage.getItem('token')
          }
        }
      },
      getAwardList() {
        let param = {}
        getAwardList(param).then(res => {
          console.log(res);
          this.ticketList = res.data.data
          if (this.ticketList.length == 0) {
            this.isticketUse = false
          }
          console.log(this.ticketList);
        }).catch(err => {
          console.log(err);
          this.showMsg('页面加载失败')
        })
      },
      getNow(giftId, type, resourceId) {//领取奖励
        let param = {
          user_gift_id: giftId,
          type: type,
          resource_id: resourceId
        }
        getNow(param).then(res => {
          console.log(res)
          if (type == 1) {
            this.toMixun('“密训营优惠券”领取成功！你可以在蝌蚪申论APP“我的-优惠券”页面中查看并使用')
            return
          }
          if (type == 5) {
            this.showCourse('“密训营三节精讲课”领取成功！你可以在蝌蚪申论APP“我的-我的订单”页面中查看并使用')
          }
          if (type == 10) {
            this.showMsg('“密训营免费参加名额”领取成功！我们将有专人以电话或微信的方式来联系您。')
          }
        }).catch(err => {
          console.log(err);
          this.showMsg('页面加载失败')
        })
      },
      showMsg(msg) {
        this.$vux.alert.show({
          title: '提示',
          content: (msg),
          hideOnBlur: true,
          onHide() {
            window.location.reload();
          }
        })
      },
      showCourse(msg) {
        this.$vux.alert.show({
          title: '提示',
          content: (msg),
          hideOnBlur: true,
          onHide() {
            if (navigator.userAgent.indexOf('kedougongkao') == -1) {
              window.location.href = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.naodong.shenluntiku'//下载app
            } else {
              window.location.reload();
            }
          }
        })
      },
      toMixun(msg) {
        this.$vux.alert.show({
          title: '提示',
          content: (msg),
          buttonText: '立即使用',
          hideOnBlur: true,
          onHide: () => {
            if (navigator.userAgent.indexOf('kedougongkao') == -1) {
              window.location.href = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.naodong.shenluntiku'//下载app
            } else {
//              window.location.href = changeUrl + 'mixun'//测试环境
              this.$router.push({path: '/mixun'});//跳转
            }
          }
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

  .ticket-top {
    height: 89px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    color: #fff;
    display: flex;
    background-image: url(../../static/images/img_coupon_up_bule@2x.png);
    background-size: 100% 100%;
  }

  .ticket-bottom {
    height: 35px;
    border-radius: 5px;
    padding-top: 6px;
    background-image: url(../../static/images/img_coupon_down_bule@2x.png);
    background-size: 100% 100%;
    margin-top: -2px;
  }

  .ticketUse {
    position: absolute;
    img {
      display: block;
      width: 96px;
      height: 69px;
    }
    color: #B5B5B5;
    left: 50%;
    margin: 100px 0 0 -38px;
    z-index: -1;
    p {
      margin-left: -10px;
    }
  }

  .ticket-top-right {
    margin: 10px 0 0 0;
    padding: 10px 0 0 10px;
    border-left: 2px dashed #fff;
  }
</style>
