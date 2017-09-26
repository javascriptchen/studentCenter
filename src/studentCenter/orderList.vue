<template>
  <div>
    <div style='display: none;' v-title>学员资料</div>

    <headTitle :titleParent='parentTitle'></headTitle>
    <div class="orderTop">
      <group title="您购买了以下套餐">
        <ul>
          <li class="cc-check" v-for='item in orderList'>
            <div @click="toExamList(item.id)">
              <div class="cc-check-top">{{item.addr}}</div>
              <div class="cc-check-bottom">{{item.birth}}</div>
            </div>
          </li>
        </ul>
      </group>
    </div>

  </div>
</template>

<script>
import { Group } from 'vux'
import headTitle from '../component/title.vue'
import { getOrderList, toExamList, } from '../api/api'
import { adapterUsers } from "../adapter/userAdapter";

export default {

  data() {
    return {
      parentTitle: '学习中心',
      orderList: ''
    }
  },
  mounted() {
    this.$nextTick(function() {
      this.getOrderList()
    })
  },
  methods: {
    getOrderList() {
      //let param = {}
      getOrderList().then(res => {
        console.log(res);
        if (res.status == 200) {
          // this.orderList = res.data.users;
          this.orderList = adapterUsers(res.data.users);
          // console.log(this.orderList[1].id);
        }
      }).catch(err => {
        console.log(err);
      })
    },
    toExamList(couponId) {
      let param = couponId
      toExamList(param).then(res => {
        if (res.status == 200) {
          console.log(res);
          this.$router.push({ path: '/examList' })
        }
        if (res.status != 200) {
          // this.showErr(res.data.message)
          return;
        }
      }).catch(err => {
        
        console.log(err);
        //this.showErr(err.data.message)
      })
    },
  },
  components: {
    Group,
    headTitle,
  }
}
</script>

<style lang='less'>
@import '../assets/orderList.less';
</style>
