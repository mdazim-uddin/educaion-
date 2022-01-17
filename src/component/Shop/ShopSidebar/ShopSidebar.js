import React from 'react';
import FilterByBrands from './FilterByBrands';
import FilterByColor from './FilterByColor';
import FilterByPrice from './FilterByPrice';
import ProductCategoriesSidebar from './ProductCategoriesSidebar';

const ShopSidebar = () => {
    return (
        <div className='p-10'>
            <ProductCategoriesSidebar/>
            <FilterByPrice/>
            <FilterByColor/>
            <FilterByBrands/>
        </div>
    );
};

export default ShopSidebar;