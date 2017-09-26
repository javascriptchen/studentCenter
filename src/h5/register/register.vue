<template>
  <div class='register'>
    <div class="register-top">
      <img src="./register.jpg" alt="" class='register-img'>
    </div>
    <div class="register-center">
      <img src="./time.png" alt="" class='register-time'>
      <div class="register-center-bottom">
        <div class='ad-content'>
          <span class='ad-name'>收货人：</span>
          <group style=" margin-top:-20px;">
            <x-textarea :placeholder="('')" :show-counter="false" :rows="1" autosize v-model='name'>
            </x-textarea>
          </group>
        </div>
        <div class='ad-content'>
          <span class='ad-phone'>联系电话：</span>
          <group style=" margin-top:-20px;">
            <x-textarea :placeholder="('')" :show-counter="false" :rows="1" autosize v-model='phone'>
            </x-textarea>
          </group>
        </div>
        <div class='ad-content'>
          <span class='ad-detail_pre'>收货地址：</span>
          <group style=" margin-top:-20px;">
            <x-textarea :placeholder="('')" :show-counter="false" :rows="1" autosize v-model='address' class='getAddress'>

            </x-textarea>
          </group>
        </div>
      </div>
    </div>
    <div class="register-bottom">
      <div class="btn" @click.stop="submitOk">确 &nbsp;&nbsp;&nbsp;认</div>
    </div>
  </div>
</template>
<script>
import { XTextarea, Group } from 'vux'
import { XInput, TransferDomDirective as TransferDom } from 'vux'
import { wxMockActJoin } from '../../api/api'
// import Vue from 'vue'



// console.log(myOpenId);
export default {

  data() {
    return {
      name: '',
      phone: '',
      address: '',
      myOpenId: ''
    };
  },
  created() {
    console.log(location.hash);
    if (location.hash) {
      if (location.hash.split("?")[1]) {
        this.myOpenId = location.hash.split("?")[1].split("=")[1]
      }else{
        return
      }
    }
  },
  methods: {
    submitOk() {
      console.log(this.myOpenId);
      let params = {
        phone: this.phone,
        username: this.name,
        address: this.address,
        openId: this.myOpenId
      }
      wxMockActJoin(params).then(res => {
        console.log(res);
        if (res.status == 200) {
          this.$router.push({ path: '/nowStart' })
          return
        }
        if (res.status === 202) {
          this.showErr(res.data.message)
          return
        }
        if (res.status === 404) {
          this.showErr('请求失败了，请稍后重试')
          return
        }
        if (res.status === 500) {
          this.showErr('服务器崩了，请联系管理员')
          return
        }
      }).catch(err => {
        console.log(err);
        this.showErr('未知错误')
      })
    },
    showErr(msg) {
      this.$vux.alert.show({
        title: '提示',
        content: (msg),
      })
    },
  },
  directives: {
    TransferDom
  },
  components: {
    XTextarea,
    Group
  }
}
</script>
<style lang='less'>
@import './register.less';
</style>