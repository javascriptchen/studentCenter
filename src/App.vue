<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {

  name: 'app',
  data() {
    return {
      isShowBack: true,
    }
  },
  created() {
    this.isShowOrHiddenBack(this.$route.path)
  },
  methods: {
    isShowOrHiddenBack(path) {
      if (path == '/home') {
        this.isShowBack = false //隐藏返回按钮
      } else {
        this.isShowBack = true //显示隐藏按钮
      }
    },
  },
  watch: {
    //监控路由的更改
    '$route': function (newValue, oldVal) {
      this.isShowOrHiddenBack(newValue.path)
      console.log(newValue.path)
    }
  }
}
</script>

<style >

body {
  background-color: #fbf9fe;
}
#header {
  background-color: #F4664B;
}
</style>
