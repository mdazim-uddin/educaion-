import React from 'react';
import cartImg from '../../assest/image/prog.jpg'

const CartItem = (props) => {

const {title,descreption,category,liveClass,price}= props.cart

    return (
          
            <div className='m-auto bg-white h-96 sm:h-auto   rounded shadow-md '>
                <img src={cartImg} className="rounded-t-xl"/>
                <div className="p-4">
                <p className=''>{title}</p>
                <p className='text-xl pb-2 '>{descreption}</p>
                <div className='pb-2'>
                <input type="radio"/> <span>{category}</span>
                </div>
                <div className='flex'>
                <input className='mt-2' type="radio"/>
                <span className='pl-3'>{liveClass}</span>
                <p className='pl-6'>{price}</p>
                </div>
              </div>
            </div>
            
       
    );
};

export default CartItem;
