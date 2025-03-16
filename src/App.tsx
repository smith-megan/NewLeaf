import { BrowserRouter, Routes, Route } from "react-router"

import Nav from "./components/Nav"
import Home from "./components/Home"
import Tutorial from "./components/Tutorial"
import Gallery from "./components/Gallery"
import Footer from "./components/Footer"
import { Analytics } from "@vercel/analytics/react"
import "./App.css"

function App() {
  return (
    <>
      <Analytics />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/tutorials" element={<Tutorial />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
