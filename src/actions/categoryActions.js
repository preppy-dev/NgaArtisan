import axios from 'axios';
import {
  CATEGORY_CREATE_FAIL,
  CATEGORY_CREATE_REQUEST,
  CATEGORY_CREATE_SUCCESS,
  CATEGORY_DETAILS_FAIL,
  CATEGORY_DETAILS_REQUEST,
  CATEGORY_DETAILS_SUCCESS,
  CATEGORY_LIST_FAIL,
  CATEGORY_LIST_REQUEST,
  CATEGORY_LIST_SUCCESS,
  CATEGORY_UPDATE_REQUEST,
  CATEGORY_UPDATE_SUCCESS,
  CATEGORY_UPDATE_FAIL,
  CATEGORY_DELETE_REQUEST,
  CATEGORY_DELETE_FAIL,
  CATEGORY_DELETE_SUCCESS,
  CATEGORY_CATEGORY_LIST_SUCCESS,
  CATEGORY_CATEGORY_LIST_REQUEST,
  CATEGORY_CATEGORY_LIST_FAIL,
  CATEGORY_REVIEW_CREATE_REQUEST,
  CATEGORY_REVIEW_CREATE_SUCCESS,
  CATEGORY_REVIEW_CREATE_FAIL,
  TOP_CATEGORY_LIST_REQUEST,
  TOP_CATEGORY_LIST_SUCCESS,
  TOP_CATEGORY_LIST_FAIL,
  PRESTATION_CATEGORY_DETAILS_FAIL,
  PRESTATION_CATEGORY_DETAILS_SUCCESS,
  PRESTATION_CATEGORY_DETAILS_REQUEST,
} from '../constants/categoryConstants';
import api from '../services/api';

export const listCategories = ({
  pageNumber = '',
  name = '',
  pageSize = '',
  category = '',
  min = 0,
  max = 0,
}) => async (dispatch) => {
  dispatch({
    type: CATEGORY_LIST_REQUEST,
  });
  try {
    const { data } = await api.get(
      `/api/category?pageNumber=${pageNumber}&name=${name}&category=${category}&min=${min}&max=${max}&pageSize=${pageSize}`
    );
    dispatch({ type: CATEGORY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: CATEGORY_LIST_FAIL, payload: error.message });
  }
};
export const topListCategories = ({
  pageNumber = '',
  pageSize = '',
}) => async (dispatch) => {
  dispatch({
    type: TOP_CATEGORY_LIST_REQUEST,
  });
  try {
    const { data } = await api.get(
      `/api/category?pageNumber=${pageNumber}&pageSize=${pageSize}`
    );
    dispatch({ type: TOP_CATEGORY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: TOP_CATEGORY_LIST_FAIL, payload: error.message });
  }
};

export const listAllCategories = () => async (dispatch) => {
  dispatch({
    type: CATEGORY_CATEGORY_LIST_REQUEST,
  });
  try {
    const { data } = await api.get(`/api/category/categories`);
    dispatch({ type: CATEGORY_CATEGORY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: CATEGORY_CATEGORY_LIST_FAIL, payload: error.message });
  }
};


export const detailsCategory = (categoryId) => async (dispatch) => {
  dispatch({ type: CATEGORY_DETAILS_REQUEST, payload: categoryId });
  try {
    const { data } = await api.get(`/api/category/${categoryId}`);
    dispatch({ type: CATEGORY_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CATEGORY_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const detailsPrestationCategory = (categoryLink) => async (dispatch) => {
  dispatch({ type: PRESTATION_CATEGORY_DETAILS_REQUEST, payload: categoryLink });
  try {
    const { data } = await api.get(`/api/category/${categoryLink}`);
    dispatch({ type: PRESTATION_CATEGORY_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRESTATION_CATEGORY_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createCategory = () => async (dispatch, getState) => {
  dispatch({ type: CATEGORY_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await api.post(
      '/api/category',
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type: CATEGORY_CREATE_SUCCESS,
      payload: data.category,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: CATEGORY_CREATE_FAIL, payload: message });
  }
};
export const updateCategory = (category) => async (dispatch, getState) => {
  dispatch({ type: CATEGORY_UPDATE_REQUEST, payload: category });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await api.put(`/api/category/${category._id}`, category, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: CATEGORY_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: CATEGORY_UPDATE_FAIL, error: message });
  }
};
export const deleteCategory = (categoryId) => async (dispatch, getState) => {
  dispatch({ type: CATEGORY_DELETE_REQUEST, payload: categoryId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = api.delete(`/api/category/${categoryId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: CATEGORY_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: CATEGORY_DELETE_FAIL, payload: message });
  }
};

