import { BrowserRouter, Routes, Route } from "react-router"

import Nav from "./components/Nav"
import Home from "./components/Home"
import Tutorial from "./components/Tutorial"
import Gallery from "./components/Gallery"
import About from "./components/About"
import Footer from "./components/Footer"
import Cart from "./components/Cart"
import { Analytics } from "@vercel/analytics/react"
import "./App.css"
import PostOne from "./components/posts/post1/Postone"

function App() {
  return (
    <>
      <Analytics />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/tutorials" element={<Tutorial />} />
          <Route path="/sand" element={<PostOne />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
