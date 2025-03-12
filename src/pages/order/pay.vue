<!-- src/components/OrderPage.vue -->
<template>
  <div class="order-container">
    <!-- 订单信息展示 -->
    <div class="order-info">
      <h2>订单号：{{ order.id }}</h2>
      <h3>{{ order.title }}</h3>
      <p>总金额：￥{{ order.amount.toFixed(2) }}</p>
      
      <div class="goods-list">
        <div v-for="(item, index) in order.items" :key="index" class="goods-item">
          {{ item.name }} ×{{ item.quantity }} 单价：￥{{ item.price.toFixed(2) }}
        </div>
      </div>
    </div>

    <!-- 支付操作区域 -->
    <div class="payment-area">
      <button 
        :disabled="isPaying || order.status !== 'pending'" 
        @click="handlePayment"
      >
        {{ isPaying ? '正在支付中...' : '微信支付' }}
      </button>
      
      <!-- 模拟支付弹窗 -->
      <div v-if="showPaymentModal" class="payment-modal">
        <div class="modal-content">
          <h3>模拟微信支付</h3>
          <div class="qrcode-placeholder"></div>
          <p>请使用微信扫码支付</p>
          
          <div class="button-group">
            <button @click="mockPaymentSuccess">支付成功</button>
            <button @click="mockPaymentFailed">支付失败</button>
          </div>
        </div>
      </div>

      <!-- 支付结果提示 -->
      <div v-if="paymentResult" class="result-message" :class="paymentResult.type">
        {{ paymentResult.message }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import type { Order } from './IOrder'

// 订单数据（模拟初始数据）
const order = reactive<Order>({
  id: '202308150001',
  amount: 158.0,
  title: 'VIP会员年费套餐',
  status: 'pending',
  items: [
    { name: 'VIP会员年费', quantity: 1, price: 158.0 }
  ]
})

// 支付相关状态
const isPaying = ref(false)
const showPaymentModal = ref(false)
const paymentResult = ref<{ type: 'success' | 'error'; message: string } | null>(null)

// 获取订单详情（模拟API调用）
const fetchOrderDetail = async () => {
  // 这里可以替换为真实的API调用
  return new Promise<Order>(resolve => {
    setTimeout(() => {
      resolve({ ...order }) // 保持响应式更新
    }, 500)
  })
}

// 模拟创建支付订单
const createPaymentOrder = async (orderId: string) => {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve(`mock-payment-id-${Date.now()}`)
    }, 300)
  })
}

// 处理支付操作
const handlePayment = async () => {
  if (isPaying.value) return
  isPaying.value = true
  paymentResult.value = null

  try {
    // 1. 创建支付订单
    const paymentId = await createPaymentOrder(order.id)
    
    // 2. 显示支付弹窗
    showPaymentModal.value = true
    
  } catch (error) {
    handlePaymentError(error)
  } finally {
    isPaying.value = false
  }
}

// 模拟支付成功
const mockPaymentSuccess = async () => {
  showPaymentModal.value = false
  paymentResult.value = {
    type: 'success',
    message: '支付成功！即将跳转至成功页面...'
  }
  order.status = 'paid'
  
  // 这里可以添加实际支付成功的处理逻辑
}

// 模拟支付失败
const mockPaymentFailed = () => {
  showPaymentModal.value = false
  paymentResult.value = {
    type: 'error',
    message: '支付失败，请重试或联系客服'
  }
  order.status = 'failed'
}

// 错误处理
const handlePaymentError = (error: unknown) => {
  console.error('Payment error:', error)
  paymentResult.value = {
    type: 'error',
    message: '支付请求失败，请检查网络后重试'
  }
}

// 初始化获取订单数据
onMounted(async () => {
  const data = await fetchOrderDetail()
  Object.assign(order, data)
})
</script>

<style scoped>
.order-container {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.1);
}

.payment-area {
  margin-top: 30px;
  text-align: center;
}

button {
  padding: 12px 24px;
  background-color: #07c160;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.payment-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
}

.qrcode-placeholder {
  width: 200px;
  height: 200px;
  background: #eee;
  margin: 20px auto;
}

.button-group button {
  margin: 10px;
  background-color: #07c160;
}

.result-message {
  margin-top: 20px;
  padding: 10px;
  border-radius: 4px;
}

.result-message.success {
  background-color: #e7f6e7;
  color: #07c160;
}

.result-message.error {
  background-color: #feeeed;
  color: #f56c6c;
}
</style>
