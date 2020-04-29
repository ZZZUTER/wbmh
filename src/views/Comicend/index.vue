<template>
  <div class="page-comicend">
    <!-- 头部 -->
    <normal-header title="完结"></normal-header>
    <!-- main -->
  <div class="main">
    <div class="comic-main" v-for="item in comicList" :key="item.info_id">
      <div class="comic_cover_pic">
        <img :src="item.image_ext_url" alt="">
      </div>
          <p><span :class="item.cate_list[0].cate_en_name">{{item.cate_list[0].cate_cn_name}}</span>{{ item.extra.name}}</p>
    </div>

  </div>
  </div>
  <!-- http://manhua.weibo.cn/wbcomic/home/recommend_list?location_en=ending_works_list&_type= -->
</template>

<script>
import NormalHeader from '@/components/NormalHeader'
import { getComicend } from '@/api/cartoon'
export default {
  name: 'Comicend',
  components: {
    NormalHeader
  },
  data () {
    return {
      comicList: []
    }
  },
  created () {
    getComicend().then(res => {
      console.log(res)
      if (res.status === 200) {
        // ok
        this.comicList = res.data.data.ending_works_list
      } else {
        alert(res.message)
      }
    }).catch(err => {
      console.log(err)

      alert('网络异常，请稍后重试')
    })
    // fetch('/api/wbcomic/home/recommend_list?location_en=ending_works_list&_type=h5').then(response => response.json()).then(res => {
    //   console.log(res);
    // 查看是否拿到数据
    // })
  }
}
</script>

<style lang="scss" scoped>
.page-comicend {
  display: flex;
  flex-direction: column;
  height: 100%;
// main
  .main {
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
    .comic-main {
      width: 100%;
      height: 240px;
       margin-bottom: 8px;
      .comic_cover_pic {
        width: 100%;
        height: 211px;
        border-radius: 5px;
        overflow: hidden;
        background-color: pink;
        img {
          width: 100%;
        }
      }
    }
     p {
      width: 100%;
      height: 29px;
      line-height: 29px;
      padding: 0 8px;
      font-size: 16px;
      color: #666;
      span {
        font-size: 10px;
        display: inline-block;
        width: 32px;
        height: 16px;
        border-radius: 3px;
        text-align: center;
        line-height: 16px;
        color: #efefef;
        background-color: orange;
        margin-right: 4px;
        vertical-align: middle;
        margin-bottom: 2px;
      }
     }
  }
}
</style>
