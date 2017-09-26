<template>
  <div class="cc-userInfo">
    <div style='display: none;' v-title>学员资料</div>

    <headTitle :titleParent='parentTitle'></headTitle>
    <group title="基础资料">
      <ul class="cc-detail">
        <li class="cc-detail-li ">
          <div class="cc-detail-left">学员姓名</div>
          <div class="cc-detail-right">学霸17190326885</div>
        </li>
        <li class="cc-detail-li ">
          <div class="cc-detail-left">手机号</div>
          <div class="cc-detail-right">17190326885</div>
        </li>
        <router-link to="/modifyEmail" class="cc-detail-li ">
          <div class="cc-detail-left">邮箱</div>
          <div class="cc-detail-right">{{email}}</div>
        </router-link>
      </ul>
    </group>
    <div style="padding: 20px; margin-top:15px;">
      <x-button @click.native="loginOut" type="warn">退出登录</x-button>
    </div>
  </div>
</template>

<script>
import { Group, XButton } from 'vux'
import headTitle from '../component/title.vue'

export default {

  data() {
    return {
      disabledValue: '学霸',
      disabledPhone: '123123',
      parentTitle: '学员资料',
      email: '909366413@qq.com '
    }
  },
  created() {

  },
  methods: {
    loginOut() {
      this.$router.push({ path: '/studentLogin' })
    }
  },
  components: {
    Group,
    XButton,
    headTitle
  },
}
</script>

<style lang='less'>
.cc-userInfo {
  font-size: 14px;
  .cc-detail {

    .cc-detail-li {
      width: 100%;
      display: flex;
      font-size: 15px;
      padding: 10px 10px; // padding-left:30px;
      &:nth-child(1) {
        border-bottom: 1px solid #f2f2f2;
      }
      &:nth-child(2) {
        border-bottom: 1px solid #f2f2f2;
      }
      .cc-detail-left {
        width: 80px;
        text-align: left;
      }
      .cc-detail-right {
        text-align: right;
        flex: 1;
        padding: 0 20px 0 0;
      }
    }
  }
}
</style>
