import React,{Suspense} from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';

const Login = React.lazy(() =>
  import(/* webpackChunkName: "user-login" */ './signin')
);
const Register = React.lazy(() =>
  import(/* webpackChunkName: "user-register" */ './register')
);
const PaymentMethod = React.lazy(() =>
  import(/* webpackChunkName: "user-register" */ './PaymentMethodScreen')
);

function User({match}) {
  return (
    <>
      <Suspense fallback={<div className="loading" />}>
      <Switch>
          <Redirect exact from={`${match.url}/`} to={`${match.url}/connexion`} />
          <Route
            path={`${match.url}/connexion`}
            render={(props) => <Login {...props} />}
          />
          <Route
            path={`${match.url}/creer-compte`}
            render={(props) => <Register {...props} />}
          />
          <Route
            path={`${match.url}/payment`}
            render={(props) => <PaymentMethod {...props} />}
          />

          <Redirect to="/error" />
        </Switch>
        </Suspense>
    </>
  )
}

export default User
