import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    // 后端数据地址
    baseURL: 'http://localhost:3000',
    timeout: 5000
  })
  // 拦截器
  instance.interceptors.request.use(
    config => {
      // console.log(config);
      // 如果这里不返回，那么前面main，调用的时候就会显示无
      return config
    },
    err => {
      console.log(err)
    }
  )

  return instance(config)
}
