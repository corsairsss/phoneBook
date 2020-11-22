import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import authActions from './authActions.js';

const initialState = {
  name: null,
  email: null,
};
const addUser = (_, { payload }) => payload.user;
const getUser = (_, { payload }) => payload;

// const onRemoveContact = (state, { payload }) =>
//   state.filter(item => item.id !== payload);

const user = createReducer(initialState, {
  [authActions.registerSuccess]: addUser,
  [authActions.logInSuccess]: addUser,
  [authActions.logOutSuccess]: () => initialState,
  [authActions.getCurrentUserSuccess]: getUser,

  // [phoneBookActions.fetchContactsSuccess]: (state, { payload }) => payload,
  // [phoneBookActions.removeContactsSuccess]: onRemoveContact,
});
const token = createReducer(null, {
  [authActions.registerSuccess]: (_, { payload }) => payload.token,
  [authActions.logInSuccess]: (_, { payload }) => payload.token,
  [authActions.logOutSuccess]: () => null,
});

// const filter = createReducer('', {
//   [phoneBookActions.changeFilter]: (state, { payload }) => payload,
// });

// const loading = createReducer(false, {
//   [phoneBookActions.addContactRequest]: () => true,
//   [phoneBookActions.addContactSuccess]: () => false,
//   [phoneBookActions.addContactError]: () => false,
//   [phoneBookActions.fetchContactsRequest]: () => true,
//   [phoneBookActions.fetchContactsSuccess]: () => false,
//   [phoneBookActions.fetchContactsError]: () => false,
//   [phoneBookActions.removeContactsRequest]: () => true,
//   [phoneBookActions.removeContactsSuccess]: () => false,
//   [phoneBookActions.removeContactsError]: () => false,
// });

export default combineReducers({ user, token });
