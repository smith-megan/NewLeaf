// import { useState } from "react"
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
        <div className="text-3xl text-left p-6">
          <h1 className="font-forum font-[300] text-6xl">New Leaf Furniture</h1>
          <h2 className="font-work text-xl pt-6">
            Creative Refinishing and Custom Wood Working
          </h2>
        </div>
        <div
          className="grid w-full h-full rounded-none sm:rounded-l-lg p-10 pl-6 pb-40 bg-cover bg-center align-left"
          style={{ backgroundImage: `url(${grain})` }}
        >
          <button className="p-2 bg-white text-black font-work font-[400] w-1/2">
            View the Gallery
          </button>
        </div>
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
        <div className="grid gap-4 p-5 pt-10 place-items-center text-black">
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
            <button className="p-2 bg-white text-black font-work font-[400]">
              Gallery
            </button>
            <button className="p-2 bg-black text-white font-work font-[400]">
              Learning
            </button>
          </div>
        </div>
        <div className="bg-white rounded-t-lg text-black p-6">
          <h1 className="font-forum text-4xl p-4">Explore</h1>
        </div>
      </div>
      <div>
        <div className="bg-white text-black">
          <div className="grid grid-cols-1 place-items-center">
            <img
              className="rounded-lg w-1/2"
              src={wood}
              alt="Wood stack of lumber"
            />
            <h2>Blog & Tutorials +</h2>
          </div>
          <div>
            <img
              className="rounded-lg p-4"
              src={table}
              alt="Wood industrial style table"
            />
            <h2>Inspiration +</h2>
          </div>
          <div>
            <img
              className="rounded-lg p-4"
              src={roundtable}
              alt="Small round wood table"
            />
            <h2>Shop +</h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
