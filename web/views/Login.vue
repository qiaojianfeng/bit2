<template>
  <div class="login">
    <!-- <h1>登陆</h1> -->
    <div class="login-box">
      <div><input class="input"
               type="text"
               autocomplete="on"
               placeholder="输入用户名称"
               v-model="form.username" /></div>
      <div><input class="input"
               autocomplete="on"
               type="password"
               placeholder="输入密码"
               v-model="form.password" /></div>
      <button class="btn"
              :disabled="!form.username || !form.password"
              @click="handleLogin">登陆</button>
    </div>
  </div>
</template>
<script>
import { reactive } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { loginApi } from '@/api/user'
import { setCookie } from '@/utils/cookie'

export default {
  setup() {
    const store = useStore()
    const router = useRouter()
    const form = reactive({
      username: '',
      password: ''
    })

    async function handleLogin() {
      try {
        const res = await loginApi(form)
        if (res.code === 0) {
          store.dispatch('getProfile')
          setCookie('token', res.data.token)
          router.push('/')
        } else {
          alert(res.msg)
        }
      } catch (error) {
        console.log(error)
      }
    }
    return { form, handleLogin }
  }
}
</script>
<style lang="scss" scoped>
.login {
  padding-top: 100px;
  .login-box {
    margin-top: 30px;
    width: 250px;
    margin: 0 auto;
    box-sizing: border-box;
    .input {
      background-color: rgb(50, 56, 70);
      border-radius: 5px;
      box-sizing: border-box;
      width: 100%;
      padding: 10px 20px;
      color: rgb(199, 204, 216);
      outline: none;
      border: none;
      appearance: none;
      margin-bottom: 20px;
      &:-internal-autofill-previewed,
      &:-internal-autofill-selected {
        -webkit-text-fill-color: #fff !important;
        transition: background-color 5000s ease-in-out 0s !important;
      }
    }
    .btn {
      width: 100%;
      color: rgb(199, 204, 216);
      outline: none;
      border: none;
      appearance: none;
      line-height: 40px;
      background-color: #cc0033;
      border-radius: 8px;
      display: inline-block;
      font-weight: 500;
      box-shadow: 0px 15px 10px -12px #000;
      cursor: pointer;
      /* &[disabled] {
      } */
      &:hover,
      &:active {
        opacity: 0.8;
      }
    }
  }
}
</style>