<template>
  <div class="discover">
    <transition-group name="photo-group">
      <div class="column"
           v-for="(item,index) in list"
           :key="index"
           :style="{width:`${1200/list.length}px`}">
        <div class="photo"
             v-for="(v,i) in item"
             :key="i">
          <photo-item :photo="v" />
          <div class="footer">
            <div class="l">
              <i class="avatar"
                 :style="{backgroundImage:`url(${v.author.avatar||defaultAvatar})`}"></i>
              <span class="nickname">{{v.author.nickname}}</span>
            </div>
            <div class="r">
              <like :like="v.like"
                    :photo-id="v._id" />
            </div>
          </div>
        </div>
      </div>
    </transition-group>
  </div>
</template>
<script>
import { ref } from 'vue'
import { getDiscoverApi } from '@/api/discover'
import PhotoItem from '@/components/PhotoItem'
import Like from '@/components/photo/Like'
import defaultAvatar from '@/assets/avatar.jpg'
export default {
  components: { PhotoItem, Like },
  setup() {
    const list = ref([])
    async function getDiscover() {
      try {
        const res = await getDiscoverApi()
        if (res) {
          // list.value = res.data.list
          waterFull(res.data.list)
        }
      } catch (error) {
        console.log(error)
      }
    }
    function waterFull(orgList, column = 5) {
      orgList.forEach((element, index) => {
        const ArrIndex = index % column
        list.value[ArrIndex] = list.value[ArrIndex] ? list.value[ArrIndex] : []
        list.value[ArrIndex].push(element)
      })
    }
    getDiscover()
    return { list, defaultAvatar }
  }
}
</script>
<style lang='scss' scoped>
$maxWidth: 1200px;

.discover {
  width: $maxWidth;
  margin: 0 auto;
  padding-top: 100px;
  display: flex;
  /* flex-wrap: wrap; */
  .column {
    padding: 0 5px;
    box-sizing: border-box;
  }
  .photo {
    position: relative;
    width: 100%;
    margin-bottom: 20px;
    border-radius: 5px;
    overflow: hidden;
    .like {
      font-size: 26px;
      /* position: absolute; */
      break-inside: avoid;
      top: 10px;
      right: 10px;
      /* color: rgb(33, 35, 44); */
      cursor: pointer;
    }
    /* footer */
    .footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: rgb(33, 35, 44);
      padding: 6px 10px;
      .l {
        display: flex;
        align-items: center;
        color: #fff;
        font-weight: bold;
        font-size: 14px;
        .avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: #fff;
          background-size: cover;
          background-position: center;
          display: block;
          margin-right: 10px;
        }
      }
      .r {
        display: flex;
        align-items: center;
        color: #fff;
      }
    }
  }
}
.photo-group-enter-active,
.photo-group-leave-active {
  transition: all 1s;
}
.photo-group-enter,
.photo-group-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
