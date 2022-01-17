import React, { useState, useEffect } from 'react';
import {useParams} from "react-router-dom";
import {connect} from 'react-redux'
import { HeartIcon} from "@heroicons/react/outline";
import { IoIosGitCompare } from 'react-icons/io';
import { BsFacebook ,BsTwitter,BsInstagram} from 'react-icons/bs';
import {IoMdNotifications} from 'react-icons/io';
import Modal from 'react-modal';


Modal.setAppElement('#root');


const CartModal = (props,{modalIsOpen,closeModal}) => {
    const [data, setData] = useState([
        ...props.sortItem
    ])

    useEffect(() => {
        setData([...props.sortItem])
    },[data])

    const {productKey} = useParams()

    const product =data.find(pd=>pd.id == productKey)

    const {image,price,title,description}=product

    return (
    
      <>
      <div className='grid grid-cols-2'>
      <div className=''>
      <img src={image} alt="image"/>

      </div>
      <div className='pr-10'>
      <p className='text-xl'>Price: $ <span className='text-4xl'>{price}</span></p>
      <p className='text-2xl '>{description}</p>
      <div className='w-48 text-center my-6 bg-yellow-600'>
      <button className=' p-3'>BUY NOW</button>
      </div>
      <div className='flex mb-5'>
      <div className='flex'>
      <HeartIcon className='w-12 pr-4'/>
      <h5 className='text-2xl'>Add to Wishlist</h5>
      </div>
      <div className='flex'>
      <IoIosGitCompare className='text-4xl mx-4'/>
      <h5 className='text-2xl'>Compare</h5>
      </div>
      </div>
      <div className='py-8'>
      <p>SKU: <span>external-affiliate</span></p>
      <p>CATEGORIES <span>Shoes, Men, Boots</span></p>
      <p>TAGS <span>Boots, Men shoes, Shoes</span></p>
      </div>

      <div className='flex'>
           <h5>SHARE THIS...</h5>
           <div className='flex pl-8'>
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
   
     </div>
   
      </>
    
    );
};

const mapStateToProps = state =>{
    return {
        sortItem: state.shop.sortItem
    }
}


export default connect(mapStateToProps) (CartModal);