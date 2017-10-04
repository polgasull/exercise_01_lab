import React, { Component } from 'react';

// import Card from './components/Card';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const deleteThisLine = <p>Create Card Component</p>
    return (
      <div className="container">
        {deleteThisLine}
        {/* <Card /> */}
      </div>
    );
  }
}

export default App;
