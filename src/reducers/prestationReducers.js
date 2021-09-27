const {
  PRESTATION_LIST_REQUEST,
  PRESTATION_LIST_SUCCESS,
  PRESTATION_LIST_FAIL,
  PRESTATION_DETAILS_REQUEST,
  PRESTATION_DETAILS_SUCCESS,
  PRESTATION_DETAILS_FAIL,
  PRESTATION_CREATE_REQUEST,
  PRESTATION_CREATE_SUCCESS,
  PRESTATION_CREATE_FAIL,
  PRESTATION_CREATE_RESET,
  PRESTATION_UPDATE_REQUEST,
  PRESTATION_UPDATE_SUCCESS,
  PRESTATION_UPDATE_FAIL,
  PRESTATION_UPDATE_RESET,
  PRESTATION_DELETE_REQUEST,
  PRESTATION_DELETE_SUCCESS,
  PRESTATION_DELETE_FAIL,
  PRESTATION_DELETE_RESET,
  PRESTATION_CATEGORY_LIST_REQUEST,
  PRESTATION_CATEGORY_LIST_SUCCESS,
  PRESTATION_CATEGORY_LIST_FAIL,
  PRESTATION_TYPE_CREATE_REQUEST,
  PRESTATION_TYPE_CREATE_SUCCESS,
  PRESTATION_TYPE_CREATE_FAIL,
  PRESTATION_TYPE_CREATE_RESET,
} = require('../constants/prestationConstants');

export const prestationListReducer = (
  state = { loading: true, prestations: [{}],},
  action
) => {
  switch (action.type) {
    case PRESTATION_LIST_REQUEST:
      return { loading: true };
    case PRESTATION_LIST_SUCCESS:
      return {
        loading: false,
        prestations: action.payload.prestations,
        category: action.payload.category,
        pages: action.payload.pages,
        page: action.payload.page,
      };
    case PRESTATION_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const prestationCategoryListReducer = (
  state = { loading: true, categories: [] },
  action
) => {
  switch (action.type) {
    case PRESTATION_CATEGORY_LIST_REQUEST:
      return { loading: true };
    case PRESTATION_CATEGORY_LIST_SUCCESS:
      return { loading: false, categories: action.payload };
    case PRESTATION_CATEGORY_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const prestationDetailsReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case PRESTATION_DETAILS_REQUEST:
      return { loading: true };
    case PRESTATION_DETAILS_SUCCESS:
      return { loading: false, prestations: action.payload };
    case PRESTATION_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const prestationCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PRESTATION_CREATE_REQUEST:
      return { loading: true };
    case PRESTATION_CREATE_SUCCESS:
      return { loading: false, success: true, prestation: action.payload };
    case PRESTATION_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case PRESTATION_CREATE_RESET:
      return {};
    default:
      return state;
  }
};
export const prestationUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case PRESTATION_UPDATE_REQUEST:
      return { loading: true };
    case PRESTATION_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case PRESTATION_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case PRESTATION_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};
export const prestationDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case PRESTATION_DELETE_REQUEST:
      return { loading: true };
    case PRESTATION_DELETE_SUCCESS:
      return { loading: false, success: true };
    case PRESTATION_DELETE_FAIL:
      return { loading: false, error: action.payload };
    case PRESTATION_DELETE_RESET:
      return {};
    default:
      return state;
  }
};
export const prestationTypeCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PRESTATION_TYPE_CREATE_REQUEST:
      return { loading: true };
    case PRESTATION_TYPE_CREATE_SUCCESS:
      return { loading: false, success: true, type: action.payload };
    case PRESTATION_TYPE_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case PRESTATION_TYPE_CREATE_RESET:
      return {};
    default:
      return state;
  }
};
