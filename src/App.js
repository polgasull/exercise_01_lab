import React, { Component } from 'react';

import Card from './components/Card';
import CardsList from './components/CardsList';
import logo from './logo.svg';
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="container">
        {<CardsList />}
      </div>
    );
  }
}

export default App;
