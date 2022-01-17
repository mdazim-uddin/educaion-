import React from 'react';
import { BsFacebook ,BsTwitter,BsInstagram} from 'react-icons/bs';
import {IoMdNotifications} from 'react-icons/io';
const Footer = () => {
    return (
        <div className='h-screen bg-cover bg-center
        bg-no-repeat bg-footerImg'>
            <div className='grid grid-cols-2'>
            <div className='mt-96 pl-14'>
                <h2 className='text-white uppercase text-4xl pb-2'>next topper</h2>
                <p className='text-xl text-white'>banani, dhaka, bangladeash</p>
                <p className='text-white'>phon :<span className='pl-2'>+88 01723557105</span></p>
                <p className='text-white'>gmail<span>+support@nexttopper.com</span></p>
            </div>
            <div className='mt-96 w-full'>
                <div className='flex text-white'>
                   <div className='w-16 h-11'>
                   <BsFacebook className='text-4xl'/>
                   </div>
                    <div className='w-16 h-11'>
                    <BsTwitter className='text-4xl'/>
                    </div>
                    <div className='w-16 h-11'>
                    <BsInstagram className='text-4xl'/>
                    </div>
                    <div className='w-16 h-11'>
                    <IoMdNotifications className='text-4xl'/>
                    </div>
                </div>
            </div>
            </div>
            <div>
            <p className='text-white text-center mt-32
            leading-3 tracking-wide'>coppy right next topper, all right</p>
            </div>
        </div>
    );
};

export default Footer;