import axios from 'axios'

const api = axios.create({
    baseURL: 'https://apiask-backend.herokuapp.com'
})

export default api