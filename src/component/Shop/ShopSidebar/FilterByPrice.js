import React, { useState } from 'react';
import { Range } from 'react-range';
import {connect} from 'react-redux'
import {filterByPrice} from '../../../redux/Shopping/shopping-actions'
const FilterByPrice = (props) => {
    const [values, setValues] = useState([0])
  
    const priceHandler=()=>{
        props.filterByPrice(values[0])
    }
    return (
        <div className='py-11'>
            <div className='bg-yellow-300 text-base px-5
            py-2 mb-6'>
                <h4  className=" 
                uppercase font-medium tracking-wide">FILTER BY PRICE</h4>
            </div>
            <div>

              
 <Range
step={1}
min={0}
max={300}

values={values}
onChange={(values) => {
    setValues(values)
}}
renderTrack={({ props, children }) => (
    <div
        {...props}
        className="w-full  h-3 pr-2 my-11 bg-blue-200 rounded-md"
    >
        {children}
    </div>
)}
renderThumb={({ props }) => (
    <div
        {...props}
        className="w-5 h-5  transform translate-x-10 bg-indigo-500 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    />
)}
/>

<div className='flex my-8'>
<p className='text-xl'>Price:<span>{values[0]}px</span></p>
<div className=''>
<button onClick={ priceHandler } className='bg-svg ml-10 
text-white text-3xl uppercase py-1 px-4 '>Filter</button>
</div>
</div>
              
            </div>
        </div>
    );
};

const mapStateToProps = state =>{
    return {
      filterByPrice: state.shop.filterByPrice
    }
  }
  
  const mapDispatchToProps = dispatch =>{
    return {
        filterByPrice: (v)=> dispatch(filterByPrice(v)),
    }
  }


export default connect(mapStateToProps,mapDispatchToProps) (FilterByPrice);