<template>
  <div class="pics-wall"
       :style="style">
    <!-- <img class="pic"
         :class="'p'+index"
         v-for="(item,index) in pics"
         :src="item"
         :key="index"> -->
  </div>
</template>
<script>
import Pic1 from '@/assets/1.png'
import Pic2 from '@/assets/2.png'
import Pic3 from '@/assets/3.png'
import Pic4 from '@/assets/4.png'
import Pic5 from '@/assets/5.png'
import Pic6 from '@/assets/6.png'
import Pic7 from '@/assets/7.png'
export default {
  setup() {
    const pics = [Pic1, Pic2, Pic3, Pic4, Pic5, Pic6, Pic7]
    const style = {
      backgroundImage: `url(${pics[0]})`
    }
    return { style }
  }
}
</script>
<style lang="scss" scoped>
@mixin PicHover {
  &:hover {
    box-shadow: 15px 15px 20px rgba(50, 50, 50, 0.4);
    transform: rotate(-5deg) scale(2.2);
    z-index: 1000;
  }
}

.home-cover-img.animate-in,
.home-cover-img.animate-in--alt {
  animation-name: slideshow;
  animation-duration: 10s;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
}
.home-cover-img.animate-in--alt {
  opacity: 1;
  animation-name: slideshow--alt;
}
.home-cover-img.animate-end {
  opacity: 1;
  transform: scale(1.12);
  animation: none;
}

.pics-wall {
  /* width: 1200px; */
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  opacity: 0;
  transform: translateZ(0);
  backface-visibility: hidden;
  /* left: 50%;
  top: 80px;
  transform: translateX(-50%); */
  left: 0;
  top: 0;
  overflow: hidden;
  box-sizing: border-box;
  background-size: cover;
  /* .pic {
    width: 200px;
    border-radius: 5px;
    box-shadow: 2px 2px 3px rgba(50, 50, 50, 0.4);
    transition: all 0.5s ease-in;
    position: absolute;
    z-index: 1;
  } */
  /* .p0 {
    left: 400px;
    top: 20px;
    width: 340px;
    transform: rotate(-5deg);
    @include PicHover();
  } */
  /* .p1 {
    left: 20px;
    top: 100px;
    width: 300px;
    transform: rotate(-20deg);
    @include PicHover();
  }
  .p2 {
    left: 800px;
    top: 100px;
    width: 250px;
    transform: rotate(10deg);
    @include PicHover();
  }
  .p3 {
    left: 800px;
    top: 240px;
    width: 280px;
    transform: rotate(25deg);
    @include PicHover();
  }
  .p4 {
    left: 260px;
    top: 200px;
    width: 450px;
    transform: rotate(-20deg);
    @include PicHover();
  }
  .p5 {
    left: 94px;
    top: 350px;
    width: 300px;
    transform: rotate(30deg);
    @include PicHover();
  }
  .p6 {
    left: 450px;
    top: 400px;
    width: 300px;
    transform: rotate(10deg);
    @include PicHover();
  } */
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