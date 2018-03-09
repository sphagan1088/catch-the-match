import React, { Component } from 'react';
import './App.css';
import Nav from "./components/Nav/Nav.js";
import Title from "./components/Title/Title.js";

class App extends Component {
  render() {
    return (
      <div className = "App">
        <Nav />
        <Title />
      </div>
    );
  }
}

export default App;
