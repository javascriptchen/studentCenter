<template>
  <div>
    <div style='display: none;' v-title>学员资料</div>

    <x-header :left-options="{backText: ''}">忘记密码</x-header>

    <x-input v-model='phone' title="手机号码" name="mobile" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile"></x-input>

    <x-input v-model='verify' placeholder="请输入验证码" title="验证码" class="weui-vcode">
      <x-button slot="right" type="primary" mini @click.native="send" v-if="sendMsgDisabled" :disabled='disabled'>{{time+'秒后获取'}}</x-button>
      <x-button slot="right" type="primary" mini @click.native="send" v-if="!sendMsgDisabled" :disabled='disabled'>获取验证码</x-button>
    </x-input>
    <x-input v-model='name' title="姓名" name="username" placeholder="请输入真实姓名为您的登录密码" is-type="china-name"></x-input>
    <div style="padding: 20px; margin-top:15px;">
      <x-button type="warn" @click.native="changePassWord">重设密码</x-button>
    </div>
  </div>
</template>


<script>
import { XHeader, XInput, XButton } from 'vux'
import { Actionsheet, TransferDomDirective as TransferDom, ButtonTab, ButtonTabItem } from 'vux'
import { getNumber, changePassWord } from '../api/api'
export default {

  data() {
    return {
      phone: '',
      verify: '',//验证码
      name: '',
      time: 60,
      sendMsgDisabled: false,
      disabled: false
    }
  },
  methods: {
    send() {
      if (!(/^1[34578]\d{9}$/.test(this.phone))) {
        this.showErr('手机号码有误')
        return false;
      }
      this.disabled = true
      this.sendMsgDisabled = true;
      let interval = window.setInterval(() => {

        if ((this.time--) <= 0) {
          this.disabled = false
          this.time = 60;
          this.sendMsgDisabled = false;
          window.clearInterval(interval);
        }
      }, 1000);

      let param = { phone: this.phone }
      getNumber(param).then(res => {
        console.log(res);
        this.showErr(res.data.msg)
      }).catch(err => {
        console.log(err);
        this.showErr('信息填写错误')
      })
    },
    changePassWord() {
      if (this.phone == '' && this.verify == '' && this.name == '') {
        this.showErr('请输入信息')
        return
      }
      if (!(/^1[34578]\d{9}$/.test(this.phone))) {
        this.showErr('手机号码有误')
        return false;
      }
      if (this.phone == '') {
        this.showErr('手机号码有误')
        return
      }
      if (this.verify == '') {
        this.showErr('验证码错误')
        return
      }
      if (this.name == '') {
        this.showErr('名字错误')
        return
      }
      let param = {
        phone: this.phone,
        verify: this.verify,
        name: this.name
      }
      changePassWord(param).then(res => {
        console.log(res);
        if (res.status == 200) {
          this.$router.push({ path: '/orderList' })
        } else {
          this.showErr(res.message)
        }
      }).catch(err => {
        console.log(err);
        this.showErr('未知错误')
      })
    },
    showErr(msg) {
      this.$vux.alert.show({
        title: '提示',
        content: (msg),
      })
    },
  },
  components: {
    XInput,
    XButton,
    XHeader,
    Actionsheet,
    ButtonTab,
    ButtonTabItem
  },
  directives: {
    TransferDom
  },

} 
</script>
<style>
.vux-header {
  background-color: #F4664B !important;
}
</style>
