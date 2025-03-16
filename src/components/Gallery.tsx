import grain from "../assets/grain.jpg"
function Gallery() {
  return (
    <>
      <div className="grid grid-cols-auto grid-flow-row bg-black text-white pt-4">
        <div className="grid grid-cols-auto grid-flow-cols">
          <div
            className=" p-6 pt-50 grid text-left gap-4 bg-cover bg-center"
            style={{
              backgroundImage: `url(${grain})`,
              backgroundColor: `rgba(0,0,0,0.2)`,
              backgroundBlendMode: "multiply",
            }}
          >
            <h1 className="font-forum text-4xl">Welcome to the Gallery</h1>
            <p className="font-work font-[300]">
              Finished stories, struggles and inspiration.
            </p>
          </div>
          {/* <button>Beginners path</button> */}
        </div>
      </div>
      <div className="grid p-3 gap-2 bg-white text-black">
        <h2 className="text-left">Posts</h2>
        <div className="grid grid-cols-auto grid-flow-cols">
          <div className="w-3/5">
            <img src={grain} className="w-full" />
            <h2 className="text-left">Title</h2>
          </div>
          <p>grid</p>
          <p>grid</p>
        </div>
      </div>
    </>
  )
}

export default Gallery
