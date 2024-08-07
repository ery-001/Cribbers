import React from 'react'
import woman from '../assets/woman.png'



const Mission = () => {
  return (
      <div className="w-full bg-white py-16 px-4 items-center justify-center">
          <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 items-center justify-center">
              <div>
              <p className='text-[black] items-center justify-center font-bold text-5xl md:3xl sm:2xl p-4 md:p-16 sm:p-2 lg:text-left text-center'>Who we are and <br /> why choose us?</p>
              </div>
              <div className='flex flex-col justify-center'>
                  <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-gray-400 items-center justify-center p-4 lg:text-left text-center '> OUR MISSION</h1>
                  <p className='md:text-xl sm:text-xl text-xl  py-2 p-4 lg:text-left text-center'>Our Mission is to make digital solutions accessible, ensuring that individuals, businesses, and institutions harness the power of technology to achieve their goals and dreams.</p>
  
              </div>
          </div>
          <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 items-center justify-center p-4 md:p-16 sm:p-2">
              <div className='flex flex-col justify-center '>
                  <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-gray-400 items-center justify-center lg:text-left text-center '> OUR VISION</h1>
                  <p className='md:text-xl sm:text-xl text-xl  py-2 lg:text-left text-center'>Our vision is to lead Nigeria and Africa's digital transformation, driving innovation and accessibility, and making a significant global impact by simplifying processes, empowering the youth, and advancing institutions and businesses towards a digitalized future.</p>
  
              </div>
              <div className='flex items-center justify-center w-full lg:text-left text-center p-4 mx-auto'>
                <img className='' src={woman} alt="Woman" />
              <p className='text-[black] items-center justify-center font-bold text-5xl md:3xl sm:2xl p-4 md:p-16 sm:p-2'></p>
              </div>
          </div>
      </div>
    )
}

export default Mission