<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
//  data() {
//    return {
//      token: ''
//    }
//  },
    watch:{
      '$route'(to,from) {
        if (to.path != from.path) {
          this.$vux.alert.hide({

          })
          this.$vux.loading.hide()
        }
      }
    }
  }
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';

  body {
    background-color: #F3F4F9;
    height: 100%;
    width: 100%;
  }

  html {
    height: 100%;
    width: 100%;

  }

  #app {
    height: 100%;
  }

  ul, ol {
    list-style: none;
  }
</style>
