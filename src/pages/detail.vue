<template>
  <div>
    <headTitle :titleParent='parentTitle'></headTitle>

    <main>
      <router-link to='/email' class="email">收不到邮件</router-link>
      <br>
      <router-link to='/lookPaper' class="lookPaper">查看试卷</router-link>
      <br>
      <router-link to='/submit' class="submit">提交答卷</router-link>

    </main>
  </div>

</template>


<script>
  import headTitle from '../component/title.vue'

  export default {
    data() {
      return {
        parentTitle: '套餐详情'

      }
    },
    methods: {},
    components: {
      headTitle

    },
  }
</script >
<style lang='less'>

  main{
    display: flex;
    .email{
      flex:1;
    }
    .lookPaper{
      flex:1;
    }
    .submit{
      flex:1;
    }
  }
</style>
