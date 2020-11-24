import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/authSelectors.js';

import s from './Navigation.module.css';
import styles from './NavigationStyle.js';
// import routes from '../../routes.js';

console.log(s);

const Navigation = () => {
	const isAuth = useSelector(authSelectors.getToken);
	console.log(isAuth);
	return (
		<>
			<h1>PhoneBook</h1>
			<nav className={s.list}>
				<NavLink exact to="/" style={styles.link} activeStyle={styles.activeLink}>
					Home
				</NavLink>

				{isAuth && (
					<NavLink exact to="/books" style={styles.link} activeStyle={styles.activeLink}>
						Books
					</NavLink>
				)}

				{!isAuth && (
					<>
						<NavLink exact to="/register" style={styles.link} activeStyle={styles.activeLink}>
							Register
						</NavLink>
						<NavLink exact to="/login" style={styles.link} activeStyle={styles.activeLink}>
							Login
						</NavLink>
					</>
				)}
			</nav>
		</>
	);
};

export default Navigation;
{
	/* {routes.map(route => (
      <NavLink
        exact={route.exact}
        key={route.label}
        to={route.path}
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        {route.label}
      </NavLink>
    ))} */
}
