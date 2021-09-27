
import axios from 'axios';
import { CART_EMPTY, DEVIS_SAVE_DATE, DEVIS_SAVE_NEED_QUOTE } from '../constants/devisConstants';
import {
  DEVIS_CREATE_FAIL,
  DEVIS_CREATE_REQUEST,
  DEVIS_CREATE_SUCCESS,
  DEVIS_DETAILS_FAIL,
  DEVIS_DETAILS_REQUEST,
  DEVIS_DETAILS_SUCCESS,
  DEVIS_PAY_REQUEST,
  DEVIS_PAY_FAIL,
  DEVIS_PAY_SUCCESS,
  DEVIS_MINE_LIST_REQUEST,
  DEVIS_MINE_LIST_FAIL,
  DEVIS_MINE_LIST_SUCCESS,
  DEVIS_LIST_REQUEST,
  DEVIS_LIST_SUCCESS,
  DEVIS_LIST_FAIL,
  DEVIS_DELETE_REQUEST,
  DEVIS_DELETE_SUCCESS,
  DEVIS_DELETE_FAIL,
  DEVIS_DELIVER_REQUEST,
  DEVIS_DELIVER_SUCCESS,
  DEVIS_DELIVER_FAIL,
  DEVIS_SUMMARY_REQUEST,
  DEVIS_SUMMARY_SUCCESS,
} from '../constants/devisConstants';
import api from '../services/api';

export const createDevis = (devis) => async (dispatch) => {
  dispatch({ type: DEVIS_CREATE_REQUEST, payload: devis });
  try {
    const { data } = await api.post('/api/devis', devis);
    dispatch({ type: DEVIS_CREATE_SUCCESS, payload: data.devis });
  } catch (error) {
    dispatch({
      type: DEVIS_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const saveNeedQuote = (data) => (dispatch) => {
  dispatch({ type: DEVIS_SAVE_NEED_QUOTE, payload: data });
  /* localStorage.setItem('needquote', JSON.stringify(data)); */
};
export const saveDate = (data) => (dispatch) => {
  dispatch({ type: DEVIS_SAVE_DATE, payload: data });
};

export const listDevis = () => async (dispatch, getState) => {
  dispatch({ type: DEVIS_LIST_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await api.get(`/api/devis`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    console.log(data);
    dispatch({ type: DEVIS_LIST_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: DEVIS_LIST_FAIL, payload: message });
  }
};