import { Component } from 'react';
import { nanoid } from 'nanoid';

// import css from './Input.module.css'

class Input extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    // console.log(this.state);

    if (name.trim() !== '' && number.trim() !== '') {
      const newContact = {
        id: nanoid(),
        name: name.trim(),
        number: number.trim(),
      };
      this.props.onSubmit(newContact);
      //   this.setState({
      //     name: '',
      //     number: '',
      //   });
      //   console.log(newContact);
    }
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  handleChange = event => {
    // const { name, value } = event.target;

    // this.setState({ name: event.target.value });
    const { name, value } = event.target;
    this.setState({ [name]: value });
    // this.setState({ [name]: value });
  };

  // handleChange = (event) => {
  //         this.setState({[event.target.name]: event.target.value})
  //         }
  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          value={this.state.name}
          onChange={this.handleChange}
          id="name"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor="tel">Number:</label>
        <input
          value={this.state.number}
          onChange={this.handleChange}
          id="tel"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type="submit">Add Contact</button>
      </form>
    );
  }
}

export default Input;
