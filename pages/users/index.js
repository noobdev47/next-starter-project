import Link from 'next/link'
import { useQuery } from 'react-query'
import NoAuth from '../../components/layouts/noAuth'
import UserService from '../../services/api/user.api'

const Users = () => {

  const { isSuccess, isLoading, isError, data } = useQuery('users', () => UserService.getUsers())

  return (
    <div className="h-full bg-gradient-to-b dark:bg-purple-700 bg-purple-500 rounded-md p-2">
      <h3 className="font-sans font-semibold text-gray-300 text-3xl">Users</h3>
      <div className="m-2 rounded-md h-5/6">
        <table className='border-2'>
          <thead className="border-2">
            <tr className="text-lg text-gray-300 font-semibold">
              <td className="border-2 p-1">Id</td>
              <td className="border-2 p-1">Name</td>
              <td className="border-2 p-1">Email</td>
              <td className="border-2 p-1">Phone</td>
            </tr>
          </thead>
          <tbody className="border-2">
            {data !== undefined
              ? data.data.map(user => (
                <tr className="text-lg text-gray-300 font-semibold">
                  <td className="border-2 p-1"><Link href={`/users/${user.id}`}><a>{user.id}</a></Link></td>
                  <td className="border-2  p-1">{user.name}</td>
                  <td className="border-2  p-1">{user.email}</td>
                  <td className="border-2  p-1">{user.phone}</td>
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