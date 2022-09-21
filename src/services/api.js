import { Axios } from 'axios'

const apiService = new Axios({
  baseURL: process.env.REACT_APP_API_SERVICE || 'http://localhost:3000'
})

export default apiService