<template>
  <nav class="index-nav">
    <router-link to="/daypub">
      <div class="nav-item">
         <img src="@/assets/icon/daypub.png" alt="" />
        <p class="nav-text font-24">放送表</p>
      </div>
    </router-link>
    <router-link to="/cate">
      <div class="nav-item">
        <img src="@/assets/icon/catelog.png" alt="" />
        <p class="nav-text font-24">分类</p>
      </div>
    </router-link>
    <router-link to="/rank">
      <div class="nav-item">
         <img src="@/assets/icon/rank.png" alt="" />
        <p class="nav-text font-24">榜单</p>
      </div>
    </router-link>
    <router-link to="/comic">
      <div class="nav-item">
       <img src="@/assets/icon/ending.png" alt="" />
        <p class="nav-text font-24">完结</p>
      </div>
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'IndexNav'
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";

.index-nav {
  @include border-bottom;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 100px;
  .nav-item {
    .iconfont {
      font-size: 52px;
      line-height: 1.2;
    }
    .nav-text {
      color: #8d8d8d;
      font-weight: 500;
      text-align: center;
    }
      img {
    width: 60px;
    height: 60px;
  }
  p {
    width: 60px;
    height: 24px;
    font-size: 14px;
    color: #333;
    text-align: center;
    line-height: 24px;
  }
  }
}
</style>
