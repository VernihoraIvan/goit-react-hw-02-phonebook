import PropTypes from 'prop-types';
import { Component } from 'react';
import css from './Contacts.module.css';

class Contacts extends Component {
  render() {
    const { contacts, onDeleteContact } = this.props;

    return (
      <ul className={css.list}>
        {contacts.map(({ id, name, number }) => (
          <li key={id} className={css.list_item}>
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

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
