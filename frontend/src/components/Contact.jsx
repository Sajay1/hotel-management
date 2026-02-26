import img from "../assets/images/Arrow 1.png";

export default function Contact() {
  return (
    <>
      <div className="flex bg-[#14274A] text-white justify-center py-12 px-4 md:py-16 lg:py-20">
        <span className="text-3xl md:text-4xl font-bold">CONTACT-US</span>
      </div>

      <div className="flex justify-center text-[#14274A] px-4 py-12 md:px-8 lg:px-30 lg:py-16 max-w-7xl mx-auto">
        <span className="text-center md:text-left">
          <p className="text-2xl md:text-3xl lg:text-4xl font-averia">
            WE ARE HERE FOR YOU
          </p>
          <p className="pt-5 max-w-3xl mx-auto md:mx-0">
            At Luxury Hotels, we take our customers seriously. Do you have any
            enquiries, complaints or requests, please forward it to our support
            desk and we will get back to you as soon as possible.
          </p>
        </span>
      </div>

      <div className="flex flex-col lg:flex-row justify-center text-[#14274A] px-4 py-12 md:px-8 lg:px-20 max-w-7xl mx-auto gap-10 lg:gap-20">
        <div className="font-montserrat font-semibold w-full lg:w-1/2 space-y-4">
          <p className="text-base md:text-lg">
            497 Evergreen Rd. Roseville, CA 95673
          </p>
          <p className="font-extrabold flex items-center gap-4">
            View map
            <img src={img} alt="arrow-icon" className="w-6 md:w-8" />
          </p>
          <p className="text-base md:text-lg">Phone: +44 345 678 903</p>
          <p className="text-base md:text-lg">Email: luxury_hotels@gmail.com</p>
        </div>

        <div className="w-full lg:w-1/2 space-y-6">
          <div>
            <label
              htmlFor="Name"
              className="font-bold text-base md:text-lg block mb-2"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="Name"
              className="border border-[#14274A] w-full max-w-md h-10 px-3 rounded focus:outline-none focus:ring-2 focus:ring-[#14274A]"
            />
          </div>

          <div>
            <label
              htmlFor="Email"
              className="font-bold text-base md:text-lg block mb-2"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="Email"
              className="border border-[#14274A] w-full max-w-md h-10 px-3 rounded focus:outline-none focus:ring-2 focus:ring-[#14274A]"
            />
          </div>

          <div>
            <label
              htmlFor="MSG"
              className="font-bold text-base md:text-lg block mb-2"
            >
              Message
            </label>
            <textarea
              name="message"
              id="MSG"
              rows="5"
              className="border border-[#14274A] w-full max-w-md px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#14274A]"
            />
          </div>

          <button className="bg-[#14274A] text-white px-8 py-3 rounded hover:bg-opacity-90 transition-colors">
            Send Message
          </button>
        </div>
      </div>
    </>
  );
}
