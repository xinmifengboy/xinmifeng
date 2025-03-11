// App.vue
<template>
  <div class="container">
    <h4 class="text-center">慧研智投科技有限公司深圳分公司 <br>投资者风险承受能力问卷（适用于自然人投资者）</h4>
    <div style="font-size: 12px;" v-if="!showResultModal">
     <div>本问卷旨在了解您可承受的风险程度等情况，借此协助您选择合适的产品或服务类别，以符合您的风险承受能力。</div>

     <div>风险承受能力评估是本公司向投资者履行适当性职责的一个环节，其目的是使本公司所提供的产品或服务与您的风险承受能力等级相匹配。</div>

     <div>本公司特别提醒您：本公司向投资者履行风险承受能力评估等适当性职责，并不能取代您自己的投资判断，也不会降低产品或服务的固有风险。同时，与产品或服务相关的投资风险、履约责任以及费用等将由您自行承担。</div>

     <div>本公司提示您：本公司根据您提供的信息对您进行风险承受能力评估，开展适当性工作。您应当如实提供相关信息及证明材料，并对所提供的信息和证明材料的真实性、准确性、完整性负责。</div>

     <div>本公司建议：当您的各项状况发生重大变化时，需对您所投资的产品及时进行重新审视，以确保您的投资决定与您可承受的投资风险程度等实际情况一致。</div>

     <div>本公司在此承诺，对于您在本问卷中所提供的一切信息，本公司将严格按照法律法规要求承担保密义务。除法律法规规定的有权机关依法定程序进行查询以外，本公司保证不会将涉及您的任何信息提供、泄露给任何第三方，或者将相关信息用于违法、不当用途。</div>

    </div>

        <div v-if="showResultModal" >
          <div class="modal-content">
            
            <h2 class="text-center">您的风险测评结果</h2>
            <p class="risk-level text-center">{{ riskProfile.level }}</p>
            <div>测评时间: {{dataTime }}</div>
            <!-- <div class="risk-level">{{ riskProfile.level }}</div> -->
            <div >尊敬的投资者(姓名/名称:张三</div>
            <div >身份证号:422423198102162112)</div>

           
            根据您填写的《投资者风险承受能力问卷》，本公司对您的风险承受能力进行了综合评估，现得到评估结果如下:您的风险承受能力为积极型(根据公司风险承受能力等级划分填写，例如:保守型 谨慎型 稳健型 积极型 激进型)
本公司在此郑重提醒，本公司向您销售的产品或提供的服务将以您的风险承受能力等级和投资品种、期眼为基础，若您提供的信息发生任何重大变化，您都应当及时书面通知本公司本公司建议您审慎评判自身风险承受能力，结合自身投资行为，认真填写您的投资品种、期限，做出审慎的投资判断
如您在审慎考虑后同意本公司的评估结果，请认真阅读下列内容，并签字以示同意。
机构名称:深圳市启富证券投资顾问有限公司
签署日期:2025-03-11
恭喜您!完成了投资者风险测评，我司将为您制作产品合同 
            <!-- <h3>适合您的产品类型：</h3>
            <ul>
              <li v-for="(product, index) in riskProfile.suggestedProducts" :key="index">
                {{ product }}
              </li>
            </ul> -->

            <!-- <button @click="showResultModal = false">确认</button> -->
          </div>
        </div>


    <form @submit.prevent="submitForm">

      <!-- <div class="score-indicator">
        当前测评分数: {{ totalScore }} 
        <span class="score-range">(总分范围 0 - 100)</span>
      </div> -->

      <div v-for="(question, qIndex) in questions" :key="qIndex">
        <h3>{{ question.text }}</h3>
        <div v-for="(option, oIndex) in question.options" :key="oIndex">

         <!-- 多选使用 checkbox -->
         <template v-if="question.isMultiple">
          <input
            type="checkbox"
            :id="`q${qIndex}_${oIndex}`"
            :value="option.value"
            v-model="answers[qIndex]"
            :disabled="showResultModal"
            @change="calculateScore"
            class="checkbox-style"
          >
          <label :for="`q${qIndex}_${oIndex}`">
            {{ option.label }}
            <!-- <span class="score-tag">(分值：{{ option.score }})</span> -->
          </label>
        </template>

        <!-- 单选使用 radio -->
        <template v-else>
          <input
            type="radio"
            :id="`q${qIndex}_${oIndex}`"
            :name="`q${qIndex}`" 
            :value="option.value"
            :disabled="showResultModal"
            :checked="answers[qIndex].includes(option.value)"
            @change="handleRadioChange(qIndex, option.value)"
            class="radio-style"
          >
          <label :for="`q${qIndex}_${oIndex}`">
            {{ option.label }}
            <!-- <span class="score-tag">(分值：{{ option.score }})</span> -->
          </label>
        </template>


        </div>
      </div>

      
  
    
      <div class="signature-section">
        <h3>电子签名</h3>
        <SignatureCanvas 
          ref="signaturePad"
          :width="400" 
          :height="200"
          @update:signature="handleSignatureUpdate"
        />
        <button type="button" class="clear-btn" @click="clearSignature" :disabled="showResultModal">重新签名</button>
      </div>
      <div class="text-center">
        <button type="submit" class="submit-btn" :disabled="showResultModal">提交问卷</button>

      </div>

    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import SignatureCanvas from '@/components/SignatureCanvas.vue'

