import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { Home, Posts } from 'pages';
import Menu from 'components/Menu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <Route exact path="/" component={Home} />
        <Route path="/post" component={Posts} />
      </div >
    );
  }
}

export default App;
