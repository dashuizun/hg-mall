import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

createApp(App)
  .use(store)
  .use(router)
  .mount('#app')

// axios({
//   url: 'http://localhost:3000/users/login',
//   method: 'post'
// }).then(res => {
//   console.log(res)
// })
