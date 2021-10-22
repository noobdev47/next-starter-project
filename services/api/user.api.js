import API from "./API"
import axios from "axios"

export default function getUserData() {
  axios.post(`https://app.fakejson.com/q`, {
    token: process.env.FAKE_JSON_TOKEN,
    data: {
      id: 'personNickname',
      name: "nameFirst",
      email: "internetEmail",
      phone: "phoneHome",
      _repeat: 10
    }
  })
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      throw err
    })
}