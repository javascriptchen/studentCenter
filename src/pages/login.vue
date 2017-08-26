<template>
  <div class='tmpl'>
    <div class="logo">
      <img src="http://examtest.newgs.net/Public/exam/images/studwap/img_logo.png" alt="">
    </div>
    <h3>使用帐号密码登录</h3>
    <group>
      <x-input class="group" title="账号" placeholder="请输入手机号" v-model='phone'></x-input>
    </group>
    <group>
      <x-input class="group" title="密码" placeholder="请输入密码" v-model='password'></x-input>
    </group>
    <div style="padding: 20px; margin-top:15px;">
      <x-button @click.native="" type="warn">登录</x-button>
    </div>
    <router-link class="search" to="search">找回密码</router-link>
  </div>
</template>


<script>
  import {XInput, Group, XButton} from 'vux'

  export default {

    data() {
      return {
        isShowBack: true,
        phone:'17190326885',
        password:'学霸17190326885',
      }
    },
    created() {
    },
    methods: {},
    components: {
      XInput,
      Group,
      XButton,
    },
  }
</script>

<style scoped>
  .logo {
    margin: 20px auto;
    width: 40%;
  }

  .logo img {
    width: 100%;
  }

  h3 {
    text-align: center;
    font-weight: 100;
  }

  .group {
    border: 1px solid #fff;
    border-bottom: none;
    font-size: 18px;
  }

  .search {
    padding-right: 30px;
    float: right;
    color: #9f9f9f;
  }
</style>
