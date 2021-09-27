import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { cartReducer } from './reducers/cartReducers';
import { AllCategoryListReducer, categoryCreateReducer, categoryDeleteReducer, categoryDetailsReducer, categoryListReducer, categoryUpdateReducer, prestationCategoryDetailsReducer, TopCategoryListReducer } from './reducers/categoryReducers';
import { devisCartReducer, devisCreateReducer, devisListReducer } from './reducers/devisReducers';
import { orderCreateReducer, orderDeleteReducer, orderDeliverReducer, orderDetailsReducer, orderListReducer, orderMineListReducer, orderPayReducer, orderSummaryReducer } from './reducers/orderReducers';
import { prestationCreateReducer, prestationDeleteReducer, prestationDetailsReducer, prestationListReducer, prestationTypeCreateReducer, prestationUpdateReducer } from './reducers/prestationReducers';


import {
  CreateOrganizerReducer,
  userAddressMapReducer,
  userDeleteReducer,
  userDetailsReducer,
  userListReducer,
  userRegisterReducer,
  userSigninReducer,
  userTopSellerListReducer,
  userUpdateProfileReducer,
  userUpdateReducer,
} from './reducers/userReducers';


const initialState = {
  userSignin: {
    userInfo: localStorage.getItem('userInfo')
      ? JSON.parse(localStorage.getItem('userInfo'))
      : null,
  },
  cart: {
    cartItem: localStorage.getItem('cartItem')
      ? JSON.parse(localStorage.getItem('cartItem'))
      : {},
    interventionAddress: localStorage.getItem('interventionAddress')
      ? JSON.parse(localStorage.getItem('interventionAddress'))
      : {},
    interventionDate: localStorage.getItem('interventionDate')
      ? JSON.parse(localStorage.getItem('interventionDate'))
      : {},
    paymentMethod: 'Cash',
    itemPrice :0,
    taxPrice: 0,
    totalPrice: 0,
  },

};
const reducer = combineReducers({
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userUpdate: userUpdateReducer,
  /* userList: userListReducer,
  userDelete: userDeleteReducer,
  userTopSellersList: userTopSellerListReducer,
  userAddressMap: userAddressMapReducer,
  organizerCreate: CreateOrganizerReducer, */
  topCategoryList: TopCategoryListReducer,
  categoryList: categoryListReducer,
  allCategoryList: AllCategoryListReducer,
  prestationcateDetails: prestationCategoryDetailsReducer,
  categoryDetails: categoryDetailsReducer,
  categoryCreate: categoryCreateReducer,
  categoryUpdate: categoryUpdateReducer,
  categoryDelete: categoryDeleteReducer,
  prestationList: prestationListReducer,
  prestationDetails: prestationDetailsReducer,
  prestationCreate: prestationCreateReducer,
  prestationTypeCreate: prestationTypeCreateReducer,
  prestationUpdate: prestationUpdateReducer,
  prestationDelete: prestationDeleteReducer,
  devisCreate: devisCreateReducer,
  deviscart: devisCartReducer,
  devisList: devisListReducer,
  cart: cartReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  orderList: orderListReducer,
  orderDelete: orderDeleteReducer,
  orderDeliver: orderDeliverReducer,
  orderMineList: orderMineListReducer,
  orderSummary: orderSummaryReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
