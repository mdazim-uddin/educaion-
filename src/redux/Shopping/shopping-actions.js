import * as actionTypes from "./shopping-types";

export const sortItem = (sort) => {
    return {
      type: actionTypes.SORT_ITEM,
      payload:sort
     
    };
  };

  export const highItem = () => {
    return {
      type: actionTypes.HIGH_ITEM,
    };
  };

  export const filterByColor = (color) => {
    return {
      type: actionTypes.FILTER_BY_COLOR,
      payload:color
     
    };
  };

  
  export const filterByBrand = (brand) => {
    return {
      type: actionTypes.FILTER_BY_BRAND,
      payload:brand
     
    };
  };

  export const filterByPrice = (price) => {
    console.log("action",price)
    return {
      type: actionTypes.FILTER_BY_PRICE,
      payload:price
     
    };
  };

  export const dynamicProduct = () => {
    console.log("action")
    return {
      type: actionTypes.DYNAMIC_PRODUCT,
    };
  };



  export const showModal=  ({ modalProps, modalType }) => dispatch => {
    dispatch({
      type: actionTypes.SHOW_MODAL,
      modalProps,
      modalType
    })
  }

  export const hideModal = () => dispatch => {
    dispatch({
      type: actionTypes.HIDE_MODAL
    })
  }

