import {FacebookOutlined,TwitterOutlined,InstagramOutlined} from '@ant-design/icons'

export default function Footer(){
    return(
        <>
        <div  className='grid grid-cols-4 bg-[#14274A] text-white'>
        <div className='size-20 rounded-b-2xl text-wrap p-2 font-doto mx-19 mb-3 px-5'>
                <p className='flex justify-center text-[30px]'>LUXURY</p>
                <p className='text-sm flex justify-center'>HOTELS</p>
                </div>
            <div className='flex flex-column justify-between mx-19' > 
                <ul >
            <li className><a href="/">Home</a></li>
            <li className><a href="/about">Terms & Conditions</a></li>
            <li className><a href="/contact">Contact</a></li>
        </ul>
            </div>
            <div className='flex flex-column justify-between' > 
                <ul >
            <li className='flex'><FacebookOutlined  /><a href="">Facebook</a></li>
            <li className='flex'><TwitterOutlined /><a href="">Twitter</a></li>
            <li className='flex'><InstagramOutlined /><a href="">Instagram</a></li>
        </ul>
            </div>
            <div>
                <h3>Subscribe to our newsletter</h3>
                <input type="text" name='email' placeholder='Email Address' className='border yellow-500  p-2 px-3'/> <button type='button' className='bg-yellow-500 text-indigo-900 p-2 px-3'>OK</button>
            </div>
            </div>
        </>
    )
}