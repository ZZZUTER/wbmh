<template>
  <div class="page-cate">
    <normal-header title="分类"></normal-header>
    <!-- nav -->
     <header-type :types="proad"></header-type>

    <!-- main -->
    <div class="cate-main">
      <div class="index-item">
        <div class="item">
          <img
            class="item-pic"
            src="https://img.manhua.weibo.com/client/2020/02/11/4OUmhN18.jpg"
          />
          <p class="item-name font-28">独步天下</p>
          <p class="item-text font-24">末世穿越而来的王者！</p>
        </div>
        <div class="item">
          <img
            class="item-pic"
            src="https://img.manhua.weibo.com/client/2020/02/11/4OUmhN18.jpg"
          />
          <p class="item-name font-28">独步天下</p>
          <p class="item-text font-24">末世穿越而来的王者！</p>
        </div>
      </div>
        <div class="index-item">
        <div class="item">
          <img
            class="item-pic"
            src="https://img.manhua.weibo.com/client/2020/02/11/4OUmhN18.jpg"
          />
          <p class="item-name font-28">独步天下</p>
          <p class="item-text font-24">末世穿越而来的王者！</p>
        </div>
        <div class="item">
          <img
            class="item-pic"
            src="https://img.manhua.weibo.com/client/2020/02/11/4OUmhN18.jpg"
          />
          <p class="item-name font-28">独步天下</p>
          <p class="item-text font-24">末世穿越而来的王者！</p>
        </div>
      </div>
        <div class="index-item">
        <div class="item">
          <img
            class="item-pic"
            src="https://img.manhua.weibo.com/client/2020/02/11/4OUmhN18.jpg"
          />
          <p class="item-name font-28">独步天下</p>
          <p class="item-text font-24">末世穿越而来的王者！</p>
        </div>
        <div class="item">
          <img
            class="item-pic"
            src="https://img.manhua.weibo.com/client/2020/02/11/4OUmhN18.jpg"
          />
          <p class="item-name font-28">独步天下</p>
          <p class="item-text font-24">末世穿越而来的王者！</p>
        </div>
      </div>
        <div class="index-item">
        <div class="item">
          <img
            class="item-pic"
            src="https://img.manhua.weibo.com/client/2020/02/11/4OUmhN18.jpg"
          />
          <p class="item-name font-28">独步天下</p>
          <p class="item-text font-24">末世穿越而来的王者！</p>
        </div>
        <div class="item">
          <img
            class="item-pic"
            src="https://img.manhua.weibo.com/client/2020/02/11/4OUmhN18.jpg"
          />
          <p class="item-name font-28">独步天下</p>
          <p class="item-text font-24">末世穿越而来的王者！</p>
        </div>
      </div>
        <div class="index-item">
        <div class="item">
          <img
            class="item-pic"
            src="https://img.manhua.weibo.com/client/2020/02/11/4OUmhN18.jpg"
          />
          <p class="item-name font-28">独步天下</p>
          <p class="item-text font-24">末世穿越而来的王者！</p>
        </div>
        <div class="item">
          <img
            class="item-pic"
            src="https://img.manhua.weibo.com/client/2020/02/11/4OUmhN18.jpg"
          />
          <p class="item-name font-28">独步天下</p>
          <p class="item-text font-24">末世穿越而来的王者！</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NormalHeader from '@/components/NormalHeader'
import headerType from './com/headerType'
import { getProad, getCateList } from '@/api/cartoon'
export default {
  name: 'Cate',
  components: {
    NormalHeader,
    headerType
  },
  data () {
    return {
      proad: [],
      cartoonList: []

    }
  },
  methods: {
    getProad () {
      return getProad()
        .then(res => {
          if (res.status === 200) {
            this.proad = res.data.data
            // console.log(res.data.data)
          } else {
            alert(res.message)
          }
        })
        .catch(err => {
          console.log(err)
          alert('网络异常，请稍后重试')
        })
    },
    getCateList (textid) {
      getCateList(textid)
        .then(res => {
          if (res.status === 200) {
            // this.proad = res.data.data
            console.log(res)
          } else {
            alert(res.message)
          }
        })
        .catch(err => {
          console.log(err)
          alert('网络异常，请稍后重试')
        })
    }
  },
  async created () {
    await this.getProad()
    // console.log(this.proad)

    this.getCateList()
  }

}
</script>
<style lang="scss" scoped>
.page-cate {
  display: flex;
  flex-direction: column;
  height: 100%;

  .cate-main {
    flex: 1;
    overflow-y: auto;
    .index-item {
      display: flex;
      justify-content: space-between;
      .item {
        width: 174px;
        height: 154px;
        padding: 5px;
        .item-pic {
          width: 175px;
          height: 105px;
          margin-bottom: 4px;
          border-radius: 10px;
          position: relative;
        }
        .item-name{
          font-size: 14px;
          color: #666;
        }
        .item-text{
          font-size: 12px;
          color: #999;
        }
      }
    }
  }
}
</style>
