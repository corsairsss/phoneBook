import React, { Suspense, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import routes from '../routes.js';
// import phoneBookOperation from '../redux/PhoneBook/phoneBookOperation';
import phoneBookSelectors from '../redux/PhoneBook/phoneBookSelectors.js';
import authSelectors from '../redux/auth/authSelectors';
// import authActions from '../redux/auth/authActions.js';
import PrivateRoute from './Routes/PrivateRoute.js';
import PublicRoute from './Routes/PublicRoute.js';

import Section from './Section/Section.js';
import PhoneBookView from '../views/PhoneBookView/PhoneBookView.js';

import Button from './Button/Button.js';
import Spinner from './Spinner/Spinner.js';
import authOperation from '../redux/auth/authOperation.js';

function App() {
  const loading = useSelector(phoneBookSelectors.getLoading);

  const isAuth = useSelector(authSelectors.getToken);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperation.getCurrentUser());
  }, []);

  return (
    <BrowserRouter>
        <Button />
      <Section >
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

// class App extends Component {
//   render() {
//     const loading = this.props.loading;

//     return (
//       <BrowserRouter>
//         <Section title={'Phonebook'}>
//           <Button />
//           {loading && <Spinner />}

//           <Suspense fallback={<h1>Loading...</h1>}>
//             <Switch>
//               {routes.map(route => (
//                 <Route key={route.path} {...route} />
//               ))}
//             </Switch>
//             <PhoneBookView />
//           </Suspense>
//         </Section>
//       </BrowserRouter>
//     );
//   }
// }

// const mapStateToprops = state => {
//   return {
//     loading: phoneBookSelectors.getLoading(state),
//     contacts: phoneBookSelectors.getContacts(state),
//   };
// };
// const mapDispatchToProps = {
//   onFetchContacts: phoneBookOperation.fetchContact,
// };

// export default connect(mapStateToprops, mapDispatchToProps)(App);
