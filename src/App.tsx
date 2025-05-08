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
import PostTwo from "./components/posts/post2/PostTwo"
import PostThree from "./components/posts/post3/PostThree"

function App() {
  return (
    <>
      <Analytics />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/tutorials" element={<Tutorial />} />
          <Route path="/1" element={<PostOne />} />
          <Route path="/2" element={<PostTwo />} />
          <Route path="/3" element={<PostThree />} />
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
