import React from 'react';
import Products from './Products/Products';
import ShopBanner from './ShopBanner';
import ShopSidebar from './ShopSidebar/ShopSidebar';

const Shop = () => {
    return (
        <div>
            <ShopBanner/>
            <div className='flex'>
            <div className='w-1/4 h-auto '>
            <ShopSidebar/>
            </div>
            <div className='w-3/4'>
            <Products/>
            </div>
            </div>
        </div>
    );
};

export default Shop;