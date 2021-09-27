import {
  CART_ADD_ITEM,
  CART_ADD_ITEM_FAIL,
  CART_EMPTY,
  CART_REMOVE_ITEM,
  CART_SAVE_DATE,
  CART_SAVE_PAYMENT_METHOD,
  CART_SAVE_PRESTATION,
  CART_SAVE_SHIPPING_ADDRESS,
  CART_SAVE_SOUS_PRESTATION,
} from '../constants/cartConstants';


export const cartReducer = (state = { cartItem: {} }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      
      return { ...state, error: '', loading: false, success: true, cartItem: item};

      case CART_ADD_ITEM_FAIL:
        return { ...state, error: action.payload };
      case CART_EMPTY:
        return { ...state, error: '', cartItem: {},saveprestation:{}}; 

    case CART_SAVE_SHIPPING_ADDRESS:
      return { ...state, interventionAddress: action.payload };
    case CART_SAVE_PAYMENT_METHOD:
      return { ...state, paymentMethod: action.payload };
    
    case CART_SAVE_PRESTATION:
      return { ...state, saveprestation: action.payload };
    case CART_SAVE_SOUS_PRESTATION:
      return { ...state, savesousprestation: action.payload };
      case CART_SAVE_DATE:
      return { ...state, savedateprestation: action.payload };
    default:
      return state;
  }
};
