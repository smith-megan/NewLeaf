// import { useState } from "react"
import { Link } from "react-router"
import logo from "../assets/logo.svg"
import sky from "../assets/sky.jpg"
import "../App.css"

function Cart() {
  // const [count, setCount] = useState(10)

  return (
    <>
      <div
        className="bg-cover bg-top text-black w-full
"
        style={{
          backgroundImage: `url(${sky})`,
          backgroundColor: `rgba(255,255,255,0.3)`,
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="grid gap-4 p-5 pt-12 pb-15 place-items-center text-black">
          <img src={logo} alt="New Leaf Logo" className="w-10" />
          <h2 className="font-forum text-4xl p-4">Cart</h2>
          <p className="font-[400]">
            The goal of our company is to provide inspiration, information and
            tools.
          </p>
          <p className="font-[400]">
            Furniture restoration and woodworking is a creative experiment and
            chance to make something. Join us in learning and growing through
            the process.
          </p>
          <div className="grid gap-5 pt-4 w-1/2">
            <Link
              to="/gallery"
              className="p-2 bg-white text-black font-work font-[400]"
            >
              Gallery
            </Link>
            <Link
              to="/tutorials"
              className="p-2 bg-black text-white font-work font-[400]"
            >
              Learning
            </Link>
          </div>
        </div>
        <div className="bg-white rounded-t-lg text-black p-6">
          <h1 className="font-forum text-4xl p-4">About us</h1>
          <h2>
            New Leaf Furniture is rooted in the desire to share the ways
            individuals can increase their creativity while reducing waste and
            live a more meaningful life.
          </h2>
          <p></p>
        </div>
      </div>
      <div>
        <div className="bg-white text-black grid sm:grid-cols-3"></div>
      </div>
    </>
  )
}

export default Cart
