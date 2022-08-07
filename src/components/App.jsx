import { Component } from 'react';
import { nanoid } from 'nanoid';

import Form from './form/Form';
import Contacts from './contacts/Contacts';
export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  componentDidMount() {
    console.log('componentDidMount');
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    if (contacts) {
      this.setState({ contacts });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

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
        <h1>Phonebook</h1>
        <Form onSubmit={this.onHendlerSubmit} />
        <Contacts
          contacts={visibleContacts}
          filter={filter}
          onFilterChange={this.onFilterChange}
          onDeleteClick={this.onDeleteClick}
        />
      </div>
    );
  }
}
