// import { useState } from "react"
import Nav from "./components/Nav"
import Home from "./components/Home"
import Footer from "./components/Footer"
import { Analytics } from "@vercel/analytics/react"
import "./App.css"

function App() {
  // const [count, setCount] = useState(10)

  return (
    <>
      <Analytics />
      <Nav />
      <Home />
      <Footer />
    </>
  )
}

export default App
