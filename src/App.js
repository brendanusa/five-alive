import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const axios = require('axios');


class App extends Component {

  componentDidMount() {

    let context = this;

    axios.get('/scrape', (data) => {
    // context.setState({
    //   userId: data.id,
    //   currentUser: data.username
    // });
    console.log(data)

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
      </div>
    );
  }

}

export default App;
