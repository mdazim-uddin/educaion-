import React from 'react';
import {connect} from 'react-redux'
import {filterByColor} from '../../../redux/Shopping/shopping-actions'
const FilterByColor = (props) => {
 
  const checkBoxHandeler = (e)=>{
      props.filterByColor(e.target.value)
  }



    return (
        <div className='py-9'>
        <div className='bg-yellow-300 text-base px-5
            py-2 mb-6'>
                <h4  className=" 
                uppercase font-medium tracking-wide">FILTER BY COLOR</h4>
            </div>
            <form >
            <label className="mt-3 block">
            <input value="black" onChange={checkBoxHandeler}
             type="checkbox" 
            className="h-6 w-6 text-black rounded-full" 
            />
            <span className="ml-2 uppercase">Black</span>
          </label>
          <label className="mt-3 block">
          <input value="grown" 
          onChange={checkBoxHandeler}
          type="checkbox" className="h-6 w-6 rounded-full" />
          <span className="ml-2 uppercase">grown</span>
        </label>
        <label className="mt-3 block">
        <input value="falu" 
        onChange={checkBoxHandeler}
        type="checkbox" className="h-6 w-6 rounded-full" />
        <span className="ml-2 uppercase">Falu red</span>
      </label>
      <label className="mt-3 block">
      <input value="white"
      onChange={checkBoxHandeler} 
      type="checkbox" className="h-6 w-6 rounded-full" />
      <span className="ml-2 uppercase">White</span>
    </label>
    <label className="mt-3 block">
    <input value="yellow"
    onChange={checkBoxHandeler}
     type="checkbox" className="h-6 w-6 rounded-full" />
    <span className="ml-2 uppercase">Yellow</span>
    </label>
            </form>
        </div>
    );
};


const mapStateToProps = state =>{
  return {
    filterByColor: state.shop.filterByColor
  }
}

const mapDispatchToProps = dispatch =>{
  return {
      filterByColor: (v)=> dispatch(filterByColor(v)),
  }
}


export default connect(mapStateToProps,mapDispatchToProps) (FilterByColor);