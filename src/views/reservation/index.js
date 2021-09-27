import React,{Suspense} from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';

const Prestation = React.lazy(() =>
  import(/* webpackChunkName: "user-login" */ './prestation')
);



function Reservation({match}) {
  return (
    <>
      <Suspense fallback={<div className="loading" />}>
      <Switch>
          {/* <Redirect exact from={`${match.url}/`} to={`${match.url}/prestation/:prestation`} /> */}
          <Redirect exact from={`${match.url}/`} to="/reservations" />
          <Route
            path={`${match.url}/prestation/:prestation`}
            render={(props) => <Prestation {...props} />}
          />

          {/* <Route
            path={`${match.url}/creer-compte`}
            render={(props) => <Register {...props} />}
          />
          <Route
            path={`${match.url}/payment`}
            render={(props) => <PaymentMethod {...props} />}
          /> */}

          <Redirect to="/error" />
        </Switch>
        </Suspense>
    </>
  )
}

export default Reservation
