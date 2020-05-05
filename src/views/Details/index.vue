<template>
  <div class="page details">
    <div class="header">
      <div class="headerLefts" @click="$router.back()"></div>
      <div class="headerContens" v-if="showCard">{{ bookObj.comic.name }}</div>
      <div class="headerRights">
        <div class="gz"></div>
        <div class="fx"></div>
      </div>
    </div>

    <div class="detailsMain" v-backtotop>
      <div v-if="showCard">
        <div class="bookImgBox">
          <img v-lazy=" `https://img.manhua.weibo.com/${bookObj.comic.hcover} ` " alt />
          <div class="comic_article">
            <div class="comic_name">
              <span class="name">{{bookObj.comic.name}}</span>
              <span class="pay_icon label_red_pay">付费</span>
            </div>
            <div class="comic_tags_hot">
              <div class="comic_tags">
                <span
                  :class="{'tags': index < comic_tags.length - 1}"
                  v-for="(item, index) in comic_tags"
                  :key="item.cate_id"
                >{{item.cate_name}}</span>
              </div>
              <div class="comic_hot">
                <span class="hot_icon"></span>
                <span>热度值：</span>
                <span class="hot_num">{{bookObj.comic.comic_hot_value_text}}</span>
              </div>
            </div>
          </div>
          <div class="mask"></div>
          <div class="masks"></div>
          <div class="last_time_chapter">
            <span class="looking_chapter">暂未阅读</span>
            <div class="button_header">
              <button
                type="button"
                class="comic_button"
                style="width: 88px; height: 36px; font-size: 14px;"
              >开始阅读</button>
            </div>
          </div>
          <div class="menu_nav">
            <div
              class="menu_detail"
              :class="{'cur_menu' : showNow === true}"
              @click="showNow = true"
            >详情</div>
            <div
              class="menu_catelog"
              :class="{'cur_menu' : showNow === false}"
              @click="showNow = false"
            >目录</div>
            <div class="menu_order" v-show="!showNow">
              <span>连载中</span>
              <label>（共{{ zjList.length }}话）</label>
              <span class="sort" :class="{'desc' : isdesc === true}" @click="isSort"></span>
            </div>
          </div>
          <div class="catalog_wrap">
            <div class="comic_bottom_content" v-show="showNow">
              <div class="detail_wrap">
                <div class="details">
                  <div class="bold">简介</div>一花一世界，所谓凡世，不过仙魔掌中一粒沙尘。 仙魔一念，人世千载。万里河山，不过镜花水月，人死之后，魂归万界星空。星空深处，便是传说中的仙魔道场。
                </div>
                <div class="author">
                  <span class="bold">作者：</span>
                  <div class="author_item">
                    <div class="avatar component_avatar author_avatar">
                      <img
                        src="http://tvax2.sinaimg.cn/crop.60.0.561.561.1024/005Wqtddly8fpi5g00ryhj30jg0fl74v.jpg"
                      />
                    </div>
                    <span class="author_name">若鸿文化</span>
                  </div>
                </div>
              </div>
              <div class="comment-area">
                <div class="comment-title">热门评论</div>
                <div class="comment-list">
                  <div class="comment-item">
                    <div class="avatar-outer">
                      <div class="avatar component_avatar">
                        <img
                          src="//img.manhua.weibo.com/static/b/vcomic-h5/dist/img/default_avatar.8bc0dfd7.png"
                        />
                      </div>
                    </div>
                    <div class="comment-item-content">
                      <div class="comment-nickname comment-line content-line">
                        <div class="bold">ink娘V院W系12876</div>
                        <div class="comment-time comment-line">2020-04-18</div>
                      </div>
                      <div class="comment-content comment-line content-line">太绝望了趴</div>
                    </div>
                  </div>
                  <div class="comment-item">
                    <div class="avatar-outer">
                      <div class="avatar component_avatar">
                        <img
                          src="//img.manhua.weibo.com/static/b/vcomic-h5/dist/img/default_avatar.8bc0dfd7.png"
                        />
                        <img
                          src="http://thirdqq.qlogo.cn/g?b=oidb&amp;k=yMwSH6wmTLbibJM0AZfcVNw&amp;s=100&amp;t=1583725865"
                        />
                      </div>
                    </div>
                    <div class="comment-item-content">
                      <div class="comment-nickname comment-line content-line">
                        <div class="bold">千秋万代5055100535</div>
                        <div class="comment-time comment-line">2020-04-07</div>
                      </div>
                      <div class="comment-content comment-line content-line">神王印座确实很舒服</div>
                    </div>
                  </div>
                  <div class="comment-item">
                    <div class="avatar-outer">
                      <div class="avatar component_avatar">
                        <img
                          src="//img.manhua.weibo.com/static/b/vcomic-h5/dist/img/default_avatar.8bc0dfd7.png"
                        />
                        <img
                          src="http://thirdqq.qlogo.cn/qqapp/1106392628/1BBF08E07207242C5D3E74D5B5A292A7/100"
                        />
                      </div>
                    </div>
                    <div class="comment-item-content">
                      <div class="comment-nickname comment-line content-line">
                        <div class="bold">李泽锴</div>
                        <div class="comment-time comment-line">2020-04-04</div>
                      </div>
                      <div class="comment-content comment-line content-line">好短</div>
                    </div>
                  </div>
                </div>
                <div class="comment_more">
                  <button class="moreComment">更多精彩评论</button>
                </div>
              </div>
            </div>
            <div class="zjList" v-show="!showNow">
              <ul style="background: #F8F8F8; padding-top:10px;">
                <li
                  chapter_id="264970"
                  class="catalog_ceil"
                  v-for="item in zjList"
                  :key="item.chapter_id"
                >
                  <div class="chapter_name">
                    <div class="name-box">
                      <p class="name">{{ item.chapter_name }}</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="loadBox" v-else></div>
    </div>
  </div>
