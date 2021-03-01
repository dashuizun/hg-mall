import { request } from '@/network/request'

export function Product() {
  return request({
    url: '/product',
    method: 'get',
    params: {
      uName: sessionStorage.getItem('uName')
    }
  })
}

export function allProduct() {
  return request({
    url: '/product/all',
    method: 'get'
  })
}

export function addProduct(product) {
  return request({
    url: '/product/addProduct',
    method: 'post',
    data: product
  })
}

export function deleteProduct(pId) {
  return request({
    url: '/product/deleteProduct',
    method: 'post',
    data: {
      pId
    }
  })
}
