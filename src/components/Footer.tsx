// import { useState } from "react"
import { Link } from "react-router"
import Logo from "../assets/logo.svg"

function Footer() {
  return (
    <>
      <div className="grid grid-cols-auto grid-flow-col bg-black text-white pt-4">
        <div className="grid grid-flow-col gap-2">
          <Link to="/">
            <div className="grid grid-flow-col pl-4 align-center">
              <img src={Logo} alt="New Leaf Logo" className="w-8" />
            </div>
          </Link>{" "}
          <h1 className="font-forum text-xl text-left">New Leaf</h1>
        </div>
        <div className="grid grid-flow-col">
          <Link to="/gallery">Gallery</Link>
          <Link to="/tutorials">Tutorials</Link>
          {/* <Link to="/shop">Shop</Link> */}
        </div>
      </div>
    </>
  )
}

export default Footer
