<template>
  <div class="page-rank">
    <div class="header">
      <router-link to="/">
        <p class="headerBack"><img src="../../assets/icon/back.png" alt=""></p>
      </router-link>
      <p class="headerContain">排行榜</p>
    </div>

    <div class="rank_list_title">
      <div class="list_title_item" @click="rankOne" :class="{'list_title_color': hasClassOne}">阅读榜</div>
      <div class="list_title_item" @click="rankTwo" :class="{'list_title_color': hasClassTwo}">新作榜</div>
      <div
        class="list_title_item"
        @click="rankThree"
        :class="{'list_title_color': hasClassThree}"
      >综合榜</div>
    </div>

    <div class="rankMain" v-backtotop>
      <div v-if="showCard">
        <div class="recommend_block">
          <div class="home_recommend_comics threeClassic" v-if="showCard">
            <div
              class="comic_horizontal_container"
              v-for="(item, index) in rankList"
              :key="item.comic_id"
              @click="getBooks(item.object_id)"
            >
              <div class="comic_cover comice_horizontal_cover">
                <img v-lazy="item.hcover" alt />
              </div>
              <div class="comic_cover_horizontal_info rankMainTitle">
                <div class="comic_cover_horizontal_title" style="font-size: 16px;">{{ item.name }}</div>
                <div class="comic_cover_horizontal_author" style="font-size: 12px;">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAGFBMVEUAAABKkOJLkeNLkONVqv9LkuRMkeNKkOIsiLo4AAAAB3RSTlMA5rWIBktK5LpJhQAAADpJREFUKM9joBFgMSwXdkAWYC4vLzdgUAeSRRABxjKGcAFkAfYCEEIATAHGUoQWTEMR1hIGo74lEgAAomkhe7DLd3MAAAAASUVORK5CYII="
                    alt
                  />
                  <p
                    v-for="p in item.cate_list.slice(0 , 3)"
                    :key="p.cate_id"
                    class="newP"
                  >{{ p.cate_cn_name }}</p>
                </div>
                <div class="comic_cover_horizontal_author" style="font-size: 12px;">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAAyVBMVEUAAAAmJiVJREJ0cm9oaGNubmhzcG1IRUJ2c3BJRUJ0cXB4eHR5d3R5dXVDQz4AAABzcG5iYF1raWZdWlh0cG5QTEpGQ0FPTkx5eXZ7e3s3NzF1dXV3d3d+eHPe3tSkoJ1xa2fIx76ZlpNpZGByb21OSkfCwLhubmlPS0iGgXvOzcR1cW68vLSVkY5/eXR4cm1oaGRgW1dcV1TS0snFw7qQjImCf3yinpqin5iKhoODfXhtZ2Pb29KzsKmOiYVZVFHFxbxsamVmY2Fv8+XpAAAAHXRSTlMAKK/n4uHeuLaun4BkPzcN+vry7ezrlZRQOiojHsW6HFUAAAEbSURBVDjL7ZDXbsMgFECdPZt0b4jtpsSY4Ix6O6Pt/39URYuggOXXRFGOhHR1dXRkX+vMIRg1l18zQWtUKTfd+acjSFuV8nL+ASXO7Njli0G3MdVodAdPZeotiTPqatAsJu1H3R2SKJmUkkRkqLqvlzShOxwAjTyL3AmdvihyP464aILduK/IbVBBsLtW5CsCGAgBEDo5G34fdkK2Jt+KfGcDBoTsoYAP2IcOWxc3iny/+ifDLR986GO2Xj8ocs1bSHkD07+Bu7b3bCnUV1JO4UaR13WhibSQwRbKz2DhmtBEWsoBkj/Iw0ZaXAzk7GQhOx0SYSNtIsJm2kQLV6cXPGymC9ug4GGD3v7NYN+zyhl3vHcNrzO2zpwOPxnwU3esbrlEAAAAAElFTkSuQmCC"
                    alt
                  />
                  {{item.sina_nickname}}
                </div>
              </div>
              <div class="rankImg" :class="`rank-${index+1}`">{{ index | rankIndex }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="loadBox" v-else></div>
    </div>
  </div>
</template>

<script>
import { getRankOne, getRankTwo, getRankThree } from '@/api/cartoon'

export default {
  name: 'rank',

  data () {
    return {
      rankList: [],
      rankCateList: ['阅读榜', '新作榜', '综合榜'],
      showCard: false,
      handleIndex: 0,
      hasClassOne: true,
      hasClassTwo: false,
      hasClassThree: false
    }
  },

  methods: {
    rankOne () {
      getRankOne().then(res => {
        this.showCard = true
        this.hasClassOne = true
        this.hasClassTwo = false
        this.hasClassThree = false
        this.rankList = res.data.data.week
      })
    },

    getBooks (bookId) {
      this.$router.push({
        path: '/details',
        query: {
          bookId
        }
      })
    },

    rankTwo () {
      getRankTwo().then(res => {
        this.showCard = true
        this.hasClassOne = false
        this.hasClassTwo = true
        this.hasClassThree = false
        this.rankList = res.data.data.week
      })
    },

    rankThree () {
      getRankThree().then(res => {
        this.showCard = true
        this.showCard = true
        this.hasClassOne = false
        this.hasClassTwo = false
        this.hasClassThree = true
        this.rankList = res.data.data.week
      })
    }
  },

  created () {
    getRankOne().then(res => {
      this.showCard = true
      this.rankList = res.data.data.week
    })
  },

  filters: {
    rankIndex (value) {
      return value < 3 ? '' : value + 1
    }
  }
}
</script>

<style lang="scss" sscoped>
html,
body {
  background: #f8f8f8;
  overflow: auto;
  max-width: 900px;
  width: 100%;
}
.page-rank {
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

  .rank_list_title {
    margin-bottom: 8px;
    -webkit-box-shadow: inset 0 -1px 0 0 #efefef;
    box-shadow: inset 0 -1px 0 0 #efefef;
    display: flex;
    .list_title_item {
      -webkit-box-flex: 1;
      -ms-flex: 1;
      flex: 1;
      width: 125px;
      height: 44px;
      line-height: 44px;
      font-size: 14px;
      text-align: center;
      color: #b3b3b3;
    }
    .list_title_color {
      color: #666;
      position: relative;
    }
    .list_title_color:before {
      position: absolute;
      content: "";
      width: 44px;
      height: 2px;
      background: #f75d79;
      bottom: 0;
      left: 50%;
      -webkit-transform: translateX(-50%);
      transform: translateX(-50%);
    }
  }

  .rankMain {
    flex: 1;
    overflow: auto;
    .comic_horizontal_container {
      display: flex;
      padding: 0 16px 16px 16px;
      position: relative;
      .comic_cover {
        img {
          width: 144px;
          height: 82px;
          border-radius: 4px;
        }
        margin-right: 4px;
      }
      .rankMainTitle {
        width: 140px;
        // overflow: hidden;
        // flex: 0.8;
        padding-right: 16px;
      }
      .comic_cover_horizontal_title {
        margin-top: 4px;
        padding-bottom: 8px;
        overflow: hidden;
      }
      .comic_cover_horizontal_author {
        display: flex;
        padding-bottom: 8px;
        img {
          width: 16px;
          height: 16px;
        }
      }
      .rankImg {
        position: absolute;
        right: 16px;
        top: 16px;
        width: 40px;
        height: 45px;
        text-align: center;
        line-height: 45px;
        color: #666;
        font-size: 18px;
      }
      .rank-1 {
        background: url("~@/assets/icon/bh_03.png") no-repeat;
        background-size: 40px 45px;
      }
      .rank-2 {
        background: url("~@/assets/icon/bh_06.png") no-repeat;
        background-size: 40px 45px;
      }
      .rank-3 {
        background: url("~@/assets/icon/bh_08.png") no-repeat;
        background-size: 40px 45px;
      }
    }
  }
}
</style>
