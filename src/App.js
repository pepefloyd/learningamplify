import React from 'react';
import logo from './nov_logo.png';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      verified: false,
      firstName: "",
      lastName: "",
      email: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);

  };
  onClickSubmitHandler(event){
    alert('submitted successfully');
  };
  mySubmitHandler = (event) => {
    event.preventDefault();
    fetch("https://vf8yor9tih.execute-api.us-east-1.amazonaws.com/Prod/sfdc",{
        method: 'POST',
        headers: {
            Accept: 'application/json',
                    'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.state)
    }).then(response => {
            console.log(response)
    }).catch(error =>{
            console.log(error)
    })
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
        <form onSubmit={this.mySubmitHandler}  className="form-container">
          <h1>Patient Enrollment {this.state.username}</h1>
          <div>
          <label>
            <b>First Name </b> <br/>
            <input
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleInputChange} />
          </label>
          <label>
            <b>Last Name </b> <br/>
            <input
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleInputChange} />
          </label>
          <br/>
          </div>
          <div>
          <label>
            <b>Email </b><br/>
            <input
              name="email"
              type="email"
              onChange={this.handleInputChange}
              />
          </label>
          <b> <label> Select a product</label> </b> <br></br>

          <select name="products" id="products">
            <option value="cosentyx">Cosentyx</option>
          </select>
          <br/>
          </div>
        <input type='submit' className="submit_button" onClick={this.onClickSubmitHandler} />
        </form>
      </div>
    );
  }
}

export default App;