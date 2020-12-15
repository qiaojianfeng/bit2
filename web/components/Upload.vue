<template>
  <div class="upload-block">
    <input type="file"
           @change="onChange">
  </div>
</template>
<script>
import { uploadApi } from '@/api/photo.js'
export default {
  setup() {
    function onChange(event) {
      const { target } = event
      upload(target.files)
    }
    async function upload(files) {
      try {
        const res = await uploadApi(files)
        console.log(res)
      } catch (error) {
        console.log(error)
      }
    }
    return { onChange }
  }
}
</script>
<style lang="scss" scoped>
.upload-block {
}
</style>