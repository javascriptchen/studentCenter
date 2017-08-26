<template>
 <div>
   <headTitle :titleParent='parentTitle'></headTitle>

   <header>欢迎页面</header>

   <main>
     <router-link to='/studyCenter' class="studyCenter">学习中心</router-link>
     <br>
     <router-link to='/myData' class="myData">我的资料</router-link>

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
    headTitle,
  },
}
</script >
<style lang='less'>
  header {
    background-color: #F4664B;
    height: 100px;
  }

  main {
    display: flex;
    .studyCenter {
      flex: 1;
    }
    .myData {
      flex: 1;
    }
  }
</style>
