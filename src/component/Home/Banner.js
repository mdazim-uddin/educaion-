import React from 'react';

import Slider from './SliderComp'
import logo from '../../assest/image/logo.png'
import bannerLeft from '../../assest/image/bannerLeft.png'
const Banner = () => {
    return (
        <>
       
          <div className="flex">
              <div className="lg:w-1/2 lg:h-screen sm:w-2/4 sm:h-screen
               bg-cover bg-center
           bg-no-repeat bg-banner-img relative  ">
            <div className="w-full h-full opacity-20 bg-praimary absolute top-0"></div>
              <div className="w-20 h-screen bg-praimary relative">
              </div>
              <div className="absolute  sm:top-40
              text-white w-80 sm:w-60  bg-gray rounded-r-full px-8 ">
                <h4 className="text-5xl mt-3 capitalize sm:text-xl">next topper</h4>
                <p className="text-xl pb-4">read to the succes </p>
              </div>
              </div>
                <div className="bg-white lg:w-1/2 lg:h-screen 
                sm:w-2/3 sm:h-screen relative">
                    <img src={bannerLeft}
                    className="absolute h-screen md:right-0 sm:-right-0"/>

                    <div className="absolute lg:-left-24 sm:-left-12">
                    <div className="flex mt-12">
                    <div className="lg:w-52  lg:h-52 sm:w-40 sm:h-40 bg-white shadow-lg
                     text-center text-lg rounded-full lg:mr-36 sm:mr-11">
                        <p className="mt-20 uppercase ">course</p>
                    </div>
                    <div className="lg:w-52  lg:h-52 sm:w-40 sm:h-40 bg-white shadow-lg
                     text-center text-lg rounded-full">
                        <p className="mt-20 uppercase">be topper</p>
                    </div>
                    </div>
                      <div className="flex mt-12 ">
                    <div className="lg:w-52  lg:h-52 sm:w-40 sm:h-40 bg-white shadow-lg
                     text-center text-lg rounded-full lg:mr-36 sm:mr-11">
                        <p className="mt-20 uppercase ">job peparetion</p>
                    </div>
                    <div className="lg:w-52  lg:h-52 sm:w-40 sm:h-40 bg-white shadow-lg
                     text-center text-lg rounded-full">
                        <p className="mt-20 uppercase">Hire topper</p>
                    </div>
                    </div>
                    </div>
                </div>
          </div> 
         
        </>
    );
};

export default Banner;