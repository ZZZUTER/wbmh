<template>
  <div class="page-search">
    <div class="search_header">
      <form method="get" action="javascript:void(0);">
        <div class="search_ferame">
          <span class="search_ferame_icon" @click="handleClick(searchVal)">
            <img src="../../assets/icon/img_03.png" alt />
          </span>
          <input placeholder="请输入搜索关键字" v-model="searchVal" />
          <span class="search_clear_cion" v-if="showClear" @click="inputDel"></span>
        </div>
      </form>
      <router-link to="/" v-if="showDel">
        <div class="search_fix_btn">
          <span>取消</span>
        </div>
      </router-link>
      <div class="search_fix_btn" @click="handleClick(searchVal)" v-else>
        <span>搜索</span>
      </div>
    </div>

    <div class="sectchMain">
      <div v-if="showCard">
        <div class="search_footer">
          <div class="search_page" style>
            <div class="hot_search" v-if="showCard">
              <div class="hot_serch_header">
                <div class="search_title">热门搜索</div>
                <div class="search_icon refresh" @click="getIndex">
                  <img src="../../assets/icon/img_07.png" alt />
                </div>
              </div>
              <ul class="hot_search_conent">
                <li
                  class="search_label"
                  v-for="item in hotSeatch.slice(0 , 12)"
                  :key="item.object_id"
                  @click="handleClick(item.title)"
                >
                  <span>{{item.title}}</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="hot_search hosity">
            <div class="hot_serch_header">
              <div class="search_title">搜索历史</div>
              <div class="search_icon clear" @click="clearHistory">
                <img src="../../assets/icon/img_11.png" alt />
              </div>
            </div>
            <ul class="hot_search_conent">
              <li
                class="search_label"
                v-for="item in historySearchList"
                :key="item"
                @click="handleClick(item)"
              >
                <span class="search_label_text">{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="loadBox" v-else></div>
    </div>
  </div>
</template>

<script>
import { getHotSeatch } from '@/api/cartoon'
export default {
  name: 'seach',

  data () {
    return {
      hotSeatch: [],
      searchVal: '',
      showCard: false,
      historySearchList: this.getSearch(),
      showDel: true,
      showClear: false
    }
  },

  watch: {
    searchVal (newVal, oldVal) {
      if (newVal) {
        this.showDel = false
        this.showClear = true
      }
    }
  },

  created () {
    getHotSeatch().then(res => {
      console.log(res)
      this.showCard = true
      this.hotSeatch = res.data.data
    })
  },

  methods: {
    handleClick (keyword) {
      this.saveSearch(keyword)
      this.$router.push({
        path: '/search-result',
        query: {
          keyword
        }
      })
    },

    getIndex () {
      this.hotSeatch.reverse()
    },

    inputDel () {
      this.searchVal = ''
      this.showClear = false
    },

    //  保存最近搜索

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

    //   取出最近搜索

    getSearch () {
      const tmp = window.localStorage.getItem('search')
      if (!tmp) {
        return []
      } else {
        return JSON.parse(tmp)
      }
    },
    clearHistory () {
      localStorage.removeItem('search')
      this.historySearchList = []
    }
  }
}
</script>

<style lang="scss" sscoped>
.page-search {
  display: flex;
  height: 100%;
  overflow: auto;
  flex-direction: column;
}

.search_header {
  -ms-flex-negative: 0;
  flex-shrink: 0;
  margin: 16px 16px 0;
  height: 44px;
  .search_ferame {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    float: left;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 288px;
    height: 44px;
    background: #fff;
    border-radius: 4px;
    -webkit-box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.1);
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.1);
    .search_ferame_icon {
      width: 44px;
      height: 44px;
      flex-shrink: 0;
      position: relative;
      img {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        margin: auto;
      }
    }
    input {
      -webkit-box-flex: 1;
      -ms-flex: 1;
      flex: 1;
      background: none;
      outline: none;
      border: 0;
      padding-top: 4px;
      width: 244px;
      height: 28px;
      line-height: normal;
      font-size: 14px;
      color: #666;
      vertical-align: middle;
    }
  }
  .search_fix_btn,
  #search_ .search_result {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-direction: normal;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 44px;
    height: 24px;
    -webkit-box-orient: horizontal;
    -ms-flex-direction: row;
    flex-direction: row;
    margin: 10px 0 10px 11px;
    font-size: 16px;
    color: #666;
    float: right;
  }
}

.hot_search {
  padding: 16px 16px 24px;
  .hot_serch_header {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-flow: row nowrap;
    flex-flow: row nowrap;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    .search_title {
      font-size: 18px;
      color: #666;
      letter-spacing: 0;
      line-height: 44px;
      font-weight: 700;
    }
  }
  .search_label {
    overflow: hidden;
    display: inline-block;
    vertical-align: middle;
    *vertical-align: auto;
    *zoom: 1;
    *display: inline;
    background: #efefef;
    border-radius: 2px;
    margin-right: 16px;
    margin-bottom: 8px;
    padding: 0 17px;
    height: 36px;
    line-height: 36px;
    color: #666;
    font-size: 14px;
  }
  .hot_search .hot_serch_header {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-flow: row nowrap;
    flex-flow: row nowrap;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    .search_title {
      font-size: 18px;
      color: #666;
      letter-spacing: 0;
      line-height: 44px;
      font-weight: 700;
    }
  }
  .search_icon {
    width: 44px;
    height: 44px;
    position: relative;
    img {
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      margin: auto;
    }
  }
}

.sectchMain {
  flex: 1;
  overflow: auto;
}
</style>
