import axios from 'axios';
import {
  CART_ADD_ITEM,
  CART_ADD_ITEM_FAIL,
  CART_SAVE_DATE,
  CART_SAVE_PAYMENT_METHOD,
  CART_SAVE_PRESTATION,
  CART_SAVE_SHIPPING_ADDRESS,
  CART_SAVE_SOUS_PRESTATION,
} from '../constants/cartConstants';

export const addToCart = (data) => async (dispatch) => {

  dispatch({type: CART_ADD_ITEM,payload: data});
    localStorage.setItem('cartItem',JSON.stringify(data));
  }


/* interventionAddress: {
  adresse: { type: String, required: true },
  phone: { type: Number, required: true },
},
 */

export const saveIntervationAddress = (data) => (dispatch) => {
  dispatch({ type: CART_SAVE_SHIPPING_ADDRESS, payload: data });
  localStorage.setItem('interventionAddress', JSON.stringify(data));
};
export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({ type: CART_SAVE_PAYMENT_METHOD, payload: data });
};


export const savePrestation = (data) => (dispatch) => {
  dispatch({ type: CART_SAVE_PRESTATION, payload: data });
};
export const saveSousPrestation = (data) => (dispatch) => {
  dispatch({ type: CART_SAVE_SOUS_PRESTATION, payload: data });
};

export const saveDatePrestation = (data) => (dispatch) => {
  dispatch({ type: CART_SAVE_DATE, payload: data });
  localStorage.setItem('interventionDate', JSON.stringify(data));
};
