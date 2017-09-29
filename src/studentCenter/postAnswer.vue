<template>
  <div>
    <div style='display: none;' v-title>提交试卷</div>
    <headTitle :titleParent='parentTitle'></headTitle>
    <div class="post-top">
      <img src="../../static/images/ico_notice.png" alt="">
      <span>请将答卷拍照上传，注意页面歪斜，一张图片只包含一页答卷、无需提交试题部分</span>
    </div>

    <ul class="post-content">

      <li class="post-bottom">
        <div class="post-bottom-top">
          <p>标批作文题3.2版本2017-04-06 18:10:25</p>
        </div>
        <div class="post-bottom-bottom">
          <!-- <div id="uploader-demo"> -->
            <!--用来存放item-->
            <!-- <div id="fileList" class="uploader-list"></div>
              <div id="filePicker"></div> -->
          <!-- </div> -->
            <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog v-model="dialogVisible" size="tiny">
              <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>

        </div>
      </li>
    </ul>

  </div>
</template>


<script>
import headTitle from '../component/title.vue'
// import { Upload,Dialog } from 'element-ui'


export default {
  data() {
    return {
      parentTitle: '提交试卷',
      dialogImageUrl: '',
      dialogVisible: false
    }
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    }
  },
  components: {
    headTitle,
    // elUpload:Upload,
    // elDialog:Dialog
  },
}
</script>

<style lang='less'>
@import '../assets/postAnswer';
</style>
