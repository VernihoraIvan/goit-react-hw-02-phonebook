import { Component } from "react";
 
import Input from "./Input/Input";

export class App extends Component {
  state = {
    contacts: [],
    name: ''
  }

  //  handleName = event => {
  //   this.setState({name: event.target.value})
  //  }
    

  render() {
     return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <Input 
        // onSaveName={this.handleName()}
        />
      </div>
    );
  }
};
