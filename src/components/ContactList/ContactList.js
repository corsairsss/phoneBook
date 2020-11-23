import React, { useEffect } from 'react';

import { connect, useSelector, useDispatch } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import phoneBookSelectors from '../../redux/PhoneBook/phoneBookSelectors.js';
import phoneBookOperation from '../../redux/PhoneBook/phoneBookOperation.js';
import ContactItem from '../ContactItem/ContactItem.js';

import s from './ContactList.module.css';

const ContactList = ({ list }) => {
  // const dispatch = useDispatch();
  // const list2 = useSelector(phoneBookSelectors.getConatctList());
  // console.log('++++++++>', list);
  // useEffect(() => {
  //   dispatch(phoneBookOperation.fetchContact());
  // }, []);

  return (
    <TransitionGroup component="ul" className={s.list}>
      {list.map(elem => {
        return (
          <CSSTransition
            key={elem._id}
            timeout={250}
            classNames={s}
            unmountOnExit
          >
            <ContactItem id={elem._id} />
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );
};

const mSTP = state => {
  return {
    list: phoneBookSelectors.getConatctList(state),
  };
};

export default connect(mSTP)(ContactList);
