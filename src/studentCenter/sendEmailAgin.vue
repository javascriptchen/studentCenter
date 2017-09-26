<template>
  <div>
    <div style='display: none;' v-title>学员资料</div>

    <headTitle :titleParent='parentTitle'></headTitle>
    <group title="确定把该套餐的试卷<br>重新发送到以下的邮箱么？（建议其他邮箱）">
      <x-input class="group" title="邮箱" placeholder="请输入邮箱" v-model='email'></x-input>
    </group>
    <div style="padding: 20px; margin-top:15px;">
      <x-button @click.native="sendAgain" type="warn">确定重发</x-button>
    </div>
  </div>
</template>

<script>
import headTitle from '../component/title.vue'
import { Group, Cell, XInput, XButton, TransferDomDirective as TransferDom } from 'vux'
import { sendAgain } from '../api/api'

export default {
  data() {
    return {
      parentTitle: '重发邮件',
      email: '123@123.com'
    }
  },
  methods: {
    sendAgain() {
      let param = {
        email: this.email
      }
      sendAgain(param).then(res => {
        console.log(res);
        if (res.status == 200) {
          this.showErr(res.data.msg)
          setTimeout(() => {
            this.$router.push({ path: '/examList' })
          }, 1000)
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
  props: {},
  computed: {},
  components: {
    headTitle,
    Group,
    XInput,
    XButton,
    Cell
  },
  directives: {
    TransferDom
  },
}
</script>

<style>

</style>
