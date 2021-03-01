import { request } from '@/network/request'

export function login(uName, uPsw) {
  return request({
    url: '/users/login',
    method: 'post',
    data: {
      uName,
      uPsw
    }
  })
}

export function register(uName, uPsw, email) {
  return request({
    url: '/users/register',
    method: 'post',
    data: {
      uName,
      uPsw,
      email
    }
  })
}
