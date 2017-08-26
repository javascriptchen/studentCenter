<template>
  <div>
    <headTitle :titleParent='parentTitle'></headTitle>
    <group title="请填写您的邮箱用于接收试卷和诊断报告">
    <x-input class="group" title="邮箱" placeholder="请输入邮箱"></x-input>
    </group>
    <div style="padding: 20px; margin-top:15px;">
      <x-button @click.native="" type="warn">确定</x-button>
    </div>
  </div>
</template>

<script>
  import {XInput, Group, XButton} from 'vux'
  import headTitle from '../component/title.vue'

  export default {

    data() {
      return {
        parentTitle:'修改邮箱'
      }
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
