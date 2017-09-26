<template>
  <div class='main cc0916-main'>
    <div style='display: none;' v-title>申论80分批改密训营</div>
    <div class='imgDiv' v-for="src in list" style="">
      <span style="font-size:20px;">正在加载</span>
      <x-img :src="src" :webp-src="`${src}?type=webp`" @on-success="success" @on-error="error" class="ximg-demo"
             error-class="ximg-error" :offset="-100" container="#vux_view_box_body"></x-img>
    </div>
    <div class="nowApply" :class='{hide:isnowApply}'>
      <a href='javascript:void(0)' class="left">已有 <span>{{orderCount}}</span> 人报名</a>
      <a href='javascript:void(0)' class="right" :class='{hide:isBuy}' @click='callNativeBuyProducts()'>立即购买
      </a>
      <a href='javascript:void(0)' class="color" :class='{hide:!isBuy}'>您已购买
      </a>
    </div>
  </div>

</template>

<script>
  import {XImg} from 'vux'
  import {callNativeFunction} from '../common/common'
  import {mixunProduct} from '../api/api'


  export default {
    data() {
      return {
        orderCount: '10',//人数
        isnowApply: true,
        isBuy: false,
        products: '',
        token: '',
        myErr: '没有token',
        list: [
          '../../kedooWap/static/images/mixun_01.jpg',
          '../../kedooWap/static/images/mixun_02.jpg',
          '../../kedooWap/static/images/mixun_03.jpg',
          '../../kedooWap/static/images/mixun_04.jpg',
          '../../kedooWap/static/images/mixun_05.jpg',
          '../../kedooWap/static/images/mixun_06.jpg',
          '../../kedooWap/static/images/mixun_07.jpg',
          '../../kedooWap/static/images/mixun_08.jpg',
          '../../kedooWap/static/images/mixun_09.jpg',
          '../../kedooWap/static/images/mixun_10.jpg',
          '../../kedooWap/static/images/mixun_11.jpg',
          '../../kedooWap/static/images/mixun_12.jpg',
          '../../kedooWap/static/images/mixun_13.jpg',
          '../../kedooWap/static/images/mixun_14.jpg',
        ]
      }
    },
    created() {
      this.mixunProduct();
    },
    methods: {
      mixunProduct() {
        let param = {}
        mixunProduct(param).then(res => {
          console.log(res);
          if (res.data.status == 202) {
            this.showErr(res.data.message)
          }
          if (res.data.status == 401) {
            this.showErr(res.data.message)
          }
          this.orderCount = res.data.detail.orderCount
          if (res.data.type == 'saleProduct') {
            this.isnowApply = false
            if (res.data.detail.canBuyBtn.canClick == 1) {
              this.products = res.data.detail.products
            } else {
              this.isBuy = true
            }
          }
        }).catch(err => {
          console.log(err);
//          alert(err)
//          this.showErr('请先登录')
        })

      },
      callNativeBuyProducts() {//传给客户端数据的方法
        let json = {'products': this.products};
        callNativeFunction("buyProduct", json, function (ret) {
          console.log(ret);
        })
      },
      showErr(err) {
        this.$vux.alert.show({
          title: '提示',
          content: (err),
          hideOnBlur: true,

        })
      },
      success(src, ele) {
//        console.log('success load', src)
        const span = ele.parentNode.querySelector('span')
        ele.parentNode.removeChild(span)
      },
      error(src, ele, msg) {
//        console.log('error load', msg, src)
        const span = ele.parentNode.querySelector('span')
        span.innerText = '加载失败'
      }
    },
    components: {
      XImg
    }
  }
</script>

<style lang='less'>
  @import '../assets/mixun.less';
</style>
