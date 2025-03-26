// import { useState } from "react"
import { Link } from "react-router"
import Logo from "../assets/logo.svg"

function Footer() {
  return (
    <>
      <div className="grid grid-cols-auto grid-flow-col bg-black text-white">
        <div className="flex place-items-center">
          <Link to="/">
            <div className="grid grid-flow-col pl-4 p-3 align-center">
              <img src={Logo} alt="New Leaf Logo" className="w-8" />
            </div>
          </Link>
          <Link to="/">
            <h1 className="font-forum text-xl">New Leaf</h1>
          </Link>
        </div>
        <div className="grid grid-flow-col place-items-center">
          <Link to="/gallery">Gallery</Link>
          <Link to="/tutorials">Tutorials</Link>
          <Link to="/about">About</Link>

          {/* <Link to="/shop">Shop</Link> */}
        </div>
      </div>
    </>
  )
}

export default Footer
