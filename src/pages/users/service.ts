import { request } from "umi";
export const getRemoteList = async params => {
  return request('/api/users', {
    method: 'get',
  }).then(function (res) {
    console.log(res)
    return res
  }).catch(function (err) {
    console.log(err)
  })
}


export const editRecord = async ({id,values}) => {
  return request(`/api/users/${id}`, {
    method: 'put',
    data:values
  }).then(function (res) {
    console.log(res)
    return res
  }).catch(function (err) {
    console.log(err)
  })
}