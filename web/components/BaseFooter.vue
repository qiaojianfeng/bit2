<template>
  <footer class="footer">
    基于 <a href="https://webweifeng.github.io/fast-cms/"
       target="_blank">FAST-CMS</a> 开发
    <p>&copy; 2020-2021</p>
    <p>
      <router-link to="/about">关于我们</router-link>
    </p>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  padding: 30px;
  color: #fff;
  bottom: 0;
  left: 0;
  font-size: 14px;
  font-weight: 300;
}
</style>