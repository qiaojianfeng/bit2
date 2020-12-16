<template>
  <div class="home">
    <h1>比特图库 - 全球领先的个人版权开放图库</h1>
    <br />
    <p>累计浏览 <em>2,341,434</em> 次</p>
    <br />
    <br />
    <br />
    <upload />
  </div>
</template>

<script>
import Upload from '@/components/Upload.vue'
export default {
  name: 'Home',
  components: { Upload },
  setup() {}
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  min-height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
</style>