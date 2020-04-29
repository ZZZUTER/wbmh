<template>
   <div class="header-btn">
      <ul class="one-btn ">
        <li :class="{active: isSelect===index}"
          v-for="(item, index) in types.cate_list"
          :key="item.cate_id"
          @click="isSelect=index"
        >{{item.cate_cn_name}}</li>
      </ul>
      <ul class="two-btn">
        <li :class="{active : isSelect2 === index}"
         v-for="(item, index) in types.comic_pay_status_list"
         :key="item.cate_id"
         @click="isSelect2=index"
        >{{item.comic_pay_status_name}}</li>

      </ul>
      <ul class="three-btn"

      >
        <li :class="{active : isSelect3 === index}"
         v-for="(item, index) in types.end_status_list"
         :key="item.cate_id"
          @click="isSelect3=index"
      >{{item.end_status_name}}</li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'headerType',
  data () {
    return {
      isSelect: 0,
      isSelect2: 0,
      isSelect3: 0
    }
  },

  props: {
    types: {
      // type: Object,
      default () {
        return {}
      }
    }
  }

}
</script>

<style lang="scss" scoped>
  .header-btn {
    width: 375px;
    height: 150px;
    border-bottom: 1px solid #dbd9dc;

    .one-btn {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      width: 375px;
      height: 90px;
      color: #b3b3b3;

      // background-color: lightsteelblue;
      li {
        width: 60px;
        height: 30px;
        flex-wrap: wrap;
        font-size: 15px;
        // align-items: center;
        text-align: center;
        border-radius: 5px;
        &.active {
          background-color: #f75d79;
        }
      }
    }
    .two-btn {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      width: 375px;
      height: 30px;
      color: #b3b3b3;
      // background-color: lightsteelblue;
      li {
        width: 60px;
        height: 30px;
        flex-wrap: wrap;
        font-size: 15px;
        text-align: center;
        border-radius: 5px;
        &.active {
          background-color: #f75d79;
        }
      }
    }
    .three-btn {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      width: 375px;
      height: 30px;
      color: #b3b3b3;
      // background-color: lightsteelblue;
      li {
        width: 60px;
        height: 30px;
        // margin: 5px;
        flex-wrap: wrap;
        font-size: 15px;
        text-align: center;
        border-radius: 5px;
        // background-color:lightsalmon;
        &.active {
          background-color: #f75d79;
        }
      }
    }
  }
</style>
