import React from 'react'
import aboutUs from '../assets/aboutUs.png'


const Aboutus = () => {
  return (
    <div className='bg-black py-16 max-w-1240px'>
        <div>
            <div>
                <h1 className='flex text-white justify-center py-16 p-5 mx-auto max-w-[1000px] font-medium text-4xl'>ABOUT US</h1>
                <div className='bg-white  mx-auto grid md:grid-cols-2 gap-8 max-w-[920px]'>
                  <div className='p-4'>
                    At The Cribbers Technology Limited, we specialize in delivering comprehensive tech and software solutions tailored to meet the unique needs of businesses, schools, and institutions. From dynamic websites, mobile and desktop applications to specialized management systems for restaurants, hotels, and schools, our expertise covers a broad spectrum. With a dedicated team boasting years of experience, we not only craft bespoke software solutions but also offer freelance services, project debugging, and seamless collaboration. Whatever your tech vision, we bring it to life swiftly and reliably.
                    </div>
                    <div>
                      <img src={aboutUs} alt="aboutimage" />
                    </div>
                    

                </div>
                <div className='bg-black py-16'></div>
            </div>
            <div className='bg-[#CECECE] w-full py-16 mx-auto'>
               <h1 className='flex text-[#B45309] justify-center py-4 p-5 mx-auto max-w-[1000px] font-bold text-3xl'>COMPANY VALUES</h1>

               <div>
                <div className='grid sm:grid sm:grid-cols-3 md:grid-cols-3 gap-0 max-w-[1000px] px-16 '>
                  <div className='flex gap-0 lg:gap-0 md:gap-0 sm:gap-0 mx-auto items-start max-w-[500px]'>               
                    <div className='p-4 mx-auto'>                 
                      <h3 className='bg-[#14B8A6] rounded-full w-[150px] py-16 text-center font-medium text-xl text-white'>INNOVATION</h3>
                    </div>   
                    <div className='mx-auto py-24'>
                      <p className=' flex lg:text-xl md:text-3xl sm:text-2xl justify-center'>
                        
                      </p>
                    </div>
                  </div>
                  <div className='flex gap-0 lg:gap-0 md:gap-0 sm:gap-0 mx-auto items-start max-w-[500px] lg:pt-[200px]'>               
                    <div className='p-4 mx-auto'>                 
                      <h3 className='bg-[#14B8A6] rounded-full w-[150px] py-16 text-center font-medium text-xl text-white'>INTEGRITY</h3>
                    </div>   
                    <div className='mx-auto py-24'>
                      <p className=' flex lg:text-xl md:text-3xl sm:text-2xl justify-center'>
                        
                      </p>
                    </div>
                  </div>
                  <div className='flex gap-0 lg:gap-0 md:gap-0 sm:gap-0 mx-auto items-start max-w-[500px]
                  lg:pt-[400px] '>               
                    <div className='p-4 mx-auto'>                 
                      <h3 className='bg-[#14B8A6] rounded-full w-[150px] py-16 text-center font-medium text-xl text-white'>ADAPTABILITY</h3>
                    </div>   
                    <div className='mx-auto py-24'>
                      <p className=' flex lg:text-xl md:text-3xl sm:text-2xl justify-center'>
                      </p>
                    </div>
                  </div>
                </div>
               </div>

            </div>
        </div>
    </div>
  )
}

export default Aboutus