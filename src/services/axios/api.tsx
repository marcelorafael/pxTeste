import axios from 'axios'

let api = axios.create({
  baseURL:'https://randomuser.me/api/'
})

export default api;