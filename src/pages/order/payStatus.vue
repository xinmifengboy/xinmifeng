<template>
  <div class="success-page">
    <!-- 成功图标 -->
    <div class="success-icon">
      <van-icon name="checked" color="#07c160" size="60" />
    </div>

    <!-- 主要信息 -->
    <div class="success-content">
      <h2 class="title">支付成功</h2>
      <p class="amount">￥{{ orderInfo.amount }}</p>
      
      <!-- 订单信息 -->
      <div class="order-info">
        <van-cell title="订单号码" :value="orderInfo.orderNo" />
        <van-cell title="支付方式" value="微信支付" />
        <van-cell title="支付时间" :value="orderInfo.payTime" />
      </div>
    </div>

    <!-- 操作按钮 -->
    <div class="action-buttons">
      <van-button 
        round 
        block 
        type="danger" 
        @click="handleViewOrder"
      >
        查看订单
      </van-button>
      <van-button 
        round 
        block 
        plain 
        class="back-button"
        @click="handleBackHome"
      >
        返回首页
      </van-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

interface OrderInfo {
  orderNo: string;
  amount: string;
  payTime: string;
}

// 路由实例
const router = useRouter();

// 订单信息（示例数据，实际可以从路由参数或接口获取）
const orderInfo = reactive<OrderInfo>({
  orderNo: '202306051234567890',
  amount: '899.00',
  payTime: new Date().toLocaleString(),
});

// 查看订单
const handleViewOrder = () => {
  // 实际开发中可以跳转到订单详情页
  router.push({ path: '/order/detail', query: { orderNo: orderInfo.orderNo } });
};

// 返回首页
const handleBackHome = () => {
  router.replace('/');
};
</script>

<style scoped>
.success-page {
  height: 100vh;
  background-color: #f7f8fa;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}

.success-icon {
  text-align: center;
  margin-bottom: 30px;
}

.success-content {
  flex: 1;
}

.title {
  text-align: center;
  font-size: 24px;
  color: #333;
  margin-bottom: 15px;
}

.amount {
  text-align: center;
  font-size: 32px;
  color: #f44;
  font-weight: bold;
  margin-bottom: 40px;
}

.order-info {
  margin: 0 7px;
  border-radius: 12px;
  overflow: hidden;
  line-height: 3em;
}

.action-buttons {
  margin-top: 30px;
  padding: 0 20px;
}

.back-button {
  margin-top: 15px;
}
</style>