</template>

<script>
import { getBook } from '@/api/cartoon'

export default {
  name: 'comicDetails',

  data () {
    return {
      bookId: this.$route.query.bookId,
      bookObj: [],
      showCard: false,
      comic_tags: [],
      showNow: true,
      zjList: [],
      isdesc: false
    }
  },

  methods: {
    getBook (bookId) {
      getBook(bookId).then(res => {
        console.log(res)
        this.showCard = true
        this.bookObj = res.data.data
        this.comic_tags = this.bookObj.comic_cate
        this.zjList = this.bookObj.chapter_list
      })
    },
    isSort () {
      this.isdesc = !this.isdesc
      this.zjList.reverse()
    }
  },

  created () {
    this.getBook(this.bookId)
  }
}
</script>

<style lang="scss" scoped>
body,
html {
  height: 100%;
}
.header {
  height: 44px;
  display: flex;
  position: relative;
  .headerLefts {
    width: 44px;
    height: 44px;
    float: left;
    background: url(../../assets/icon/back.png) no-repeat;
    background-size: 100% 100%;
  }
  .headerContens {
    width: 220px;
    float: left;
    line-height: 44px;
    font-size: 18px;
    color: #999;
  }
  .headerRights {
    position: absolute;
    right: 0;
    top: 0;
    float: right;
    width: 112px;
    height: 44px;
    display: flex;
    .gz {
      margin: auto 0;
      width: 60px;
      height: 24px;
      border-radius: 4px;
      background: url(../../assets/icon/gz.png) no-repeat center center;
      background-size: 60px 24px;
    }
    .fx {
      width: 44px;
      height: 44px;
      background: url(../../assets/icon/fx.png) no-repeat center center;
      background-size: 18px 18px;
    }
  }
}

