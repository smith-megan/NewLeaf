import grain from "../assets/grain.jpg"
import Gallerylist from "./showroom/Showroomlist"
import { useState } from "react"
import { PieceInterface } from "./showroom/Showroomlist"
import ScrollToTop from "./ScrollTop"

function Gallery() {
  const [Visible, setVisible] = useState(false)
  const [Gallery, setGallery] = useState<PieceInterface>({
    images: ["imagefiller"],
    header: "Blue and Cream Tall Dresser",
    blurb: "The first dresser I ever painted.",
  })

  return (
    <>
      <ScrollToTop />
      {Visible === true ? (
        <div className="fixed grid w-[80%] left-[50%] translate-x-[-50%] p-5 pt-4 bg-white text-black">
          <div className="flex justify-around align-middle pb-2">
            <div className="w-[100%]">
              <h1 className="font-forum text-xl">{Gallery.header}</h1>
              <p className="font-work text-sm">{Gallery.blurb}</p>
            </div>
            <button
              className="w-5 h-7 bg-black text-white justify-self-end p-0 cursor-pointer"
              onClick={() => {
                setVisible(false)
              }}
            >
              X
            </button>
          </div>
          <div className="grid grid-cols-3 gap-2 justify-items-center">
            {Gallery.images.map((img) => {
              return <img key={img} className="w-40" src={img} />
            })}
          </div>
        </div>
      ) : (
        <></>
      )}
      <div className="grid grid-cols-auto grid-flow-row bg-black text-white pt-4">
        <div className="grid grid-cols-auto grid-flow-cols">
          <div
            className=" p-6 pt-50 grid text-left gap-4 bg-contain bg-center"
            style={{
              backgroundImage: `url(${grain})`,
              backgroundColor: `rgba(0,0,0,0.2)`,
              backgroundBlendMode: "multiply",
            }}
          >
            <h1 className="font-forum text-4xl">The Gallery</h1>
            <p className="font-work font-[300]">
              Finished stories, struggles and inspiration.
            </p>
          </div>
        </div>
      </div>
      <div className="grid p-3 gap-2 bg-white text-black">
        <div className="grid grid-cols-auto sm:grid-cols-3 sm:gap-4 gap-2 justify content-start">
          {Gallerylist.toReversed().map((value, i) => (
            <div
              className="cursor-pointer"
              key={"gallery" + i}
              onClick={() => {
                setGallery(value)
                setVisible(true)
              }}
            >
              <img
                src={value.images[0]}
                className="rounded-3xl overflow-hidden object-cover h-[40vh] w-[100vw] place-self-center"
              />
              <h2 className="text-left font-forum text-2xl pt-2 pl-0.5">
                {value.header}
              </h2>
              <p className="text-left pl-0.5">{value.blurb}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Gallery
