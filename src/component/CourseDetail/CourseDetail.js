import React from 'react';
import img from '../../assest/image/banner.jpg'
import Demo from './Demo';
import TabsCom from './TabsCom';


const CourseDetail = () => {
    return (
        <>
        <div className='w-full bg-white shadow-lg 
       h-56 relative mb-40 py-36 '>
            <img src={img} alt="img"
             className='absolute top-0 left-0 w-20 h-full'></img>

            <p className='text-center text-5xl uppercase sm:text-2xl'>if there is a skill</p>
            <p className='text-center text-5xl uppercase sm:text-2xl'>the job will find you</p>

            <img src={img} alt="img"
            className='absolute top-0 right-0 w-20 h-full'></img>

        <div className='w-3/4 m-auto h-56 absolute top-4  h-56 bg-cover bg-center
        bg-no-repeat bg-bg-img  relative '>

        <div className='w-full absolute top-20 bg-green opacity-70'>
            <p className='text-white text-center p-7 text-4xl'>javascript zero to hero</p>
        </div>
        </div>
        </div>
            <div className='flex flex-col md:flex-row py-14 px-12'>
                <div className='sm:w-full'>
                <TabsCom/>
                </div>
                <div className='ml-20'>
                  <Demo/>
                </div>
            </div>
        </>
    );
};

export default CourseDetail;