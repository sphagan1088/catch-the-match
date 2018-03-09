import React, { Component } from 'react';
import './App.css';
import Nav from "./components/Nav/Nav.js";
import Title from "./components/Title/Title.js";
import Footer from "./components/Footer/Footer.js";

class App extends Component {
  render() {
    return (
      <div className = "App">
        <Nav />
        <Title />
        <Footer />
      </div>
    );
  }
}

export default App;
