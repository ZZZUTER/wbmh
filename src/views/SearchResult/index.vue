<template>
  <div class="page">
    <div class="search_header">
      <form method="get" action="javascript:void(0);">
        <div class="search_ferame">
          <span class="search_ferame_icon" @click="handleClick(searchVal)">
            <img src="../../assets/icon/img_03.png" alt />
          </span>
          <input :placeholder="keyword" v-model="searchVal" />
          <span class="search_clear_cion" @click="$router.back()"></span>
        </div>
      </form>
      <router-link to="/search" v-if="showDel">
        <div class="search_fix_btn">
          <span>取消</span>
        </div>
      </router-link>
      <div class="search_fix_btn" @click="handleClick(searchVal)" v-else>
        <span>搜索</span>
      </div>
    </div>

    <div class="searchMain">
      <div class="hasHeader" v-if="showCard">
        <div v-if="list.length">
          <div class="searchBox" v-for="item in list" :key="item.comic_id" @click="getBooks(item.object_id)">
            <dl>
              <dt>
                <img :src="item.cover" alt />
              </dt>
              <dd>
                <p class="pTop">{{item.name}}</p>
                <p class="pCenter">{{item.sina_nickname}}</p>
                <p class="pBottom">
                  <span v-for="p in item.cates" :key="p.cate_id" class="nspan">{{p.cate_name}}</span>
                </p>
              </dd>
            </dl>
          </div>
        </div>
        <div class="nothing" v-else></div>
      </div>
      <div class="loadBox" v-else></div>
    </div>
  </div>
</template>

<script>
import { getSerachResult } from '@/api/cartoon'
export default {
  name: 'SearchResult',
  data () {
    return {
      keyword: this.$route.query.keyword,
      showCard: false,
      list: [],
      searchVal: '',
      showDel: true
    }
  },

  watch: {
    searchVal (newVal, oldVal) {
      if (newVal) {
        this.showDel = false
      }
    }
  },

  methods: {
    handleClick (keyword) {
      getSerachResult(keyword).then(res => {
        this.showCard = true
        this.list = res.data.data.data
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

    saveSearch (keyword) {
      let tmp = window.localStorage.getItem('search')
      if (!tmp) {
        tmp = []
      } else {
        tmp = JSON.parse(tmp)
      }
      if (tmp.includes(keyword)) {
        return
      }
      tmp.push(keyword)
      window.localStorage.setItem('search', JSON.stringify(tmp))
    },
    getSerachResult (word) {
      getSerachResult(word).then(res => {
        this.showCard = true
        this.list = res.data.data.data
      })
    }
  },

  created () {
    this.getSerachResult(this.keyword)
  }
}
</script>

<style lang="scss" scoped>
.searchMain {
  flex: 1;
  overflow: auto;
}
.searchBox {
  padding: 8px 8px 8px 16px;
  dl {
    display: flex;
    dt {
      float: left;
      width: 72px;
      height: 96px;
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
        color: #ff0000;
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
      .nspan {
        margin-right: 4px;
      }
    }
  }
}

.search_clear_cion {
  -ms-flex-negative: 0;
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  background: url(../../assets/icon/del.png) no-repeat center center;
  background-size: 20px 20px;
}

.nothing {
  width: 100%;
  height: 100%;
  background: url(../../assets/icon/nothing.png) no-repeat center center;
}t

.hasHeader{
  height: 100%;
}
</style>
