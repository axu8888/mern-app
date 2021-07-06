import React, {Component} from "react";
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { apiResponse: "", apiResponse2: ""};
  }

  callAPI() {
    fetch("http://localhost:9000/testAPI")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
  }

  callAPI2() {
    fetch("http://localhost:9000/users")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse2 : res }));
  }

  componentWillMount() {
    this.callAPI();
    this.callAPI2();
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <p className="App-intro">;{this.state.apiResponse}</p>
        <p className="App-intro">;{this.state.apiResponse2}</p>
      </div>
    );
  }
  
}

export default App;
