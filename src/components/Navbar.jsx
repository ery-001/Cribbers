import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { useState } from 'react'
import logo from '../assets/logo.png'
import {
    FaFacebook,
    FaInstagram,
    FaInbox,
} from 'react-icons/fa' 

const Navbar = () => {
  const[nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  }

  return (
    <>
    <div className=' w-full bg-white fixed  top-0 '>

    <div className='flex justify-between items-center h-21 w-full mx-auto px-4  text-black bg-white  relative' >
        <img className='w-40 lg:mx-12 md:mx-auto sm:mx-auto' src={logo} alt="/" />
      <ul className="hidden md:flex text-bold cursor-pointer">
        <li className="p-4 font-bold hover:border-b-black ease-in-out duration-500 border-2 rounded-5 border-transparent "><a href='/'>Home</a></li>
        <li className="p-4 font-bold hover:border-b-black ease-in-out duration-500 border-2 border-transparent"><a href='/about'>About Us</a></li>
        <li className="p-4 font-bold hover:border-b-black ease-in-out duration-500 border-2 border-transparent"><a href='/project'>Projects</a></li>
        <li className="p-4 font-bold hover:border-b-black ease-in-out duration-500 border-2 border-transparent"><a href='/event'>Events</a></li>
      </ul>
      <div className='flex justify-evenly md:w-[15%] w-40 md:flex hidden '>
            <FaInstagram className='border border-black rounded-full cursor-pointer h-9 w-9 p-2' size={20}/>
            <FaFacebook className='border border-black rounded-full cursor-pointer h-9 w-9 p-2' size={20}/>
            <FaInbox className='border border-black rounded-full cursor-pointer h-9 w-9 p-2' size={20}/>
        </div>
        
        <div onClick={handleNav} className='cursor-pointer block md:hidden text-black px-4 '>
        {nav ? <AiOutlineClose className='' size={25} /> : <AiOutlineMenu size={25}/>}
        
      </div>

      <div className={nav ?  'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#95ACB2] ease-in-out duration-100' :  'fixed left-[-100%]' }>
      <img className='w-40 p-4' src={logo} alt="/" />


        <ul className=' uppercase p-4'>
          <li className="p-4 border-b border-gray-700 "><a href='/'>Home</a></li>
          <li className="p-4 border-b border-gray-700 "><a href='/about'>About Us</a></li>
          <li className="p-4 border-b border-gray-700 "><a href='/project'>Projects</a></li>
          <li className="p-4 border-b border-gray-700 "><a href='/event'>Events</a></li>
        </ul>
        <div className='flex justify-between md:w-[-15%] w-full  bottom-0 '>
            <FaInstagram  className='border border-black rounded-full cursor-pointer' size={30} />
            <FaFacebook className='border border-black rounded-full cursor-pointer'  size={30 }/>
            <FaInbox  className='border border-black rounded-full cursor-pointer' size={30} />
        </div>
      </div>
    </div> 
    </div>
    
   </> 
  )
};

export default Navbar