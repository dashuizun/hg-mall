import { request } from '@/network/request'

export function allorder() {
  return request({
    url: '/order',
    method: 'get'
  })
}

export function addOrder(pImage, pTitle, oBuyName, oSellName, oTime) {
  return request({
    url: '/order/addOrder',
    method: 'post',
    data: {
      pImage,
      pTitle,
      oBuyName,
      oSellName,
      oTime
    }
  })
}
