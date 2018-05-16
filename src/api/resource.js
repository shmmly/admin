import axios from 'axios'


export default function getResource() {
  return new Promise(((resolve, reject) => {
    axios.get(' https://www.easy-mock.com/mock/5afa98f71662122ba3995ee7/demo/resource').then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  }))
}
