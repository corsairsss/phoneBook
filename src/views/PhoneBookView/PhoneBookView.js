import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import phoneBookOperation from '../../redux/PhoneBook/phoneBookOperation';
import phoneBookSelectors from '../../redux/PhoneBook/phoneBookSelectors.js';

import ContactList from '../../components/ContactList/ContactList.js';
import ContactForm from '../../components/ContactForm/ContactForm.js';
import FilterContacts from '../../components/FilterContacts/FilterContacts.js';

import s from './App.module.css';

class PhoneBookView extends Component {
  componentDidMount() {
    this.props.onFetchContacts();
  }
  render() {
    const isContacts = this.props.contacts.length;
    const isShowFindCOntact = isContacts >= 2;
    const isShowContactList = isContacts !== 0;

    return (
      <>
        <ContactForm />
        <CSSTransition
          in={isShowFindCOntact}
          timeout={250}
          unmountOnExit
          classNames={s}
        >
          <FilterContacts />
        </CSSTransition>

        {isShowContactList && <ContactList />}
      </>
    );
  }
}

const mapStateToprops = state => {
  return {
    contacts: phoneBookSelectors.getContacts(state),
  };
};
const mapDispatchToProps = {
  onFetchContacts: phoneBookOperation.fetchContact,
};

export default connect(mapStateToprops, mapDispatchToProps)(PhoneBookView);