const dataTime = new Date().toLocaleDateString()

interface Question {
  text: string
  isMultiple?: boolean // 新增多选标识
  options: {
    value: string,
    label: string,
    score: number
  }[]
}



// 符合监管要求的风险评估问题
const questions = ref<Question[]>([
  {
    "text": "1、您的主要收入来源是：", 
    "options": [
      {"value": "A", "label": "出租、出售房地产等非金融性资产收入", "score": 4},
      {"value": "B", "label": "生产经营所得", "score": 2},
      {"value": "C", "label": "工资、劳务报酬", "score": 1},
      {"value": "D", "label": "无固定收入", "score": 0},
      {"value": "E", "label": "利息、股息、转让证券等金融性资产收入", "score": 3}
    ]
  },
  {
    "text": "2、证券投资资金占家庭总资产比例：",
    "options": [
      {"value": "A", "label": "30%－50%", "score": 3},
      {"value": "B", "label": "50%－70%", "score": 2},
      {"value": "C", "label": "10%－30%", "score": 4},
      {"value": "D", "label": "10%以下", "score": 5},
      {"value": "E", "label": "70%以上", "score": 1}
    ]
  },
  {
    "text": "3、大额债务情况：",
    "options": [
      {"value": "A", "label": "没有", "score": 4},
      {"value": "B", "label": "长期定额债务", "score": 3},
      {"value": "C", "label": "亲朋借款", "score": 1},
      {"value": "D", "label": "短期信用债务", "score": 2}
    ]
  },
  {
    "text": "4、可投资资产规模：",
    "options": [
      {"value": "A", "label": "1000万元以上", "score": 4},
      {"value": "B", "label": "300-1000万元", "score": 3},
      {"value": "C", "label": "≤50万元", "score": 1},
      {"value": "D", "label": "50-300万元", "score": 2}
    ]
  },
  {
    "text": "5、金融相关资质：",
    "options": [
      {"value": "A", "label": "金融相关学位", "score": 1},
      {"value": "B", "label": "专业资格证书", "score": 1},
      {"value": "C", "label": "无相关资质", "score": 0},
      {"value": "D", "label": "两年以上从业经验", "score": 1}
    ]
  },
  {
    "text": "6、投资经验级别：",
    "options": [
      {"value": "A", "label": "期权/期货投资经验", "score": 4},
      {"value": "B", "label": "自主股票/基金投资", "score": 3},
      {"value": "C", "label": "基金/理财产品持有", "score": 2},
      {"value": "D", "label": "仅有存款经验", "score": 1}
    ]
  },
  {
    "text": "7、月均交易额（若曾投资）：",
    "options": [
      {"value": "A", "label": "≥100万元", "score": 4},
      {"value": "B", "label": "10-30万元", "score": 2},
      {"value": "C", "label": "<10万元", "score": 1},
      {"value": "D", "label": "从未投资", "score": 0},
      {"value": "E", "label": "30-100万元", "score": 3}
    ]
  },
  {
    "text": "8、投资资金锁定期限：",
    "options": [
      {"value": "A", "label": "长期（5年以上）", "score": 3},
      {"value": "B", "label": "中期（1-5年）", "score": 2},
      {"value": "C", "label": "短期（0-1年）", "score": 1}
    ]
  },
  {
    text: "9、重点投资品种（多选最高分）：",
    isMultiple: true, // 新增多选标识
    options: [
      {value: "A", label: "复杂/高风险产品", score: 4},
      {value: "B", label: "权益类投资品种", score: 2},
      {value: "C", label: "其他产品", score: 4},
      {value: "D", label: "固定收益类品种", score: 1},
      {value: "E", label: "期货/期权等衍生品", score: 3}
    ]
  },
  {
    "text": "10、投资目标期望：",
    "options": [
      {"value": "A", "label": "较高收益+高风险", "score": 2},
      {"value": "B", "label": "高增长+极大风险", "score": 3},
      {"value": "C", "label": "适度收益+可控风险", "score": 1},
      {"value": "D", "label": "绝对保本", "score": 0}
    ]
  },
  {
    "text": "11、风险承受阈值：",
    "options": [
      {"value": "A", "label": "可承受>50%损失", "score": 3},
      {"value": "B", "label": "30%-50%损失", "score": 2},
      {"value": "C", "label": "10%-30%损失", "score": 1},
      {"value": "D", "label": "≤10%损失", "score": 0}
    ]
  },
  {
    "text": "12、投资收益用途：",
    "options": [
      {"value": "A", "label": "改善生活", "score": 5},
      {"value": "B", "label": "养老医疗", "score": 2},
      {"value": "C", "label": "抚养义务", "score": 3},
      {"value": "D", "label": "实业投资", "score": 4},
      {"value": "E", "label": "偿还债务", "score": 1}
    ]
  },
  {
    "text": "13、需抚养/赡养人数：",
    "options": [
      {"value": "A", "label": "1-2人", "score": 3},
      {"value": "B", "label": "3-4人", "score": 2},
      {"value": "C", "label": "≥5人", "score": 1}
    ]
  }
]

);
// 初始化答案数组为一个固定长度的数组
// const answers = reactive<string[]>(Array(questions.value.length).fill(''))
// const answers = reactive<string[][]>(questions.value.map(() => []))
const handleRadioChange = (qIndex: number, value: string) => {
  answers[qIndex] = [value] // 单选用数组存储单个值
  calculateScore()
}
const totalScore = ref(0)
const riskProfile = reactive({
  level: '',
  description: '',
  suggestedProducts: [] as string[]
})

