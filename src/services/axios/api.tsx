import axios from 'axios'

let api = axios.create({
  baseURL:'https://randomuser.me/api/?results=5000'
})

export default api;