.detailsMain {
  height: 100%;
  flex: 1;
  overflow: auto;
  .bookImgBox {
    height: 210px;
    position: relative;
    img {
      width: 100%;
      height: 100%;
    }
    .mask {
      position: absolute;
      bottom: 0px;
      left: 0;
      width: 100%;
      height: 20px;
      background: url(../../assets/icon/mask.png) no-repeat;
      background-size: 100% 100%;
      z-index: 1000;
    }
    .masks {
      bottom: 0;
      position: absolute;
      left: 0;
      z-index: 2;
      width: 100%;
      height: 100px;
      background: -webkit-gradient(
        linear,
        0 0,
        0 bottom,
        from(transparent),
        to(rgba(0, 0, 0, 0.6))
      );
    }
    .comic_article {
      position: absolute;
      bottom: 40px;
      width: 100%;
      color: #fff;
      z-index: 10;
      .comic_name {
        font-size: 20px;
        line-height: 26px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        .name {
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          padding-left: 16px;
        }
        .pay_icon {
          width: 32px;
          height: 16px;
          margin: 4px 0 0 4px;
          background: #f75d79;
          font-size: 10px;
          line-height: 16px;
          text-align: center;
        }
      }
      .comic_tags_hot {
        padding: 0 1rem;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        padding: 0 16px;
        justify-content: space-around;
        .comic_tags {
          -webkit-box-flex: 1;
          -ms-flex-positive: 1;
          flex-grow: 1;
          font-size: 16px;
          line-height: 18px;
          margin-top: 8px;
          .tags:after {
            content: "|";
            display: inline-block;
            vertical-align: middle;
            *vertical-align: auto;
            *zoom: 1;
            *display: inline;
            vertical-align: top;
            height: 16px;
            width: 10px;
            margin: 0;
            font-size: 14px;
            font-family: serif;
          }
        }
        .comic_hot {
          -webkit-box-flex: 1;
          -ms-flex-positive: 1;
          flex-grow: 1;
          font-size: 16px;
          line-height: 18px;
          margin-top: 8px;
          text-align: right;
        }
      }
    }
    .last_time_chapter {
      background: #fff;
      color: #666;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      padding: 8px 16px 4px 16px;
      .looking_chapter {
        color: #666;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 16px;
      }
      button {
        display: block;
        margin: 0 auto;
        outline: none;
        border: none;
        text-align: center;
        border-radius: 4px;
        color: #fff;
        white-space: nowrap;
        background: #f75d79;
      }
    }
    .menu_nav {
      font-size: 1.125rem;
      color: #ccc;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      padding: 4px 16px;
      height: 52px;
      background: #fff;
      .menu_catelog,
      .menu_detail {
        width: 68px;
        font-size: 18px;
      }
      .cur_menu {
        color: #666;
      }
      .menu_order {
        font-size: 12px;
        color: #999;
        -webkit-box-flex: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
        text-align: right;
        .sort {
          display: inline-block;
          vertical-align: middle;
          *vertical-align: auto;
          *zoom: 1;
          *display: inline;
          background-repeat: no-repeat;
          background-size: 20px 20px;
          width: 20px;
          height: 20px;
          background: url(../../assets/icon/top.png);
        }
        .desc {
          background: url(../../assets/icon/bottom.png);
        }
      }
    }
    .comic_bottom_content {
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      background: #fff;
      border-radius: 4px;
      .detail_wrap {
        background: #f7f7f7;
        padding: 11px 8px;
        font-size: 14px;
        color: #666;
        line-height: 174px;
        border-radius: 4px;
        .details {
          font-size: 14px;
          padding: 8px;
          background: #fff;
          line-height: 24px;
        }
      }
      .author {
        background: #fff;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-wrap: nowrap;
        flex-wrap: nowrap;
        white-space: nowrap;
        height: 20px;
        padding-top: 8px;
        font-size: 14px;
        .comic .bold {
          font-weight: 500;
        }
        .author_item {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          word-wrap: normal;
          .author_avatar {
            display: inline-block;
            vertical-align: middle;
            *vertical-align: auto;
            *zoom: 1;
            *display: inline;
            width: 20px;
            height: 20px;
            border-radius: 1.5rem;
            border: 1px solid #efefef;
            background-color: #fff;
            background-size: 100% 100%;
            background-repeat: no-repeat;
            line-height: 20px;
          }
          .author_name {
            margin-left: 8px;
            font-size: 12px;
          }
        }
      }
      .comment-area {
        background: #fff;
        .comment-title {
          padding-left: 8px;
          line-height: 44px;
          font-size: 18px;
          color: #666;
          background: #fff;
        }
        .comment-item {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-orient: horizontal;
          -webkit-box-direction: normal;
          -ms-flex-direction: row;
          flex-direction: row;
          padding: 8px 16px 0;
          .avatar-outer {
            width: 32px;
            height: 32px;
            border: 1px solid #fff;
            border-radius: 50%;
            overflow: hidden;
            .component_avatar {
              position: relative;
              width: 100%;
              height: 100%;
              border-radius: 50%;
              overflow: hidden;
              img {
                position: absolute;
                width: 100%;
                height: 100%;
                border: none;
              }
            }
          }
          .comment-item-content {
            -webkit-box-flex: 1;
            -ms-flex: 1;
            flex: 1;
            overflow: hidden;
            .comment-nickname {
              margin-top: 6px;
              margin-bottom: 5px;
              color: #666;
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
              -webkit-box-align: start;
              -ms-flex-align: start;
              align-items: flex-start;
              .comment-line {
                padding: 0 8px;
                font-weight: 500;
                font-size: 14px;
              }
              .bold {
                font-weight: 500;
                font-size: 14px;
              }
            }
            .comment-content {
              margin-bottom: 8px;
              margin-top: 4px;
              font-size: 16px;
              color: #666;
              line-height: 24px;
            }
          }
        }
        .comment_more {
          padding: 16px 0;
          margin-bottom: 9px;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          .moreComment {
            background: #fff;
            border: 1px solid #e6e6e6;
            border-radius: 22px;
            text-align: center;
            outline: none;
            height: 36px;
            width: 116px;
            font-size: 14px;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
            -ms-flex-direction: row;
            flex-direction: row;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            color: #666;
            margin: 0 auto;
          }
        }
      }
    }
    .catalog_ceil {
      height: 48px;
      padding: 0 8px;
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
      font-size: 14px;
      background: #fff;
      margin-bottom: 10px;
      .chapter_name {
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
      }
      .chapter_name {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        .name-box {
          text-align: left;
          overflow: hidden;
          .name {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            word-wrap: normal;
            line-height: 48px;
            color: #666;
          }
        }
      }
    }
  }
}
</style>
