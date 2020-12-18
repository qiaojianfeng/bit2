<template>
  <div class="upload-block">
    <template v-if="user">
      <label class="upload-btn"
             for="input-file">发布</label>
      <input class="input-file"
             id="input-file"
             type="file"
             accept="image/*, .jpg,.png,.gif,.jpeg"
             multiple
             @change="onChange">
    </template>
    <button v-else
            class="upload-btn"
            @click="handleClick">发布</button>
  </div>
</template>
<script>
import { uploadApi } from '@/api/photo.js'
import { inject } from 'vue'
import { useRouter } from 'vue-router'
export default {
  setup() {
    const user = inject('user')
    const router = useRouter()
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
    function handleClick() {
      router.push('login')
    }
    return { onChange, handleClick, user }
  }
}
</script>
<style lang="scss" scoped>
.upload-block {
  .upload-btn {
    width: 160px;
    line-height: 40px;
    background-color: #cc0033;
    border-radius: 8px;
    display: inline-block;
    font-weight: 500;
    box-shadow: 0px 15px 10px -12px #000;
    cursor: pointer;
    color: #fff;
    &:hover,
    &:active {
      opacity: 0.8;
    }
  }
  .input-file {
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    width: 0;
    height: 0;
  }
}
</style>