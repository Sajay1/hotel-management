import { ReactTyped } from "react-typed";


export default function NavBrand(){
    return(
        <>

        <div className="bg-[#E0B973] size-20 rounded-b-4xl text-wrap p-2 font-doto mx-19 max-sm:mx-9 mb-3 max-md:mb-1 px-5 w-40 max-md:w-25 h-25 max-md:h-15">
        <ReactTyped
          strings={["LUXURY"]}
          typeSpeed={60}
          backSpeed={100}
          loop
          showCursor={false}
          className="flex justify-center text-[30px] font-bold text-indigo-950 hover:scale-125 duration-300 ease-in max-md:text-[20px]"
        />
        <p className="text-sm flex justify-center text-[20px] text-indigo-950 mb-9 md:mb-3 max-md:text-[15px]">
          HOTELS
        </p>
      </div>

        </>
    )
}