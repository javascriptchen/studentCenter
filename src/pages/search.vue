<template>
  <div>

    <x-header :left-options="{backText: ''}">忘记密码</x-header>

    <x-input v-model='phone' title="手机号码" name="mobile" placeholder="请输入手机号码" keyboard="number"
             is-type="china-mobile"></x-input>


    <x-input v-model='verify' placeholder="请输入验证码" title="验证码" class="weui-vcode">
      <x-button slot="right" type="primary" mini>获取验证码</x-button>
    </x-input>
    <x-input v-model='name' title="姓名" name="username" placeholder="请输入姓名" is-type="china-name"></x-input>
    <div style="padding: 20px; margin-top:15px;">
    <x-button type="warn" >重设密码</x-button>
    </div>
  </div>

</template>


<script>
  import {XInput, Group, XButton, Cell} from 'vux'
  import {XHeader, Actionsheet, TransferDom, ButtonTab, ButtonTabItem} from 'vux'

  export default {

    data() {
      return {
        phone: '',
        verify: '',//验证码
        name: ''
      }
    },
    methods: {},
    components: {
      XInput,
      XButton,
      Group,
      Cell,
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
  .vux-header{
    background-color: #F4664B !important;
  }
</style>
