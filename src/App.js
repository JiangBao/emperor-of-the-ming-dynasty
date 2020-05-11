import React, { Component } from 'react';
import './App.css';
import EmperorList from './emperorList/index';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="header"></div>
        <EmperorList />
      </div>
    );
  }
}

export default App;
