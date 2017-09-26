<template>
  <div>
    <headTitle :titleParent='parentTitle'></headTitle>
    <group title="请填写您的邮箱用于接收试卷和诊断报告">
      <x-input class="group" title="邮箱" placeholder="请输入邮箱" v-model='email'></x-input>
    </group>
    <div style="padding: 20px; margin-top:15px;">
      <x-button @click.native="changeEmail" type="warn">确定</x-button>
    </div>
  </div>
</template>

<script>
import { XInput, Group, XButton, TransferDomDirective as TransferDom } from 'vux'
import headTitle from '../component/title.vue'
import { changeEmail } from '../api/api'


export default {

  data() {
    return {
      parentTitle: '修改邮箱',
      email: '909366413@qq.com'
    }
  },
  methods: {
    changeEmail() {
      if (!(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(this.email))) {
        this.showErr('邮箱格式不正确！')
        return;
      }
      let param = { email: this.email }
      changeEmail(param).then(res => {
        console.log(res);
        if (res.status != 200) {
          this.showErr(res.data.message);
          return;
        } else {
          this.$router.push({ path: '/orderList' })
        }
      })
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
    headTitle
  },
}
</script>

<style>

</style>
