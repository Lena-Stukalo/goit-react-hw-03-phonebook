import { Component } from 'react';
import { nanoid } from 'nanoid';

import Form from './form/Form';
import Contacts from './contacts/Contacts';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  checkName = name => {
    const { contacts } = this.state;
    return contacts.find(contact => contact.name === name);
  };

  onHendlerSubmit = ({ name, number }) => {
    if (this.checkName(name)) {
      window.alert(`${name} is alredy exist`);
      return;
    }
    const contact = {
      name: name,
      number: number,
      id: nanoid(),
    };
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  onDeleteClick = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };
  onFilterChange = event => {
    this.setState({ filter: event.target.value });
  };
  calculateContacts = () => {
    const { contacts, filter } = this.state;
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.calculateContacts();
    return (
      <div>
        <Form onSubmit={this.onHendlerSubmit}></Form>
        <Contacts
          contacts={visibleContacts}
          filter={filter}
          onFilterChange={this.onFilterChange}
          onDeleteClick={this.onDeleteClick}
        ></Contacts>
      </div>
    );
  }
}
