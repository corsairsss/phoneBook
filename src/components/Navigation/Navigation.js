import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './Navigation.module.css';
import styles from './NavigationStyle.js';
import routes from '../../routes.js';

console.log(s);

const Navigation = () => (
  <nav className={s.list}>
    {routes.map(route => (
      <NavLink
        exact={route.exact}
        key={route.label}
        to={route.path}
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        {route.label}
      </NavLink>
    ))}
  </nav>
);

export default Navigation;
