import React from "react";
import logo from "./logo1.png"

function Footer(){

    return(

        <>          

                {/* Footer start from here */}

            <div className=" min-w-full bg-slate-900 min-h-20 p-6 ">
                 <div className="grid grid-cols-2 gap-2 text-white mobile:grid-cols-3 laptop:grid-cols-4">
                    <div className="  col-span-2 mobile:col-span-3  laptop:col-span-1">
                        
                        <div>
                             <img className="h-[30%] w-[30%] pb-5 mobile:h-[20%] mobile:w-[20%] tablets:h-[20%] tablets:w-[20%] laptop:h-[40%] laptop:w-[40%]" src={logo} alt="" />
                        </div>
                        <div className="text-slate-300">
                            <p>
                            The Millionaire Track is building the foundation of all learners. We are providing a platform where all age groups are welcome to enhance their skills.</p>
                            <p>
                            "Since education is the answer to all the questions we are doing our best to incorporate them all"</p>
                        </div>
                        <div className=" flex text-2xl text-white pt-3 flex-wrap">
                            <div className="h-12 w-12 bg-slate-600 flex justify-center items-center rounded-full  "><i class="fa-brands fa-facebook"></i></div>
                            <div className="h-12 w-12 bg-slate-600 flex justify-center items-center rounded-full ms-3 "><i class="fa-brands fa-twitter"></i></div>
                            <div className="h-12 w-12 bg-slate-600 flex justify-center items-center rounded-full ms-3 "><i class="fa-brands fa-instagram"></i></div>
                            <div className="h-12 w-12 bg-slate-600 flex justify-center items-center rounded-full ms-3 "><i class="fa-brands fa-youtube"></i></div>
                        </div>
                    </div>

                    {/* policy coloum...........*/}
                    <div className=" mobile:flex hidden laptop:ps-10">
                       <div className="pt-10">
                           <h1 className=" mobile:text-2xl tablets:text-3xl pb-4  font-medium">Policy</h1>
                            <ul className="  text-lg">
                                 <li><a href="#">Refund Policy</a></li>
                                 <li><a href="#">Term And Condition</a></li>
                                 <li><a href="#">Disclaimer</a></li>
                                 <li><a href="#">Support</a></li>
                                <li> <a href="#"> Privercy Policy</a></li>
                            </ul>

                       </div>
                    </div>

                     {/*support coloum  */}
                    <div className=" flex laptop:ps-4">
                       <div className="pt-10 ps-4">
                           <h1 className=" mobile:text-2xl tablets:text-3xl pb-4 text-2xl font-medium">Support</h1>
                            <ul className=" ps-3 text-lg">
                                 <li><a href="#">Home</a></li>
                                 <li><a href="#">About</a></li>
                                 <li><a href="#">Courses</a></li>
                                 <li><a href="#">Support</a></li>
                                <li> <a href="#">Contact Us</a></li>
                            </ul>

                       </div>
                    </div>

                  {/*usefull links coloum  */}
                    <div className=" flex justify-center">
                       <div className="pt-10">
                          <h1 className=" mobile:text-2xl tablets:text-3xl pb-4 text-2xl font-medium">Usefull Link</h1>
                            <ul className="ps-5 text-lg">
                                 <li><a href="#">About</a></li>
                                 <li><a href="#">Career</a></li>
                                 <li><a href="#">Become An Instructor</a></li>
                            </ul>
                       </div>
                    </div>

                     {/*copy write coloum*/}
                    <div className=" col-span-2 mobile:col-span-3 laptop:col-span-4">
                        <div className=" text-center pt-8">
                            <p>All Rights Reserved @ 2024 | Millionear Track</p>
                        </div>
                    </div>
                 </div>

            </div>
        </>
    )
}
export default Footer