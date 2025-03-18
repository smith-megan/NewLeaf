import grain from "../assets/grain.jpg"
function Tutorial() {
  return (
    <>
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
            <h1 className="font-forum text-4xl">Welcome to Tutorials</h1>
            <p className="font-work font-[300]">
              Informative step by steps for your refinishing journey
            </p>
          </div>
          <button>Beginners path</button>
        </div>
      </div>
      <div className="grid p-3 gap-2 bg-white text-black">
        <h2 className="text-left">Posts</h2>
        <div className="grid grid-cols-auto sm:grid-cols-3 sm:gap-4 gap-2 place-content-center">
          <div className="grid place-content-center p-0">
            <img
              src={grain}
              className="rounded-3xl overflow-hidden object-cover h-[150px] w-[100vw] place-self-center"
            />
            <h2 className="text-left font-forum text-3xl pt-3">Title</h2>
            <p className="text-left">Small blurb description</p>
          </div>
          <div className="grid place-content-center p-0">
            <img
              src={grain}
              className="rounded-3xl overflow-hidden object-cover h-[150px] w-[100vw] place-self-center"
            />
            <h2 className="text-left font-forum text-3xl pt-3">Title</h2>
            <p className="text-left">Small blurb description</p>
          </div>
          <div className="grid place-content-center">
            <img
              src={grain}
              className="rounded-3xl overflow-hidden object-cover h-[150px] w-[100vw] place-self-center"
            />
            <h2 className="text-left font-forum text-3xl pt-3">Title</h2>
            <p className="text-left">
              Small blurb description that is annoyingly longer
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Tutorial
