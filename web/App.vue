<template>
  <base-header />
  <router-view />
  <base-footer />
</template>
<script>
import BaseFooter from '@/components/BaseFooter'
import BaseHeader from '@/components/BaseHeader'
import { useStore } from 'vuex'
import { provide, computed } from 'vue'

export default {
  name: 'App',
  components: { BaseFooter, BaseHeader },
  setup() {
    console.log(
      '%c Bit2 %c v 1.0.0%c',
      'background:#35495e; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff',
      'background:#ff923f; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff',
      'background:transparent'
    )
    const store = useStore()
    const user = computed(() => store.state.userinfo)
    provide('user', user)
    store.dispatch('getProfile')
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
html {
  background-color: rgb(41 46 57);
  height: 100%;
}
body {
  color: rgb(199 204 216);
  font-size: 1em;
  font-weight: 400;
  line-height: 1.5;
  height: 100%;
}
a {
  color: rgb(199 204 216);
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  min-height: 100%;
  position: relative;
}
</style>
