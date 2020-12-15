<template>
  <div class="my">
    <div v-for="(item,index) in list"
         :key="index">
      {{item}}
    </div>
  </div>
</template>
<script>
import { ref } from 'vue'
import { getMyPhotoApi } from '@/api/photo'
export default {
  setup() {
    const list = ref([])
    async function getMyPhoto() {
      try {
        const res = await getMyPhotoApi()
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
.my {
}
</style>