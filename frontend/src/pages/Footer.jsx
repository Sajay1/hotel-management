import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
} from "@ant-design/icons";

export default function Footer() {
  return (
    <>

      <footer className="w-full">

        <div className="flex justify-center">
        <div className="w-0 h-0 border-l-[35px] sm:border-l-[35px] md:border-l-[35px] border-l-transparent border-r-[35px] sm:border-r-[35px] md:border-r-[35px] border-r-transparent border-b-[30px] sm:border-b-[30px] md:border-b-[30px] border-b-[#14274A]">
        </div>
      </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-5 bg-[#14274A] text-white p-6 sm:p-5 md:p-6 lg:p-8">
          <div className="flex flex-col items-center sm:items-start">
            <div className="text-center sm:text-left">
              <p className="text-2xl sm:text-3xl md:text-4xl font-doto font-bold">
                LUXURY
              </p>
              <p className="text-sm sm:text-base tracking-wider">HOTELS</p>
            </div>
          </div>

          <div className="flex flex-col items-center sm:items-start">
            <ul className="space-y-2 sm:space-y-3">
              <li className="hover:underline transition-all duration-300">
                <a href="/" className="text-sm sm:text-base md:text-lg">
                  Home
                </a>
              </li>
              <li className="hover:underline transition-all duration-300">
                <a href="/about" className="text-sm sm:text-base md:text-lg">
                  About Us
                </a>
              </li>
              <li className="hover:underline transition-all duration-300">
                <a href="/contact" className="text-sm sm:text-base md:text-lg">
                  Contact
                </a>
              </li>
              <li className="hover:underline transition-all duration-300">
                <a className="text-sm sm:text-base md:text-lg">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center sm:items-start">
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-center gap-2 hover:text-yellow-500 transition-all duration-300">
                <FacebookOutlined className="text-lg sm:text-xl" />
                <a
                  href="https://facebook.com"
                  className="text-sm sm:text-base md:text-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li className="flex items-center gap-2 hover:text-yellow-500 transition-all duration-300">
                <TwitterOutlined className="text-lg sm:text-xl" />
                <a
                  href="https://twitter.com"
                  className="text-sm sm:text-base md:text-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </li>
              <li className="flex items-center gap-2 hover:text-yellow-500 transition-all duration-300">
                <InstagramOutlined className="text-lg sm:text-xl" />
                <a
                  href="https://instagram.com"
                  className="text-sm sm:text-base md:text-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-3 text-center sm:text-left">
              Subscribe to our newsletter
            </h3>
            <div className="flex flex-col xs:flex-row gap-2 w-full max-w-[300px] sm:max-w-full">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="border border-yellow-500 rounded-lg p-2 px-3 text-white w-full text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <button
                type="button"
                className="bg-yellow-500 text-indigo-900 font-bold rounded-lg p-2 px-4 sm:px-6 text-sm sm:text-base hover:bg-yellow-400 transition-all duration-300 whitespace-nowrap"
              >
                OK
              </button>
            </div>
          </div>
        </div>

        <div className="bg-[#0f1f3a] text-white text-center py-3 px-4">
          <p className="text-xs sm:text-sm">
            © {new Date().getFullYear()} Luxury Hotels. All rights reserved.
          </p>
        </div>
      </footer>
      
    </>
  );
}
