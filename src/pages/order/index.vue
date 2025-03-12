<template>
  <div class="payment-page">
    <div class="header">
      <!-- <img src="https://via.placeholder.com/200x100.png?text=慧研智投" alt="Logo" class="logo" /> -->
      
    </div>
    <div class="content">
    <div class="content-name">慧研智投科技有限公司深圳分公司</div>
    <form class="form-container">
      <van-field
        v-model="phone"
        type="phone"
        label="手机号"
        placeholder="请输入手机号"
        maxlength="11"
        :rules="[{ required: true, message: '请输入手机号' }]"
      />

      <div class="verify-code">
        <van-field
          v-model="verifyCode"
          label="验证码"
          placeholder="请输入验证码"
          :rules="[{ required: true, message: '请输入验证码' }]"
        />
        <van-button style="width:110px" type="danger" size="small" :loading="isLoading" @click="getVerifyCode">
          {{ isLoading ? '发送中...' : '获取验证码' }}
        </van-button>
      </div>
    </form>
  </div>
    <div class="product-info">
      <div class="product-item">
        <span>至尊龙头</span>
        <span>30天</span>
        <span class="price">¥0.01</span>
        <span class="original-price">原价0.01</span>
      </div>
    </div>

    <div class="payment-method">
      <van-radio-group v-model="paymentType">
        <div class="flex justify-between items-center" >
          <div><i class="iconfont icon-weixinzhifu" style="font-size:24px"></i>
            <span style="margin-left: 10px; font-size: 16px; font-weight: bold">微信</span></div>
        <van-radio name="wechat"></van-radio>
      </div>
      </van-radio-group>
    </div>

    <van-button type="primary" block class="pay-button" @click="handlePay">去支付</van-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { showFailToast, showSuccessToast } from 'vant';
const phone = ref('');
const verifyCode = ref('');
const paymentType = ref('wechat');
const isLoading = ref(false);

const getVerifyCode = () => {
  isLoading.value = true;
  // 这里替换成实际发送验证码逻辑
  setTimeout(() => {
    isLoading.value = false;
    showSuccessToast('验证码已发送');
  }, 1500);
};

const handlePay = () => {
  // 表单验证
  if (!phone.value) {
    showFailToast('请输入手机号');
    return;
  }
  if (!verifyCode.value) {
    showFailToast('请输入验证码');
    return;
  }
  console.log('支付信息', { phone: phone.value, paymentType: paymentType.value });
};
</script>

<style scoped>
.content {
  background-color: #dd2727;
  border-radius: 10px;
  box-sizing: border-box;
}
.content-name {
  color: white;
  text-align: center;
  line-height: 100px;
}
.payment-page {
  padding: 20px;
  background-color: #f5f5f5;
  height: 100vh;
  box-sizing: border-box;
}

.header {
  text-align: center;
  margin-bottom: 130px;
}

.logo {
  max-width: 150px;
  margin-bottom: 15px;
}

.banner {
  margin-top: 20px;
}

.banner-img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.form-container {
  background: white;
  padding: 20px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  margin-bottom: 20px;
}

.verify-code {
  display: flex;
  align-items: center;
  gap: 10px;
}

.product-info {
  background: white;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
}

.product-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.price {
  color: #ff4444;
  font-size: 18px;
  font-weight: bold;
}

.original-price {
  color: #999;
  text-decoration: line-through;
  font-size: 12px;
}

.payment-method {
  background: white;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
}

.pay-icon {
  margin-right: 10px;
}

.pay-button {
  background: #dd2727;
  border-color: #dd2727;
}
</style>