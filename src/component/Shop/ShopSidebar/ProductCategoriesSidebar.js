import React from 'react';
import {ChevronRightIcon} from "@heroicons/react/outline";
import Shoes from './Shoes/Shoes';
import Skates from './Skates/Skates';


const ProductCategoriesSidebar = () => {




    return (
        <div className="py-5">
            <div className='bg-yellow-300 text-base px-5
             py-2 mb-6'>
            <h3 className=" 
             uppercase font-medium tracking-wide">PRODUCT CATEGORIES</h3>
            </div>
            <div className='text-xl uppercase'>
            <div className='flex'>
            <h5>Accessories</h5>
            <ChevronRightIcon className='h-8 w-8 ml-36'/>
            </div>
            <div className='flex'>
            <h5>Boots</h5>
            <ChevronRightIcon className='h-8 w-8 ml-52'/>
            </div>

            <div className='flex relative dropdown'>
            <h5> Shoes</h5>
            <li class="dropdown inline  hover:text-purple-700 cursor-pointer font-bold text-base uppercase tracking-wide">
            <ChevronRightIcon
            className='h-8 w-7 ml-52'/>
            <div class="dropdown-menu absolute  hidden h-auto top-0 right-0 p-4">
            <Shoes/>
            </div>
        </li>
            </div>

            <div className='flex'>
            <h5>Sandals</h5>
            <ChevronRightIcon className='h-7 w-8 ml-44'/>
            </div>

            <div className='flex relative dropdown'>
            <h5 className='pr-3'>skates</h5>
            <li class="dropdown inline   hover:text-purple-700 cursor-pointer font-bold text-base uppercase tracking-wide">
            <ChevronRightIcon
            className='h-8 w-6 ml-48'/>
            <div class="dropdown-menu absolute  hidden h-auto top-0 right-0 p-4">
            <Skates/>
            </div>
        </li>
            </div>

            <div className='flex'>
            <h5>Uncategorized</h5>
            <ChevronRightIcon className='h-8 w-7 ml-28'/>
            </div>
            </div>

        </div>
    );
};

export default ProductCategoriesSidebar;