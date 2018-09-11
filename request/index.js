import axios from 'axios'

const handleError = error => {
  return Promise.reject(error)
}

if (process.env.NODE_ENV === 'production') {
  axios.defaults.baseURL = ``
} else {
  axios.defaults.baseURL = ``
}
axios.interceptors.response.use(function (response) {
  return response
}, handleError)
export default axios
