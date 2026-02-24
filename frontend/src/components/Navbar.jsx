import '../App.css'

export default function Navbar(){
    const linkStyle = "font-doto font-extrabold text-gray-300 hover:font-thin hover:text-white hover:bg-black px-3 py-2 rounded-md text-xl font-medium duration-300 ease-in";

    return(
        <>
        <nav className=' flex justify-between bg-black bg-linear-65'>
            <div className='bg-[#E0B973] size-20 rounded-b-2xl text-wrap p-2 font-doto mx-3 mb-3 px-5'>
                <p className='flex justify-center text-indigo-950'>LUXURY</p>
                <p className='text-sm flex justify-center text-indigo-950'>HOTELS</p>
                </div>
            <div className='flex flex-row justify-end' > 
                <ul className='flex gap-4 p-3'>
            <li className={linkStyle}><a href="/">Home</a></li>
            <li className={linkStyle}><a href="/about">About</a></li>
            <li className={linkStyle}><a href="/contact">Contact</a></li>
        </ul>
            </div>
        </nav>
        </>
    )}