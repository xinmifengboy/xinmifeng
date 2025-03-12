// const BaseUrl = import.meta.env.VITE_API_URL
// const BaseUrl = 'http://api.qfzqscrm'
const BaseUrl = 'https://api.scrm.fngyzb.com'

export const request = (url, method, data, header) => {
  url = BaseUrl + url
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()

    //  如果有设置头部信息， 进行拆分重组
    if (header) {
      const k = Object.keys(header)
      const v = Object.values(header)
      if (k.length > 0) {
        k.forEach((e, i) => {
          xhr.setRequestHeader(k[i], v[i])
        })
      }
    }

    // get模式下传入的对象进行url拼接
    if (method == 'get') {
      url = buildUrlWithParams(url, data)
    }
    xhr.open(method.toUpperCase(), url, true)
    //  如果有token， 添加到请求头
    const token = localStorage.getItem('token')
    if(token) {
      xhr.setRequestHeader('Authorization', `Bearer ${token}`)
    }
    //  发起请求
    if (method == 'post') {
      xhr.setRequestHeader('Content-Type', 'application/json')
      xhr.send(JSON.stringify(data))
    } else {
      xhr.send()
    }

    //  进行加载 抛出结果
    xhr.onload = function () {
      if (xhr.status === 200) {
        resolve(xhr.responseText)
      } else {
        reject(new Error(xhr.statusText))
      }
    }

    xhr.onerror = function () {
      reject(new Error('Network error'))
    }
  })
}

const buildUrlWithParams = (url, params) => { //  拼接url参数为了兼容get
  const queryParams = new URLSearchParams()
  // 遍历对象的每个属性，并将其作为查询参数添加到URLSearchParams中
  for (const key in params) {
    if (params.hasOwnProperty(key)) {
      queryParams.append(key, params[key])
    }
  }
  // 拼接URL和查询参数
  const fullUrl = `${url}?${queryParams.toString()}`
  return fullUrl
}
