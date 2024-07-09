<template>
  <section class="content">
    <Sun />
    <div class="login-container">
      <h1 class="title">用户登录</h1>
      <form @submit.prevent="login">
        <div class="form-control">
          <label for="username">用户名</label>
          <input type="text" id="username" v-model="username" />
        </div>
        <div class="form-control">
          <label for="password">密码</label>
          <input type="password" id="password" v-model="password" />
        </div>
        <button type="submit">注册/登录</button>
      </form>
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Sun from './Sun.vue'

const username = ref('')
const password = ref('')
const errorMessage = ref('')
const login = () => {
  // 模拟登录请求
  if (username.value === 'admin' && password.value === '123456') {
    // 登录成功
    errorMessage.value = ''
    alert('登录成功')
  } else {
    // 登录失败
    errorMessage.value = '用户名或密码错误'
  }
}

</script>

<style scoped lang="scss">
.content {
  width: 100%;
  height: 100vh;
  max-width: 414px;
  background-image: url('../../assets/images/loginBg.png');
  overflow: hidden;

  .login-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    // border: 1px solid #ccc;
    border-radius: 4px;
    text-align: center;
    box-sizing: border-box;
    position: relative;
    top: 50%;
    transform: translateY(-100%);
    background-color: rgba($color: #000000, $alpha: 0.4);

    .title {
      text-shadow: 0 0 1px #fff;
    }
  }

  .form-control {
    margin-bottom: 20px;
  }

  label {
    display: block;
    text-align: left;
  }

  input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    background-color: rgba($color: #000000, $alpha: 0.3);

    &:focus-visible {
      outline: none;
      color: #ccc;
    }
  }

  button {
    padding: 8px 16px;
    background-color: rgba($color: #4caf50, $alpha: 0.7);
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 100%;
  }

  .error-message {
    color: red;
    margin-top: 10px;
    text-shadow: 0 0 1px #fff;
  }
}
</style>