<template>
  <div>
    <div style="padding: 15px;">
      <x-button @click.native="showLoading" type="primary">显示loading(2s后关闭)</x-button>
    </div>
  </div>
</template>



<script>
  import { Loading,  XButton, TransferDomDirective as TransferDom } from 'vux'

  export default {
    directives: {
      TransferDom
    },
    components: {
      Loading,
      XButton
    },
    data () {
      return {
      }
    },
    methods: {
      showLoading () {
        this.$vux.loading.show({
          text: '请稍等'
        })
        setTimeout(() => {
          this.$vux.loading.hide()
        }, 2000)
      },

    }
  }


</script>
