import React, { useState } from 'react';
import FirstTab from './CourseDetail/AllTabs/FirstTab';
import FiveTab from './CourseDetail/AllTabs/FiveTab';
import FourTab from './CourseDetail/AllTabs/FourTab';
import SecondTab from './CourseDetail/AllTabs/SecondTab';
import ThreeTab from './CourseDetail/AllTabs/ThreeTab';
import Demo from './CourseDetail/Demo';

const TabTest = () => {

    const [activeTab, setActiveTab] = useState("Overview");

 
    const handleTab = (value) => {
        // update the state to tab1
        setActiveTab(value);
      };
     
    return (
       <>
       <div className=''>
       <ul className="flex p-2 cursor-pointer
       items-center text-xl md:text-base m-4 ">
       <li className=''
       onClick={()=>handleTab("Overview")}
     >
    <a className= {activeTab === "Overview"?'px-5 py-3 shadow-md mr-2 bg-svg text-white': 'px-5 py-3 shadow-md mr-2'}>
    Overview</a>
     </li>
     <li className=''
       onClick={()=>handleTab("Curriculum")}
     >
     <a className= {activeTab === "Curriculum"?'px-3 py-3 shadow-md mr-2 bg-svg text-white': 'px-3 py-3 shadow-md mr-2'}>Curriculum</a>
     </li>
     <li className=''
     onClick={()=>handleTab("Instructor")}
   >
   <a className= {activeTab === "Instructor"?'px-5 py-3 shadow-md mr-2 bg-svg text-white': 'px-5 py-3 shadow-md mr-2'}>Instructor</a>
   </li>
    </ul>
    <ul className='flex p-5 justify-center pl-14'>
    <li className=''
  
    onClick={()=>handleTab("Faq")}
  >
    <a className= {activeTab === "Faq"?'px-12 py-3 shadow-md mr-2 bg-svg text-white': 'px-12 py-3 shadow-md mr-2'}>Faq</a>
  </li>
  <li className=''
  onClick={()=>handleTab("Review")}
 >
 <a className= {activeTab === "Review"?'px-8 py-3 shadow-md mr-2 bg-svg text-white': 'px-8 py-3 shadow-md mr-2'}>Review</a>
 </li>
    </ul>
    <div className="outlet">
    {activeTab==="Overview" && <FirstTab /> }
    {activeTab==="Curriculum" && <SecondTab/> }
    {activeTab==="Instructor" && <ThreeTab/> }
    {activeTab==="Faq" && <FourTab/> }
    {activeTab==="Review" && <FiveTab/> }

    </div>
       </div>
       <Demo/>
       </>
    );
};

export default TabTest;