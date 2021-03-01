<template>
  <div class="register">
    <div class="register-w">
      <div class="register-w-username">
        <label>
          用户名：
          <input type="text" placeholder="请输入" v-model="uName" />
        </label>
      </div>
      <div class="register-w-psw">
        <label>
          密码：
          <input type="password" placeholder="请输入" v-model="uPsw" />
        </label>
        <br />
        <label>
          重复密码：
          <input type="password" placeholder="请输入" v-model="uPsw2" />
        </label>
      </div>
      <div class="register-w-email">
        <label>
          邮箱：
          <input type="text" placeholder="请输入" v-model="email" />
        </label>
      </div>
      <button @click="subRegister">确认注册</button>
    </div>
  </div>
</template>

<script>
import { register } from '@/network/users'

export default {
  name: 'Register',
  data() {
    return {
      uName: '',
      uPsw: '',
      uPsw2: '',
      email: ''
    }
  },
  methods: {
    subRegister() {
      if (this.uPsw !== this.uPsw2) {
        console.log('密码不相同')
        return
      }
      if (this.uPsw === '') {
        console.log('用户名为空')
        return
      }
      if (this.uPsw === '') {
        console.log('密码为空')
        return
      }
      if (this.email === '') {
        console.log('邮箱为空')
        return
      }
      console.log(this.uName, this.uPsw, this.email)
      register(this.uName, this.uPsw, this.email).then(
        res => {
          // console.log(res.data.message)
          alert(res.data.message)
          this.$router.push('/login')
        },
        err => {
          console.log(err)
        }
      )
    }
  }
}
</script>

<style scoped>
.register {
  width: 1200px;
  height: 800px;
  margin: 0 auto;
  color: #000000;

  border: 2px solid #a593e0;
}
.register-w {
  position: relative;
  width: 500px;
  height: 400px;
  margin: 100px auto 0 auto;
  border: 2px solid #000000;
  /*background-color: red;*/
}
.register-w-username {
  margin: 30px 0 0 100px;
}
.register-w-psw {
  margin: 30px 0 0 100px;
}
.register-w-psw label input {
  margin-top: 30px;
}
.register-w-email {
  margin: 30px 0 0 100px;
}
.register-w button {
  margin: 50px 0 0 200px;
}
</style>
