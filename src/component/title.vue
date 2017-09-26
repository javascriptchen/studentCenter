<template>
  <div class='commenTitle'>
    <x-header :left-options="{backText: ''}">{{title}}</x-header>

  </div>
</template>

<script>
  import {TransferDom} from 'vux'
  import XHeader from 'vux/src/components/x-header'
  import Actionsheet from 'vux/src/components/actionsheet'
  //  import ButtonTab from 'vux/src/components/button-tab'
  //  import ButtonTabItem from 'vux/src/components/button-tab-item'

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
//      ButtonTab,
//      ButtonTabItem,
    },
  }
</script>

<style lang='less'>
  .commenTitle {
    .vux-header {
      background-color: #F4664B;
      .left-arrow:before {
        border: 1px solid #fff ;
        border-width: 1px 0 0 1px !important;
      }
    }
  }
</style>
