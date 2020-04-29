<template>
  <div class="page-home">
    <!-- heard -->
    <div class="index-header">
      <div class="header-logo">
        <img src="../../assets/icon/icon-log.png" alt class="icon-log" />
      </div>
      <div class="header-right">
        <img src="../../assets/icon/girl.png" alt />
        <img src="../../assets/icon/search.png" alt />
        <img src="../../assets/icon/mine.png" alt />
      </div>
    </div>
    <!-- main -->
    <div class="index-main">
      <!-- swiper -->
      <div class="banner">
        <Swiper @change="onChange" :autoplay="3000" class="my-swiper">
          <SwiperItem>
            <img src="https://img.manhua.weibo.com/client/2020/02/20/lGv2HgFz.png" alt />
          </SwiperItem>
          <SwiperItem>
            <img src="https://img.manhua.weibo.com/client/2020/02/11/ABTaCgOk.png" alt />
          </SwiperItem>
          <SwiperItem>
            <img src="https://img.manhua.weibo.com/client/2020/04/14/gU3Vg3gU.jpg" alt />
          </SwiperItem>
          <SwiperItem>
            <img src="https://img.manhua.weibo.com/client/2020/02/11/CwpSK8Ua.png" alt />
          </SwiperItem>
        </Swiper>
      </div>
      <!-- menu -->
      <index-nav></index-nav>
      <!-- recommend -->
      <section class="index-recommend">
        <div class="recommend-divide"></div>
        <div class="recommend-title">
          <div class="title-group">
            <img class="title-icon" src="../../assets/icon/default_avatar.png" />
            <span class="title-text font-36">精品佳作</span>
          </div>
          <span class="title-more font-24">更多 ></span>
        </div>
        <div class="recommend_comics">
          <div class="remmend-top">
            <img
              class="item-pic1"
              src="https://img.manhua.weibo.com/client/2020/04/20/0JOTJle9.jpg"
            />
            <p class="item-name">总裁在上</p>
            <p class="item-text">她，没有反抗的权利</p>
          </div>
          <div class="remmend-book">
            <div class="item">
              <img
                class="item-pic"
                src="https://img.manhua.weibo.com/client/2020/04/13/U7BV1BOY.jpg"
              />
              <p class="item-name font-28">恶魔，别吻我</p>
              <p class="item-text font-24">美男小三居然是恶魔？</p>
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
        <!-- 四个 -->
        <div class="recommend-divide"></div>
        <div class="recommend-title">
          <div class="title-group">
            <img class="title-icon" src="../../assets/icon/default_avatar.png" />
            <span class="title-text font-36">人气作品</span>
          </div>
          <span class="title-more font-24">更多 ></span>
        </div>
        <div class="recommend_comics1">
          <div class="remmend-book2">
            <div class="item">
              <img
                class="item-pic"
                src="https://img.manhua.weibo.com/client/2020/04/13/U7BV1BOY.jpg"
              />
              <p class="item-name font-28">恶魔，别吻我</p>
              <p class="item-text font-24">美男小三居然是恶魔？</p>
            </div>
            <div class="item">
              <img
                class="item-pic"
                src="https://img.manhua.weibo.com/client/2020/04/13/U7BV1BOY.jpg"
              />
              <p class="item-name font-28">恶魔，别吻我</p>
              <p class="item-text font-24">美男小三居然是恶魔？</p>
            </div>
            <div class="item">
              <img
                class="item-pic"
                src="https://img.manhua.weibo.com/client/2020/04/13/U7BV1BOY.jpg"
              />
              <p class="item-name font-28">恶魔，别吻我</p>
              <p class="item-text font-24">美男小三居然是恶魔？</p>
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
        <!-- 排行榜 -->
        <div class="recommend-divide"></div>
        <div class="recommend-title">
          <div class="title-group">
            <img class="title-icon" src="../../assets/icon/default_avatar.png" />
            <span class="title-text font-36">最新上架</span>
          </div>
          <span class="title-more font-24">更多 ></span>
        </div>
        <div class="recommend-type-3">
          <div class="item">
            <img class="item-pic" src="https://img.manhua.weibo.com/client/2020/04/20/JqyVe73t.jpg" />
            <div class="ranking-group">
              <div class="item-ranking item-ranking-1"></div>
            </div>
            <div class="text-group">
              <p class="item-name font-30">地府开发商</p>
              <p class="item-hot font-24">
                ☵
                <span class="hot-hot">恋爱、总裁</span>
              </p>
              <p class="item-text font-24">风露社</p>
            </div>
          </div>
          <div class="item">
            <img class="item-pic" src="https://img.manhua.weibo.com/client/2020/04/20/JqyVe73t.jpg" />
            <div class="ranking-group">
              <div class="item-ranking item-ranking-2"></div>
            </div>
            <div class="text-group">
              <p class="item-name font-30">才不是金手指</p>
              <p class="item-hot font-24">
                ☵
                <span class="hot-hot">恋爱、总裁</span>
              </p>
              <p class="item-text font-24">风露社</p>
            </div>
          </div>
          <div class="item">
            <img class="item-pic" src="https://img.manhua.weibo.com/client/2020/04/20/JqyVe73t.jpg" />
            <div class="ranking-group">
              <div class="item-ranking item-ranking-3"></div>
            </div>
            <div class="text-group">
              <p class="item-name font-30">我的外挂戒灵</p>
              <p class="item-hot font-24">
                ☵
                <span class="hot-hot">恋爱、总裁</span>
              </p>
              <p class="item-text font-24">风露社</p>
            </div>
          </div>
        </div>
        <!-- 两个 -->
        <div class="recommend-divide"></div>
        <div class="recommend-title">
          <div class="title-group">
            <img class="title-icon" src="../../assets/icon/default_avatar.png" />
            <span class="title-text font-36">热门连载</span>
          </div>
          <span class="title-more font-24">更多 ></span>
        </div>
        <div class="recommend_comics1">
          <div class="remmend-book2">
            <div class="item">
              <img
                class="item-pic"
                src="https://img.manhua.weibo.com/client/2020/04/13/U7BV1BOY.jpg"
              />
              <p class="item-name font-28">恶魔，别吻我</p>
              <p class="item-text font-24">美男小三居然是恶魔？</p>
            </div>
            <div class="item">
              <img
                class="item-pic"
                src="https://img.manhua.weibo.com/client/2020/04/13/U7BV1BOY.jpg"
              />
              <p class="item-name font-28">恶魔，别吻我</p>
              <p class="item-text font-24">美男小三居然是恶魔？</p>
            </div>
          </div>
        </div>
        <!-- 三个 -->
        <div class="recommend-divide"></div>
        <div class="recommend-title">
          <div class="title-group">
            <img class="title-icon" src="../../assets/icon/default_avatar.png" />
            <span class="title-text font-36">精品佳作</span>
          </div>
          <span class="title-more font-24">更多 ></span>
        </div>
        <div class="recommend_comics">
          <div class="remmend-top">
            <img
              class="item-pic1"
              src="https://img.manhua.weibo.com/client/2020/04/20/0JOTJle9.jpg"
            />
            <p class="item-name">总裁在上</p>
            <p class="item-text">她，没有反抗的权利</p>
          </div>
          <div class="remmend-book">
            <div class="item">
              <img
                class="item-pic"
                src="https://img.manhua.weibo.com/client/2020/04/13/U7BV1BOY.jpg"
              />
              <p class="item-name font-28">恶魔，别吻我</p>
              <p class="item-text font-24">美男小三居然是恶魔？</p>
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
      </section>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from '@/components/Swiper'
