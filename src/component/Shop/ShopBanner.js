import React from 'react';
const ShopBanner = () => {
    return (
        <div className='h-80 bg-cover bg-center 
        bg-no-repeat bg-bannerShop'>
            <div className='flex justify-center '>
                <ul className='mt-24'>
                <li>
                <a className='text-xl mr-4'>Home</a>
                
                <a className='text-xl'>Shop</a>
                </li>
                </ul>
            </div>
        </div>
    );
};

export default ShopBanner;