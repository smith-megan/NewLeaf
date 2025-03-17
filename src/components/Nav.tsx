import { Link } from "react-router"
import Logo from "../assets/logo.svg"

function Nav() {
  return (
    <>
      <div className="grid grid-cols-auto grid-flow-col bg-black text-white pt-4">
        <Link to="/">
          <div className="grid grid-flow-col pl-4 align-center">
            <img src={Logo} alt="New Leaf Logo" className="w-8" />
          </div>
        </Link>
        <div className="grid grid-flow-col">
          <Link to="/gallery">Gallery</Link>
          <Link to="/tutorials">Tutorials</Link>
          {/* <Link to="/shop">Shop</Link> */}
        </div>
      </div>
    </>
  )
}

export default Nav
