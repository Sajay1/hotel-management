import Contactpart from "./components/Contactpart";

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


      {/*Contact section */}
      <Contactpart />

    </>
  );
}
