import axios from 'axios';
import {
  PRESTATION_CREATE_FAIL,
  PRESTATION_CREATE_REQUEST,
  PRESTATION_CREATE_SUCCESS,
  PRESTATION_DETAILS_FAIL,
  PRESTATION_DETAILS_REQUEST,
  PRESTATION_DETAILS_SUCCESS,
  PRESTATION_LIST_FAIL,
  PRESTATION_LIST_REQUEST,
  PRESTATION_LIST_SUCCESS,
  PRESTATION_UPDATE_REQUEST,
  PRESTATION_UPDATE_SUCCESS,
  PRESTATION_UPDATE_FAIL,
  PRESTATION_DELETE_REQUEST,
  PRESTATION_DELETE_FAIL,
  PRESTATION_DELETE_SUCCESS,
  PRESTATION_CATEGORY_LIST_SUCCESS,
  PRESTATION_CATEGORY_LIST_REQUEST,
  PRESTATION_CATEGORY_LIST_FAIL,
  PRESTATION_TYPE_CREATE_REQUEST,
  PRESTATION_TYPE_CREATE_SUCCESS,
  PRESTATION_TYPE_CREATE_FAIL,
} from '../constants/prestationConstants';
import api from '../services/api';

export const listPrestations = ({
  pageNumber = '',
  name = '',
  category = '',
}) => async (dispatch) => {
  dispatch({
    type: PRESTATION_LIST_REQUEST,
  });
  try {
    const { data } = await api.get(
      `/api/prestation?pageNumber=${pageNumber}&name=${name}&category=${category}`
    );
    dispatch({ type: PRESTATION_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRESTATION_LIST_FAIL, payload: error.message });
  }
};

export const listPrestationCategories = () => async (dispatch) => {
  dispatch({
    type: PRESTATION_CATEGORY_LIST_REQUEST,
  });
  try {
    const { data } = await api.get(`/api/prestation/categories`);
    dispatch({ type: PRESTATION_CATEGORY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRESTATION_CATEGORY_LIST_FAIL, payload: error.message });
  }
};

export const detailsPrestation = (categoryLink) => async (dispatch) => {
  dispatch({ type: PRESTATION_DETAILS_REQUEST, payload: categoryLink });
  try {
    const { data } = await api.get(`/api/prestation/reservation/${categoryLink}`);
    dispatch({ type: PRESTATION_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRESTATION_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const createPrestation = () => async (dispatch, getState) => {
  dispatch({ type: PRESTATION_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await api.post(
      '/api/prestation',
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type: PRESTATION_CREATE_SUCCESS,
      payload: data.prestation,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: PRESTATION_CREATE_FAIL, payload: message });
  }
};
export const updatePrestation = (prestation) => async (dispatch, getState) => {
  dispatch({ type: PRESTATION_UPDATE_REQUEST, payload: prestation });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await api.put(`/api/prestation/${prestation._id}`, prestation, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: PRESTATION_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: PRESTATION_UPDATE_FAIL, error: message });
  }
};
export const deletePrestation = (prestationId) => async (dispatch, getState) => {
  dispatch({ type: PRESTATION_DELETE_REQUEST, payload: prestationId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = api.delete(`/api/prestation/${prestationId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: PRESTATION_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: PRESTATION_DELETE_FAIL, payload: message });
  }
};
export const createType = (prestationId, type) => async (
  dispatch,
  getState
) => {
  dispatch({ type: PRESTATION_TYPE_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await api.post(
      `/api/prestation/${prestationId}/types`,
      type,
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type: PRESTATION_TYPE_CREATE_SUCCESS,
      payload: data.type,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: PRESTATION_TYPE_CREATE_FAIL, payload: message });
  }
};
