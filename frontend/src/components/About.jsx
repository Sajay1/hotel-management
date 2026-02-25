import img from "../assets/images/palm-trees-at-night-258154.png";
import img1 from "../assets/images/humphrey-muleba-LOA2mTj1vhc-unsplash 1.png";
import img2 from "../assets/images/big-tiny-belly-XtnNrQYC7ts-unsplash 1.png";
import img3 from "../assets/images/adetayo-adefala-1K2iQQM31D0-unsplash 1.png";
import img4 from "../assets/images/bianca-jordan-o7SvheEZoks-unsplash 1.png";
import img5 from "../assets/images/jason-leung-poI7DelFiVA-unsplash 1.png";

export default function About() {
  return (
    <>
      <div
        className="flex flex-col justify-center text-white items-center bg-cover bg-center"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="mr-120 mt-20 mb-80 pt-30">
          <p className="text-4xl w-100 font-montserrat">
            WELCOME TO <span className="text-9xl font-averia">LUXURY</span>{" "}
            <span className="text-5xl tracking-widest">HOTELS</span>
          </p>
          <p className="text-4xl mt-10 w-200 font-new-rocker">
            Book your stay and enjoy Luxury redefined at the most affordable
            rates.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center text-indigo-600 items-center p-10 m-10">
        <p className="text-4xl mb-9 font-cascadia-mono">FACILITIES</p>
        <p className="text-2xl font-cascadia-mono">
          We want your stay at our lush hotel to be truly unforgettable. That is
          why we give special attention to all of your needs so that we can
          ensure an experience quite unique. Luxury hotels offers the perfect
          setting with stunning views for leisure and our modern luxury resort
          facilities will help you enjoy the best of all.
        </p>
      </div>
      <div
        className="flex flex-col text-white items-center bg-cover bg-center justify-center bg-size-[980px] bg-no-repeat "
        style={{ backgroundImage: `url(${img1})` }}
      >
        <div className="relative bottom-70 right-100 m-40 p-50 ">
          <p className="font-bold text-black bg-white text-6xl px-10 border-4 border-double outline-black-600 -rotate-35 rounded-3xl ">
            THE GYM
          </p>
        </div>
      </div>
      <div
        className="flex flex-col text-white items-center bg-cover bg-center justify-center bg-size-[980px] bg-no-repeat"
        style={{ backgroundImage: `url(${img2})` }}
      >
        <div className="relative bottom-50 left-110 m-40 py-50">
          <p className="font-bold text-black bg-white text-5xl px-10 border-4 border-double outline-black-600 rotate-35 rounded-3xl">
            SWIMMING POOL
          </p>
        </div>
      </div>
      <div
        className="flex flex-col text-white items-center bg-cover bg-center justify-center bg-size-[980px] bg-no-repeat"
        style={{ backgroundImage: `url(${img3})` }}
      >
        <div className="relative bottom-68 right-100 m-40 p-50">
          <p className="font-bold text-black bg-white text-6xl px-10 border-4 border-double outline-black-600 -rotate-35 rounded-3xl">
            THE SPA
          </p>
        </div>
      </div>
      <div
        className="flex flex-col text-white items-center bg-cover bg-center justify-center bg-size-[980px] bg-no-repeat"
        style={{ backgroundImage: `url(${img4})` }}
      >
        <div className="relative bottom-65 left-110 m-40 py-50">
          <p className="font-bold text-black bg-white text-6xl px-10 border-4 border-double outline-black-600 rotate-35 rounded-3xl">
            LAUNDRY
          </p>
        </div>
      </div>
      <div
        className="flex flex-col text-white items-center bg-cover bg-center justify-center bg-size-[980px] bg-no-repeat"
        style={{ backgroundImage: `url(${img5})` }}
      >
        <div className="relative bottom-70 right-100 m-40 p-50">
          <p className="font-bold text-black bg-white text-6xl px-10 border-4 border-double outline-black-600 -rotate-35 rounded-3xl">
            RESTAURANT
          </p>
        </div>
      </div>
      <div className="flex flex-col mb-18 justify-center items-center p-2">
        <h1 className="font-bold text-[50px]">Testimonials</h1>
        <p className="text-[20px] font-semibold mt-7">
          "Calm, Serene, Retro – What a way to relax and enjoy"
        </p>
        <p>Mr. and Mrs. Baxter, UK</p>
      </div>
    </>
  );
}
