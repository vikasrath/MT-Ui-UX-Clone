
import React from 'react';
import exploreimg from './212.png';
import explore2 from './gp6.png';
import './style.css';

function Card({ title, image, msg }) {
  // console.log("Props received in Card component:", { title, image, msg });

  return (
    <>
    
      <div className="card-cont mx-auto p-8 min-w-[70%] mobile:w-[65%] tablets:w-full tablets:p-7 tablets:flex laptop:w-full laptop:p-8  mt-9 ">
        <div className="card p-2 tablets:w-full tablets:p-2 shadow-xl">
          <div className="min-h-50 tablets:min-h-40 tablets:flex">
            <div className="img-cont flex tablets:w-[44%] laptop:w-[46%]">
              <div className="pt-4 w-[60%] laptop:p-4">
                <img src={exploreimg} alt="" className="" />
                <h3 className="title tablets:mt-3 tablets:text-lg">{title}</h3>
                <p className="align-text-bottom mobile:pb-2 mobile:pt-3 tablets:hidden">{msg}</p>
              </div>
              <div className="w-[40%] relative tablets:flex tablets:justify-center tablets:items-center laptop:p-7">
                <img src={image} alt="" className="laptop:h-[70%] laptop:w-[70%] absolute bottom-0 tablets:bottom-auto" />
              </div>
            </div>
            <div className="rating-cont tablets:w-[26%] laptop:w-[29%] tablets:relative">
              <div className="tablets:absolute tablets:top-2 tablets:left-2">
                <p className="align-text-bottom pt-3 tablets:block hidden font-medium">{msg}</p>
                <div className="hidden laptop:block laptop:mt-5">
                  <img className="laptop:h-full laptop:w-[75%] laptop:pb-2" src={explore2} alt="" />
                </div>
                <div className="laptop:flex laptop:justify-between laptop:w-[75%]">
                  <div>
                    <span><i className="fa-solid fa-star yellow-color"></i></span>
                    <span><i className="fa-solid fa-star yellow-color"></i></span>
                    <span><i className="fa-solid fa-star yellow-color"></i></span>
                    <span><i className="fa-solid fa-star-half-stroke yellow-color"></i></span>
                  </div>
                  <div className="price mobile:pt-3 laptop:p-0 tracking-wide">
                    <span>
                      <i className="fa-solid fa-indian-rupee-sign price-icon"></i>
                      <del className="del-price">1000</del>
                      <i className="fa-solid fa-indian-rupee-sign price-icon ps-2"></i>
                      <span className="del-price">399/-</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="button-cont p-5 tablets:w-[30%] laptop:p-10 laptop:w-[25%]">
              <button className="btn w-full h-10 rounded-full hover:bg-blue-700 hover:border-none hover:text-white font-bold">View details</button>
              <button className="btn font-bold w-full h-10 rounded-full bg-yellow-color mt-4">Enroll Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
