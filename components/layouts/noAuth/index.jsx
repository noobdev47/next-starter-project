import Navbar from "../../navbar/Navbar"

const Layout = ({
  children,
  ...rest
}) => {

  return (
    <div className="dark:bg-gray-500 h-screen w-screen transition duration-200 ease-in-out">
      <div>
        <Navbar />
      </div>
      <div className="container mx-auto mt-5 dark:bg-gray-600 transition duration-200 ease-in-out">
        {children}
      </div>
    </div>
  )
}

export default Layout