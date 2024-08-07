import Ayodeji from '../assets/Ayodeji.svg'
import Marcus from '../assets/Marcus.svg'
import Bunmi from '../assets/Bunmi.svg'







const Reviews = () => {
  return (
        <div className="w-full py-[10rem]  bg-gradient-to-b from-teal-600 to-teal-300">
            <div>
                <p className='text-center text-black lg:text-4xl md:text3xl sm:txt-3xl pb-4 font-medium'>
                    What Our Clients Say?
                </p>
            </div>
            <div className="max-w-[800px] mx-auto  grid-cols-4  grid  items-center text-center md:w-[-70%] sm:w-[-20%] lg:w-full justify-center overflow-x-auto ">
                <div className="w-[300px] md:w-[-70%]  shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 hover:border border-gray-500 duration-300 ease-in-out bg-white ">
                    <div className='text-center font-medium'>
                        <p className='py-2 mx-8 border-b border-b-slate-900 mt-8 '>It is very Amazing to have worked with Cribbers Technology, to develop my School Website. Their delivery time is quick, and i have not had problems since i started using the site.</p>
                        <p></p>
                    </div>
                    <div className='flex mx-auto text-center items-center'> 
                        <img className='w-10  mx-auto   bg-white' src={Ayodeji} alt="/" />
                        <h2 className='text-xl font-medium py-4 mx-4'>Ayodeji</h2>
                    </div>
                </div>
                <div className="w-[300px] md:w-[-70%] shadow-xl flex flex-col p-4 my-4 py-8 rounded-lg hover:scale-105 hover:border border-gray-500 duration-300 ease-in-out bg-white">
                    <div className='text-center font-medium'>
                        <p className='py-2 mx-8 border-b border-b-slate-900 mt-8 '>When it comes to building digital solutions, the cribbers Technology are one of the very best in the business. I would highly recommend them to any one. Nice doing business with you.</p>
                        <p></p>
                    </div>
                    <div className='flex mx-auto text-center items-center'> 
                        <img className='w-10  mx-auto   bg-white' src={Marcus} alt="/" />
                        <h2 className='text-xl font-medium py-4 mx-4'>Marcus</h2>
                    </div>
                </div>
                <div className="w-[300px] md:w-[-70%] shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 hover:border border-gray-500 duration-300 ease-in-out bg-white">
                    <div className='text-center font-medium'>
                        <p className='py-2 mx-8 border-b border-b-slate-900 mt-8 '>The delivery and the service is top notch. I enjoyed working with them and i recommend them to any one. <br /><br /><br /><br /></p>
                        <p></p>
                    </div>
                    <div className='flex mx-auto text-center items-center'> 
                        <img className='w-10  mx-auto   bg-white' src={Bunmi} alt="/" />
                        <h2 className='text-xl font-medium py-4 mx-4'>Bunmi</h2>
                    </div>
                </div>
                

            </div>
        </div>
            
            
    )
}

export default Reviews