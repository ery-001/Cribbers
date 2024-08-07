import { ReactTyped } from "react-typed";
import landing from '../assets/landing.jpg'
import {
    FaInbox,
} from 'react-icons/fa'


const Hero = () => {
  return (
    <div className="text-white bg-[url('/src/assets/landing.jpg')] bg-center bg-cover  sm:bg-black md:bg-cover py-16">
      <div className=" inset-0 bg-gradient-to-r from-black/90 to-transparent w-full h-full bg-cover bg-center py-30 ">
         <div className="max-w-[1000px] mt-[-96px] w-full h-screen mx-auto md:text-center sm:text-center lg:text-left text-center flex flex-col justify-center ">
            <p className='text-[white] font-bold p-2'></p>
            <h1 className='md:text-4xl sm:text-2xl text-3xl font-bold  md:py-6 sm:py-6 md:p-4 sm:p-6 sm:justify-center'><br /><br /><br /><br />Unleashing Potentials <br /> <span className="text-[#00fd9a]">one</span> code at a time</h1>
            <div className="flex justify-center items-center">
                <p className='md:text-5xl sm:text-4xl text-xl font-bold  py-4'></p>
            </div>
            <p className='md:text-2xl text-xl font-bold text-white-500 md:pl-1'>Welcome to Cribbers Technology, a <br />Software Development Company based in Nigeria.</p>
            <button className="bg-[#00df9a] w-[200px] rounded-md my-6 mx-auto py-3 font-medium text-black cursor-pointer" >Get Started</button>

            <ReactTyped
                    className='md:text-2xl sm:text-xl text-3xl font-bold md:pl-4 pl-2 pt-12 text-center'
                    strings={['Web Development', 'App Development', 'Ajayi Erioluwa', 'Software Solutions']}
                    typeSpeed={70}
                    backSpeed={30}
                    loop
                />
        </div>
      </div>
       
    </div>
  )
}

export default Hero