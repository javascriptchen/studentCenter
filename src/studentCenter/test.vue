<template>
  <div>
    <div class='imgDiv' v-for="src in list" style="">
      <span style="font-size:20px;">Loading</span>
      <x-img :src="src" :webp-src="`${src}?type=webp`" @on-success="success" @on-error="error" class="ximg-demo"
             error-class="ximg-error" :offset="-100" container="#vux_view_box_body"></x-img>
    </div>
  </div>
</template>

<script>
  import {XImg} from 'vux'

  export default {
    components: {
      XImg
    },
    methods: {
      success(src, ele) {
        console.log('success load', src)
        const span = ele.parentNode.querySelector('span')
        ele.parentNode.removeChild(span)
      },
      error(src, ele, msg) {
        console.log('error load', msg, src)
        const span = ele.parentNode.querySelector('span')
        span.innerText = 'load error'
      }
    },
    data() {
      return {
        list: [
          '../../static/images/mixun_01.jpg',
          '../../static/images/mixun_02.jpg',
          '../../static/images/mixun_03.jpg',
          '../../static/images/mixun_04.jpg',
          '../../static/images/mixun_05.jpg',
          '../../static/images/mixun_06.jpg',
          '../../static/images/mixun_07.jpg',
          '../../static/images/mixun_08.jpg',
          '../../static/images/mixun_09.jpg',
          '../../static/images/mixun_10.jpg',
        ]
      }
    }
  }
</script>

<style lang='less'>
  .imgDiv {
    background-color: #fff;
    text-align: center;
    img {
      display: block;
    }
  }

  .ximg-demo {
    width: 100%;
    height: auto;
  }

  .ximg-error {
    background-color: #ffffff !important;
  }

  .ximg-error:after {
    content: '加载失败';
    color: red;
  }
</style>
