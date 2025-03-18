// import { useState } from "react"
import { Link } from "react-router"
import grain from "../assets/grain.jpg"
import trees from "../assets/trees.jpg"
import table from "../assets/table.jpg"
import roundtable from "../assets/roundtable.jpg"
import wood from "../assets/wood.jpg"
import "../App.css"

function Home() {
  // const [count, setCount] = useState(10)

  return (
    <>
      <div className="grid bg-black text-white pt-40">
        <div className="text-3xl text-left p-6 grid gap-1">
          <h1 className="font-forum font-[300] text-6xl">New Leaf Furniture</h1>
          <h2 className="font-work text-xl pt-6 pb-3">
            Creative Refinishing and Custom Wood Working
          </h2>
          <Link
            to="/gallery"
            className="p-4 bg-white text-black font-work text-lg font-[400]"
          >
            View the Gallery
          </Link>
        </div>
        <div
          className="grid w-full h-full rounded-none sm:rounded-l-lg p-10 pl-6 pb-40 bg-contain bg-center align-left"
          style={{ backgroundImage: `url(${grain})` }}
        ></div>
      </div>
      <div
        className="bg-cover bg-top text-black;
"
        style={{
          backgroundImage: `url(${trees})`,
          backgroundColor: `rgba(255,255,255,0.3)`,
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="grid gap-4 p-5 pt-12 pb-15 place-items-center text-black">
          <h1 className="font-work font-[400]">
            Welcome to New Leaf Furniture
          </h1>
          <h2 className="font-forum text-4xl p-4">
            Custom, Creative, & Inspiring
          </h2>
          <p className="font-[400]">
            A place for the aspiring interest in Furniture and Woodworking to
            grow.
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
          <h1 className="font-forum text-4xl p-4">Explore</h1>
        </div>
      </div>
      <div>
        <div className="bg-white text-black grid sm:grid-cols-3">
          <div className="grid grid-cols-1 place-items-center gap-2 p-3">
            <img
              className="rounded-lg w-3/5"
              src={wood}
              alt="Wood stack of lumber"
            />
            <Link to="/tutorials" className="font-[400]">
              Blog & Tutorials +
            </Link>
          </div>
          <div className="grid grid-cols-1 place-items-center gap-2 p-3">
            {" "}
            <img
              className="rounded-lg w-3/5"
              src={table}
              alt="Wood industrial style table"
            />
            <Link to="/gallery" className="font-[400] text-black">
              Inspiration +
            </Link>
          </div>
          <div className="grid grid-cols-1 place-items-center gap-2 p-3">
            <img
              className="rounded-lg w-3/5"
              src={roundtable}
              alt="Small round wood table"
            />
            <Link to="/shop" className="font-[400]">
              Shop +
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
