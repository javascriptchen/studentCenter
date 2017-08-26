<template>
  <div>
    <x-header :left-options="{backText: ''}">{{title}}</x-header>

  </div>
</template>

<script>
  import {XHeader, Actionsheet, TransferDom, ButtonTab, ButtonTabItem} from 'vux'

  export default {
    data() {
      return {
        title: this.titleParent
      }
    },
    methods: {},
    props: ['titleParent'],
    computed: {},
    directives: {
      TransferDom
    },
    components: {
      XHeader,
      Actionsheet,
      ButtonTab,
      ButtonTabItem,
    },
  }
</script>

<style>

</style>
