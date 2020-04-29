<template>
  <div class="page-daypub">
        <normal-header title="放送表"></normal-header>
  </div>
</template>

<script>
import NormalHeader from '@/components/NormalHeader'
export default {
  name: 'Daypub',
  components: {
    NormalHeader
  }
}
</script>

<style lang="scss" scoped>
.page-daypub {
  display: flex;
  flex-direction: column;
  height: 100%;

  .daypub-main {
    flex: 1;
    overflow-y: auto;
  }

}
</style>
