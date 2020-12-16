<template>
  <div class="discover">
    <div class="photo"
         v-for="(item,index) in list"
         :key="index">
      <i class="iconfont like">&#xe63c;</i>
      <photo-item :photo="item" />
    </div>
  </div>
</template>
<script>
import { ref } from 'vue'
import { getDiscoverApi } from '@/api/discover'
import PhotoItem from '@/components/PhotoItem'
export default {
  components: { PhotoItem },
  setup() {
    const list = ref([])
    async function getDiscover() {
      try {
        const res = await getDiscoverApi()
        if (res) {
          list.value = res.data.list
        }
      } catch (error) {
        console.log(error)
      }
    }
    getDiscover()
    return { list }
  }
}
</script>
<style lang='scss' scoped>
.discover {
  width: 1200px;
  margin: 0 auto;
  padding-top: 100px;
  display: flex;
  flex-wrap: wrap;
  .photo {
    width: 25%;
    padding: 5px;
    box-sizing: border-box;
    position: relative;
    .like {
      font-size: 28px;
      position: absolute;
      top: 10px;
      right: 10px;
    }
  }
}
</style>