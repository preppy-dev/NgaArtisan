import React from 'react'
import {Route, Switch ,withRouter} from "react-router-dom";
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './views/home';
import Reservation from './views/reservations';
import devis from './views/devis';
//import register from './views/user/register';
//import Signin from './views/user/signin';
import PrivateRoute from './components/PrivateRoute';
import ProfileScreen from './views/profile';
import CategoryEditScreen from './views/CategoryEditScreen';
import PrestationEditScreen from './views/PrestationEditSreen';
import ConfirmationDevis from './views/ConfirmationDevis';
import PlaceOrderScreen from './views/PlaceOrderScreen';
import OrderHistoryScreen from './views/OrderHistoryScreen';
import OrderScreen from './views/OrderScreen';
import Entreprise from './views/Entreprise';
import SearchScreen from './views/Searchscreen';
import { Suspense } from 'react';

const ViewUser = React.lazy(() =>
  import(/* webpackChunkName: "views-user" */ './views/user')
);
const ViewError = React.lazy(() =>
  import(/* webpackChunkName: "views-error" */ './views/error')
);
const ViewAbout = React.lazy(() =>
  import(/* webpackChunkName: "views-error" */ './views/about')
);
const ViewJoinUs = React.lazy(() =>
  import(/* webpackChunkName: "views-error" */ './views/joinus')
);
const ViewContact = React.lazy(() =>
  import(/* webpackChunkName: "views-error" */ './views/contact/contact')
);
const ViewFaq = React.lazy(() =>
  import(/* webpackChunkName: "views-error" */ './views/faq/faq')
);
const ViewPrestation = React.lazy(() =>
  import(/* webpackChunkName: "views-error" */ './views/reservation/index')
);

/* const actuallocation =(element)=>{
 return window.location.pathname === '/auth/connexion' ? null : window.location.pathname === '/auth/creer-compte' ? null : element
} */

const Routes = withRouter(({location,match}) =>{
 
  return (
    <Suspense fallback={<div className="loading" />}>
    
    {
      location.pathname !== '/auth/connexion' && location.pathname !== '/auth/creer-compte' && match.path !== '/reservation/prestation/:prestation' && <Header/>  
    }
   
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/demande-de-devis" exact component={devis} />
      <Route path="/confirmation-demande" exact component={ConfirmationDevis} />
      <Route path="/reservations" exact component={Reservation} />
      <Route path="/passer-commande" component={PlaceOrderScreen}></Route>
      <Route path="/commande/:id" component={OrderScreen}></Route>
      <Route path="/commandes" component={OrderHistoryScreen}></Route>
      {/* <Route path="/a-propos" exact component={Entreprise} /> */}
    {/*   <Route path="/auth/connexion" exact component={Signin} />
      <Route path="/auth/creer-compte" exact component={register} /> */}
     {/*  <Route path="/auth" component={ViewUser} /> */}
      <Route
                    path="/reservation"
                    render={(props) => <ViewPrestation {...props} />}
       />
      <Route
                    path="/auth"
                    render={(props) => <ViewUser {...props} />}
       />
       <Route
                    path="/error"
                    exact
                    render={(props) => <ViewError {...props} />}
      />
       <Route
                    path="/a-propos"
                    exact
                    render={(props) => <ViewAbout {...props} />}
      />
       <Route
                    path="/nous-rejoindre"
                    exact
                    render={(props) => <ViewJoinUs {...props} />}
      />
       <Route
                    path="/contact"
                    exact
                    render={(props) => <ViewContact {...props} />}
      />
       <Route
                    path="/faq"
                    exact
                    render={(props) => <ViewFaq {...props} />}
      />
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
            path="/search/category/:category/name/:name/min/:min/max/:max/pageNumber/:pageNumber"
            component={SearchScreen}
            exact
          ></Route>
      <PrivateRoute
            path="/profile"
            component={ProfileScreen}
          ></PrivateRoute>
        
      </Switch>
      {
      location.pathname !== '/auth/connexion' && location.pathname !== '/auth/creer-compte' && <Footer/>  
    }
     
  
    </Suspense>
  )
})

export default Routes
