<template>
  <div class="pics-wall">
    <div class="pic"
         v-for="(item,i) in pics"
         :class="{'animate-in':Math.abs(index-i)<=1}"
         :key="i"
         :style="`background-image: url(${item})`">
    </div>
  </div>
</template>
<script>
import Pic1 from '@/assets/1.jpg'
import Pic2 from '@/assets/2.jpg'
import Pic3 from '@/assets/3.jpg'
import Pic4 from '@/assets/4.jpg'
import Pic5 from '@/assets/5.jpg'
import Pic6 from '@/assets/6.jpg'
import Pic7 from '@/assets/7.jpg'
import { ref, onBeforeUnmount } from 'vue'
export default {
  setup() {
    const pics = [Pic1, Pic2, Pic3, Pic4, Pic5, Pic6, Pic7].sort(() => Math.random() - 0.5)
    let index = ref(0)
    const timer = setInterval(() => {
      index.value++
      if (index.value >= pics.length) {
        index.value = 0
      }
    }, 5000)
    onBeforeUnmount(() => {
      clearInterval(timer)
    })
    return { pics, index }
  }
}
</script>
<style lang="scss" scoped>
/* @mixin PicHover {
  &:hover {
    box-shadow: 15px 15px 20px rgba(50, 50, 50, 0.4);
    transform: rotate(-5deg) scale(2.2);
    z-index: 1000;
  }
} */

.pics-wall {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
  .pic {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    opacity: 0;
    transform: translateZ(0);
    backface-visibility: hidden;
    left: 0;
    top: 0;
    box-sizing: border-box;
    background-size: cover;
    &.animate-in,
    &.animate-in--alt {
      animation-name: slideshow;
      animation-duration: 10s;
      animation-timing-function: linear;
      animation-fill-mode: forwards;
    }
    &.animate-in--alt {
      opacity: 1;
      animation-name: slideshow--alt;
    }
    &.animate-end {
      opacity: 1;
      transform: scale(1.12);
      animation: none;
    }
  }
}
@keyframes slideshow {
  0% {
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    transform: scale(1.12);
  }
}
@keyframes slideshow--alt {
  100% {
    transform: scale(1.12);
  }
}
</style>