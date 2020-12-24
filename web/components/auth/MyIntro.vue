<template>
  <div class="my-intro">
    修改个人信息
  </div>
</template>
<script>
import { inject } from 'vue'
export default {
  components: {},
  setup() {
    const user = inject('user')
    return { user }
  }
}
</script>
<style lang="scss" scoped>
</style>