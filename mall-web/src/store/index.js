import { createStore } from 'vuex'
// import { allProduct } from '@/network/product'

export default createStore({
  state: {
    userDate: {
      token: sessionStorage.getItem('token'),
      username: sessionStorage.getItem('uName')
    }
    // allProduct: [],
    // userProduct: []
  },
  mutations: {
    // addAllProduct: state => {
    //   allProduct().then(res => {
    //     state.allProduct.push(res.data.message)
    //   })
    // },
    // addUserProduct: state => {
    //   allProduct(state.userDate.username).then(res => {
    //     state.userProduct.push(res.data.message)
    //   })
    // }
  },
  actions: {},
  modules: {}
})
