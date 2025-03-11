// import { useState } from "react"
import Nav from "./components/Nav"
import grain from "./assets/grain.jpg"
import "./App.css"

function App() {
  // const [count, setCount] = useState(10)

  return (
    <>
      <Nav />
      <div className="grid bg-black text-white">
        <div className="text-3xl text-left p-6">
          <h1 className="font-forum font-[300] text-6xl">New Leaf Furniture</h1>
          <h2 className="font-work text-xl pt-5">
            Creative Refinishing and Custom Wood Working
          </h2>
        </div>
        <div className="w-full h-full rounded-lg">
          <img src={grain} alt="close view of wood grain" />
        </div>
      </div>
    </>
  )
}

export default App
