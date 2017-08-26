<template>
  <div>
    <headTitle :titleParent='parentTitle'></headTitle>

    <group title="您购买了以下套餐">
      <group>
        <cell is-link title="测试-标批4.0-7/18 10-套餐" link="/detail"></cell>
      </group>
    </group>
  </div>
</template>

<script>
  import { Group, Cell} from 'vux'
  import headTitle from '../component/title.vue'

  export default {

    data() {
      return {
        parentTitle:'学习中心'
      }
    },
    components: {
      Group,
      Cell,
      headTitle
    },
  }
</script>

<style>

</style>
