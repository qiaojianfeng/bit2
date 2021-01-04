<template>
  <div class="my">
    <!-- 顶部用户信息 -->
    <div class="user">
      <div class="left">
        <i class="avatar"
           :style="{backgroundImage:`url(${user.avatar||defaultAvatar})`}"></i>
      </div>
      <div class="intro">
        <p class="my-nickname"> {{user.nickname}} </p>
        <p class="my-intro"> {{user.intro}} </p>
      </div>
    </div>
    <!--  主要区域 -->
    <div class="mian">
      <div class="navs">
        <router-link class="nav"
                     to="/my/photo"
                     active-class="active">
          我的图库
        </router-link>
        <router-link class="nav"
                     to="/my/like"
                     active-class="active">
          点赞
        </router-link>
        <router-link class="nav"
                     to="/my/intro"
                     active-class="active">
          修改资料
        </router-link>
      </div>
      <div class="con">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
import defaultAvatar from '@/assets/avatar.jpg'
export default {
  components: {},
  setup() {
    const store = useStore()
    const user = computed(() => store.state.userinfo)
    return { user, defaultAvatar }
  }
}
</script>
<style lang='scss' scoped>
.my {
  width: 1200px;
  margin: 0 auto;
  padding-top: 100px;
  display: flex;
  flex-wrap: wrap;
  .user {
    width: 100%;
    display: flex;
    .avatar {
      display: block;
      width: 80px;
      height: 80px;
      background-size: cover;
      border-radius: 50%;
    }
    .intro {
      padding-left: 50px;
      color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      .my-nickname {
        font-size: 24px;
        font-weight: bold;
      }
      .my-intro {
        font-size: 14px;
      }
    }
  }
  .mian {
    margin-top: 50px;
    display: flex;
    align-items: flex-start;
    .navs {
      background-color: rgb(33, 35, 44);
      width: 280px;
      min-height: 400px;
      border-radius: 5px;
      flex-shrink: 0;
      padding: 0 0 40px;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      .nav {
        width: 100%;
        height: 50px;
        line-height: 50px;
        color: #fff;
        font-weight: bold;
        &.active {
          background-color: #cc0033;
        }
        /* &:hover {
        } */
      }
    }
    .con {
      padding-left: 20px;
      display: flex;
      flex-wrap: wrap;
      flex: 1;
    }
  }
}
</style>