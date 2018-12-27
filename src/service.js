import axios from 'axios'

const service = axios.create({
  baseURL: 'http://localhost:3000/'
})


function errorHandler(err){
  if (err.response) throw err.response.data
  else if (err.request) console.log(err.request)
  else console.log('Error', err.message)
}


function register(user) {
  return service.post('register', user)
    .then(res => res.data)
    .catch(errorHandler)
}

function login(user) {
  return service.post('login', user)
    .then(res => res.data)
    .catch(errorHandler)
}

export default {
  register,
  login
}