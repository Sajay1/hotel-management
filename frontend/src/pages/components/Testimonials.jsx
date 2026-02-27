import { LeftSquareOutlined, RightSquareOutlined } from "@ant-design/icons";


export default function Testimonials(){
    return(
        <>
        <div className="flex flex-col mb-12 sm:mb-16 md:mb-20 justify-center items-center p-4 sm:p-6 md:p-8">
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl text-center">
          Testimonials
        </h1>
        <p className="text-base sm:text-lg md:text-xl font-semibold mt-4 sm:mt-5 md:mt-7 text-center max-w-2xl px-4">
          "Calm, Serene, Retro – What a way to relax and enjoy"
        </p>
        <p className="text-sm sm:text-base mt-2">Mr. and Mrs. Baxter, UK</p>
        <div className="flex gap-4 mt-4 sm:mt-6">
          <LeftSquareOutlined className="text-3xl sm:text-4xl bg-yellow-500 text-yellow-500 cursor-pointer hover:scale-110 transition-transform" />
          <RightSquareOutlined className="text-3xl sm:text-4xl bg-yellow-500 text-yellow-500 cursor-pointer hover:scale-110 transition-transform" />
        </div>
      </div>
      </>
    )
}