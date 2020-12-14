<template>
  <header class="header">
    <nav class="navs">
      <router-link class="nav"
                   active-class="active"
                   to="/">首页</router-link>
      <router-link class="nav"
                   active-class="active"
                   to="/login"
                   v-if="!user">登陆</router-link>
      <router-link class="nav"
                   active-class="active"
                   to="/login"
                   v-else>{{user.username}}</router-link>
    </nav>
  </header>
</template>
<script>
import { inject } from 'vue'
export default {
  setup() {
    const user = inject('user')
    return { user }
  }
}
</script>

<style lang="scss" scoped>
.header {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  top: 0;
  left: 0;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 20px;
  .navs {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .nav {
      padding: 5px 20px;
      &.active {
        background-color: #21232c;
        border-radius: 5px;
        color: #fff;
      }
    }
  }
}
</style>