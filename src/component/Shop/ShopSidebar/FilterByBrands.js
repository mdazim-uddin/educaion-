import React from 'react';
import {connect} from 'react-redux'
import {filterByBrand} from '../../../redux/Shopping/shopping-actions'
const FilterByBrands = (props) => {

    const checkBoxHandeler = (e)=>{
        props.filterByBrand(e.target.value)
    }

    return (
        <div>
        <div className='bg-yellow-300 text-base px-5
             py-2 mb-6'>
            <h3 className=" 
             uppercase font-medium tracking-wide">FILTER BY BRANDS</h3>
            </div>
           <div>
           <label className="mt-3 block">
           <input 
           value="adidas"
           type="checkbox"
           onChange={checkBoxHandeler}
           className="h-3 w-3 rounded-full" />
           <span className="ml-2 uppercase">Adidas</span>
         </label>
         <label className="mt-3 block">
         <input
         value="diamond" onChange={checkBoxHandeler}
          type="checkbox" className="h-3 w-3  rounded-full" />
         <span className="ml-2 uppercase">Diamond</span>
       </label>
       <label className="mt-3 block">
       <input
       value="etnies" onChange={checkBoxHandeler}
       type="checkbox" className="h-3 w-3  rounded-full" />
       <span className="ml-2 uppercase">Etnies</span>
       </label>
           </div>
        </div>
    );
};

const mapStateToProps = state =>{
    return {
      filterByBrand: state.shop.filterByBrand
    }
  }
  
  const mapDispatchToProps = dispatch =>{
    return {
        filterByBrand: (v)=> dispatch(filterByBrand(v)),
    }
  }



export default connect(mapStateToProps,mapDispatchToProps) ( FilterByBrands);