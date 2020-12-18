<template>
  <div class="home">
    <h1>Bit2 - 全球领先的个人版权开放图库</h1>
    <br />
    <p>累计浏览 <em>2,341,434</em> 次</p>
    <br />
    <br />
    <br />
    <upload />
    <pics-wall />
  </div>
</template>

<script>
import Upload from '@/components/Upload.vue'
import PicsWall from '@/components/PicsWall.vue'
export default {
  name: 'Home',
  components: { Upload, PicsWall },
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
  color: #fff;
  /* -webkit-text-fill-color: #fff;
  -webkit-text-stroke: 1.2px #292e39; */
}
</style>