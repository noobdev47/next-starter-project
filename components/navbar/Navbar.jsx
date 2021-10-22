import React from 'react'
import { useRouter } from 'next/router'

const Navbar = () => {
  const router = useRouter()

  return (
    <>
      <div className="flex flex-row items-center sticky bg-gray-400 h-16 w-screen p-4 rounded-b-xl">
        <div className="flex-grow pl-1">
          {router.route === "/" || router.route === "/auth/Login"
            ? <h2 className="font-sans text-xl text-gray-800">Landing Page</h2>
            : <h2 className="font-sans text-xl">I'm In LMAO</h2>
          }
        </div>
        <div className="flex-initial px-1">
          {router.route === "/"
            ? <button
              className="font-sans bg-gray-200 py-1 px-2 rounded-md font-semibold text-gray-700 hover:bg-gray-700 hover:text-gray-200 transition duration-200 ease-out"
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

export default Navbar
