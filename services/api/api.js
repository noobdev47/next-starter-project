import axios from "axios"

const API = axios.create({
  baseURL: 'Base URL here',
  headers: {
    'Authorization': `Bearer Token here`
  }
})

API.interceptors.response(
  res => { return res },
  err => {
    if(err.status !== 401) throw err
  }
)

export default API
