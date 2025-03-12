// import axios from 'axios'
// import wx from 'weixin-js-sdk'
// export const useWechatPay = () => {
//   const initPayment = async (orderId: string) => {
//     // 调用后端接口获取支付参数
//     const res = await axios.get(`/api/payment/wechat/prepay/${orderId}`)
    
//     // 调用微信支付接口
//     return new Promise((resolve, reject) => {
//       wx.chooseWXPay({
//         ...res.data,
//         success: resolve,
//         fail: reject
//       })
//     })
//   }

//   return { initPayment }
// }