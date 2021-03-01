<template>
  <div class="login">
    <div class="login-w">
      <div class="login-w-username">
        <label>
          用户名：
          <input type="text" placeholder="请输入" v-model="uName" />
        </label>
      </div>
      <br />
      <div class="login-w-psw">
        <label>
          密码：
          <input type="text" placeholder="请输入" v-model="uPsw" />
        </label>
      </div>
      <button @click="subLogin">登录</button>
    </div>
  </div>
</template>

<script>
import { login } from '@/network/users'

export default {
  name: 'Login',
  data() {
    return {
      uName: '',
      uPsw: ''
    }
  },
  methods: {
    subLogin() {
      if (this.uName === '') {
        alert('用户名为空')
        return
      }
      if (this.uPsw === '') {
        alert('密码为空')
        return
      }
      // console.log(this.uName, this.uPsw)
      login(this.uName, this.uPsw).then(res => {
        // console.log(res)
        if (res.data.code === 200) {
          alert('成功，准备跳转')
          sessionStorage.setItem('token', res.data.token)
          sessionStorage.setItem('uName', this.uName)
          this.$router.push('/')
        } else {
          alert(res.data.message)
        }
      })
    }
  }
}
</script>

<style scoped>
.login {
  width: 1200px;
  height: 800px;
  margin: 0 auto;
  color: #000000;

  border: 2px solid #a593e0;
}
.login-w {
  position: relative;
  width: 500px;
  height: 300px;
  margin: 100px auto 0 auto;
  border: 2px solid #000000;
  /*background-color: red;*/
}
.login-w-username {
  margin: 30px 0 0 100px;
}
.login-w-psw {
  margin: 30px 0 0 100px;
}
.login-w button {
  margin: 50px 0 0 200px;
}
</style>
