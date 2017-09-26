<template>
  <div class='tmpl'>
    <div style='display: none;' v-title>登录</div>
    <div class="logo">
    </div>
    <h3>使用帐号和姓名登录</h3>
    <div class='needPadding'>
      <group>
        <x-input class="group" title="账号" placeholder="请输入手机号" v-model='phone'></x-input>
      </group>
      <group>
        <x-input class="group" title="姓名" placeholder="请输入姓名" v-model='nickname'></x-input>
      </group>
    </div>
    <div style="padding: 20px; margin-top:15px;">
      <x-button type="warn" plain action-type="submit" :disabled="disabled" @click.native="loginSubmit">登录</x-button>
    </div>
  </div>
</template>
<script>
  import {XInput, Group, XButton, TransferDomDirective as TransferDom} from 'vux'
  import {login} from '../api/api'

  export default {
    data() {
      return {
        phone: '',
        nickname: '',
        disabled: false,
      }
    },
    created() {
    },
    methods: {
      loginSubmit() {
        if (this.phone == '' || this.nickname == '') {
          this.showErr('请输入手机号和密码');
          return;
        }
        this.disabled = true;
        let param = {phone: this.phone, nickname: this.nickname};
        login(param).then(res => {
          console.log(res);
          if (res.status != 200) {
            this.showErr(res.data.message);
            return;
          }
          if (res.data.data.accessToken != '') {
            localStorage.setItem("globalToken", res.data.data.accessToken);
            let jumpUrl = localStorage.getItem('jumpUrl');
            jumpUrl = jumpUrl == null ? "/apply" : jumpUrl;
            localStorage.removeItem("jumpUrl");
            this.$router.push({path: jumpUrl});//跳转
          }
        }).catch(err => {
          console.log(err);
          this.showErr('登陆失败');
        });
        this.disabled = false;
      },
      showErr(msg) {
        this.$vux.alert.show({
          title: '提示',
          content: (msg),
        })
      },
    },
    directives: {
      TransferDom
    },
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

  .needPadding {
    padding: 0 20px 0 20px;
  }


</style>
