<template>
  <div class='getAward'>
    <div style='display: none;' v-title>模考大赛幸运抽奖</div>
    <img class='bg-img' src="../../static/images/img_bg@2x.png" alt="">
    <div id="container" data-url="../../static/images/proBj.png">
      <div class="title">
        <img src="../../static/images/img_font2@2x.png" class="rgpg">
        <img src="../../static/images/img_balloon@2x.png" class="rqq">
      </div>
      <div class="lottery_bg">
        <div id="luck">
          <!-- luck -->
          <table>
            <tr>
              <td class="luck-unit luck-unit-0"></td>
              <td class="luck-unit luck-unit-1"></td>
              <td class="luck-unit luck-unit-2"></td>
              <td class="luck-unit luck-unit-3"></td>
            </tr>
            <tr>
              <td class="luck-unit luck-unit-11"></td>
              <td rowspan="2" colspan="2" class="cjBtn" id="btn" @click='getRoll()'></td>
              <td class="luck-unit luck-unit-4"></td>
            </tr>
            <tr>
              <td class="luck-unit luck-unit-10"></td>
              <td class="luck-unit luck-unit-5"></td>
            </tr>
            <tr>
              <td class="luck-unit luck-unit-9"></td>
              <td class="luck-unit luck-unit-8"></td>
              <td class="luck-unit luck-unit-7"></td>
              <td class="luck-unit luck-unit-6"></td>
            </tr>
          </table>
        </div>
        <!-- luckEnd -->
        <!--跑马灯-->
        <div :class='{pmd:isLight,pmd2:!isLight}'></div>
      </div>
      <div>
        <input type="hidden" name="lotteryId" id="lotteryId">
        <input type="hidden" name="lotteryGiftName" id="lotteryGiftName">
      </div>
      <div class="userAdress" :class='{hide:hasAddress}'>
        <span class='userAdress-left'>您已成功抽中</span>
        <span class='userAdress-center'>{{userAward}}</span>
        <router-link class='userAdress-right' to='/address' :class='{hide:writeAddress}'>填写地址></router-link>
      </div>
      <div class="userAdressAnimate" :class='{down1:isLight,down2:!isLight}'></div>
      <div class="bottom">
        <div class='rule'>
          <span>抽奖说明</span>
          1、抽奖时间为模考开始后
          <span class='orange'>6</span>天内，每人仅限
          <span class='orange'>1</span>次抽奖机会<br> 2、活动最终解释权归蝌蚪申论所有，客服电话：18575407251
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { Cell, Confirm, XButton, TransferDomDirective as TransferDom } from 'vux'
import $ from 'jquery'
import { getLottery, getRoll, getUserRollLottery } from '../api/api'

