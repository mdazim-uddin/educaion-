import React from 'react';

const JobDetails = (props) => {
const {jobTitle,jobDetails,location, 
    jobType,salary,skill,node,react,
    next,express,docor,mongo}=props.pd
    return (
        <div className='flex shadow-md'>
            <div className=' bg-jobColor w-56  mb-8 ml-12 h-64  rounded shadow-md '>
               <div className='p-4'>
               <h3 className='text-svg text-xl capitalize pb-2 '>{jobTitle}</h3>
               <p className='text-white text-base capitalize'>{jobDetails}</p>
               <p className='text-white text-base capitalize'>{location}</p>
               <div className='py-4'>
                   <p className='text-white text-base capitalize'>{jobType}</p>
                   <p className='text-white text-base capitalize'>{salary}</p>
               </div>
               <button className='text-svg text-4xl sm:text-xl'>Apply now</button>
               </div>
            </div>
            <div className='p-5'>
                <h4 className='uppercase text-xl text-jobColor'>{skill}</h4>
                <label className="mt-3 block">
                <input type="checkbox" class="w-3 h-3 rounded-sm" />
                <span className="ml-2 uppercase">{node}</span>
              </label>
              <label className="mt-3 block">
              <input type="checkbox" class="w-3 h-3 rounded-sm" />
              <span className="ml-2 uppercase">{react}</span>
            </label>
            <label className="mt-3 block">
            <input type="checkbox" class="w-3 h-3 rounded-sm" />
            <span className="ml-2 uppercase">{next}</span>
          </label>
          <label className="mt-3 block">
          <input type="checkbox" class="w-3 h-3 rounded-sm" />
          <span className="ml-2 uppercase">{express}</span>
        </label>
        <label className="block">
        <input type="checkbox" class="w-3 h-3 rounded-sm" />
        <span className="ml-2 uppercase">{docor}</span>
      </label>
      <label className="mt-3 block">
      <input type="checkbox" class="w-3 h-3 rounded-sm" />
      <span className="ml-2 uppercase">{mongo}</span>
    </label>
            </div>
        </div>
    );
};

export default JobDetails;