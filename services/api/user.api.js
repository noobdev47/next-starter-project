import API from "./API"
import axios from "axios"

const UserService = {
  getUsers: async () => {
    return await axios.get('https://jsonplaceholder.typicode.com/users')
  },
  getUser: async(id) => {
    return await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
  }
}

export default UserService