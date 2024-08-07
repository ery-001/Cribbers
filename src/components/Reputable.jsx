import React from 'react'
import chickenchips from '../assets/chickenchips.png'
import Goat from '../assets/Goat.png'
import fountain from '../assets/fountain.png'
import Farm from '../assets/Farm.png'  


const Reputable = () => {
  return (


    <div>
        <div className="w-full py-[10rem]   bg-white">
            <div>
                <p className='text-center text-black text-4xl pb-4 font-bold'>
                    Some of our reputable clients
                </p>
            </div>
            <div className=' max-w-[1000px] flex justify-center mx-auto  p-4 py-8 gap-8'>
                <div>
                    <img src={Farm} alt="/" />
                </div>
                <div>
                     <img src={chickenchips} alt="/" />
                </div>
                <div>
                    <img src={Goat} alt="/" />
                </div>
                <div>
                    <img src={fountain} alt="/" />
                </div>
                

            </div>
        </div>




    </div>
  )
}

export default Reputable