export default {
  data() {
    return {
      lotteryList: [],//奖励列表
      isLight: true,//跑马灯
      click: false,
      hasAddress: true,
      writeAddress: true,
      ccErr: '请勿频繁点击',
      userAward: '',
      getRes: [],
      token: '',
      luck: {
        index: -1,	//当前转动到哪个位置，起点位置
        count: 0,	//总共有多少个位置
        timer: 0,	//setTimeout的ID，用clearTimeout清除
        speed: 20,	//初始转动速度
        times: 0,	//转动次数
        cycle: 50,	//转动基本次数：即至少需要转动多少次再进入抽奖环节
        prize: -1,	//中奖位置
        init: function(id) {
          if ($("#" + id).find(".luck-unit").length > 0) {
            let $luck = $("#" + id);
            let $units = $luck.find(".luck-unit");
            this.obj = $luck;
            this.count = $units.length;
            $luck.find(".luck-unit-" + this.index).addClass("active");
          }
        },


        roll() {
          let index = this.index;
          let count = this.count;
          let luck = this.obj;
          $(luck).find(".luck-unit-" + index).removeClass("active");
          index += 1;
          if (index > count - 1) {
            index = 0;
          }
          $(luck).find(".luck-unit-" + index).addClass("active");
          this.index = index;
          return false;
        },
        stop: function(index) {
          this.prize = index;
          return false;
        }
      },
    }
  },
  created() {
    this.gettoken();
    this.getLottery()
    this.light()
    this.getUserRollLottery()
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
      //如果用户用微信或浏览器打开，会把token保存到sessionStorage
      if (this.token == '' || this.token == null || this.token == 'undefined') {
        this.token = localStorage.getItem("globalToken")
      }
    },
    getUserRollLottery() {
      let param = {}
      getUserRollLottery(param).then(res => {
        console.log(res);
        if (res.data.data.gifts) {
          this.hasAddress = false
        }
        //          if (res.status == 200 || res.status == 202) {
        //            this.hasAddress = false
        //          }
        if (res.data.data.is_has_address) {
          this.writeAddress = false
        }
        this.userAward = res.data.data.gifts
        console.log(this.userAward);
      }).catch(err => {
        console.log(err);
      })
    },
    getLottery() {
      let param = {}
      getLottery(param).then(res => {
        if (res.status == 202) {
          this.showWarn('提示', res.data.message,'好的')
        }
        if (res.status == 401) {
          this.showWarn('提示', res.data.message,'好的')
        }
        //          console.log(res);
        this.lotteryList = res.data.data.gifts
        let width = $('td.luck-unit').width();
        let height = $('td.luck-unit').height();
        $.each(this.lotteryList, function(index, value) {
          let arr = value.show_index.split(',');
          for (let k in arr) {
            $('.luck-unit-' + arr[k]).append(
              '<img src="' + value.img_path + '" width="' + 0.9 * width + '" ' +
              'height="' + 0.8 * height + '">'
            );
          }
        });
        this.luck.init('luck');
      }).catch(err => {
        console.log(err);
      })
    },
    getRoll() {
      $("#btn").addClass("cjBtnDom");
      setTimeout(function() {
        $("#btn").removeClass("cjBtnDom");
      }, 100)
      if (this.click) {
        this.showWarn('提示', this.ccErr,'好的')
        return
      }
      else {
        this.click = true;
        let param = {}
        getRoll(param).then(res => {
          console.log(res);
          if (res.status == 202) {
            this.ccErr = res.data.message
            this.showWarn('提示', res.data.message,'好的')
          } else if (res.status == 500) {
            this.ccErr = '服务器错误，请联系管理员'
            this.showWarn('提示', this.ccErr,'好的')
          }
          else {
            this.getRes = res
            this.luck.speed = 100;
            $('#lotteryId').val(res.data.index);
            $('#lotteryGiftName').val(res.data.name);
            this.roll();
          }
        }).catch(err => {
          console.log(err);
        })
      }
    },
    showWarn(title, msg, text) {
      this.$vux.alert.show({
        title: title,
        content: (msg),
        buttonText: text,
        hideOnBlur: true,

      })
      this.$vux.confirm.hide()
    },
    showCourse(msg) {
      this.$vux.alert.show({
        title: '恭喜',
        content: (msg),
        hideOnBlur: true,
        onHide() {
          if (navigator.userAgent.indexOf('kedougongkao') == -1) {
            window.location.href = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.naodong.shenluntiku'//下载app
          }
        }
      })
    },
    showAddress(msg) {
      this.$vux.alert.show({
        title: '恭喜',
        content: (msg),
        hideOnBlur: true,
        buttonText: '填写地址',
        onHide: () => {
          this.$router.push({ path: '/address' });//跳转
        }
      })
    },
    toMixun(msg) {
      this.$vux.alert.show({
        title: '恭喜',
        content: (msg),
        hideOnBlur: true,
        buttonText: '立即使用',
        onHide: () => {
          if (navigator.userAgent.indexOf('kedougongkao') == -1) {
            window.location.href = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.naodong.shenluntiku'//下载app
          } else {
            this.$router.push({ path: '/mixun' });//跳转
          }
        }
      })
    },
    light() {//跑马灯
      setInterval(() => {
        this.isLight = !this.isLight
      }, 500)
    },
    roll() {
      this.luck.times += 1;
      this.luck.roll();
      if (this.luck.times > this.luck.cycle + 10 && this.luck.prize == this.luck.index) {
        clearTimeout(this.luck.timer);
        this.luck.prize = -1;
        this.luck.times = 0;
        this.click = false;
        if (this.getRes.data.type == 0) {
          this.showWarn('', '很遗憾，啥都没抽中','好吧')
        }
        if (this.getRes.data.type == 1) {
          this.toMixun('成功抽中了“2017年国考密训营' + this.getRes.data.name + '”，你可以在蝌蚪申论APP“我的-优惠券”页面中查看并使用')
        }
        if (this.getRes.data.type == 5) {
          this.showCourse("成功抽中了：“" + this.getRes.data.name + '”，你可以登录学员中心进行查看');
        }
        if (this.getRes.data.type == 10) {
          if (this.getRes.data.is_has_address) {
            this.showWarn('恭喜', '成功抽中了“《' + this.getRes.data.name + '》”图书，我们将在48小时内火速发货','好的');
          } else {
            this.showAddress('成功抽中了“《' + this.getRes.data.name + '》”图书，我们将在48小时内火速发货')
          }
        }
        if (this.getRes.data.type == 15) {
          this.showWarn('恭喜', '成功抽中了“' + $('#lotteryGiftName').val() + '”，我们将有专人通过电话或微信联系你','好的');
        }
      } else {
        if (this.luck.times < this.luck.cycle) {
          this.luck.speed -= 10;
        } else if (this.luck.times == this.luck.cycle) {
          let index = $('#lotteryId').val();
          this.luck.prize = index;
        } else {
          if (this.luck.times > this.luck.cycle + 10 && ((this.luck.prize == 0 && this.luck.index == 7) || this.luck.prize == this.luck.index + 1)) {
            this.luck.speed += 110;
          } else {
            this.luck.speed += 20;
          }
        }
        if (this.luck.speed < 40) {
          this.luck.speed = 40;
        }

        this.luck.timer = setTimeout(this.roll, this.luck.speed);
      }
      return false;
    }
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

<style lang='less'>
@import '../assets/nowAward';
</style>

