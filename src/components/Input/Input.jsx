import { Component } from "react";
import { nanoid } from 'nanoid'

// import css from './Input.module.css'

class Input extends Component {
    state = {
        name: '',
        number: '',
    };

    

    handleSubmit = event => {
        event.preventDefault();
        const { name, number } = this.state;

        if (name.trim() !== '' && number.trim() !== '') {
            const newContact = {
                id: nanoid(),
                name: name.trim(),
                number: number.trim(),
            };
            this.props.onAddContact(newContact);
            this.setState({
                name: '',
                number: '',
            });
        }
    };
    // handleName = event => {
    //     event.preventDefault();
    //     this.setState({ name: event.target.value })
    // }

    // howEtws(evt) {
    //     evt.target.value = 
    // }
    // addContactName = (evt) => {
    // this.setState( => {

    // })
    // } 

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    // handleChange = (event) => {
    //         this.setState({[event.target.name]: event.target.value})
    //         }
    render() {
        const { name, number } = this.state;
        // const {onSaveName} = this.props
        function showEtws(evt) {
            console.log(evt.target.value)
        }


        return (<form onSubmit={this.handleSubmit}> 
            <label htmlFor="name" >
                Name:
            </label>
            <input
                // value={this.state.name}
                onChange={this.handleChange}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
            />
            <button type="submit" >Add Contact</button>


        </form>
        )
    }
}

export default Input