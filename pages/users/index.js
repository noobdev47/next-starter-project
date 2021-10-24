import { useQuery } from 'react-query'
import NoAuth from '../../components/layouts/noAuth'
import UserService from '../../services/api/user.api'

const Users = () => {

  const { isSuccess, isLoading, isError, data } = useQuery('users', () => UserService.getUsers())

  if(isSuccess)
    console.log(data)

  return (
    <div className="h-full bg-gradient-to-b bg-purple-600 rounded-md p-2">
      <h3 className="font-sans font-semibold text-gray-300 text-3xl">Users</h3>
      <div className="m-2 rounded-md h-5/6">
        <table className='border-2'>
          <thead>
            <tr className="text-lg text-gray-300 font-semibold">
              <td>Nickname</td>
              <td>First Name</td>
              <td>Email</td>
              <td>Phone</td>
            </tr>
          </thead>
          <tbody>
            {data !== undefined
              ? data.data.map(user => (
                <tr className="text-lg text-gray-300 font-semibold">
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                </tr>
              ))
              : <></>
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

Users.getLayout = function getLayout(page) {
  return (
    <NoAuth>
      {page}
    </NoAuth>
  )
}

export default Users