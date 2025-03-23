import Tutorialone from "./Tutorialone"

function PostOne() {
  return (
    <>
      <div className="grid grid-cols-auto grid-flow-row bg-black text-white pt-4">
        <div className="grid grid-cols-auto grid-flow-cols">
          <div className=" p-6 pt-50 grid text-left gap-4 bg-contain bg-center">
            <h1 className="font-forum text-4xl">Sanding</h1>
            <p className="font-work font-[300]">A foundational skill</p>
          </div>
        </div>
      </div>
      <div className="grid p-3 gap-2 bg-white text-black">
        <div className="flex flex-col p-5 justify content-start">
          {Object.values(Tutorialone).map((value, i) => (
            <div className="flex p-5" key={"tutorialone-div" + i}>
              <img
                src={value[0][0]}
                className="rounded-3xl overflow-hidden object-cover sm:h-[50vh] h-[30vh] w-full place-self-center"
              />
              <div className="flex flex-col">
                {value[1].map((item, index) => {
                  return (
                    <p
                      className="text-left pl-2 pt-5 font-work text-black"
                      key={"Paragraph" + i + index}
                    >
                      {item}
                    </p>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default PostOne
