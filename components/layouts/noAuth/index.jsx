import Navbar from "../../navbar/Navbar"

const Layout = ({
  children,
  ...rest
}) => {

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="container mx-auto mt-5 h-5/6">
        {children}
      </div>
    </>
  )
}

export default Layout