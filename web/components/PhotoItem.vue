<template>
  <div class="photo-item"
       @click="handleClick">
    <img :src="photo.url||defaultPic"
         :alt="photo.filename"
         :style="{ width:'100%',height:height||'auto'}"
         @error="onError">
  </div>
</template>
<script>
import { useRouter } from 'vue-router'
export default {
  props: {
    photo: {
      type: Object,
      default: () => {}
    },
    width: String,
    height: String
  },
  setup(props) {
    const router = useRouter()
    const defaultPic = 'http://photo.tuchong.com/16650954/f/457690686.jpg'

    function onError(event) {
      event.target.src = defaultPic
    }
    function handleClick() {
      router.push({ name: 'Photo', params: { id: props.photo._id } })
    }
    return { onError, handleClick, defaultPic }
  }
}
</script>
<style lang="scss" scoped>
.photo-item {
  display: inline-block;
  width: 100%;
  cursor: pointer;
  img {
    width: 100%;
    border-radius: 5px;
    object-fit: cover;
  }
}
</style>