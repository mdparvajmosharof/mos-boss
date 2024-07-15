import { Outlet, useLocation } from "react-router-dom"
import Navbar from "../Shared/Navbar"
import Footer from "../Shared/Footer"

const Main = () => {
  const location = useLocation();
  const noFooter = location.pathname.includes('login')
  return (
    <div>
      { <Navbar></Navbar>}
     <Outlet></Outlet>
     {noFooter || <Footer></Footer>}
    </div>
  )
}

export default Main
