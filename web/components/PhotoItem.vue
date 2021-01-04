<template>
  <div class="photo-item"
       @click="handleClick"
       :style="{backgroundColor}">
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
    let backgroundColor = ''
    function onError(event) {
      event.target.src = defaultPic
    }
    function handleClick() {
      router.push({ name: 'Photo', params: { id: props.photo._id } })
    }
    function getRandom() {
      return Math.ceil(Math.random() * 255)
    }
    function getdefalutBgColor() {
      const [R, G, B] = [getRandom(), getRandom(), getRandom()]
      backgroundColor = `rgb(${R},${G},${B})`
    }
    getdefalutBgColor()
    return { onError, handleClick, defaultPic, backgroundColor }
  }
}
</script>
<style lang="scss" scoped>
.photo-item {
  width: 100%;
  overflow: hidden;
  cursor: pointer;
  box-sizing: border-box;
  img {
    display: block;
    width: 100%;
    /* border-radius: 5px; */
    object-fit: cover;
    box-sizing: border-box;
    transition: all 300ms;
    border: 0;
    margin: 0;
    /* &:hover {
      transform: scale(1.05);
    } */
  }
}
</style>