import axios from 'axios'

const baseURL='http://localhost:4000/api'
const token = window.localStorage.getItem('token')
const authAxios = {}

authAxios.get = async () => {
    axios.post(baseURL, {
      }, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
      })
}

authAxios.post = async query => {
    axios.post(baseURL, {
        query
      }, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
      })
}



export default authAxios