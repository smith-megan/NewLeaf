import { BrowserRouter, Routes, Route } from "react-router"

import Nav from "./components/Nav"
import Home from "./components/Home"
import Tutorial from "./components/Tutorial"
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
        </Routes>
        <Routes>
          <Route path="/tutorial" element={<Tutorial />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
