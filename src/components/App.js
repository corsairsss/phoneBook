import React, { Suspense, useEffect } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import routes from '../routes.js';
import PrivateRoute from './Routes/PrivateRoute.js';
import PublicRoute from './Routes/PublicRoute.js';
import Section from './Section/Section.js';
import Checkbox from './CheckBox/CheckBox';
import Spinner from './Spinner/Spinner.js';

import authOperation from '../redux/auth/authOperation.js';
import phoneBookSelectors from '../redux/PhoneBook/phoneBookSelectors.js';

function App() {
  const loading = useSelector(phoneBookSelectors.getLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperation.getCurrentUser());
  }, []);

  return (
    <BrowserRouter>
      <Checkbox />
      <Section>
        {loading && <Spinner />}

        <Suspense fallback={<h1>Loading...</h1>}>
          <Switch>
            {/* {routes.map(route => (
              <Route key={route.path} {...route} />
            ))} */}

            {routes.map(route =>
              route.privat ? (
                <PrivateRoute key={route.label} {...route} />
              ) : (
                <PublicRoute key={route.label} {...route} />
              ),
            )}
          </Switch>
          {/* {typeof isAuth === 'string' && <PhoneBookView />} */}
        </Suspense>
      </Section>
    </BrowserRouter>
  );
}

export default App;
