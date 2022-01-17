import React from 'react';

const Demo = () => {
    return (
       
         <>
        <div className='shadow-xl'>
        <div className='w-full h-auto  bg-cover bg-center
        bg-no-repeat bg-bg-img relative'>
        <div className="w-full h-full opacity-20 bg-black absolute top-0"></div>
        <div className='p-20'>
        <svg className="w-30 h-20 ml-10" fill="none" stroke="#00AEEF" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9
         0 11-18 0 9 9 0 0118 0z" /></svg>
         <p className='text-white text-2xl'>Preview This Course</p>
        </div>
        </div>

        <div className='p-8'>
        <div className='flex  pt-3'>
        <h1 className='text-xl capitalize'>live class</h1>
        <span className='ml-48'>40+</span>
        </div>
        <div className='flex  pt-3'>
        <h1 className='text-xl capitalize'>quize</h1>
        <span className='ml-56'>10+</span>
        </div>
        <div className='flex  pt-3'>
        <h1 className='text-xl capitalize'>problem solving</h1>
        <span className='ml-32 capitalize'>regular</span>
        </div>
        <div className='flex  pt-3'>
        <h1 className='text-xl capitalize'>blog  reading</h1>
        <span className='ml-40 capitalize'>regular</span>
        </div>
        <div className='flex pt-3'>
        <h1 className='text-xl capitalize'>duration</h1>
        <span className='ml-48 capitalize'>3.5 month</span>
        </div>
        </div>
        </div>
         </>
    );
};

export default Demo;