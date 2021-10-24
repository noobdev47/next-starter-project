import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useQuery } from "react-query"
import NoAuth from '../../components/layouts/noAuth'
import UserService from "../../services/api/user.api"

const User = () => {

  const router = useRouter()
  const [currentUser, setCurrentUser] = useState({})

  const { id } = router.query

  const { isSuccess, isError, data, isLoading } = useQuery('user', () => UserService.getUser(id))

  return (
    <div className="bg-purple-500 dark:bg-purple-700">
      <p>{data !== undefined ? data.data.id : ""}</p>
      <p>{data !== undefined ? data.data.name : ""}</p>
      <p>{data !== undefined ? data.data.email : ""}</p>
      <p>{data !== undefined ? data.data.phone : ""}</p>
    </div>
  );
}

User.getLayout = function getLayout(page) {
  return (
    <NoAuth>
      {page}
    </NoAuth>
  )
}

export default User