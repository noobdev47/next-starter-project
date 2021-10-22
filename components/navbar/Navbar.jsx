import { connect } from 'react-redux'
import { useRouter } from 'next/router'
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs"
import { useDispatch } from 'react-redux'
import { TOGGLEMODE } from '../../redux/actionTypes'

const Navbar = ({ mode }) => {
  const router = useRouter()
  const dispatch = useDispatch()

  return (
    <>
      <div className="flex flex-row items-center sticky bg-gray-400 h-16 w-screen p-4 rounded-b-xl">
        <div className="flex-grow pl-1">
          {router.route === "/" || router.route === "/auth/Login"
            ? <h2 className="font-sans text-xl text-gray-800">Landing Page</h2>
            : <h2 className="font-sans text-xl">I'm In LMAO</h2>
          }
        </div>
        <div
          onClick={() => dispatch({ type: TOGGLEMODE, payload: mode === 'light' ? 'dark' : 'light' })}
          className="flex-initial px-1 mr-2"
        >
          {mode === 'light'
            ? <BsFillSunFill
              size='1.5em'
              className="text-yellow-400 cursor-pointer"
            />
            : <BsFillMoonFill
              size='1.5em'
              className="text-blue-200 cursor-pointer"
            />
          }
        </div>
        <div className="flex-initial px-1">
          {router.route === "/"
            ? <button
              className="font-sans bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-200 dark:hover:text-gray-700 py-1 px-2 rounded-md font-semibold text-gray-700 hover:bg-gray-700 hover:text-gray-200 transition duration-200 ease-in-out"
            >
              Go to Login
            </button>
            : router.route === "/auth/Login"
              ? <button className="font-sans text-gray-800">Go to Login</button>
              : <></>
          }
        </div>
      </div>
    </>
  )
}

const mapStateToProps = state => {
  return {
    mode: state.modeReducer.mode
  }
}

export default connect(mapStateToProps, null)(Navbar)
