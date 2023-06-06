import { Component } from 'react';
import css from './Contacts.module.css';

class Contacts extends Component {
  render() {
    const { contacts, onDeleteContact } = this.props;

    return (
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>
            {name}: {number}{' '}
            <button
              className={css.button}
              type="button"
              onClick={() => onDeleteContact(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default Contacts;
