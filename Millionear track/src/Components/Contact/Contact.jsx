import React from 'react'
import contactus from './contactus.png'
import './contact.css'

function Contact() {
  return (

     <>
        <div className=' grid grid-cols-1 laptop:grid-cols-2'>

            {/* this my banner */}

            <div className='w-full laptop:col-span-2'>
                <img src={contactus}alt="" />
             </div>
             {/* banner end ......*/}


            {/* information form start from here */}

            <div className='pt-14'>
                 <div className=' tablets:w-[75%] mx-auto laptop:w-full laptop:ps-5'>
                        <div className='p-4'>
                                <div className='border-bottom'><h1 className=' font-bold text-4xl pb-10 ps-4 yellow-color'>Get in Touch</h1>
                                </div>
                        </div>

                        <div className='p-4'><input type="text" placeholder='Name'  className=' h-12 rounded-lg w-full  bg-sky-50 ps-4'/>
                        </div>

                        <div className='p-4'>
                            <input type="text" placeholder='Phone'  className=' h-12 rounded-lg w-full  bg-sky-50 ps-4'/>
                        </div>
                        <div className='p-4'>
                            <input type="text" placeholder='Email'  className=' h-12 rounded-lg w-full  bg-sky-50 ps-4'/>
                        </div>
                        <div className='p-4'>
                            <textarea name="" id="" cols="30" rows="10" placeholder='Message' className=' p-4 bg-sky-50 w-full rounded-md'>
                            </textarea>
                        </div>
                        <div className='p-4'>
                            <button className='px-9 py-3  bg-green-400 font-bold outline-none rounded-xl text-white'>Submit
                            </button>
                        </div>
                 </div>
            </div>

            {/* information form end here............ */}

             
             {/* this is my support contact section */}

            <div className='  p-4 laptop:pt-16'>

              <div className='tablets:w-[75%] mx-auto laptop:w-full  laptop:ps-20'>
                   <h1 className=' text-3xl  font-bold pb-3 yellow-color'>Support Contact</h1>
                    <div className='  p-4'>
                        <p  className='pb-3'><i class="fa-solid fa-phone-volume text-2xl pe-3  text-blue-500"></i>
                        <span className=' font-bold text-xl'>Phone</span>
                        </p>
                        <p className='ps-6'>Mobile: +917009191019</p>
                        <p className='ps-6'>Mobile: +919780008222</p>
                    </div>

                    <div className='  p-4'>
                        <p  className='pb-3'><i class="fa-regular fa-envelope text-2xl pe-3  text-blue-500"></i>
                        <span className=' font-bold text-xl'>Email</span>
                        </p>
                        <p className='ps-6 font-medium'>suppport@millioneartrack.com</p>
                        <p className='ps-6 font-medium'>vikasrathore01322.com</p>
                    </div>

                    <div className=' p-4'>
                        <p  className='pb-3'><i class=" fa-solid fa-location-dot text-2xl pe-3  text-blue-500"></i>
                        <span className=' font-bold text-xl'>Location</span>
                        </p>
                        <p className='ps-6'>Address : GROUND FLOOR F/SIDE, S-555, GALI NO 4 ARA MACHINE WALI, JOGA BAI EXTN JAMIA NAGAR OKHLA NEAR MUMTAZ MASJID, New Delhi, Delhi, 110025</p>
                        
                    </div>
              </div>
              
            </div>
            
            {/* support section end from here ..........*/}

        </div>
     </>
  ) 
}

export default Contact