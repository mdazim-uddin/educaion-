import React, { useState } from 'react';
import FirstTab from './AllTabs/FirstTab';
import FiveTab from './AllTabs/FiveTab';
import FourTab from './AllTabs/FourTab';
import SecondTab from './AllTabs/SecondTab';
import ThreeTab from './AllTabs/ThreeTab';

const TabsCom = () => {
    const [activeTab, setActiveTab] = useState("Overview");

 
    const handleTab = (value) => {
        // update the state to tab1
        setActiveTab(value);
      };
     
    return (
      <>
      <ul className="flex cursor-pointer
       items-center text-xl md:text-base mt-4 ">
      <li
        onClick={()=>handleTab("Overview")}
      >
     <a className= {activeTab === "Overview"?'px-5 py-3 shadow-md mr-2 bg-svg text-white': 'px-5 py-3 shadow-md mr-2'}>
     Overview</a>
      </li>
      <li
        onClick={()=>handleTab("Curriculum")}
      >
      <a className= {activeTab === "Curriculum"?'px-5 py-3 shadow-md mr-2 bg-svg text-white': 'px-5 py-3 shadow-md mr-2'}>Curriculum</a>
      </li>
      <li
      onClick={()=>handleTab("Instructor")}
    >
    <a className= {activeTab === "Instructor"?'px-5 py-3 shadow-md mr-2 bg-svg text-white': 'px-5 py-3 shadow-md mr-2'}>Instructor</a>
    </li>
    <li
   
    onClick={()=>handleTab("Faq")}
  >
    <a className= {activeTab === "Faq"?'px-5 py-3 shadow-md mr-2 bg-svg text-white': 'px-5 py-3 shadow-md mr-2'}>Faq</a>
  </li>
  <li
  onClick={()=>handleTab("Review")}
>
 <a className= {activeTab === "Review"?'px-5 py-3 shadow-md mr-2 bg-svg text-white': 'px-5 py-3 shadow-md mr-2'}>Review</a>
</li>
    </ul>
      <div className="outlet">
      {activeTab==="Overview" && <FirstTab /> }
      {activeTab==="Curriculum" && <SecondTab /> }
      {activeTab==="Instructor" && <ThreeTab/> }
      {activeTab==="Faq" && <FourTab/> }
      {activeTab==="Review" && <FiveTab/> }

      </div>
    </>
    );
};

export default TabsCom;