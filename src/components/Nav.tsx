import { Link } from "react-router"

function Nav() {
  return (
    <>
      <div className="grid grid-cols-auto grid-flow-col bg-black text-white pt-4">
        <Link to="/">
          <div className="grid grid-flow-col">
            <h1>Logo</h1>
            <h1>New Leaf</h1>
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
