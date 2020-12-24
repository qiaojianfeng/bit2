<template>
  <div class="photo"
       v-for="(item,index) in list"
       :key="index">
    <photo-item :photo="item"
                height="200px" />
  </div>
</template>
<script>
import { ref } from 'vue'
import { getMyLikeApi } from '@/api/photo'
import PhotoItem from '@/components/PhotoItem'
export default {
  components: { PhotoItem },
  setup() {
    const list = ref([])
    async function getMyPhoto() {
      try {
        const res = await getMyLikeApi()
        if (res) {
          list.value = res.data.list
        }
      } catch (error) {
        console.log(error)
      }
    }
    getMyPhoto()
    return { list }
  }
}
</script>
<style lang='scss' scoped>
.photo {
  width: 20%;
  padding: 5px;
  box-sizing: border-box;
}
</style>