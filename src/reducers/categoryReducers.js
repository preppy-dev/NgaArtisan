const {
  CATEGORY_LIST_REQUEST,
  CATEGORY_LIST_SUCCESS,
  CATEGORY_LIST_FAIL,
  CATEGORY_DETAILS_REQUEST,
  CATEGORY_DETAILS_SUCCESS,
  CATEGORY_DETAILS_FAIL,
  CATEGORY_CREATE_REQUEST,
  CATEGORY_CREATE_SUCCESS,
  CATEGORY_CREATE_FAIL,
  CATEGORY_CREATE_RESET,
  CATEGORY_UPDATE_REQUEST,
  CATEGORY_UPDATE_SUCCESS,
  CATEGORY_UPDATE_FAIL,
  CATEGORY_UPDATE_RESET,
  CATEGORY_DELETE_REQUEST,
  CATEGORY_DELETE_SUCCESS,
  CATEGORY_DELETE_FAIL,
  CATEGORY_DELETE_RESET,
  CATEGORY_CATEGORY_LIST_REQUEST,
  CATEGORY_CATEGORY_LIST_SUCCESS,
  CATEGORY_CATEGORY_LIST_FAIL,
  CATEGORY_REVIEW_CREATE_REQUEST,
  CATEGORY_REVIEW_CREATE_SUCCESS,
  CATEGORY_REVIEW_CREATE_FAIL,
  CATEGORY_REVIEW_CREATE_RESET,
  TOP_CATEGORY_LIST_REQUEST,
  TOP_CATEGORY_LIST_SUCCESS,
  TOP_CATEGORY_LIST_FAIL,
  PRESTATION_CATEGORY_DETAILS_REQUEST,
  PRESTATION_CATEGORY_DETAILS_SUCCESS,
  PRESTATION_CATEGORY_DETAILS_FAIL,
} = require('../constants/categoryConstants');

export const categoryListReducer = (
  state = { loading: true, categories: [] },
  action
) => {
  switch (action.type) {
    case CATEGORY_LIST_REQUEST:
      return { loading: true };
    case CATEGORY_LIST_SUCCESS:
      return {
        loading: false,
        categories: action.payload.categories,
        pages: action.payload.pages,
        page: action.payload.page,
      };
    case CATEGORY_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const TopCategoryListReducer = (
  state = { loading: true, topcategories: [] },
  action
) => {
  switch (action.type) {
    case TOP_CATEGORY_LIST_REQUEST:
      return { loading: true };
    case TOP_CATEGORY_LIST_SUCCESS:
      return {
        loading: false,
        topcategories: action.payload.categories,
        pages: action.payload.pages,
        page: action.payload.page,
      };
    case TOP_CATEGORY_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const AllCategoryListReducer = (
  state = { loading: true, categories: [] },
  action
) => {
  switch (action.type) {
    case CATEGORY_CATEGORY_LIST_REQUEST:
      return { loading: true };
    case CATEGORY_CATEGORY_LIST_SUCCESS:
      return { loading: false, categories: action.payload };
    case CATEGORY_CATEGORY_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const categoryDetailsReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case CATEGORY_DETAILS_REQUEST:
      return { loading: true };
    case CATEGORY_DETAILS_SUCCESS:
      return { loading: false, category: action.payload };
    case CATEGORY_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const prestationCategoryDetailsReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case PRESTATION_CATEGORY_DETAILS_REQUEST:
      return { loading: true };
    case PRESTATION_CATEGORY_DETAILS_SUCCESS:
      return { loading: false, category: action.payload };
    case PRESTATION_CATEGORY_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const categoryCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case CATEGORY_CREATE_REQUEST:
      return { loading: true };
    case CATEGORY_CREATE_SUCCESS:
      return { loading: false, success: true, category: action.payload };
    case CATEGORY_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case CATEGORY_CREATE_RESET:
      return {};
    default:
      return state;
  }
};
export const categoryUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case CATEGORY_UPDATE_REQUEST:
      return { loading: true };
    case CATEGORY_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case CATEGORY_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case CATEGORY_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};
export const categoryDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case CATEGORY_DELETE_REQUEST:
      return { loading: true };
    case CATEGORY_DELETE_SUCCESS:
      return { loading: false, success: true };
    case CATEGORY_DELETE_FAIL:
      return { loading: false, error: action.payload };
    case CATEGORY_DELETE_RESET:
      return {};
    default:
      return state;
  }
};

