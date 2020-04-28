<template>
  <div class="Daypub">
    <div class="nav_layout">
      <div class="com_nav">
        <div class="nav_content">
          <div class="nav_left">
            <div class="back_btn l_con"></div>
          </div>
          <div class="nav_middle">
            <span class="nav_title">放送表</span>
          </div>
          <div class="nav_right"></div>
        </div>
        <!---->
      </div>
    </div>
    <div class="release_date">
      <p class="release_date_day">周三</p>
      <p class="release_date_day">周四</p>
      <p class="release_date_day">周五</p>
      <p class="release_date_day">周六</p>
      <p class="release_date_day">周日</p>
      <p class="release_date_day">昨天</p>
      <p class="release_date_day active">今天</p>
    </div>
    <div class="load_state">
      <img src="//img.manhua.weibo.com/static/b/vcomic-h5/dist/img/play-loading.83412bf6.png" alt />
      <p>今日的漫画还在绘制中</p>
      <!---->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Daypub'
}
</script>
