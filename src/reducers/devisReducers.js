import {
  DEVIS_CREATE_FAIL,
  DEVIS_CREATE_REQUEST,
  DEVIS_CREATE_RESET,
  DEVIS_CREATE_SUCCESS,
  DEVIS_DETAILS_FAIL,
  DEVIS_DETAILS_REQUEST,
  DEVIS_DETAILS_SUCCESS,
  DEVIS_MINE_LIST_FAIL,
  DEVIS_MINE_LIST_REQUEST,
  DEVIS_MINE_LIST_SUCCESS,
  DEVIS_PAY_FAIL,
  DEVIS_PAY_REQUEST,
  DEVIS_PAY_RESET,
  DEVIS_PAY_SUCCESS,
  DEVIS_LIST_REQUEST,
  DEVIS_LIST_SUCCESS,
  DEVIS_LIST_FAIL,
  DEVIS_DELETE_REQUEST,
  DEVIS_DELETE_SUCCESS,
  DEVIS_DELETE_FAIL,
  DEVIS_DELETE_RESET,
  DEVIS_DELIVER_REQUEST,
  DEVIS_DELIVER_SUCCESS,
  DEVIS_DELIVER_FAIL,
  DEVIS_DELIVER_RESET,
  DEVIS_SUMMARY_REQUEST,
  DEVIS_SUMMARY_SUCCESS,
  DEVIS_SUMMARY_FAIL,
  DEVIS_SAVE_NEED_QUOTE,
  DEVIS_SAVE_DATE,
} from '../constants/devisConstants';

export const devisCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case DEVIS_CREATE_REQUEST:
      return { loading: true };
    case DEVIS_CREATE_SUCCESS:
      return { loading: false, success: true, devis: action.payload };
    case DEVIS_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case DEVIS_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const devisDetailsReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case DEVIS_DETAILS_REQUEST:
      return { loading: true };
    case DEVIS_DETAILS_SUCCESS:
      return { loading: false, devis: action.payload };
    case DEVIS_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const devisCartReducer = (state = { }, action) => {
  switch (action.type) {
    case DEVIS_SAVE_NEED_QUOTE:
      return { ...state, needquote: action.payload };
    case DEVIS_SAVE_DATE:
      return { ...state, savedate: action.payload };
    default:
      return state;
  }
};

export const devisListReducer = (state = { devises: [] }, action) => {
  switch (action.type) {
    case DEVIS_LIST_REQUEST:
      return { loading: true };
    case DEVIS_LIST_SUCCESS:
      return { loading: false, devises: action.payload };
    case DEVIS_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
