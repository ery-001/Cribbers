import React from 'react'
import logo from '../assets/logo.png'
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='text-white text-center max-w-[900px]    flex mx-auto p-4 py-8 w-auto'>
        <div className='  w-full text-center mx-auto '>
            <h1 className='text-baseline py-8 font-medium text-xl'>Subscribe to our Newsletter</h1>
            <div className='flex bg-[#D4D4D8] rounded-3xl  items-center  mx-auto w-full justify-evenly lg:w-[100%]  md:w-[-50%] sm:w-[-95%]'>
                <p className='p-3 text-black'>
                    Email:  
                </p>
                <div >
                    <input className='rounded-full w-[150px] lg:w-[400px] p-1 ' type="email" placeholder="email@email.com" />
                </div>

                 <button className='bg-black w-[140px] rounded-2xl py-2'>Subscribe</button>
            </div>
            <img className='w-40 text-center justify-center mx-auto py-4' src={logo} alt="logo" />
            <div>
                <ul className='flex mx-auto  justify-center gap-8 py-4 pb-5 font-medium'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <hr />
                <div className='flex justify-center gap-16 py-4'>
                    <FaFacebook size={25} />
                    <FaInstagram size={25} />
                    <FaLinkedin size={25} />
                </div>

            </div>
            <p className='py-8 p-4'>
                © 2024 Cribbers Technology. All rights reserved.
            </p>
        </div>
    </div>
  )
}

export default Footer