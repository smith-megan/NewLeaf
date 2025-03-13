// import { useState } from "react"
import Nav from "./components/Nav"
import Home from "./components/Home"
import { Analytics } from "@vercel/analytics/react"
import "./App.css"

function App() {
  // const [count, setCount] = useState(10)

  return (
    <>
      <Analytics />
      <Nav />
      <Home />
    </>
  )
}

export default App
