<template>
  <div class='tmpl'>
    <div style='display: none;' v-title>学员资料</div>

    <div class="logo">
      <img src="../../static/images/img_logo.png" alt="">
    </div>
    <h3>使用帐号密码登录</h3>
    <group>
      <x-input class="group" title="账号" placeholder="请输入手机号" v-model='phone'></x-input>
    </group>
    <group>
      <x-input class="group" title="密码" placeholder="请输入密码" v-model='nickname'></x-input>
    </group>
    <div style="padding: 20px; margin-top:15px;">
      <x-button @click.native="studentLogin" type="warn">登录</x-button>
    </div>
    <router-link class="search" to="search">找回密码</router-link>
  </div>
</template>


<script>
  import {XInput, Group, XButton, TransferDomDirective as TransferDom} from 'vux'
  import {studentLogin} from '../api/api'

  export default {
    data() {
      return {
        phone: '17190326885',
        nickname: '学霸17190326885',
      }
    },
    created() {

    },
    methods: {
      studentLogin() {
        if (this.phone == '' || this.nickname == '') {
          this.showErr('请输入手机号和密码');
          return;
        }
        let params = {phone: this.phone, nickname: this.nickname}
        studentLogin(params).then(res => {
          console.log(res);
          if (res.status != 200) {
            this.showErr(res.msg);
            return;
          }
          else{
            this.$router.push({path: '/userCenter'});//跳转
            
          }
          // if (res.data.data.accessToken != '') {
          //   localStorage.setItem("globalToken", res.data.data.accessToken);
          //   this.$router.push({path: '/userCenter'});//跳转
          // }
        }).catch(err => {
          console.log(err);
          this.showErr('登陆失败');
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
      Group,
      XButton,
    },
    directives: {
      TransferDom
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
