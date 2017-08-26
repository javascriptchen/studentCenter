<template>
  <div>
    <headTitle :titleParent='parentTitle'></headTitle>

  </div>

</template>


<script>
  import headTitle from '../component/title.vue'

  export default {
    data() {
      return {
        parentTitle: '提交试卷'

      }
    },
    methods: {},
    components: {
      headTitle

    },
  }
</script >
<style lang='less'>

</style>
