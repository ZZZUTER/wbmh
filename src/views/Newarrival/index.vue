<template>
  <div class="page">
    <div class="header">
      <router-link to="/">
        <p class="headerBack"><img src="../../assets/icon/back.png" alt=""></p>
      </router-link>
      <p class="headerContain">最新上架</p>
    </div>

    <div class="finewordMain" v-backtotop>
      <div v-if="showCard">
        <div class="finewordBox" v-for="item in newArrival" :key="item.info_id" @click="getBooks(item.object_id)">
          <dl>
            <dt>
              <img :src="item.image_ext_url" alt />
            </dt>
            <dd>
              <p class="pTop">{{item.title}}</p>
              <p class="pCenter">作者：{{item.extra.sina_nickname}}</p>
              <p class="pBottom">{{item.extra.watching_focus}}</p>
            </dd>
          </dl>
        </div>
      </div>
      <div class="loadBox" v-else></div>
    </div>
  </div>
</template>

<script>
import { getDate } from '@/api/cartoon'
export default {
  name: 'fineworks',
  data () {
    return {
      newArrival: [],
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
    getDate().then(res => {
      console.log(res)
      this.showCard = true
      this.newArrival = res.data.data.h5_recommend_male_new_arrival
    })
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";
.page {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.header {
  @include border-bottom;
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
.finewordMain {
  flex: 1;
  overflow: auto;
}
.finewordBox {
  padding: 8px 8px 8px 16px;
  dl {
    display: flex;
    dt {
      float: left;
      width: 128px;
      height: 72px;
      margin-right: 10px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    dd {
      float: right;
      width: 216px;
      height: 72px;
      .pTop {
        height: 28px;
        color: #333;
        line-height: 28px;
        font-size: 14px;
      }
      .pCenter {
        height: 16px;
        color: #999;
        line-height: 16px;
        font-size: 12px;
      }
      .pBottom {
        height: 16px;
        color: #999;
        margin-top: 10px;
        line-height: 16px;
        font-size: 12px;
      }
    }
  }
}
</style>
