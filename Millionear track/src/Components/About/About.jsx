import React from 'react'
import Aboutbanner from "./aboutusimg.png"
import about4x from './about@4x.png'


function About() {
  return (
     <> 
          
        <div className='w-full grid grid-cols-1 tablets:grid-cols-2'>
            <div className=' tablets:col-span-2'>
                <img src={Aboutbanner} alt="" />
            </div>
            <div className='p-4  tablets:pt-16 tablets:w-[75%] mx-auto'>
                <p>
                <p className=' text-lg font-medium pb-3'>
                Welcome to Millionaire Track (YIEP), the leading ed-Tech platform for aspiring individuals like you!
                </p>
                <p className='mt-2'>
                If you're seeking a successful career and a lifetime of happiness, you've come to the right place. At Millionaire Track (YIEP), we offer the finest learning experience and unparalleled growth opportunities to help you unleash your full potential by providing door-to-door learning, ensuring that knowledge and guidance reach every individual.

                </p>

               <p className='mt-2'>
               As digitization keeps revolutionizing the lives of ordinary, we aim to empower youth worldwide by inculcating entrepreneurship and leadership qualities through the power of Millionaire Track (YIEP). We have empowered countless individuals to thrive, and now it’s your turn to explore your possibilities.

               </p>
               <p className=' text-2xl font-medium pt-3 pb-3'>
                Why Millionaire Track (YIEP) ?
               </p>
               <p>
               <span className=' font-medium'>Expert instructors :</span> Our instructors are experts in their field and have a wealth of experience to share with you.
               </p>

                <p>
             <span className=' font-medium'>Flexible learning option:</span>You can learn at your own pace and on your own time.
                </p>

               <p>
               <span className=' font-medium'>Affordable pricing:</span> Our courses are a fraction of the cost of traditional education.

               </p>
               <p> <span className=' font-medium'>A supportive community: </span>You will be part of a supportive community of learners who are all working towards their goals.

               The long awaited opportunity has arrived and it’s the right time to enroll in our amazing courses.</p>

               <p className=' font-bold'>
               Join Millionaire Track (YIEP) today and embark on a journey that will transform your career. Together, Lets make your dream a reality.
               </p>
                </p>
            </div>
            <div className='p-10   tablets:p-12 tablets:flex tablets:justify-center tablets:items-center tablets:w-[75%] '>
                <img src={about4x} alt="" />
            </div>
        </div>
     </>
  )
}

export default About