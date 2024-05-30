import React from 'react'
import "./card.css"
import viewdetail from './Package.png'
import image from './DIGITAL_MAKETING.png'
function Slidercard() {


  return (
    
        <div className="mycard w-[80%] mx-auto min-h-[250px] p-4 laptop:w-full tablets:w-full mobile:w-full mobile:mx-0">
            <h1 className='  font-bold text-xl'>Digital Marketing Mastery</h1>
            <div className='flex mt-3'>
                    <div className='w-[50%]'>
                        <p>Rating</p>
                        <p>
                                <span ><i class="fa-solid fa-star yellow-color"></i></span>
                                <span><i class="fa-solid fa-star yellow-color"></i></span>
                                <span><i class="fa-solid fa-star yellow-color"></i></span>
                                <span><i class="fa-solid fa-star-half-stroke yellow-color"></i></span>
                        </p>
                        <p>
                        <i class="fa-solid fa-indian-rupee-sign price-icon ps-2"></i> 2359
                        </p>
                    </div>
                    <div className='w-[50%]'>
                        <img className='h-full w-full'  src={image} alt="" />
                    </div>
            </div>
            <div className='px-5'>
                <img className='w-full mt-3 h-full' src={viewdetail} alt="" />
            </div>

        </div>
  )


}

export default Slidercard