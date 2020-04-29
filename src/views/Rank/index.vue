<template>
  <div class="page-rank">
    <!-- 头部 -->
    <normal-header title="排行榜"></normal-header>
    <div class="header-type">
      <ul class="item" v-for="item in NavList" :key="item.id" @click="clickHandel(item.type)">
        <li>{{ item.name }}</li>
      </ul>
    </div>
    <div class="ranking-main">
      <section class="cartoon-list ranking-list">
        <div
          class="list-item"
          v-for="(item, index) in cartoonList"
          :key="item.comic_id"
        >
          <div class="item-pic">
            <img :src="item.hcover" alt="" />
          </div>
          <div class="item-info">
            <div class="info-book font-30">{{ item.name }}</div>
            <div class="info-author font-26">
              <img src="../../assets/icon/tp.png" alt="" />
               校园/恋爱
            </div>
            <div class="info-fans font-26">
              <img src="../../assets/icon/default_avatar.png" alt="" />{{
                item.sina_nickname
              }}
            </div>
            <div
              v-show="isRanking"
              :class="`item-ranking-${index < 3 ? index + 1 : 'other'}`"
            >
              {{ index | filterA }}
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import NormalHeader from '@/components/NormalHeader'
import { getRankList } from '@/api/cartoon'
export default {
  name: 'Rank',
  components: {
    NormalHeader
  },
  props: {
    /**
     * 是否排名
     */
    isRanking: {
      type: Boolean,
      default: false
    }
  },

  filters: {
    filterA (value) {
      return value < 3 ? '' : value + 1
    }
  },

  data () {
    return {
      NavList: [
        { id: 1, name: '阅读榜', type: 'rank_read' },
        { id: 2, name: '新作榜', type: 'rank_share' },
        { id: 3, name: '综合榜', type: 'rank' }
      ],
      isSelect: 'rank_read',
      cartoonList: []
    }
  },
  methods: {
    /**
     * 切换分类类型时，触发
     */
    clickHandel (type) {
      this.isSelect = type // 点击切换类型
      // this.cartoonList = []
      this.getRankList(this.isSelect) // 重新发送请求，传入最新的类型值
    },
    getRankList (type) {
      getRankList(type)
        .then(res => {
          if (res.status === 200) {
            this.cartoonList = res.data.data.week
            // console.log(res)
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
  created () {
    this.getRankList(this.isSelect)
  }
}
</script>
<style lang="scss" scoped>
.page-rank {
  display: flex;
  flex-direction: column;
  height: 100%;

  .ranking-main {
    //x 写错的
    flex: 1;
    overflow-y: auto;
  }
}
</style>
<style lang="scss" scoped>
.header-type {
  display: flex;
  flex-wrap: wrap;
  padding: 10px 0;
  height: 22px;
  justify-content: space-between;
  border-bottom: 1px solid #dbd9dc;
  .item {
    width: 20%;
    height: 22px;
    font-size: 14px;
    line-height: 24px;
    text-align: center;
    color: #b3b3b3;
    &.active {
      color: #e7370c;
    }
  }
}
.cartoon-list {
  .list-item {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    height: 97px;
    padding-left: 10px;
    border-bottom: 1px solid #dbd9dc;
    position: relative;
    .item-pic {
      flex-shrink: 0;
      width: 144px;
      height: 81px;
      border-radius: 3px;
      background-repeat: no-repeat;
      background-color: pink;
      background-size: cover;
      background-position: top;
      img {
        width: 100%;
      }
    }
    .item-info {
      flex: 1;
      margin-left: 10px;
      color: #999;
      overflow: hidden;
      .info-book,
      .info-author,
      .info-fans {
        font-weight: 500;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        img {
          width: 20px;
          height: 20px;
        }
      }
      .info-book {
        font-size: 16px;
        color: #333;
      }
      .info-book,
      .info-author {
        margin-bottom: 5px;
        img {
          width: 20px;
          height: 20px;
        }
      }
    }
   .item-ranking-1,
    .item-ranking-2,
    .item-ranking-3 {
      width: 50px;
      height: 28px;
      margin: auto;
      position: absolute;
      top: 0;
      right: 20px;
      bottom: 0;
    }
    .item-ranking-other {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 26px;
      height: 25px;
      font-size: 12px;
      color: #80808f;
      background: url("~@/assets/icon/item-rank-other.png") no-repeat;
      background-size: 100%;
      margin: auto;
      position: absolute;
      top: 0;
      right: 30px;
      bottom: 0;
    }
    .item-ranking-1 {
      background: url("../../assets/icon/rank_num1.png") no-repeat;
      background-size: 100%;
    }
    .item-ranking-2 {
      background: url("../../assets/icon/rank_num2.png") no-repeat;
      background-size: 100%;
    }
    .item-ranking-3 {
      background: url("../../assets/icon/rank_num3.png") no-repeat;
      background-size: 100%;
    }
  }
}
</style>
