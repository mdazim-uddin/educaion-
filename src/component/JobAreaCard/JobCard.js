import React, { useState } from 'react';
import FakeData from '../../FakeData';
import JobDetails from './JobDetails';

const JobCard = () => {
const [job,setJob]= useState(FakeData)
    return (
        <div className='py-9'>
            <div className=''>
            <h3 className='text-center p-5 uppercase text-4xl'>popular jobs</h3>
            </div>
            <div className='grid grid-cols-3 gap-4 p-9'>
                {
                    job.map( (jobItem) => 
                       <JobDetails pd={jobItem}></JobDetails>
                    )      
                }
            </div>
            <div className='w-80 h-14 m-auto bg-jobColor rounded-2xl '>
            <button className='pt-3  ml-24 text-white text-2xl uppercase '>view all jobs</button>
            </div>
        </div>
    );
};

export default JobCard;