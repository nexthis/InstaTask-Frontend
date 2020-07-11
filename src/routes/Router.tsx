import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from 'components/Route/PrivateRoute'



import routes from './RouterList'
import Layout from 'Layouts/Layout'

const Routers: React.SFC = () => (
  <Router>
    <Layout>
      <Suspense fallback={<div>Don't forget me!</div>}>
        <Switch>
          {routes.map((route, index) => (
            // You can render a <Route> in as many places
            // as you want in your app. It will render along
            // with any other <Route>s that also match the URL.
            // So, a sidebar or breadcrumbs or anything else
            // that requires you to render multiple things
            // in multiple places at the same URL is nothing
            // more than multiple <Route>s.
            route.auth ?
              <PrivateRoute
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.component />}
              />
              :
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.component />}
              />

          ))}
        </Switch>
      </Suspense>
    </Layout>
  </Router>
)



export default Routers;
