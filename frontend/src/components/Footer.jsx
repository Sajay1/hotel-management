import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
} from "@ant-design/icons";

export default function Footer() {
  return (
    <>
      <div className="flex justify-center">
        <div className=" bg-[#14274A] size-50 absolute rotate-45  w-0 h-0 border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent border-b-[75px] border-b-blue-500">
          .
        </div>
      </div>
      <div className="grid grid-cols-4 bg-[#14274A] text-white p-5 relative">
        <div className="size-20 rounded-b-2xl text-wrap p-2 font-doto mx-19 mb-3 px-5">
          <p className="flex justify-center text-[30px]">LUXURY</p>
          <p className="text-sm flex justify-center">HOTELS</p>
        </div>
        <div className="flex flex-column justify-between mx-19">
          <ul>
            <li >
              <a href="/">Home</a>
            </li>
            <li >
              <a href="/about">Terms & Conditions</a>
            </li>
            <li >
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-column justify-between">
          <ul>
            <li className="flex">
              <FacebookOutlined className="mr-2" />
              <a href="">Facebook</a>
            </li>
            <li className="flex">
              <TwitterOutlined className="mr-2" />
              <a href="">Twitter</a>
            </li>
            <li className="flex">
              <InstagramOutlined className="mr-2" />
              <a href="">Instagram</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Subscribe to our newsletter</h3>
          <input
            type="text"
            name="email"
            placeholder="Email Address"
            className="border yellow-500  p-2 px-3"
          />{" "}
          <button
            type="button"
            className="bg-yellow-500 text-indigo-900 p-2 px-3"
          >
            OK
          </button>
        </div>
      </div>
    </>
  );
}
