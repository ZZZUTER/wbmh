<template>
  <div class="cate">
    <div class="nav_layout">
      <div class="com_nav">
        <div class="nav_content">
          <div class="nav_left">
            <div class="back_btn l_con"></div>
          </div>
          <div class="nav_middle">
            <span class="nav_title">分类</span>
          </div>
          <div class="nav_right"></div>
        </div>
        <!---->
      </div>
    </div>
    <div class="cate_list filter_list highList">
      <div class="cate_list_item filter_item filter_active_item_red">全部</div>
      <div class="cate_list_item filter_item">剧情</div>
      <div class="cate_list_item filter_item">恋爱</div>
      <div class="cate_list_item filter_item">搞笑</div>
      <div class="cate_list_item filter_item">日常</div>
      <div class="cate_list_item filter_item">总裁</div>
      <div class="cate_list_item filter_item">奇幻</div>
      <div class="cate_list_item filter_item">少年</div>
      <div class="cate_list_item filter_item">动作</div>
      <div class="cate_list_item filter_item">校园</div>
      <div class="cate_list_item filter_item">都市</div>
      <div class="cate_list_item filter_item">悬疑</div>
      <div class="cate_list_item filter_item">灵异</div>
      <div class="cate_list_item filter_item">古风</div>
      <div class="cate_list_item filter_item">其他</div>
    </div>
    <div class="showFilterLayout">
      <div class="show_filter">
        <div class="end_status_list filter_list">
          <div class="end_status_list_item filter_item filter_active_item_red">全部</div>
          <div class="end_status_list_item filter_item">完结</div>
          <div class="end_status_list_item filter_item">连载</div>
        </div>
        <div class="pay_status_list filter_list">
          <div class="pay_status_list_item filter_item filter_active_item_red">全部</div>
          <div class="pay_status_list_item filter_item">免费</div>
          <div class="pay_status_list_item filter_item">付费</div>
        </div>
      </div>
    </div>
    <div class="category_loaded pt60">
      <div class="loadMoreWraper scroll">
        <div class="loadMore">
          <div class="category_comic_container">
            <div class="comic_cover_container" style="width: 11.5625rem;">
              <div
                class="comic_cover"
                data-src="https://img.manhua.weibo.com/hcover/2018/09/07/2660188431_YdWpZOAj.jpg"
                lazy="loaded"
                style="width: 11.5625rem; height: 6.5625rem; background-image: url(&quot;https://img.manhua.weibo.com/hcover/2018/09/07/2660188431_YdWpZOAj.jpg&quot;);"
              ></div>
              <!---->
              <div class="comic_cover_info">
                <div class="comic_cover_titleBox">
                  <!---->
                  <div class="comic_cover_title" style="font-size: 0.875rem;">万里雪歌</div>
                  <!---->
                </div>
                <div class="comic_cover_desc" style="font-size: 0.75rem;">女装大佬，同游江湖</div>
              </div>
            </div>
            <div class="comic_cover_container" style="width: 11.5625rem;">
              <div
                class="comic_cover"
                data-src="https://img.manhua.weibo.com/hcover/2019/03/12/1420789885_KlFmtmFB.jpg"
                lazy="loaded"
                style="width: 11.5625rem; height: 6.5625rem; background-image: url(&quot;https://img.manhua.weibo.com/hcover/2019/03/12/1420789885_KlFmtmFB.jpg&quot;);"
              ></div>
              <!---->
              <div class="comic_cover_info">
                <div class="comic_cover_titleBox">
                  <!---->
                  <div class="comic_cover_title" style="font-size: 0.875rem;">真理面具</div>
                  <!---->
                </div>
                <div class="comic_cover_desc" style="font-size: 0.75rem;">被世界“排斥”的高中生</div>
              </div>
            </div>
            <div class="comic_cover_container" style="width: 11.5625rem;">
              <div
                class="comic_cover"
                data-src="https://img.manhua.weibo.com/hcover/2019/01/29/1790454171_DDTzVtvl.jpg"
                lazy="loaded"
                style="width: 11.5625rem; height: 6.5625rem; background-image: url(&quot;https://img.manhua.weibo.com/hcover/2019/01/29/1790454171_DDTzVtvl.jpg&quot;);"
              ></div>
              <!---->
              <div class="comic_cover_info">
                <div class="comic_cover_titleBox">
                  <!---->
                  <div class="comic_cover_title" style="font-size: 0.875rem;">伞少女梦谈</div>
                  <!---->
                </div>
                <div class="comic_cover_desc" style="font-size: 0.75rem;">以物化人，见世间真情</div>
              </div>
            </div>
            <div class="comic_cover_container" style="width: 11.5625rem;">
              <div
                class="comic_cover"
                data-src="https://img.manhua.weibo.com/hcover/2019/01/15/1420789885_WHx8h5W5.jpg"
                lazy="loaded"
                style="width: 11.5625rem; height: 6.5625rem; background-image: url(&quot;https://img.manhua.weibo.com/hcover/2019/01/15/1420789885_WHx8h5W5.jpg&quot;);"
              ></div>
              <!---->
              <div class="comic_cover_info">
                <div class="comic_cover_titleBox">
                  <!---->
                  <div class="comic_cover_title" style="font-size: 0.875rem;">我的灵界女友们</div>
                  <!---->
                </div>
                <div class="comic_cover_desc" style="font-size: 0.75rem;">女鬼小姐姐，求上身！</div>
              </div>
            </div>
            <div class="comic_cover_container" style="width: 11.5625rem;">
              <div
                class="comic_cover"
                data-src="https://img.manhua.weibo.com/hcover/2018/09/07/2660188431_9iGRW4gI.jpg"
                lazy="loaded"
                style="width: 11.5625rem; height: 6.5625rem; background-image: url(&quot;https://img.manhua.weibo.com/hcover/2018/09/07/2660188431_9iGRW4gI.jpg&quot;);"
              ></div>
              <!---->
              <div class="comic_cover_info">
                <div class="comic_cover_titleBox">
                  <!---->
                  <div class="comic_cover_title" style="font-size: 0.875rem;">异先生之深海灵王</div>
                  <!---->
                </div>
                <div class="comic_cover_desc" style="font-size: 0.75rem;">权迎升老师最新力作！</div>
              </div>
            </div>
            <div class="comic_cover_container" style="width: 11.5625rem;">
              <div
                class="comic_cover"
                data-src="https://img.manhua.weibo.com/hcover/2019/02/26/1072616140_bNTf3sHR.jpg"
                lazy="loaded"
                style="width: 11.5625rem; height: 6.5625rem; background-image: url(&quot;https://img.manhua.weibo.com/hcover/2019/02/26/1072616140_bNTf3sHR.jpg&quot;);"
              ></div>
              <!---->
              <div class="comic_cover_info">
                <div class="comic_cover_titleBox">
                  <!---->
                  <div class="comic_cover_title" style="font-size: 0.875rem;">废柴小姐的恋爱生存游戏</div>
                  <!---->
                </div>
                <div class="comic_cover_desc" style="font-size: 0.75rem;">回到过去的我该怎么追男神？</div>
              </div>
            </div>
            <div class="comic_cover_container" style="width: 11.5625rem;">
              <div
                class="comic_cover"
                data-src="https://img.manhua.weibo.com/hcover/2018/05/28/1214610033_4oV0zKUM.jpg"
                lazy="loaded"
                style="width: 11.5625rem; height: 6.5625rem; background-image: url(&quot;https://img.manhua.weibo.com/hcover/2018/05/28/1214610033_4oV0zKUM.jpg&quot;);"
              ></div>
              <!---->
              <div class="comic_cover_info">
                <div class="comic_cover_titleBox">
                  <!---->
                  <div class="comic_cover_title" style="font-size: 0.875rem;">爱我的都去死</div>
                  <!---->
                </div>
                <div class="comic_cover_desc" style="font-size: 0.75rem;">好烦呀所有男人都爱我</div>
              </div>
            </div>
            <div class="comic_cover_container" style="width: 11.5625rem;">
              <div
                class="comic_cover"
                data-src="https://img.manhua.weibo.com/hcover/2018/09/13/2660188431_D3VH3ynf.jpg"
                lazy="loaded"
                style="width: 11.5625rem; height: 6.5625rem; background-image: url(&quot;https://img.manhua.weibo.com/hcover/2018/09/13/2660188431_D3VH3ynf.jpg&quot;);"
              ></div>
              <!---->
              <div class="comic_cover_info">
                <div class="comic_cover_titleBox">
                  <!---->
                  <div class="comic_cover_title" style="font-size: 0.875rem;">人鱼公主</div>
                  <!---->
                </div>
                <div class="comic_cover_desc" style="font-size: 0.75rem;">游艇派对下的阴谋</div>
              </div>
            </div>
            <div class="comic_cover_container" style="width: 11.5625rem;">
              <div
                class="comic_cover"
                data-src="https://img.manhua.weibo.com/hcover/2019/05/31/2106978712_jNb5pW4u.jpg"
                lazy="loaded"
                style="width: 11.5625rem; height: 6.5625rem; background-image: url(&quot;https://img.manhua.weibo.com/hcover/2019/05/31/2106978712_jNb5pW4u.jpg&quot;);"
              ></div>
              <!---->
              <div class="comic_cover_info">
                <div class="comic_cover_titleBox">
                  <!---->
                  <div class="comic_cover_title" style="font-size: 0.875rem;">傲娇王爷种田妃</div>
                  <!---->
                </div>
                <div class="comic_cover_desc" style="font-size: 0.75rem;">厌食王爷居然说我好吃……</div>
              </div>
            </div>
            <div class="comic_cover_container" style="width: 11.5625rem;">
              <div
                class="comic_cover"
                data-src="https://img.manhua.weibo.com/hcover/2018/11/07/1788083155_I5646sFN.jpg"
                lazy="loaded"
                style="width: 11.5625rem; height: 6.5625rem; background-image: url(&quot;https://img.manhua.weibo.com/hcover/2018/11/07/1788083155_I5646sFN.jpg&quot;);"
              ></div>
              <!---->
              <div class="comic_cover_info">
                <div class="comic_cover_titleBox">
                  <!---->
                  <div class="comic_cover_title" style="font-size: 0.875rem;">爷就是开挂少女</div>
                  <!---->
                </div>
                <div class="comic_cover_desc" style="font-size: 0.75rem;">今晚翻哪位师兄的牌子呢？</div>
              </div>
            </div>
            <div class="comic_cover_container" style="width: 11.5625rem;">
              <div
                class="comic_cover"
                data-src="https://img.manhua.weibo.com/hcover/2018/09/17/2660188431_a0RYTC1s.png"
                lazy="loaded"
                style="width: 11.5625rem; height: 6.5625rem; background-image: url(&quot;https://img.manhua.weibo.com/hcover/2018/09/17/2660188431_a0RYTC1s.png&quot;);"
              ></div>
              <!---->
              <div class="comic_cover_info">
                <div class="comic_cover_titleBox">
                  <!---->
                  <div class="comic_cover_title" style="font-size: 0.875rem;">三老爷诡事会</div>
                  <!---->
                </div>
                <div class="comic_cover_desc" style="font-size: 0.75rem;">三老爷的诡故事很可怕</div>
              </div>
            </div>
            <div class="comic_cover_container" style="width: 11.5625rem;">
              <div
                class="comic_cover"
                data-src="https://img.manhua.weibo.com/hcover/2018/09/12/2660188431_bo8MqOEr.png"
                lazy="loaded"
                style="width: 11.5625rem; height: 6.5625rem; background-image: url(&quot;https://img.manhua.weibo.com/hcover/2018/09/12/2660188431_bo8MqOEr.png&quot;);"
              ></div>
              <!---->
              <div class="comic_cover_info">
                <div class="comic_cover_titleBox">
                  <!---->
                  <div class="comic_cover_title" style="font-size: 0.875rem;">追我吧，阴阳官！</div>
                  <!---->
                </div>
                <div class="comic_cover_desc" style="font-size: 0.75rem;">冤魂爱上阴阳官</div>
              </div>
            </div>
            <div class="comic_cover_container" style="width: 11.5625rem;">
              <div
                class="comic_cover"
                data-src="https://img.manhua.weibo.com/hcover/2018/10/24/1214610033_ZuO4GTMe.jpg"
                lazy="loading"
                style="width: 11.5625rem; height: 6.5625rem; background-image: url(&quot;data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7&quot;);"
              ></div>
              <!---->
              <div class="comic_cover_info">
                <div class="comic_cover_titleBox">
                  <!---->
                  <div class="comic_cover_title" style="font-size: 0.875rem;">万能的外卖小哥哥</div>
                  <!---->
                </div>
                <div class="comic_cover_desc" style="font-size: 0.75rem;">最强男神，承包你全年笑点</div>
              </div>
            </div>
            <div class="comic_cover_container" style="width: 11.5625rem;">
              <div
                class="comic_cover"
                data-src="https://img.manhua.weibo.com/hcover/2019/01/29/2662775391_j1twyD8p.jpg"
                lazy="loading"
                style="width: 11.5625rem; height: 6.5625rem; background-image: url(&quot;data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7&quot;);"
              ></div>
              <!---->
              <div class="comic_cover_info">
                <div class="comic_cover_titleBox">
                  <!---->
                  <div class="comic_cover_title" style="font-size: 0.875rem;">魔王奶爸修炼中</div>
                  <!---->
                </div>
                <div class="comic_cover_desc" style="font-size: 0.75rem;">熊孩子？盘她！</div>
              </div>
            </div>
            <div class="comic_cover_container" style="width: 11.5625rem;">
              <div
                class="comic_cover"
                data-src="https://img.manhua.weibo.com/hcover/2018/09/12/2660188431_V9fkQA6Z.png"
                lazy="loading"
                style="width: 11.5625rem; height: 6.5625rem; background-image: url(&quot;data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7&quot;);"
              ></div>
              <!---->
              <div class="comic_cover_info">
                <div class="comic_cover_titleBox">
                  <!---->
                  <div class="comic_cover_title" style="font-size: 0.875rem;">我的奇怪少爷</div>
                  <!---->
                </div>
                <div class="comic_cover_desc" style="font-size: 0.75rem;">我的少爷审美颠倒</div>
              </div>
            </div>
            <div class="comic_cover_container" style="width: 11.5625rem;">
              <div
                class="comic_cover"
                data-src="https://img.manhua.weibo.com/hcover/2018/08/21/3471934934_WYgwTBpM.jpg"
                lazy="loading"
                style="width: 11.5625rem; height: 6.5625rem; background-image: url(&quot;data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7&quot;);"
              ></div>
              <!---->
              <div class="comic_cover_info">
                <div class="comic_cover_titleBox">
                  <!---->
                  <div class="comic_cover_title" style="font-size: 0.875rem;">美人老矣</div>
                  <!---->
                </div>
                <div class="comic_cover_desc" style="font-size: 0.75rem;">毒医妖女重生复仇丫鬟</div>
              </div>
            </div>
            <div class="comic_cover_container" style="width: 11.5625rem;">
              <div
                class="comic_cover"
                data-src="https://img.manhua.weibo.com/hcover/2018/09/07/2084322240_kfx2PM3P.png"
                lazy="loading"
                style="width: 11.5625rem; height: 6.5625rem; background-image: url(&quot;data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7&quot;);"
              ></div>
              <!---->
              <div class="comic_cover_info">
                <div class="comic_cover_titleBox">
                  <!---->
                  <div class="comic_cover_title" style="font-size: 0.875rem;">管家君充电中</div>
                  <!---->
                </div>
                <div class="comic_cover_desc" style="font-size: 0.75rem;">去定制专属你的机器人吧</div>
              </div>
            </div>
            <div class="comic_cover_container" style="width: 11.5625rem;">
              <div
                class="comic_cover"
                data-src="https://img.manhua.weibo.com/hcover/2018/09/07/2084322240_pX7B5ZBX.png"
                lazy="loading"
                style="width: 11.5625rem; height: 6.5625rem; background-image: url(&quot;data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7&quot;);"
              ></div>
              <!---->
              <div class="comic_cover_info">
                <div class="comic_cover_titleBox">
                  <!---->
                  <div class="comic_cover_title" style="font-size: 0.875rem;">天才宝贝的腹黑嫡娘</div>
                  <!---->
                </div>
                <div class="comic_cover_desc" style="font-size: 0.75rem;">金牌杀手穿越抱崽花痴</div>
              </div>
            </div>
            <div class="comic_cover_container" style="width: 11.5625rem;">
              <div
                class="comic_cover"
                data-src="https://img.manhua.weibo.com/hcover/2018/09/20/2042188591_zCHU3TyK.jpg"
                lazy="loading"
                style="width: 11.5625rem; height: 6.5625rem; background-image: url(&quot;data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7&quot;);"
              ></div>
              <!---->
              <div class="comic_cover_info">
                <div class="comic_cover_titleBox">
                  <!---->
                  <div class="comic_cover_title" style="font-size: 0.875rem;">独居少女</div>
                  <!---->
                </div>
                <div class="comic_cover_desc" style="font-size: 0.75rem;">追女孩吗？会被干掉的那种……</div>
              </div>
            </div>
            <div class="comic_cover_container" style="width: 11.5625rem;">
              <div
                class="comic_cover"
                data-src="https://img.manhua.weibo.com/hcover/2018/09/29/1868284421_OWK1dO0b.jpg"
                lazy="loading"
                style="width: 11.5625rem; height: 6.5625rem; background-image: url(&quot;data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7&quot;);"
              ></div>
              <!---->
              <div class="comic_cover_info">
                <div class="comic_cover_titleBox">
                  <!---->
                  <div class="comic_cover_title" style="font-size: 0.875rem;">香水汪星人</div>
                  <!---->
                </div>
                <div class="comic_cover_desc" style="font-size: 0.75rem;">金毛犬变成金发帅哥</div>
              </div>
            </div>
          </div>
          <div class="list_notdone">
            <img src="//img.manhua.weibo.com/static/b/vcomic-h5/dist/img/circle.88c279ba.png" alt />
            <p>正在加载...</p>
          </div>
          <!---->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cate'
}
</script>
