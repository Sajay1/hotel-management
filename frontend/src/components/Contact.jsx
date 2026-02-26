import img from "../assets/images/Arrow 1.png";

export default function Contact() {
  return (
    <>
      <div className="flex p-20 bg-[#14274A] text-white justify-center">
        <span className="text-4xl font-bold">CONTACT-US</span>
      </div>
      <div className="flex justify-center text-[#14274A] p-30 ml-40 mr-30 ">
        <span>
          <p className="text-4xl font-averia">WE ARE HERE FOR YOU</p>
          <p className="pt-5">
            At Luxury Hotels, we take our customers seriously. Do you have any
            enquiries, compaints or requests, please forward it to our support
            desk and we will get back to you as soon as possible.
          </p>
        </span>
      </div>
      <div className="grid grid-cols-2 justify-center text-[#14274A] align-center p-20 ml-40 mr-10">
        <div className="font-montserrat font-semibold">
          <p className="p-2">497 Evergreen Rd. Roseville, CA 95673</p>
          <p className="font-extrabold p-2 ">
            View map{" "}
            <img
              src={img}
              alt="arrow-icon"
              className="left-90 absolute bottom-8 w-10"
            />
          </p>
          <p className="p-2">Phone: +44 345 678 903</p>
          <p className="px-2">Email: luxury_hotels@gmail.com</p>
        </div>
        <div>
          <div>
            <div>
              <label htmlFor="Name" className="font-bold text-lg">
                Name
              </label>
            </div>
            <input
              type="text"
              name="name"
              className="border border-[#14274A] mt-2 w-70 h-10"
            />
          </div>
          <div>
            <div>
              <label htmlFor="Email" className="font-bold text-lg">
                Email
              </label>
            </div>
            <input
              type="email"
              name="email"
              className="border border-[#14274A] mt-2 size-30 w-70 h-10"
            />
          </div>
          <div>
            <div>
              <label htmlFor="MSG" className="font-bold text-lg">
                Message
              </label>
            </div>
            <textarea
              name="message"
              id="msg"
              className="border border-[#14274A] mt-2 w-90 h-50"
            />
          </div>
        </div>
      </div>
    </>
  );
}
