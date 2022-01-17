import ShopData from "../../ShopData";
import { sortItem } from "./shopping-actions";
import {FILTER_BY_BRAND, FILTER_BY_PRICE, HIDE_MODAL, SHOW_MODAL, SORT_ITEM} from "./shopping-types";
import {HIGH_ITEM} from "./shopping-types";
import {FILTER_BY_COLOR} from "./shopping-types";

const initialState = {
    sortItem : ShopData,
    modalType: null,
    modalProps: {
      open: false
    }
}

const shopReducer = (state = initialState, action) => {
    switch (action.type) {
        case SORT_ITEM:
            if (action.payload === "low") {
               return {sortItem: state.sortItem.sort((a,b)=> a.price - b.price)}
            } else if(action.payload === "high") {
                return {
                    sortItem: state.sortItem.sort((a,b)=>b.price - a.price)
                };
            }
            else if(action.payload === "sellCount") {
                return {
                    sortItem: state.sortItem.sort((a,b)=>b.price - a.price)
                };
            }
            else if(action.payload === "createdAt") {
                return {
                    sortItem: state.sortItem.sort((a,b)=>b.price - a.price)
                };
            }

          case HIGH_ITEM:
            return {
                sortItem: state.sortItem.sort((a,b)=>b.price - a.price)
            }

            case FILTER_BY_COLOR:
                return {
                    sortItem: initialState.sortItem.filter(pd=> {
                     return  pd.color === action.payload
                    })
                };

                case FILTER_BY_BRAND:
                    return {
                        sortItem: initialState.sortItem.filter(pd=> {
                         return  pd.brand === action.payload
                        })
                    };

                    case FILTER_BY_PRICE:
                        return {
                            sortItem: initialState.sortItem.filter(pd=> {
                             return  pd.price >= action.payload
                            })
                        };


        case SHOW_MODAL:
      return {
        modalProps: action.modalProps,
        modalType: action.modalType,
        type: action.type
      }

      case HIDE_MODAL:
      return initialState

          default:
          return state
    }
}

export default shopReducer;