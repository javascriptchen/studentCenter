<template>
  <div>
    <div style='display: none;' v-title>发表评价</div>
    <headTitle :titleParent='parentTitle'></headTitle>
    <div class="evaluate-content">
      <cell title="服务满意度" inline-desc="">
        <rater v-model="star" slot="value"></rater>
      </cell>
      <group>
        <x-textarea :max="200" name="detail" :placeholder="('说说您的建议或改进方案，相信我们做的会更好')" :show-counter="false" v-model="emailContent"></x-textarea>
      </group>
      <div style="padding: 20px; margin-top:15px;">
        <x-button @click.native="evaluate" type="warn">提交</x-button>
      </div>
    </div>
  </div>
</template>

<script>
import headTitle from '../component/title.vue'
import { Rater, Cell, XTextarea, Group, XButton } from 'vux'
import { evaluate } from '../api/api'

export default {
  data() {
    return {
      parentTitle: '发表评价',
      star: 5,
      emailContent: ''
    }
  },
  methods: {
    evaluate() {
      let param = {
        star: this.star,
        emailContent: this.emailContent,
      }
      evaluate(param).then(res => {
        console.log(res);
        if (res.status == 200) {
          this.showErr(res.msg)
          setTimeout(() => {
            this.$router.push({ path: '/orderList' })
          },1000)
        } 
        if (res.status == 404) {
          this.showErr('提交失败')
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
    Rater,
    Cell,
    XTextarea,
    Group,
    XButton
  },
}
</script>

<style>

</style>
