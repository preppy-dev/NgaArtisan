import React from 'react'
import {Route, Switch ,withRouter,useRouteMatch} from "react-router-dom";
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/home';
import Reservation from './pages/reservation';
import Prestation from './pages/prestation';
import devis from './pages/devis';
import register from './pages/register';
import Signin from './pages/signin';
import HideNavFooter from './components/HideNavFooter';
import AdminRoute from './components/AdminRoute';
import PrivateRoute from './components/PrivateRoute';
import ProfileScreen from './pages/profile';
import Category from './pages/category';
import CategoryEditScreen from './pages/CategoryEditScreen';
import PrestationEditScreen from './pages/PrestationEditSreen';
import PrestationList from './pages/PrestationList';
import ConfirmationDevis from './pages/ConfirmationDevis';
import PaymentMethodScreen from './pages/PaymentMethodScreen';
import PlaceOrderScreen from './pages/PlaceOrderScreen';
import OrderHistoryScreen from './pages/OrderHistoryScreen';
import OrderScreen from './pages/OrderScreen';
import OrderListScreen from './pages/OrderListScreen';
import UserListScreen from './pages/UserListScreen';
import UserEditScreen from './pages/UserEditScreen';
import DevisListScreen from './pages/DevisListSreen';
import DashboardScreen from './pages/DashboardScreen';
import SearchScreen from './pages/Searchscreen';


/* const actuallocation =(element)=>{
 return window.location.pathname === '/auth/connexion' ? null : window.location.pathname === '/auth/creer-compte' ? null : element
} */

const Routes = withRouter(({location,match}) =>{
 
  return (
    <>
    {
      location.pathname !== '/auth/connexion' && location.pathname !== '/auth/creer-compte' && match.path !== '/reservation/prestation/:prestation' && <Header/>  
    }
   
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/demande-de-devis" exact component={devis} />
      {/* <Route path="/confirmation-demande" exact component={ConfirmationDevis} />
      <Route path="/entreprise" exact component={Entreprise} /> */}
      <Route path="/reservations" exact component={Reservation} />
      <Route path="/auth/payment" component={PaymentMethodScreen}></Route>
      <Route path="/passer-commande" component={PlaceOrderScreen}></Route>
      <Route path="/reservation/prestation/:prestation" exact component={Prestation} />
      <Route path="/commande/:id" component={OrderScreen}></Route>
      <Route path="/commandes" component={OrderHistoryScreen}></Route>
      <Route path="/auth/connexion" exact component={Signin} />
      <Route path="/auth/creer-compte" exact component={register} />
      <Route
            path="/category/:id/edit"
            component={CategoryEditScreen}
            exact
          ></Route>
      <Route
            path="/prestation/:id/edit"
            component={PrestationEditScreen}
            exact
          ></Route>
            <Route
            path="/search/name/:name?"
            component={SearchScreen}
            exact
          ></Route>
          <Route
            path="/search/category/:category"
            component={SearchScreen}
            exact
          ></Route>
          <Route
            path="/search/category/:category/name/:name"
            component={SearchScreen}
            exact
          ></Route>
          <Route
            path="/search/category/:category/name/:name/min/:min/max/:max/rating/:rating/order/:order/pageNumber/:pageNumber"
            component={SearchScreen}
            exact
          ></Route>
      <PrivateRoute
            path="/profile"
            component={ProfileScreen}
          ></PrivateRoute>
          {/* <PrivateRoute path="/map" component={MapScreen}></PrivateRoute> */}
          <PrivateRoute 
          path="/organizations" 
          component={ProfileScreen}>
          </PrivateRoute>
          
          <AdminRoute
            path="/prestationlist"
            component={PrestationList}
            exact
          ></AdminRoute>
          <AdminRoute
            path="/prestationlist/pageNumber/:pageNumber"
            component={PrestationList}
            exact
          ></AdminRoute>
          <AdminRoute
            path="/categorylist"
            component={Category}
            exact
          ></AdminRoute>
          <AdminRoute
            path="/categorylist/pageNumber/:pageNumber"
            component={Category}
            exact
          ></AdminRoute>
          <AdminRoute
            path="/orderlist"
            component={OrderListScreen}
            exact
          ></AdminRoute>
          <AdminRoute
            path="/devislist"
            component={DevisListScreen}
            exact
          ></AdminRoute>
          <AdminRoute path="/userlist" component={UserListScreen}></AdminRoute>
          <AdminRoute
            path="/user/:id/edit"
            component={UserEditScreen}
          ></AdminRoute>
          <AdminRoute
            path="/dashboard"
            component={DashboardScreen}
          ></AdminRoute>
      </Switch>
      {
      location.pathname !== '/auth/connexion' && location.pathname !== '/auth/creer-compte' && <Footer/>  
    }
     
     
    </>
  )
})

export default Routes
