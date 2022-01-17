import React from 'react';
import cartImg from '../../assest/image/prog.jpg'
import discussImg from '../../assest/image/d.jpg'
const DiscussItem = (props) => {
    const {name,detail}= props.discussDetail
    return (
        <>
        <div className='m-auto bg-white h-96 rounded shadow-2xl'>
        <div className='py-4'>
        <img src={cartImg} className="rounded-t-xl relative"/>
        <div className='flex'>
       <img src={discussImg} alt="discuss img" 
       className='w-10 h-10 rounded absolute top-56 ml-3'/>
        <h5 className='capitalize ml-14 px-2'>{name}</h5>
        <span>2 years ago</span>
        </div>
        <p className='py-3 ml-5 text-xl capitalize '>{detail}</p>
        </div>
       </div>
       <div>
       
       </div>
        </>
    );
};

export default DiscussItem;