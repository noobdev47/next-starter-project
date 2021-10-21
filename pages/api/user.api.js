export default function UserService(req, res) {
  fetch(`https://api.github.com/users/${req}`)
  .then(res => res.json())
  .then(res => console.log(res))
}