// 风险评估规则
// 修改后的风险等级规则（参数调整为实际分数区间）
const RISK_PROFILES = [
  { 
    min: 12, 
    max: 24, 
    level: "保守型(C1)", 
    desc: "建议投资货币市场工具等低风险产品",
    suggestedProducts: ["货币基金", "国债"]
  },
  {
    min: 25,
    max: 35,
    level: "稳健型(C2)",
    desc: "建议配置固定收益类产品组合",
    suggestedProducts: ["债券基金", "同业存单指数基金"]
  },
  {
    min: 36,
    max: 44,
    level: "平衡型(C3)",
    desc: "适合混合资产配置组合",
    suggestedProducts: ["固收+", "FOF产品"]
  },
  {
    min: 45,
    max: 53,
    level: "进取型(C4)",
    desc: "适合权益类投资组合",
    suggestedProducts: ["股票基金", "量化策略产品"]
  },
  {
    min: 54,
    max: 65, // 根据新增问题调整上限
    level: "激进型(C5)",
    desc: "适合高风险另类投资",
    suggestedProducts: ["私募股权", "CTA基金","加密货币ETF"]
  }
]
// 升级后的主逻辑
const checkRiskProfile = () => {
  let currentProfile = RISK_PROFILES.find(p => 
    totalScore.value >= p.min && 
    totalScore.value <= p.max
  )
  
  // 应对分数溢出情况
  if(!currentProfile){
    currentProfile = totalScore.value < RISK_PROFILES[0].min 
      ? RISK_PROFILES[0]  // 低于最低
      : RISK_PROFILES[RISK_PROFILES.length-1] // 超过最高
  }

  Object.assign(riskProfile, {
    level: currentProfile.level,
    description: currentProfile.desc,
    suggestedProducts: currentProfile.suggestedProducts
  })
}
// 添加对空值的额外保护
const getOptionScore = (values: string[], options: Question['options']) => {
  if (values.length === 0) return 0
  const option = options.find(o => o.value === values[0])
  return option?.score ?? 0
}

// 优化后的计算逻辑：
const calculateScore = () => {
  totalScore.value = questions.value.reduce((sum, q, qIndex) => {
    const currentAnswers = answers[qIndex] || []
    
    // 多选处理
    if (q.isMultiple) {
      const validScores = currentAnswers
        .map(v => q.options.find(o => o.value === v)?.score)
        .filter(s => typeof s === 'number') as number[]
      return sum + (validScores.length ? Math.max(...validScores) : 0)
    }
    
    // 单选处理
    const score = getOptionScore(currentAnswers, q.options)
    return sum + score
  }, 0)
}