import IndexNav from './components/IndexNav'
export default {
  name: 'Home',
  components: {
    Swiper,
    SwiperItem,
    IndexNav
  },
  methods: {
    onChange (index) {
      // console.log(index)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";
.page-home {
  display: flex;
  flex-direction: column;
  height: 100%;
  // index-heade
  .index-header {
    @include border-bottom;
    width: 360px;
    height: 44px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 15px;
    background-color: #ffffff;
    .icon-log {
      width: 87px;
      height: 24px;
    }
    .header-right {
      width: 132px;
      height: 44px;
      img {
        width: 44px;
        height: 44px;
      }
    }
  }
  // index-main
  .index-main {
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
    //轮播图
    .banner {
      // width: 360px;
      // height: 222px;
      padding-top: 8px;
      background: #fff;
      .my-swiper img {
        width: 100%;
      }
    }

    // index-recommend
    .index-recommend {
      .recommend-divide {
        height: 10px;
        background-color: #f4f4f4;
      }
      // 标题
      .recommend-title {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        position: relative;
        margin-top: 5px;
        margin-bottom: 10px;
        padding: 5px;
        .title-group {
          display: flex;
          align-items: center;
          .title-icon {
            width: 22px;
            height: 22px;
            margin-right: 5px;
          }
          .title-text {
            color: #3a3a3a;
            font-weight: 500;
          }
        }
        .title-more {
          color: #b0b0b0;
          position: absolute;
          right: 18px;
          top: 50%;
          transform: translateY(-50%);
        }
      }
      // 上面一个
      .recommend_comics {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;
        box-sizing: border-box;
        .item-pic1 {
          width: 343px;
          height: 215px;
          border-radius: 10px;
        }
        .item-name {
          font-size: 15px;
          color: #666;
        }
        .item-text {
          font-size: 12px;
          color: #999;
          margin-bottom: 10px;
        }
        // 下面两个
        .remmend-book {
          display: flex;
          justify-content: space-between;
          .item {
            width: 174px;
            height: 154px;
            padding: 5px;
            .item-pic {
              width: 167px;
              height: 90px;
              margin-bottom: 4px;
              border-radius: 10px;
              position: relative;
            }
          }
        }
      }
      // 四个一起
      .recommend_comics1 {
        display: flex;
        // flex-wrap: wrap;
        // justify-content: space-between;
        // align-items: center;
        // padding: 0 10px;
        // box-sizing: border-box;
        .remmend-book2 {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          padding: 0 10px;
          box-sizing: border-box;
          // justify-content: space-between;
          .item {
            width: 174px;
            height: 154px;
            .item-pic {
              width: 167px;
              height: 90px;
              // margin-bottom: 4px;
              border-radius: 10px;
              position: relative;
            }
            .item-name {
              max-width: 100%;
              margin-bottom: 2px;
              color: #3a3a3a;
              text-overflow: ellipsis;
              overflow: hidden;
              white-space: nowrap;
            }
            .item-text {
              max-width: 100%;
              color: #8d8d8d;
              text-overflow: ellipsis;
              overflow: hidden;
              white-space: nowrap;
            }
          }
        }
      }
      // 排行榜
      .recommend-type-3 {
        padding: 0 10px;
        box-sizing: border-box;
        .item {
          display: flex;
          align-items: center;
          width: 100%;
          margin-bottom: 16px;
          position: relative;
          .item-pic {
            width: 154px;
            height: 90px;
            border-radius: 10px;
          }
          .text-group {
            width: 158px;
            margin-left: 42px;
            .item-name {
              margin-bottom: 4px;
              color: #3a3a3a;
              font-weight: 500;
            }
            .item-hot {
              color: #b0b0b0;
              margin-bottom: 15px;
              .hot-hot {
                color: red;
              }
            }
            .item-text {
              color: #8d8d8d;
              text-overflow: ellipsis;
              overflow: hidden;
              white-space: nowrap;
            }
          }
          .ranking-group {
            .item-ranking {
              width: 25px;
              height: 25px;
              background-repeat: no-repeat;
              background-position: top;
              background-size: 100%;
              position: absolute;
              top: 4px;
              left: 168px;
            }
            .item-ranking-other {
              width: 25px;
              height: 25px;
              background-repeat: no-repeat;
              background-position: top;
              background-size: 100%;
              position: absolute;
              top: 6px;
              left: 168px;
            }
          }
        }
      }
    }
  }
}
</style>
