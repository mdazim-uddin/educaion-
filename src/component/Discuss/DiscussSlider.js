import React, {useState} from 'react';
import Carousel from "react-elastic-carousel";
import FakeData from '../../FakeData'
import DiscussItem from './DiscussItem';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const DiscussSlider = () => {

    const [discuss,setDiscuss] = useState(FakeData)

    return (
        <>
        <div className="flex 
        items-center justify-center h-screen" >
          <Carousel breakPoints={breakPoints}>
           
              {
                 discuss.map(discuss=>
                  <div className="mr-3">
                     <DiscussItem 
                   key={discuss.id} 
                   discussDetail={discuss}>  
                 </DiscussItem>
                   </div>
              
                        
                 )
           }
  
          </Carousel>
        </div>
        </>
    );
};

export default DiscussSlider;