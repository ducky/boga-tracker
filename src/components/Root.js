import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import store from 'lib/store';

import SiteLayout, { HomeLayout } from 'layouts';

import Site from 'components/Site.container';

const Root = () => (
  <Provider store={store}>
    <Router>
      <Site>
        <SiteLayout>
          <Switch>
            <Route path="/" exact component={HomeLayout} />
            <Redirect to="/" />
          </Switch>
        </SiteLayout>
      </Site>
    </Router>
  </Provider>
);

export default Root;
