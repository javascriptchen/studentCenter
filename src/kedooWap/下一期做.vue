<template>
  <div >
    <group title="" >
      <x-input title="收货人" name="username" placeholder="请输入姓名" is-type="china-name"></x-input>
    </group>
    <group title="" style=" margin-top:-20px;">
      <x-input title="手机号" name="mobile" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile"></x-input>
    </group>
    <group style=" margin-top:-20px;">
      <x-address :title="title" @on-hide="logHide" v-model="value_0_1" :list="addressData" placeholder="请选择地址">
        <template slot="title" scope="props">
        <span :class="props.labelClass" :style="props.labelStyle" style="height:24px;">
          <span style="vertical-align:middle;">地址</span>
        </span>
        </template>
      </x-address>
    </group>
    <group :title="('')" style=" margin-top:-20px;">

      <x-textarea :placeholder="('街道、楼牌号')" :show-counter="false" :rows="1" autosize v-model='addressDetail'></x-textarea>
    </group>

    <div style=" margin-top:15px;">
      <x-button @click.native="studentLogin" type="warn">提交</x-button>
    </div>
  </div>
</template>

<script>
  import {XTextarea,XInput, Group, XAddress, ChinaAddressV3Data, XButton, Cell, Value2nameFilter as value2name} from 'vux'
  export default {
    data() {
      return {
        title: '',
        value_0_1: [],
        address: "",
        province: "",
        city: "",
        county: "",
        addressDetail:"",
        addressData: ChinaAddressV3Data,
      }
    },
    methods: {
      logHide(str) {
        console.log('on-hide', str)
        for (let i = 0; i < this.addressData.length; i++) {
          if (this.addressData[i].value == this.value_0_1[0]) {
            this.province = this.addressData[i].name
          }
          if (this.addressData[i].value == this.value_0_1[1]) {
            this.city = this.addressData[i].name
          }
          if (this.value_0_1[2] != '--') {
            if (this.addressData[i].value == this.value_0_1[2]) {
              this.county = this.addressData[i].name
            }
          }
        }
        this.address = {
          "province": this.province,
          "city": this.city,
          "county": this.county
        }
        console.log(JSON.stringify(this.address))
      }
    },
    components: {
      XInput,
      Group,
      XAddress,
      XButton,
      Cell,
      XTextarea,
    },
  }
</script>
<style scoped>

</style>
