import React from 'react'
import customercare from '../assets/customercare.png'
import {
    FaInstagram,
    FaFacebook,
    FaWhatsapp,
    FaTwitter,
    FaLinkedin,
    FaMapMarkerAlt,
} from 'react-icons/fa'



const ReachUs = () => {
  return (
    <div>
        <div>
            <div className='text-white grid lg:grid-cols-2 max-w-[1240px] text-left mx-auto justify-between '>
                <div>
                    <h1 className='text-4xl font-medium py-4'>Reach Us</h1>
                    <p className='text-l py-4 t'>
                        We are here to help. Let's connect and grow together. <br />
                        Need any of our services? Are you interested in partnering with us? <br />
                        Have Some suggestions? or just want to say Hi? Contact us.
                    </p>
                    <div className='grid grid-row-5 gap-4 py-4 mx-auto text-black'>
                        <input className='p-4 border-2 border-b-stone-500 rounded-lg py-4 ' type="text" placeholder='Full Name:' />
                        <input className='p-4 border-2 border-b-stone-500 rounded-lg py-4 ' type="email" name="" id="" placeholder='Email:' />
                        <input className='p-4 border-2 border-b-stone-500 rounded-lg py-4 ' type="number" placeholder='Phone Number:' />
                        <input className='p-4 border-2 border-b-stone-500 rounded-lg py-4 ' type="text" placeholder='Subject:' />
                        <input className='p-4 border-2 border-b-stone-500 rounded-lg py-4 ' type="text" name="" id="" placeholder='Message:' />
                    </div>
                    <div className='flex flex-col justify-end items-end'>
                        <a href='mailto:your@email.com'>
                            <button className='bg-[#00df9a] w-[200px] rounded-md my-6 mx-auto py-3 font-medium text-black cursor-pointer justify-end items-end px-8'>Send Message!</button>
                        </a>
                    </div>
                </div>
                <div className='px-16'>
                    <h1 className='text-4xl font-medium py-4'>Customer Care</h1>
                    <p className='text-l py-4 t'>
                    Not Sure where to Start? Need Help Developing that site or you want to know more about us? Our team is here to help.
                    </p>
                    <div className='py-16 mx-auto flex gap-1'>
                        <div>
                            <img className='rounded-full p-2 w-[104px] h-[104px]' src={customercare} alt="" />
                        </div>
                        <div>
                            <h1 className='font-medium text-xl'>Erioluwa</h1>
                            <p>Customer Care</p>
                            <p>+234 80 000 000 00</p>
                        </div>
                        
                    </div>
                    <div>
                         <h1 className='text-4xl font-medium pt-8'>Other Ways to connect</h1>
                         <p className='text-l py-4 t'>
                         We are very active on our social media handles. Reach out to us and you are sure to get immediate feedback
                         </p>

                         <div className='flex justify-between py-8'>
                            <FaFacebook className='border border-white rounded-full cursor-pointer h-10 w-10 p-1' size={35}/>
                            <FaInstagram className='border border-white rounded-full cursor-pointer h-10 w-10 p-1' size={35}/>
                            <FaWhatsapp className='border border-white rounded-full cursor-pointer h-10 w-10 p-1' size={35}/>
                            <FaTwitter className='border border-white rounded-full cursor-pointer h-10 w-10 p-1' size={35}/>
                            <FaLinkedin className='border border-white rounded-full cursor-pointer h-10 w-10 p-1' size={35}/>
                            <FaMapMarkerAlt className='border border-white rounded-full cursor-pointer h-10 w-10 p-1' size={35}/>
                         </div>
                    </div>

                </div>
            </div>
        </div>
        <hr className='border-4'/>
    </div>
  )
}

export default ReachUs