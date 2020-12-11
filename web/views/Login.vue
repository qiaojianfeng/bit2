<template>
  <div class="login">
    <h1>login</h1>
    <div class="login-box">
      <div><input class="input"
               type="text"
               autocomplete="on"
               placeholder="输入用户名称" /></div>
      <div><input class="input"
               autocomplete="on"
               type="password"
               placeholder="输入密码" /></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.login {
  .login-box {
    .input {
      background: rgb(50 56 70);
      border-radius: 0 !important;
    }
  }
}
</style>