<template>
  <div class="page-home">
    <!-- heard -->
    <div class="header">
      <div class="header_inner">
        <div class="headerLeft">
          <div class="logo">
            <img src="//img.manhua.weibo.com/static/b/vcomic-h5/dist/img/icon.b72a7a04.png" alt />
          </div>
        </div>
        <div class="headerRight">
          <div class="sex" @click="sex" v-show="isSex"></div>
          <div class="sex2" @click="sex" v-show="!isSex"></div>
          <router-link to="/search">
            <div class="search"></div>
          </router-link>
          <router-link to="/mine">
            <div class="user"></div>
          </router-link>
        </div>
      </div>
    </div>
    <!-- main -->
    <div class="index-main" v-backtotop>
      <div v-if="showCard">
        <!-- swiper -->
        <swiper class="my-swiper" v-if="bannerList.length > 0">
          <swiper-item v-for="item in bannerList" :key="item.info_id">
            <img :src="item.image_url" alt @click="getBooks(item.object_id)" />
          </swiper-item>
        </swiper>
        <!-- menu -->
        <index-nav></index-nav>
        <!-- recommend -->
        <!-- 精品作品 -->
        <div class="recommend_block">
          <div class="home_recommend_header">
            <div class="home_recommend_title">精品佳作</div>
            <router-link to="/fineworks">
              <div class="home_recommend_more">更多&gt;</div>
            </router-link>
          </div>
          <div class="home_recommend_comics threeClassic" v-if="showCard">
            <div class="home_recommend_comic">
              <div class="comic_cover_container" style="width: 100%;">
                <div class="comic_cover" @click="getBooks(fineWorks[0].object_id)">
                  <img :src="fineWorks[0].image_ext_url" alt />
                </div>
                <div class="comic_cover_info">
                  <div class="comic_cover_titleBox">
                    <div class="comic_cover_title" style="font-size: 14px;">{{fineWorks[0].title}}</div>
                  </div>
                  <div
                    class="comic_cover_desc"
                    style="font-size: 12px;"
                  >{{fineWorks[0].extra.watching_focus}}</div>
                </div>
              </div>
            </div>
            <div
              class="home_recommend_comic_two"
              v-for="item in fineWorks.slice(1 , 3)"
              :key="item.info_id"
              @click="getBooks(item.object_id)"
            >
              <div class="comic_cover_container_two" style="width: 100%;">
                <div class="comic_cover">
                  <img :src="item.image_ext_url" alt />
                </div>
                <div class="comic_cover_info">
                  <div class="comic_cover_titleBox">
                    <div class="comic_cover_title" style="font-size: 14px;">{{item.title}}</div>
                  </div>
                  <div
                    class="comic_cover_desc"
                    style="font-size: 12px;"
                  >{{item.extra.watching_focus}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 人气作品 -->
        <div class="recommend_block">
          <div class="home_recommend_header">
            <div class="home_recommend_title">人气作品</div>
            <router-link to="/popularWorks">
              <div class="home_recommend_more">更多&gt;</div>
            </router-link>
          </div>
          <div class="home_recommend_comics threeClassic" v-if="showCard">
            <div
              class="home_recommend_comic_two"
              v-for="item in popularWorks.slice(0 , 4)"
              :key="item.info_id"
              @click="getBooks(item.object_id)"
            >
              <div class="comic_cover_container_two" style="width: 100%;">
                <div class="comic_cover">
                  <img :src="item.image_ext_url" alt />
                </div>
                <div class="comic_cover_info">
                  <div class="comic_cover_titleBox">
                    <div class="comic_cover_title" style="font-size: 14px;">{{item.title}}</div>
                  </div>
                  <div
                    class="comic_cover_desc"
                    style="font-size: 12px;"
                  >{{item.extra.watching_focus}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 最新上架 -->
        <div class="recommend_block">
          <div class="home_recommend_header">
            <div class="home_recommend_title">最新上架</div>
            <router-link to="/newArrival">
              <div class="home_recommend_more">更多&gt;</div>
            </router-link>
          </div>
          <div class="home_recommend_comics threeClassic" v-if="showCard">
            <div
              class="comic_horizontal_container"
              v-for="item in newArrival.slice(0 , 4)"
              :key="item.info_id"
              @click="getBooks(item.object_id)"
            >
              <div class="comic_cover comice_horizontal_cover">
                <img :src="item.image_ext_url" alt />
              </div>
              <div class="comic_cover_horizontal_info">
                <div class="comic_cover_horizontal_title" style="font-size: 16px;">{{ item.title }}</div>
                <div class="comic_cover_horizontal_author" style="font-size: 12px;">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAGFBMVEUAAABKkOJLkeNLkONVqv9LkuRMkeNKkOIsiLo4AAAAB3RSTlMA5rWIBktK5LpJhQAAADpJREFUKM9joBFgMSwXdkAWYC4vLzdgUAeSRRABxjKGcAFkAfYCEEIATAHGUoQWTEMR1hIGo74lEgAAomkhe7DLd3MAAAAASUVORK5CYII="
                    alt
                  />
                  <p v-for="p in item.cate_list" :key="p.cate_id" class="newP">{{ p.cate_cn_name }}</p>
                </div>
                <div class="comic_cover_horizontal_author" style="font-size: 12px;">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAAyVBMVEUAAAAmJiVJREJ0cm9oaGNubmhzcG1IRUJ2c3BJRUJ0cXB4eHR5d3R5dXVDQz4AAABzcG5iYF1raWZdWlh0cG5QTEpGQ0FPTkx5eXZ7e3s3NzF1dXV3d3d+eHPe3tSkoJ1xa2fIx76ZlpNpZGByb21OSkfCwLhubmlPS0iGgXvOzcR1cW68vLSVkY5/eXR4cm1oaGRgW1dcV1TS0snFw7qQjImCf3yinpqin5iKhoODfXhtZ2Pb29KzsKmOiYVZVFHFxbxsamVmY2Fv8+XpAAAAHXRSTlMAKK/n4uHeuLaun4BkPzcN+vry7ezrlZRQOiojHsW6HFUAAAEbSURBVDjL7ZDXbsMgFECdPZt0b4jtpsSY4Ix6O6Pt/39URYuggOXXRFGOhHR1dXRkX+vMIRg1l18zQWtUKTfd+acjSFuV8nL+ASXO7Njli0G3MdVodAdPZeotiTPqatAsJu1H3R2SKJmUkkRkqLqvlzShOxwAjTyL3AmdvihyP464aILduK/IbVBBsLtW5CsCGAgBEDo5G34fdkK2Jt+KfGcDBoTsoYAP2IcOWxc3iny/+ifDLR986GO2Xj8ocs1bSHkD07+Bu7b3bCnUV1JO4UaR13WhibSQwRbKz2DhmtBEWsoBkj/Iw0ZaXAzk7GQhOx0SYSNtIsJm2kQLV6cXPGymC9ug4GGD3v7NYN+zyhl3vHcNrzO2zpwOPxnwU3esbrlEAAAAAElFTkSuQmCC"
                    alt
                  />
                  {{item.extra.sina_nickname}}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 热门连载 -->
        <div class="recommend_block">
          <div class="home_recommend_header">
            <div class="home_recommend_title">热门连载</div>
            <router-link to="/hotSerial">
              <div class="home_recommend_more">更多&gt;</div>
            </router-link>
          </div>
          <div class="home_recommend_comics threeClassic" v-if="showCard">
            <div
              class="home_recommend_comic_two"
              v-for="item in hotSerial.slice(0 , 2)"
              :key="item.info_id"
              @click="getBooks(item.object_id)"
            >
              <div class="comic_cover_container_two" style="width: 100%;">
                <div class="comic_cover">
                  <img :src="item.image_ext_url" alt />
                </div>
                <div class="comic_cover_info">
                  <div class="comic_cover_titleBox">
                    <div class="comic_cover_title" style="font-size: 14px;">{{ item.title }}</div>
                  </div>
                  <div
                    class="comic_cover_desc"
                    style="font-size: 12px;"
                  >{{item.extra.watching_focus}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 小编推荐 -->
        <div class="recommend_block">
          <div class="home_recommend_header">
            <div class="home_recommend_title">小编推荐</div>
            <router-link to="/xiaobianRecommend">
              <div class="home_recommend_more">更多&gt;</div>
            </router-link>
          </div>
          <div class="home_recommend_comics threeClassic" v-if="showCard">
            <div class="home_recommend_comic">
              <div class="comic_cover_container" style="width: 100%;">
                <div class="comic_cover" @click="getBooks(xiaobianRecommend[0].object_id)">
                  <img :src="xiaobianRecommend[0].image_ext_url" alt />
                </div>
                <div class="comic_cover_info">
                  <div class="comic_cover_titleBox">
                    <div
                      class="comic_cover_title"
                      style="font-size: 14px;"
                    >{{xiaobianRecommend[0].title}}</div>
                  </div>
                  <div
                    class="comic_cover_desc"
                    style="font-size: 12px;"
                  >{{xiaobianRecommend[0].extra.watching_focus}}</div>
                </div>
              </div>
            </div>
            <div
              class="home_recommend_comic_two"
              v-for="item in xiaobianRecommend.slice(1 , 3)"
              :key="item.info_id"
              @click="getBooks(item.object_id)"
            >
              <div class="comic_cover_container_two" style="width: 100%;">
                <div class="comic_cover">
                  <img :src="item.image_ext_url" alt />
                </div>
                <div class="comic_cover_info">
                  <div class="comic_cover_titleBox">
                    <div class="comic_cover_title" style="font-size: 14px;">{{item.title}}</div>
                  </div>
                  <div
                    class="comic_cover_desc"
                    style="font-size: 12px;"
                  >{{item.extra.watching_focus}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 本周推荐 -->
        <div class="recommend_block">
          <div class="home_recommend_header">
            <div class="home_recommend_title">本周推荐</div>
            <router-link to="/weekRecommend">
              <div class="home_recommend_more">更多&gt;</div>
            </router-link>
          </div>
          <div class="home_recommend_comics threeClassic" v-if="showCard">
            <div
              class="home_recommend_comic_three"
              v-for="item in weekRecommend.slice(0 , 3)"
              :key="item.info_id"
              @click="getBooks(item.object_id)"
            >
              <div class="comic_cover_container_three" style="width: 100%;">
                <div class="comic_cover">
                  <img :src="item.image_ext_url" alt />
                </div>
                <div class="comic_cover_info">
                  <div class="comic_cover_titleBox">
                    <div class="comic_cover_title" style="font-size: 14px;">{{item.title}}</div>
                  </div>
                  <div
                    class="comic_cover_desc"
                    style="font-size: 12px;"
                  >{{item.extra.watching_focus}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="writeDiv"></div>
      </div>
      <div class="loadBox" v-else></div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from '@/components/Swiper'
import IndexNav from './components/IndexNav'
import { getDate } from '@/api/cartoon'
// import IndexRecommend from './components/IndexRecommend'

export default {
  name: 'Home',
  components: {
    Swiper,
    SwiperItem,
    IndexNav
  },

  data () {
    return {
      isSex: true,
      bannerList: [],
      fineWorks: [],
      hotSerial: [],
      newArrival: [],
      popularWorks: [],
      weekRecommend: [],
      xiaobianRecommend: [],
      showCard: false
    }
  },

  methods: {
    sex () {
      this.isSex = !this.isSex
    },

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
      this.bannerList = res.data.data.h5_recommend_male_rotation_map
      this.fineWorks = res.data.data.h5_recommend_male_fine_works
      this.hotSerial = res.data.data.h5_recommend_male_hot_serial
      this.newArrival = res.data.data.h5_recommend_male_new_arrival
      this.popularWorks = res.data.data.h5_recommend_male_popular_works
      this.weekRecommend = res.data.data.h5_recommend_male_week_recommend
      this.xiaobianRecommend =
        res.data.data.h5_recommend_male_xiaobian_recommend
    })
  }
}
</script>

<style lang="scss" scoped>
.page-home {
  display: flex;
  flex-direction: column;
  height: 100%;
}
// index-heade
.header {
  width: 100%;
  height: 44px;
  border-bottom: 1px solid #e6e6e6;
  background: #fff;
  .headerLeft {
    float: left;
  }
  .header_inner {
    width: 100%;
    // position: fixed;
    z-index: 999;
    background: #fff;
  }
  .logo {
    width: 103px;
    height: 24px;
    margin-left: 16px;
    margin-top: 10px;
  }
  .logo img {
    height: 100%;
  }
  .headerRight {
    float: right;
  }
  .sex {
    float: left;
    width: 44px;
    height: 44px;
    background-image: url(../../assets/icon/girl.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .sex2 {
    float: left;
    width: 44px;
    height: 44px;
    background-image: url(../../assets/icon/boy.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .search {
    float: left;
    width: 44px;
    height: 44px;
    background-image: url(../../assets/icon/search.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .user {
    float: left;
    width: 44px;
    height: 44px;
    background-image: url(../../assets/icon/mine.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
}

.index-main {
  padding-top: 10px;
  flex: 1;
  overflow: auto;
}

.home_menu {
  padding: 16px;
  background: #fff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  .home_menu_item {
    width: 60px;
    height: 88px;
  }
  .menu_img {
    width: 60px;
    height: 60px;
  }
  .menu_p {
    line-height: 24px;
    font-size: 14px;
    text-align: center;
    color: #333;
  }
}

.recommend_block {
  background: #fff;
  .home_recommend_header {
    padding: 0 16px;
    height: 44px;
    margin-top: 8px;
    line-height: 44px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .home_recommend_comics {
    padding: 0 16px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    background: #fff;
    justify-content: space-around;
  }
  .comic_cover_container img {
    width: 344px;
    height: 215px;
    border-radius: 8px;
  }
  .comice_horizontal_cover img {
    border-radius: 8px;
    width: 160px;
    height: 90px;
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
  .home_recommend_comic_three {
    width: 109px;
    height: 200px;
  }
  .comic_cover_container_three img {
    width: 109px;
    height: 150px;
    border-radius: 8px;
  }
  .comic_cover_desc,
  .comic_cover_horizontal_info .comic_cover_horizontal_author,
  .comic_cover_horizontal_info .comic_cover_horizontal_title,
  .comic_cover_title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    min-width: 1px;
  }
  .comic_cover_titleBox {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin: 8px 0 5px 0;
  }
  .comic_cover_desc {
    color: #999;
    margin-bottom: 6px;
  }
  .home_recommend_header .home_recommend_title {
    font-size: 18px;
    color: #666;
    padding-left: 26px;
    position: relative;
  }
  .home_recommend_header .home_recommend_title:before {
    position: absolute;
    top: 11px;
    left: 0;
    content: "";
    width: 22px;
    height: 22px;
    background: url(../../assets/icon/ink.png);
    background-size: cover;
    background-position: 50%;
    background-repeat: no-repeat;
  }

  .home_recommend_header .home_recommend_more {
    font-size: 12px;
    color: #fff;
    width: 42px;
    height: 20px;
    text-align: center;
    line-height: 22px;
    background: #4a90e2;
    border-radius: 10px;
  }
  .comic_horizontal_container {
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    position: relative;
    overflow: hidden;
    padding: 0 16px 16px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  .comic_horizontal_container .comice_horizontal_cover {
    margin-right: 4px;
    border-radius: 4px;
  }

  .comic_cover_horizontal_rank {
    width: 40px;
    height: 45px;
  }

  .comic_cover_horizontal_info {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    padding-right: 16px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    overflow: hidden;
  }

  .comic_cover_horizontal_info .comic_cover_horizontal_title {
    margin-top: 4px;
    color: #333;
    line-height: 20px;
    padding-bottom: 8px;
  }

  .comic_cover_horizontal_info .comic_cover_horizontal_author {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 16px;
  }

  .comic_cover_horizontal_info .comic_cover_horizontal_author:nth-child(2) {
    padding-bottom: 8px;
  }

  .comic_cover_horizontal_info .comic_cover_horizontal_author img {
    float: left;
    width: 16px;
    height: 16px;
  }

  .comic_cover_horizontal_rank .rank_num {
    padding-top: 20px;
    font-size: 18px;
    color: #666;
    text-align: center;
    line-height: 18px;
  }
}

.writeDiv {
  width: 100%;
  height: 8px;
  background: #fff;
}
</style>
