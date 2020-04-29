<template>
  <div class="swiper-container" >
    <div class="swiper-wrapper">
      <!-- <div class="swiper-slide"></div>
      <div class="swiper-slide">Slide 2</div>
      <div class="swiper-slide">Slide 3</div> -->
      <slot />
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
// 引入swiper核心和样式
import Swiper from 'swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'Swiper',

  props: {
    autoplay: {
      type: Number,
      default: 0
    },
    loop: {
      type: Boolean,
      default: true
    }
  },

  mounted () {
    const that = this

    /* eslint-disable */
    // this.$el 还可以使用 this.$refs.swiper
    new Swiper(this.$el, {
      pagination: {
        el: ".swiper-pagination"
      },

      loop: this.loop,

      autoplay: this.autoplay ? {
        delay: this.autoplay,
        stopOnLastSlide: false,
        disableOnInteraction: true,
      } : false,

      on: {
        // 这里不要使用箭头函数，否则里面的this指向指向的是当前的组件实例。而不是想要的 swiper 实例
        slideChangeTransitionEnd: function () {
          // 触发一个自定义事件 change
          // this.realIndex => this swiper实例
          // this.$emit()   => this 当前组件实例

          that.$emit('change', this.realIndex)
        },
      },
    });
    /* eslint-enable */
  }
}
</script>

<style lang="scss">
.swiper-container {
  border-radius:10px ;
  width: 343px;
  height: 214px;
  background-color: paleturquoise;
  margin: auto;
}
</style>
