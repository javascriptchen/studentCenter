<template>
  <div id='userAddress' style='padding-top:8px;'>
    <div style='display: none;' v-title>填写地址</div>
    <!--<headTitle class='addressHead'-->
               <!--:titleParent='parentTitle'-->
               <!--:class='{hide:hiddenHeader}'>-->
    <!--</headTitle>-->
    <div class='ad-content'>
      <span class='ad-name'>收货人</span>
      <group style=" margin-top:-20px;">
        <x-textarea
          :placeholder="('')"
          :show-counter="false"
          :rows="1" autosize
          v-model='name'>
        </x-textarea>
      </group>
    </div>

    <div class='ad-content'>
      <span class='ad-phone'>手机号</span>
      <group style=" margin-top:-20px;">
        <x-textarea
          :placeholder="('')"
          :show-counter="false"
          :rows="1" autosize
          v-model='phone'>
        </x-textarea>
      </group>
    </div>
    <div class='ad-content'>
      <span class='ad-detail_pre'>省市区</span>
      <group style=" margin-top:-20px;">
        <x-textarea
          :placeholder="('省份 | 城市 | 地区 ')"
          :show-counter="false"
          :rows="1" autosize
          v-model='detail_pre'>
        </x-textarea>
      </group>
    </div>
    <div class='ad-content'>
      <span class='ad-detail_area'>街道</span>
      <group :title="('')" style=" margin-top:-20px;">
        <x-textarea
          :placeholder="('街道、楼牌号 ')"
          :show-counter="false"
          :rows="1" autosize
          v-model='detail_area'>
        </x-textarea>
      </group>
    </div>


    <div class='submitBtn' style=" margin:20px 40px;">
      <x-button
        @click.native="addressSubmit('middle')"
        type="">提交
      </x-button>
    </div>
    <toast
      v-model="showPositionValue"
      type="text"
      :time="2000"
      is-show-mask
      :text="toastText"
      :position="position">
      {{ ('') }}
    </toast>

  </div>
</template>

<script>
  //  import {XTextarea, XInput, Group, XButton, Cell} from 'vux'
  import XTextarea from 'vux/src/components/x-textarea'
  import XInput from 'vux/src/components/x-input'
  import Group from 'vux/src/components/group'
  import XButton from 'vux/src/components/x-button'
  import Cell from 'vux/src/components/cell'
  import Toast from 'vux/src/components/toast'
//  import headTitle from '../component/title.vue'
  import {addUserAddress} from '../api/api'

  export default {
    data() {
      return {
        title: '',
        data: {
          params: ""
        },
        name: '',
        phone: '',
        detail_pre: '',
        detail_area: '',
        parentTitle: '填写地址',
        hiddenHeader: true,
        showPositionValue: false,
        position: 'default',
        addressParam: '',
        toastText:'请输入内容'
      }
    },
    methods: {
      displayNone() {
        if (navigator.userAgent.indexOf('kedougongkao') == -1) {
          this.hiddenHeader = false
        }
      },
      showToast(str){
        this.toastText = str
        this.showPositionValue = true
      },
      addressSubmit(position) {
        this.position = position
        if (this.phone == '' && this.name == '' && this.detail_pre == '' && this.detail_area == '') {
          this.showToast('请输入内容')
          return
        }
        if (this.name == '') {
          this.showToast('请输入姓名')
          return
        }
        if (this.phone == '') {
          this.showToast('请输入手机号')
          return
        }
        if (!(/^1[34578]\d{9}$/.test(this.phone))) {
          this.showToast('手机号码有误')
          return false;
        }
        if (this.detail_pre == '') {
          this.showToast('请输入地区')
          return
        }
        if (this.detail_area == '') {
          this.showToast('请输入街道')
          return
        }

        this.data.params = {
          "name": this.name,
          "phone": this.phone,
          "detail_pre": this.detail_pre,
          "detail_area": this.detail_area
        }

        this.data.params = JSON.stringify(this.data.params);
        let params = this.data
//        console.log(params);
        addUserAddress(params).then(res => {
          console.log(res);
          if (res.status == 200) {
            this.showToast('提交成功')

            this.$router.push({path: '/nowAward'})
            return
          }
          if (res.status == 202) {
            this.showToast( res.data.message)

          }
        }).catch(err => {
          console.log(err);
        })
      }
    },
    created() {
      this.displayNone()
    },
    components: {
//      headTitle,
      XInput,
      Group,
      XButton,
      Cell,
      XTextarea,
      Toast
    },
  }
</script>
<style lang='less'>
  @import '../assets/address';
</style>
