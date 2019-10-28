import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { Home, Post } from 'pages';
import Menu from 'components/Menu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <Route exact path="/" component={Home} />
        <Switch>
          <Route path="/post/add" component={Post} />
          <Route path="/post/:id/edit" component={Post} />
          <Route path="/post/:id/delete" component={Post} />
          <Route path="/post/:id" component={Post} />
          <Route path="/post" component={Post} />
        </Switch>
      </div >
    );
  }
}

export default App;
