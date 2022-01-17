import React from 'react';
import { Link } from 'react-router-dom';


const Cart = (props) => {

const {image,title,price,id} = props.pd
    return (
        <>
        
        <div className='shadow-md'>
        <Link to={"/product/"+id}
        
        >
         <div>
       <div className='border border-indigo-600 '>
       <img src={image} alt="cart-img" className='w-full h-48'/>
       </div>
       <div className='p-5'>
       <h5>{title}</h5>
       <span>price:{price}</span>
       </div>
         </div>
          </Link>
        </div>
        </>
    );
};

export default Cart;