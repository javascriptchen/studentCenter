<template>
  <div class='register'>
     <div style='display: none;' v-title>填写资料</div>
    <div class="register-top">
      <img src="./register.png" alt="" class='register-img'>
    </div>
    <div class="register-center">
      <img src="./time.png" alt="" class='register-time'>
      <div class="register-center-bottom">
        <div class='ad-content'>
          <span class='ad-name'>收货人：</span>
          <group style=" margin-top:-20px;">
            <x-textarea :placeholder="('')" :show-counter="false" :rows="1" autosize v-model='name'>
            </x-textarea>
          </group>
        </div>
        <div class='ad-content'>
          <span class='ad-phone'>联系电话：</span>
          <group style=" margin-top:-20px;">
            <x-textarea :placeholder="('')" :show-counter="false" :rows="1" autosize v-model='phone'>
            </x-textarea>
          </group>
        </div>
        <div class='ad-content code-content'>
          <span class='ad-detail_pre'>验证码：</span>
          <input type="text" class="codeText" v-model="code">
          <span class="getCode" @click="getCode" v-show="codeGet">获取验证码</span>
          <span class="codeGet " v-show="!codeGet">{{time+'秒重新发送'}}</span>
        </div>
        <div class='ad-content'>
          <span class='ad-detail_pre'>收货地址：</span>
          <group style=" margin-top:-20px;">
            <x-textarea :placeholder="('')" :show-counter="false" :rows="1" autosize v-model='address' class='getAddress'>

            </x-textarea>
          </group>
        </div>
      </div>
    </div>
    <div class="register-bottom">
      <div class="btn" @click.stop="submitOk">确 &nbsp;&nbsp;&nbsp;认</div>
    </div>
  </div>
</template>
<script>
import { Loading, XTextarea, Group, XInput, TransferDomDirective as TransferDom } from 'vux'
import { wxMockActJoin, getMsgCode } from '../../api/api'
// import Vue from 'vue'



// console.log(myOpenId);
export default {

  data() {
    return {
      name: '',
      phone: '',
      address: '',
      myOpenId: '',
      code: '',
      codeGet: true,
      time: 180
    };
  },
  created() {
    console.log(location.hash);
    if (location.hash) {
      if (location.hash.split("?")[1]) {
        this.myOpenId = location.hash.split("?")[1].split("=")[1]
      } else {
        return
      }
    }
    if (!navigator.onLine) { //正常工作
      this.showErr('无法连接网络')
      return
    }
  },
  methods: {
    submitOk() {
      this.showLoading()

      console.log(this.myOpenId);

      let params = {
        phone: this.phone,
        username: this.name,
        address: this.address,
        openId: this.myOpenId,
        code: this.code
      }
      console.log(this.code);
      wxMockActJoin(params).then(res => {
        console.log(res);
        this.$vux.loading.hide()

        if (res.status == 200) {
          this.$router.push({ path: '/getSuccess' })
          return
        }
        if (res.status === 202) {
          this.showErr(res.data.message)
          return
        }
        if (res.status === 404) {
          this.showErr('请求失败了，请稍后重试')
          return
        }
        if (res.status === 500) {
          this.showErr('服务器崩了，请联系管理员')
          return
        }

      }).catch(err => {
        console.log(err);
        this.$vux.loading.hide()

        this.showErr('错误')
      })
    },
    showErr(msg) {
      this.$vux.alert.show({
        title: '提示',
        content: (msg),
      })
    },
    getCode() {
      this.showLoading()

      let params = {
        phone: this.phone
      }
      getMsgCode(params).then(res => {
        console.log(res);
        this.$vux.loading.hide()

        if (res.status === 202) {
          this.showErr(res.data.message)
          return
        }
        else if (res.status === 200) {
          this.showErr(res.data)
          this.codeGet = false
          let interval = window.setInterval(() => {
            if ((this.time--) <= 1) {
              this.codeGet = true
              this.time = 180;
              // this.sendMsgDisabled = false;
              window.clearInterval(interval);
            }
          }, 1000);
          return
        } else {
          this.showErr('请求失败了，请稍后重试')
          return
        }
      }).catch(err => {
        this.$vux.loading.hide()

        console.log(err);
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
    XTextarea,
    Group,
    Loading
  }
}
</script>
<style lang='less'>
@import './register.less';
</style>