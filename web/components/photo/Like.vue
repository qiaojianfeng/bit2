<template>
  <div class="my-like"
       @click="handleClick">
    <i class="iconfont like"
       :class="{'is-like':isLike}">&#xe63c;</i>
    <span>{{photoLike.length}}</span>
  </div>
</template>
<script>
import { addLikeApi, delLikeApi } from '@/api/photo'
import { computed, inject, ref } from 'vue'
export default {
  props: {
    like: { type: Array, default: () => [] },
    photoId: { type: String }
  },
  setup(props) {
    const user = inject('user')
    const photoLike = ref(props.like)
    const isLike = computed(function () {
      return photoLike.value.includes(user.value._id)
    })
    async function addLike() {
      try {
        const res = await addLikeApi(props.photoId)
        if (res.code === 0) {
          photoLike.value.push(user.value._id)
        } else {
          alert(res.msg)
        }
      } catch (error) {
        console.log(error)
      }
    }
    async function delLike() {
      try {
        const res = await delLikeApi(props.photoId)
        if (res.code === 0) {
          photoLike.value = photoLike.value.filter((v) => v !== user.value._id)
        } else {
          alert(res.msg)
        }
      } catch (error) {
        console.log(error)
      }
    }
    function handleClick() {
      if (isLike.value) {
        delLike()
      } else {
        addLike()
      }
    }
    return { photoLike, isLike, handleClick }
  }
}
</script>
<style lang="scss" scoped>
.my-like {
  cursor: pointer;
}
.iconfont {
  margin-right: 4px;
  &.is-like {
    color: #cc0033;
  }
}
</style>