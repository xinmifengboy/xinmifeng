<template>
  <div class="login-container">
    <h2>用户登录</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">姓名:</label>
        <input
          type="text"
          id="name"
          v-model="user.name"
          required
          placeholder="请输入您的姓名"
        />
      </div>

      <div class="form-group">
        <label for="idCard">身份证:</label>
        <input
          type="text"
          id="idCard"
          v-model="user.idCard"
          required
          placeholder="请输入您的身份证号码"
          maxlength="18"
        />
      </div>

      <button type="submit">登录</button>
    </form>

    <div v-if="successMessage" class="success-message">
      登录成功！信息已保存。
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref,  } from 'vue';
import { useRouter } from 'vue-router';

interface User {
  name: string;
  idCard: string;
}

export default defineComponent({
  name: 'Login',
  setup() {
    const user = reactive<User>({
      name: '',
      idCard: '',
    });
    const router = useRouter();
    const successMessage = ref(false);

    const handleSubmit = () => {
      // 简单的验证，可以根据需要增强
      if (!user.name || !user.idCard) {
        alert('请填写所有字段');
        return;
      }

      // 存储到 localStorage
      localStorage.setItem('userInfo', JSON.stringify(user));

      // 显示成功消息
      successMessage.value = true;
    
      router.push('./sett/risk');
      // 清空表单（可选）
      // user.name = '';
      // user.idCard = '';
    };

    return {
      user,
      successMessage,
      handleSubmit,
    };
  },
});
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 100px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

button:hover {
  background-color: #38a169;
}

.success-message {
  color: green;
  text-align: center;
  margin-top: 20px;
}
</style>
