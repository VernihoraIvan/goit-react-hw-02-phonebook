import { Component } from 'react';
import Contacts from './Contacts/Contacts';
import Input from './Input/Input';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  handleAddContact = ({ name, number }) => {
    const { contacts } = this.state;
    const newContact = { name, number };
    // console.log(this.state);
    const isExistingContact = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (isExistingContact) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }

    return this.setState(prevState => ({
      contacts: [...prevState.contacts, { name, number }],
    }));
  };

  //  handleName = event => {
  //   this.setState({name: event.target.value})
  //  }

  render() {
    const { contacts } = this.state;
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Input
          onSubmit={this.handleAddContact}
          // onSaveName={this.handleName()}
        />
        <Contacts contacts={contacts} />
      </div>
    );
  }
}
