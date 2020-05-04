<template>
  <div class="page-comicend">
    <div class="header">
      <router-link to="/">
        <p class="headerBack">
          <img src="../../assets/icon/back.png" alt />
        </p>
      </router-link>
      <p class="headerContain">完结</p>
    </div>
    <div class="comicMain" v-backtotop>
      <div class="comicMainBox" v-if="showCard">
        <dl v-for="item in Endlist" :key="item.object_id" @click="getBooks(item.object_id)">
          <dd class="comic_cover">
            <img :src="item.image_ext_url" alt />
          </dd>
          <dt>
            <div class="dtBox">{{item.title}}</div>
            <div class="comic_cover_title">{{item.extra.name}}</div>
          </dt>
        </dl>
      </div>
      <div class="loadBox" v-else></div>
    </div>
  </div>
</template>

<script>
import { getComicEnd } from '@/api/cartoon'

export default {
  name: 'comicend',

  data () {
    return {
      Endlist: [],
      showCard: false
    }
  },

  methods: {
    getBooks (bookId) {
      this.$router.push({
        path: '/details',
        query: {
          bookId
        }
      })
    }
  },

  created () {
    getComicEnd().then(res => {
      console.log(res)
      this.showCard = true
      this.Endlist = res.data.data.ending_works_list
    })
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";
.page-comicend {
  display: flex;
  height: 100%;
  flex-direction: column;
  .header {
    @include border-bottom;
    display: inline-block;
    position: relative;
    height: 44px;
    .headerBack {
      position: absolute;
      left: 0px;
      top: 0px;
      height: 44px;
    }
    .headerContain {
      text-align: center;
      font-size: 18px;
      line-height: 44px;
      height: 44px;
    }
  }

  .comicMain {
    flex: 1;
    overflow: auto;
    .comic_cover img {
      width: 100%;
      height: 210px;
      border-radius: 8px;
    }
    dl {
      margin-bottom: 4px;
    }
    dt {
      width: 100%;
      height: 28px;
      display: flex;
      .dtBox {
        width: 32px;
        height: 16px;
        background: #fc7933;
        border-radius: 2px;
        line-height: 16px;
        font-size: 10px;
        text-align: center;
        color: #fff;
        margin: auto 10px;
      }
      .comic_cover_title {
        height: 20px;
        line-height: 20px;
        font-size: 16px;
        margin: auto 0;
        color: #666;
      }
    }
  }
}
</style>
