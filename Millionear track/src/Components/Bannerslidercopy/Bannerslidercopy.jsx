// import React, { useEffect } from 'react'
// import Banner1 from './banner1.png'
// import Banner2 from './banner2.png'
// import Banner3 from './banner3.png'
// import Banner4 from './banner4.png'
// import Banner5 from './banner5.png'
// import { useState } from 'react'
// import "./imgslidercopy.css"
// function Bannerslider2() {
 
  


//   const [currentbanner,setcurrentbanner]=useState(0)
//     const allimages=[ Banner1,Banner2,Banner3,Banner4,Banner5]


//     function sliding(){
//       {allimages.map((img)=>{
//         img.style.transform=`translateX(-${currentbanner*100}%)`;
//       })}
//   }
    

//     //  this is for previous Button
//     function Prev(){
      
//     }
//   //  this is for Next Button

//     function Next(){
//         setcurrentbanner((prevbanner)=>{
//           return prevbanner +1;


//         })
//           sliding();
//       }

//     //  this is for change banner every 3 second Button

//      return(
//       <>
//         <div className=' image-cont relative'>
//            {allimages.map((item,index)=>{
//              return(
//                 <img src={item} alt="" className='absolute'
//                 style={{left:`${index*100}%`}}
//                 />

//              )
//            })}
//         </div>

//          <div className=' w-full mx-auto relative'>
//           <button className='  px-7 py-4 text-white bg-green-600 outline-none rounded-lg' onClick={Prev}>Prev</button>
//           <button className='  absolute right-0 px-7 py-4 text-white bg-green-600 outline-none rounded-lg' onClick={Next}>Next</button>
//         </div> 
//     </>
//      );
//     }
// export default Bannerslider2;


import React, { useEffect, useState } from 'react';
import Banner1 from './banner1.png';
import Banner2 from './banner2.png';
import Banner3 from './banner3.png';
import Banner4 from './banner4.png';
import Banner5 from './banner5.png';
import './imgslidercopy.css';

function Bannerslider2() {
  const [currentBanner, setCurrentBanner] = useState(0);
  const allImages = [Banner1, Banner2, Banner3, Banner4, Banner5];

  // Function to go to previous banner
  function prev() {
    setCurrentBanner((prevBanner) => (prevBanner === 0 ? allImages.length - 1 : prevBanner - 1));
  }

  // Function to go to next banner
  function next() {
    setCurrentBanner((prevBanner) => (prevBanner === allImages.length - 1 ? 0 : prevBanner + 1));
  }

  // Slide images when currentBanner changes
  useEffect(() => {
    const container = document.querySelector('.image-cont');
    container.style.transform = `translateX(-${currentBanner * 100}%)`;
  }, [currentBanner]);

  return (
    <>
      <div className="image-cont">
        {allImages.map((item, index) => (
          <img
            key={index}
            src={item}
            alt=""
            className="slide-image"
            style={{left:`${index*100}%`}}
          />
        ))}
      </div>

      <div className="button-container">
        <button className="prev-button" onClick={prev}>Prev</button>
        <button className="next-button" onClick={next}>Next</button>
      </div>
    </>
  );
}

export default Bannerslider2;
