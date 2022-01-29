import axios from 'axios'

const baseURL='http://localhost:4000/api'//'http://localhost:4000/api'

const login = async credentials => {

    axios.interceptors.response.use(
        response => response,
        error => {
          const {status} = error.response

          if (status === 401) {
            return error.response
          }
          return error.response
       }
      )

    const data = await axios.post(`${baseURL}/users/login`, credentials)
    return data
}

export default login 