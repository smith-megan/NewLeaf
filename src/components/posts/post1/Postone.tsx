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
      <div className="grid sm:p-3 gap-2 bg-white text-black">
        <div className="flex flex-col sm:p-5 justify content-start">
          {Object.values(Tutorialone).map((value, i) => (
            <div className="flex flex-col p-5" key={"tutorialone-div" + i}>
              <div className="flex flex-row">
                {value.images.map((img) => {
                  return (
                    <img
                      key={"key" + img}
                      src={img}
                      className="rounded-3xl overflow-hidden object-cover sm:h-[50vh] h-[30vh] w-full place-self-center p-2"
                    />
                  )
                })}
              </div>
              <div className="flex flex-col">
                <h2 className="font-forum text-2xl text-left pl-2 pt-3">
                  {value.header}
                </h2>
                {value.paragraphs.map((item, index) => {
                  return (
                    <p
                      className="text-left pl-2 pt-3 font-work text-black"
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
