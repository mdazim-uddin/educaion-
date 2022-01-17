import React, {useState} from 'react';
import {ViewGridIcon} from "@heroicons/react/outline";
import {ViewListIcon} from "@heroicons/react/outline";
import {connect} from 'react-redux'
import {sortItem, highItem} from '../../../redux/Shopping/shopping-actions'
const Sorting = (props) => {
//     const [optionData, setOptionData] = useState('')
//    if(optionData==="low") {
//        props.sortByPrice();
//    }
//    if (optionData==="high") {
//     props.highByPrice();
//    }

    return (
        <div className='flex mt-6'>
            <div className='flex w-8/12 mt-5 '>
                <ViewGridIcon 
                className='w-10 h-10 shadow-md mx-4 text-4xl cursor-pointer'/>
                <ViewListIcon className='w-10 h-10 shadow-md mx-4 text-4xl cursor-pointer'/>
                <p>Showing 1–12 of 23 resultss</p>
            </div>

                <div className="flex ">
                <h5 className='text-xl pr-11 mt-5'>sort by</h5>
                <select onChange={(e)=>props.sortByPrice(e.target.value)} class="form-select appearance-none
                block
                w-56
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding bg-no-repeat
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                <option>Default Sorting</option>
                <option  value="popularity">Sort by popularity</option>
                <option value="average">Sort by average rating </option>
                <option value="latest">Sort by latest</option>
                <option  value="low">Sort by price: low to high</option>
                <option  value="high">Sort by price: high to low </option>
              </select>
            </div>
        </div>
    );
};


const mapStateToProps = state =>{
    return {
        sortItem: state.shop.sortItem
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        sortByPrice: (v)=> dispatch(sortItem(v)),
    }
}


export default connect(mapStateToProps,mapDispatchToProps) (Sorting);