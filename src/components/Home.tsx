import { Link } from "react-router"
import r from "../assets/showroomphoto/r.jpg"
// import g from "../assets/showroomphoto/g.jpg"
// import h from "../assets/showroomphoto/h.jpg"
import logo from "../assets/logo.svg"
// import grain from "../assets/grain.jpg"
import trees from "../assets/trees.jpg"
import table from "../assets/table.jpg"
import roundtable from "../assets/roundtable.jpg"
import wood from "../assets/wood.jpg"
import "../App.css"

function Home() {
  return (
    <>
      <div className="grid pt-8 bg-black text-white sm:grid-cols-10">
        <div className="text-3xl text-left pl-5 pb-5 md:pl-20 md:pb-20 grid gap-3 pt-60 sm:col-span-4">
          <img src={logo} className="w-1/10 pt- 10 pb-5" />
          <h1 className="font-forum font-[300] text-5xl">New Leaf</h1>
          <h1 className="font-forum font-[300] text-5xl">Furniture</h1>
          <div className="pt-5 pb-5">
            <h2 className="font-work text-2xl">Creative Refinishing</h2>
            <h2 className="font-work text-2xl">
              Inspiration, Guides, and Tools
            </h2>
          </div>

          <Link
            to="/tutorials"
            className="p-3 bg-white text-black font-work text-lg font-[400] w-1/2 md:w-1/4 text-center sm:text-left"
          >
            Start Here
          </Link>
        </div>
        <div
          className="grid w-full sm:h-full h-[350px] rounded-none sm:rounded-t-full sm:col-span-5 sm:col-start-5 sm:bg-cover bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${r})` }}
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
              Tutorials +
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
              Gallery +
            </Link>
          </div>
          <div className="grid grid-cols-1 place-items-center gap-2 p-3">
            {" "}
            <img
              className="rounded-lg w-3/5"
              src={roundtable}
              alt="Wood industrial style table"
            />
            <Link to="/about" className="font-[400] text-black">
              About +
            </Link>
          </div>
          {/* <div className="grid grid-cols-1 place-items-center gap-2 p-3">
            <img
              className="rounded-lg w-3/5"
              src={roundtable}
              alt="Small round wood table"
            />
            <Link to="/shop" className="font-[400]">
              Shop +
            </Link>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default Home
