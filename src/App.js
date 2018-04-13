import React, { Component } from 'react';
import Header from './Header';
import UserTodoList from './UserTodoList';
import './css/bootstrap.min.css';
import './css/custom.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <UserTodoList />
      </div>
    );
  }
}

export default App;