// 检查是否所有问题已回答
// const allAnswered = computed(() => {
//   return answers.length === questions.value.length && !answers.includes(undefined)
// })

// 正确的答案数据结构初始化
const answers = reactive<string[][]>(
  // 确保初始化二维数组结构
  Array.from({length: questions.value.length}, () => [])
)

// 精准的答案检查逻辑
const allAnswered = computed(() => {
  // 多重验证条件：
  return (
    answers.length === questions.value.length &&        // 长度一致
    answers.every(                                        // 每个题目都满足:
      answers => 
        Array.isArray(answers) &&                      // 结构是数组
        answers.length >= 1                            // 至少选择一个选项
        && answers.every(a => typeof a === 'string')   // 数据类型正确
    )
  )
})


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


const showResultModal = ref(false)


interface QuestionnaireItem {
  key: string,
  value: string // 单选显示选项字母，多选显示逗号分隔
}

interface FormResult {
  questionnaire: QuestionnaireItem[],
  signature: string,
  totalScore: number,
  riskProfile: typeof riskProfile
}
// 提交处理
const submitForm = () => {
   // 触发最后计算
   calculateScore()

  if (!allAnswered.value) {
    alert('请完成所有题目')
    return
  }
  
  if (signature.value.isEmpty) {
    alert('请提供电子签名')
    return
  }
    // 生成符合要求的问卷数据
    const formResult: FormResult = {
      questionnaire: questions.value.map((q, idx) => ({
        key: q.text,
        value: q.isMultiple 
          ? answers[idx].join(", ") // 多选用逗号分隔
          : answers[idx][0] || ""    // 单选取第一个值
      })),
      signature: signature.value.dataUrl,
      totalScore: totalScore.value,
      riskProfile,
      // riskProfile: { ...riskProfile },
    }

    checkRiskProfile()
    showResultModal.value = true
    window.scrollTo(0, 0)
    
    console.log('提交数据:', formResult)
  }


</script>

<style>
.container {
  /* max-width: 800px; */
  margin: 0 auto;
  padding: 20px;
}

.question {
  margin-bottom: 30px;
  padding: 15px;
  border: 1px solid #eee;
}

.option {
  margin: 10px 0;
}

.signature-section {
  margin: 40px 0;
  border-top: 2px solid #ccc;
  padding-top: 20px;
  text-align: center;
}

.submit-btn {
  background-color: #42b983;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: inline-block;
}
/* 添加新的样式 */
.score-indicator {
  margin: 20px 0;
  padding: 10px;
  background: #f8f9fa;
  border-left: 4px solid #42b983;
}

.score-range {
  color: #666;
  font-size: 0.9em;
}

.option-desc {
  color: #666;
  font-size: 0.9em;
  margin-left: 8px;
}

.result-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  /* background: white;
  padding: 2rem;
  border-radius: 8px;
  max-width: 500px; */
}

.risk-level {
  font-size: 2em;
  color: #42b983;
  margin: 1rem 0;
}

.question-card {
  margin: 20px 0;
  padding: 15px;
  border-radius: 8px;
  background: #f8fafc;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.options-group {
  margin-top: 12px;
}

.option-item {
  margin: 8px 0;
  padding: 10px;
  background: white;
  border-radius: 4px;
  transition: background 0.2s;
}

.option-item:hover {
  background: #f1f5f9;
}

.score-tag {
  margin-left: 8px;
  color: #64748b;
  font-size: 0.9em;
}

.checkbox-style,
.radio-style {
  margin-right: 8px;
  accent-color: #3b82f6;
}
.clear-btn {
  display: inline-block;
  margin: 20px auto 0;
  color: #fff;
}
input[type="checkbox"], input[type="radio"] {
  width: 16px;
  height: 16px;
  border: 1px solid #ccc;
}

</style>
<style>
/* :root {
  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
} */

a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}
a:hover {
  color: #535bf2;
}

body {
  margin: 0;
  /* display: flex; */
  /* place-items: center; */
  /* min-width: 320px; */
  min-height: 100vh;
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
}

button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

.card {
  padding: 2em;
}
.text-center {
  text-align: center;
}
/* #app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
} */

@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff;
  }
  a:hover {
    color: #747bff;
  }
  button {
    background-color: #f9f9f9;
  }
}

</style>