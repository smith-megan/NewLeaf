import grain from "../assets/grain.jpg"
import Tutoriallist from "./posts/Tutoriallist"

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
        <div className="grid grid-cols-auto sm:grid-cols-3 sm:gap-4 gap-2 justify content-start">
          {Object.values(Tutoriallist).map((value) => (
            <div>
              <img
                src={value[0]}
                className="rounded-3xl overflow-hidden object-cover h-[150px] w-[100vw] place-self-center"
              />
              <h2 className="text-left font-forum text-2xl pt-2 pl-0.5">
                {value[1]}
              </h2>
              <p className="text-left pl-0.5">{value[2]}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Tutorial
