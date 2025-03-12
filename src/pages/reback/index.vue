<template>
  <div class="visit-form">
    <van-form @submit="handleSubmit">
      <!-- 头部提示 -->
      <div class="header-tips">
        <p>亲爱的{{ userInfo.name }}用户，为确保您的权益，现针对开通服务前进行首次电子回访，请您予以配合</p>
      </div>

      <!-- 问题1 -->
      <van-cell-group inset class="question-group">
        <div class="question-title">1、请确认是{{ userInfo.name }}用户本人，身份证号{{ userInfo.idCard }}，购买的我司价值{{ productPrice }}元投顾服务/软件产品，由本人汇款。</div>
        <van-radio-group v-model="answers.q1" direction="horizontal" :rules="[{ required: true, message: '请选择选项' }]">
          <van-radio name="是">是</van-radio>
          <van-radio name="否">否</van-radio>
        </van-radio-group>
      </van-cell-group>

      <!-- 问题2 -->
      <van-cell-group inset class="question-group">
        <div class="question-title">2、你与我司签署的投顾服务协议/许可使用协议及投资者风险承受能力问卷调查(编号：{{ agreementNumber }})为您本人签署，是否正确?</div>
        <van-radio-group v-model="answers.q2" direction="horizontal" :rules="[{ required: true, message: '请选择选项' }]">
          <van-radio name="是">是</van-radio>
          <van-radio name="否">否</van-radio>
        </van-radio-group>
      </van-cell-group>

      <!-- 问题3 -->
      <van-cell-group inset class="question-group">
        <div class="question-title">3、我司属于正规合法的咨询服务机构，任何业务往来收款均以企业公账收取，所提供的证券投资顾问服务涉及操作策略、投资建议等均以慧研智投APP传递为主，企业微信沟通为辅。相关服务内容仅供您参考，具体操作决策需要您独立完成。我司不承诺及不保证收益、不提供代客理财、收益分成以及亏损共担等违法违规服务内容，您是否清楚?</div>
        <van-radio-group v-model="answers.q3" direction="horizontal" :rules="[{ required: true, message: '请选择选项' }]">
          <van-radio name="是">是</van-radio>
          <van-radio name="否">否</van-radio>
        </van-radio-group>
      </van-cell-group>


        <h4 class="text-center">电子签名</h4>
        <div class="signature-section">
          <SignatureCanvas 
            ref="signaturePad"
            :width="400" 
            :height="200"
            @update:signature="handleSignatureUpdate"
          />
        </div>
        <div class="text-center">
          <van-button type="default"  @click="clearSignature">重新签名</van-button>
        </div>


      <!-- 底部提示 -->
      <div class="footer-tips">
        <p>我司客服中心电话400-876-3116，请您记录，如有服务问题欢迎致电。</p>
        <p>感谢您配合完成本次回访工作，请签字点击完成。祝您投资愉快，股市长虹！</p>
      </div>

      <!-- 提交按钮 -->
      <div class="submit-btn">
        <van-button 
          round 
          block 
          type="danger" 
          native-type="submit"
          :disabled="!formValid"
        >
          确认提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, computed, ref } from 'vue';
import { showToast } from 'vant';
import SignatureCanvas from '@/components/SignatureCanvas.vue'
interface UserInfo {
  name: string;
  idCard: string;
}

interface FormAnswers {
  q1: string;
  q2: string;
  q3: string;
}

// 用户信息
const userInfo = reactive<UserInfo>({
  name: '贾兰强',
  idCard: '370611196303201516'
});

// 表单答案
const answers = reactive<FormAnswers>({
  q1: '',
  q2: '',
  q3: ''
});

interface SignatureData {
  dataUrl: string,
  isEmpty: boolean
}

const signature = ref<SignatureData>({
  dataUrl: '',
  isEmpty: true
})


const handleSignatureUpdate = (data: SignatureData) => {
  signature.value = data
}

const signaturePad = ref<{ clear: () => void }>()  // 保留 TypeScript 类型定义
// 修改清除方法
const clearSignature = () => {
  if (signaturePad.value) {
    signaturePad.value.clear()  // 调用子组件的清除方法
  }
}

// 其他固定信息
const productPrice = '2980';
const agreementNumber = 'SZZBYX66830001305202386';

// 表单验证
const formValid = computed(() => {
  return answers.q1 && answers.q2 && answers.q3;
});

// 提交处理
const handleSubmit = () => {
  if (formValid.value && signature.value.isEmpty === false) {
    const data = {
      answers,
      signature: signature.value.dataUrl,
    }
    console.log('提交数据：', data);
    showToast('提交成功');
    // 这里可以添加实际提交逻辑
  } else {
    showToast('请完成所有必填项');
  }
};
</script>

<style scoped>
.visit-form {
  padding: 16px;
  background-color: #f7f8fa;
  min-height: 100vh;
}

.header-tips {
  padding: 16px;
  background-color: #fff;
  border-radius: 8px;
  margin-bottom: 16px;
  font-size: 14px;
  line-height: 1.5;
  color: #666;
}

.question-group {
  margin-bottom: 16px !important;
  padding: 16px;
}

.question-title {
  font-size: 15px;
  color: #333;
  margin-bottom: 12px;
  line-height: 1.4;
}

.van-radio-group {
  margin: 10px 0;
}

.van-radio {
  margin-right: 20px;
}

.footer-tips {
  padding: 16px;
  font-size: 12px;
  color: #999;
  line-height: 1.5;
  text-align: center;
  margin: 20px 0;
}

.submit-btn {
  padding: 0 20px;
  margin-top: 30px;
}

:deep(.van-cell-group--inset) {
  margin: 0;
  border-radius: 8px;
}
</style>
