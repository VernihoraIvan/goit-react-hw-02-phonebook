import { Component } from 'react';
import Contacts from './Contacts/Contacts';
import Input from './Input/Input';
import Section from './Section/Section';
import FilterInput from './FilterInput/FilterInput';
import css from './App.module.css';

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

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  handleFilter = event => {
    console.log(this);
    this.setState({ filter: event.target.value });
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  handleAddContact = ({ name, number, id }) => {
    const { contacts } = this.state;
    const newContact = { name, number, id };
    // console.log(this.state);
    const isExistingContact = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (isExistingContact) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }

    return this.setState(prevState => ({
      contacts: [...prevState.contacts, { name, number, id }],
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <div
        className={css.container}
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title="Phonebook">
          <Input
            onSubmit={this.handleAddContact}
            // onSaveName={this.handleName()}
          />
        </Section>
        <Section title="Contacts">
          <FilterInput value={filter} handleFilter={this.handleFilter} />
          <Contacts
            contacts={filteredContacts}
            onDeleteContact={this.deleteContact}
          />
        </Section>
      </div>
    );
  }
}
