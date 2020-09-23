import React from 'react';
import logo from './nov_logo.png';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      verified: false,
      firstName: "",
      lastName: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);

  };
  mySubmitHandler = (event) => {
    event.preventDefault();
    alert("Submitting " + this.state.firstName + ' ' +  this.state.lastName + this.state.verified);
  };
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  render() {
    return (
     <div className='App'>
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />       
        <h2>Demo Form</h2>
      </header>
        <form onSubmit={this.mySubmitHandler}>
          <h1>Patient Enrollment {this.state.username}</h1>
          <label>
            First Name:
            <input
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleInputChange} />
          </label>
          <label>
            Last Name:
            <input
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleInputChange} />
          </label>
          <br/>
          <label>
            ID Verified:
            <input
              name="verified"
              type="checkbox"
              checked={this.state.verified}
              onChange={this.handleInputChange} />
          </label>
          <br/>
        <input type='submit'/>
        </form>
      </div>
    );
  }
}

export default App;