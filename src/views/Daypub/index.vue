<template>
  <div class="page-daypub">
    <div class="header">
      <router-link to="/">
        <p class="headerBack"><img src="../../assets/icon/back.png" alt=""></p>
      </router-link>
      <p class="headerContain">放送表</p>
    </div>

    <div class="release_date" v-if="showCard">
      <p
        class="release_date_day"
        v-for="(item, index) in tab_list"
        :key="index"
        @click="getDay(index)"
        :class="{'active': index === handleIndex}"
      >{{ item.pub_name }}</p>
    </div>

    <div class="DaypubMain">
      <div class="DaypubMainBox" v-if="showCard"></div>
      <div class="loadBox" v-else></div>
    </div>
  </div>
</template>

<script>
import { getDaypub } from '@/api/cartoon'

export default {
  name: 'daypub',

  data () {
    return {
      showCard: false,
      tab_list: [],
      handleIndex: 6
    }
  },

  methods: {
    getDay (index) {
      this.handleIndex = index
    }
  },

  created () {
    getDaypub().then(res => {
      this.showCard = true
      console.log(res)
      this.tab_list = res.data.tab_list
    })
  }
}
</script>

<style lang="scss" sscoped>
html,
body {
  background: #f8f8f8;
  overflow: auto;
  max-width: 900px;
  width: 100%;
}
.page-daypub {
  background: #fff;
  display: flex;
  height: 100%;
  flex-direction: column;
  .header {
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

  .release_date {
    height: 40px;
    line-height: 40px;
    box-shadow: inset 0 -1px 0 0 #efefef;
    margin-bottom: 8px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    .release_date_day {
      font-size: 14px;
      color: #b3b3b3;
      position: relative;
      .active {
        color: #333;
      }
    }
    .active:before {
      position: absolute;
      width: 100%;
      height: 2px;
      content: "";
      background: #f75d79;
      bottom: 0;
      left: 0;
    }
  }

  .DaypubMain {
    display: flex;
    height: 100%;
    flex-direction: column;
  }

  .loadBox {
    width: 100%;
    height: 100%;
    background: url(../../assets/icon/load.png) no-repeat center center;
  }

  .DaypubMainBox {
    width: 100%;
    height: 100%;
    background: url(../../assets/icon/makeing.png) no-repeat center center;
  }
}
</style>
