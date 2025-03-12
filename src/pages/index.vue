<template>
  <div class="title color-cyan">慧研智投风险测评</div>
  <div class="text-center">我们承诺保护您的个人信息</div>
  <div class="login-container">
    
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <!-- 姓名输入 -->
        <van-field
          v-model="formData.name"
          name="name"
          label="姓名"
          placeholder="请输入姓名"
          :rules="nameRules"
        />

        <!-- 身份证输入 -->
        <van-field
          v-model="formData.idCard"
          name="idCard"
          label="身份证号"
          placeholder="请输入身份证号码"
          :rules="idCardRules"
        />
      </van-cell-group>

      <div style="margin: 16px;">
        <van-button 
          round 
          block 
          type="danger" 
          native-type="submit"
          :loading="loading"
        >
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { showFailToast, showSuccessToast } from 'vant';
import { useRouter } from 'vue-router';
import { login } from '../api/index.js'
const router = useRouter()
interface FormData {
  name: string;
  idCard: string;
}

// 表单数据
const formData = reactive<FormData>({
  name: '',
  idCard: ''
});

// 加载状态
const loading = ref(false);

// 姓名验证规则
const nameRules = [
  { required: true, message: '请输入姓名' },
  { pattern: /^[\u4e00-\u9fa5]{2,20}$/, message: '请输入有效的中文姓名' }
];

// 身份证验证规则
const idCardRules = [
  { required: true, message: '请输入身份证号码' },
  { 
    validator: (value: string) => {
      // 简单身份证验证（15位或18位，最后一位可以是X/x）
      return /^\d{15}|\d{17}[\dXx]$/.test(value);
    },
    message: '请输入有效的身份证号码'
  }
];

// 提交处理
const onSubmit = async () => {
  try {
    loading.value = true;
    // 这里可以添加实际登录逻辑
    console.log('提交数据：', formData);
    localStorage.setItem('userInfo', JSON.stringify(formData))
    login(formData).then(res => {
      console.log(res)
      const { code , data, msg} = JSON.parse(res)
      if(code == 0) {
        localStorage.setItem('token', data.token)
        // showSuccessToast('验证通过,正在跳转')
        router.push('./sett/risk')
      } else {
        showFailToast(msg)
      }
    })
  } catch (error) {
    showFailToast('提交失败');
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
.title {
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin: 80px 0;
}
.login-container {
  padding: 20px;
}

.van-field {
  font-size: 16px;
  margin: 15px 0;
}
</style>
