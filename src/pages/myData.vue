<template>
  <div>
    <headTitle :titleParent='parentTitle'></headTitle>
    <group title="基础资料">
      <x-input title='学员姓名' disabled v-model="disabledValue"></x-input>
      <x-input title='手机号' disabled v-model="disabledPhone"></x-input>
      <router-link to='/email'>邮箱</router-link>
    </group>
    <x-button @click.native="" type="warn">登录</x-button>

  </div>
</template>

<script>
  import {XInput, Group, XButton} from 'vux'
  import headTitle from '../component/title.vue'

  export default {

    data() {
      return {
        disabledValue: '学霸',
        disabledPhone: '123123',
        parentTitle: '学员资料'
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
