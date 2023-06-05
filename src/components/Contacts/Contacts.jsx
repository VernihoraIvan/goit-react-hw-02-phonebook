import { Component } from 'react';

class Contacts extends Component {
  render() {
    const { contacts } = this.props;

    return (
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>
            {name}: {number}{' '}
          </li>
        ))}
      </ul>
    );
  }
}

export default Contacts;
