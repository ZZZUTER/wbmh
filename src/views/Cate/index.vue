<template>
  <div class="page-cate">
    <div class="header">
      <router-link to="/">
        <p class="headerBack"><img src="../../assets/icon/back.png" alt=""></p>
      </router-link>
      <p class="headerContain">分类</p>
    </div>

    <div class="cateNav" v-if="showCard">
      <div class="cate_list filter_list highList">
        <div
          class="cate_list_item filter_item"
          v-for="(item , index) in cate_list"
          :class="{'filter_active_item_red': index === handleIndex}"
          @click="handleClick(item, index)"
          :key="item.cate_id"
        >{{ item.cate_cn_name }}</div>
      </div>
      <div class="showFilterLayout">
        <div class="show_filter">
          <div class="end_status_list filter_list">
            <div
              class="end_status_list_item filter_item"
              v-for="(item , index) in comic_pay_status_list"
              :key="item.comic_pay_status"
              :class="{'filter_active_item_red': index === comicIndex}"
              @click="comicClick(item, index)"
            >{{ item.comic_pay_status_name }}</div>
          </div>
          <div class="pay_status_list filter_list">
            <div
              class="pay_status_list_item filter_item"
              v-for="(item , index) in end_status_list"
              :key="item.end_status"
              :class="{'filter_active_item_red': index === endIndex}"
              @click="endClick(item, index)"
            >{{ item.end_status_name }}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="cateMain" v-backtotop>
      <div v-if="showCard" class="cateMainBox">
        <div class="home_recommend_comic_two" v-for="item in cateDateList" :key="item.comic_id" @click="getBooks(item.object_id)">
          <div class="comic_cover_container_two" style="width: 100%;">
            <div class="comic_cover">
              <img :src="item.comic_hcover" alt />
            </div>
            <div class="comic_cover_info">
              <div class="comic_cover_titleBox">
                <div class="comic_cover_title" style="font-size: 14px;">{{item.comic_name}}</div>
                <div class="comic_cover_desc" style="font-size: 12px;">{{item.comic_desc}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="loadBox" v-else></div>
    </div>
  </div>
</template>

<script>
import { getCate, getCatedate } from '@/api/cartoon'

export default {
  name: 'cate',

  data () {
    return {
      cate_list: [],
      comic_pay_status_list: [],
      end_status_list: [],
      showCard: false,
      handleIndex: 0,
      comicIndex: 0,
      endIndex: 0,
      cateDateList: []
    }
  },

  methods: {
    handleClick (type, index) {
      this.handleIndex = index
      getCatedate(this.handleIndex, this.comicIndex, this.endIndex).then(
        res => {
          console.log(res)
          this.showCard = true
          this.cateDateList = res.data.data.data
        }
      )
    },

    getBooks (bookId) {
      this.$router.push({
        path: '/details',
        query: {
          bookId
        }
      })
    },

    comicClick (type, index) {
      this.comicIndex = index
      getCatedate(this.handleIndex, this.comicIndex, this.endIndex).then(
        res => {
          console.log(res)
          this.showCard = true
          this.cateDateList = res.data.data.data
        }
      )
    },

    endClick (type, index) {
      this.endIndex = index
      getCatedate(this.handleIndex, this.comicIndex, this.endIndex).then(
        res => {
          console.log(res)
          this.showCard = true
          this.cateDateList = res.data.data.data
        }
      )
    }
  },

  created () {
    getCate().then(res => {
      console.log(res)
      this.showCard = true
      this.cate_list = res.data.data.cate_list
      this.comic_pay_status_list = res.data.data.comic_pay_status_list
      this.end_status_list = res.data.data.end_status_list
    })

    getCatedate(this.handleIndex, this.comicIndex, this.endIndex).then(res => {
      console.log(res)
      this.showCard = true
      this.cateDateList = res.data.data.data
    })
  }
}
</script>

<style lang="scss" scoped>
html,
body {
  background: #f8f8f8;
  overflow: auto;
  max-width: 900px;
  width: 100%;
}
.page-cate {
  background: #fff;
  display: flex;
  height: 100%;
  flex-direction: column;
  .header {
    display: inline-block;
    position: relative;
    height: 44px;
    border: 0;
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

  .cateNav {
    padding: 0 7px 0 8px;
    .filter_list {
      display: flex;
      flex-wrap: wrap;
    }
    .filter_item {
      height: 30px;
      width: 60px;
      line-height: 30px;
      font-size: 14px;
      color: #ccc;
      text-align: center;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .filter_active_item_red {
      color: #fff;
      background: #f75d79;
      height: 24px;
      line-height: 24px;
      border: 1px solid transparent;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 54px;
      border-radius: 2px;
      margin-top: 3px;
      font-size: 14px;
    }
  }

  .cateMain {
    padding-top: 10px;
    flex: 1;
    overflow: auto;
    .cateMainBox {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
    }
    .home_recommend_comic_two {
      width: 158px;
      height: 140px;
    }
    .newP {
      padding-right: 4px;
    }
    .comic_cover_container_two img {
      width: 158px;
      height: 90px;
      border-radius: 8px;
    }
    .comic_cover_titleBox {
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      margin: 4px 0 4px 0;
      padding-left: 10px;
      .comic_cover_title {
        height: 20px;
        line-height: 20px;
      }
      .comic_cover_desc {
        color: #999;
      }
    }
    .loadBox {
      width: 100%;
      height: 100%;
      background: url(../../assets/icon/load.png) no-repeat center center;
    }
  }
}
</style>
