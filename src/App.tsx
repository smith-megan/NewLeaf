// import { useState } from "react"
import Nav from "./components/Nav"
import grain from "./assets/grain.jpg"
import "./App.css"

function App() {
  // const [count, setCount] = useState(10)

  return (
    <>
      <Nav />
      <div className="grid grid-cols-2 bg-black text-white">
        <div className="text-3xl">New Leaf</div>
        <div className="w-full h-full">
          <img src={grain} />
        </div>
      </div>
    </>
  )
}

export default App
