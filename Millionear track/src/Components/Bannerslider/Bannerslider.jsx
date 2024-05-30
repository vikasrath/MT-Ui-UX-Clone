import React, { useEffect } from 'react'
import Banner1 from './banner1.png'
import Banner2 from './banner2.png'
import Banner3 from './banner3.png'
import Banner4 from './banner4.png'
import Banner5 from './banner5.png'
import { useState } from 'react'
import "./imgslider.css"
function Bannerslider() {
 
  


  const [currentbanner,setcurrentbanner]=useState(0)
    const allimages=[ Banner1,Banner2,Banner3,Banner4,Banner5]

    //  this is for previous Button
    function Prev(){
      setcurrentbanner((currentbanner)=>{
        if (currentbanner===0) {
         return currentbanner=allimages.length-1;
        }
        else{
          return  currentbanner-1;
        }
      })
    }
  //  this is for Next Button

    function Next(){
      const interval=setcurrentbanner((currentbanner)=>{
       if (currentbanner===allimages.length-1)  
        return currentbanner=0;
       else   
        return  currentbanner+1;
       
    })}

    //  this is for change banner every 3 second Button

    useEffect(()=>{
          let interval=setInterval(()=>{
            Next();
          },3000)
          return () => clearInterval(interval)
    },[currentbanner])

     return(
      <>
        <div className='w-full imgslider relative'>

            {allimages.map((item,index)=>{
              return(
                  <div key={index}
                   className=' w-full imgslider' 
                  style={{ display : index===currentbanner?"block" :"none",
                          transition: 'opacity 2s ease-in',
                          opacity: index === currentbanner ? 1 : 0,}}
                  >
                       <img src={item} alt=" " />
                 </div>)
            })}

             <div className=' w-full mx-auto absolute  top-[50%] bg-transparent  '>
                <button className='  text-2xl px-2 py-1  mobile:text-4xl  mobile:px-4  mobile:py-2  text-blue-950  bg-slate-200 outline-none rounded-lg' onClick={Prev}>
                    <i class="fa-solid fa-caret-left"></i>
                  </button>
                <button className='  text-2xl px-2 py-1 mobile:text-4xl absolute right-0  mobile:px-4  mobile:py-2 text-blue-950  bg-slate-200 outline-none rounded-lg' onClick={Next}><i class="fa-solid fa-caret-right"></i></button>
              </div>
        </div>

       
    </>
     );
    }
export default Bannerslider;

