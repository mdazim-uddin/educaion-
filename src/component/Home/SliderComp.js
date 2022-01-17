import React, {useState} from 'react';
import Carousel from "react-elastic-carousel";
import CartItem from './CartItem'
import FakeData from '../../FakeData'
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const SliderComp = () => {

const [cart,setCart] = useState(FakeData)

  return (
    <div className=''>
      <div className="flex 
      items-center justify-center h-screen py-48 sm:mt-36" >
        <Carousel breakPoints={breakPoints}>
         
            {
               cart.map(item=>
                <div className="mr-3">
                   <CartItem 
                 key={item.key} 
                 cart={item}>  
               </CartItem>
                 </div>
            
                      
               )
         }

        </Carousel>
      </div>
  </div>
  );
};

export default SliderComp;