<template>
  <div class='main'>
    <div class='imgDiv' v-for="(src,index) in list" :class='"picture"+index' style="">
      <span style="font-size:20px;">正在加载</span>
      <a v-if='index==1' href="https://h5.youzan.com/v2/goods/3nnz29vbmf9p4">
        <img class="join" src="../../static/images/join.png" alt="">
      </a>
      <a v-if='index==6' href="https://h5.youzan.com/v2/goods/3nnz29vbmf9p4">
        <img class="five" src="../../static/images/five.png" alt="">
      </a>
      <a v-if='index==6' href="https://h5.youzan.com/v2/apps/wheel?alias=xn6zsfh2">
        <img class="award" src="../../static/images/award.png" alt="">
      </a>
      <x-img :src="src" :webp-src="`${src}?type=webp`" @on-success="success" @on-error="error" class="ximg-demo"
             error-class="ximg-error" :offset="-100" container="#vux_view_box_body"></x-img>
    </div>

  </div>
</template>

<style lang='less'>
  @import '../assets/advertise';
</style>
<script>
  import {XImg} from 'vux'

  export default {
    components: {
      XImg
    },
    methods: {
      success(src, ele) {
        const span = ele.parentNode.querySelector('span')
        ele.parentNode.removeChild(span)
      },
      error(src, ele, msg) {
        const span = ele.parentNode.querySelector('span')
        span.innerText = '加载失败'
      }
    },
    data() {
      return {
        list: [
          '../../kedooWap/static/images/active_background_01.jpg',
          '../../kedooWap/static/images/active_background_02.jpg',
          '../../kedooWap/static/images/active_background_03.jpg',
          '../../kedooWap/static/images/active_background_04.jpg',
          '../../kedooWap/static/images/active_background_05.jpg',
          '../../kedooWap/static/images/active_background_06.jpg',
          '../../kedooWap/static/images/active_background_07.jpg',
          '../../kedooWap/static/images/active_background_08.jpg',
        ]
      }
    }
  }
</script>
