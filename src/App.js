import React, { Component } from 'react';
import './App.css';
import { API_TODOS, API_USERS } from "./config";
import ListContainer from "./components/list-container/ListContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App__container">
          <ListContainer api={API_USERS} title="Users"/>
          <ListContainer api={API_TODOS} title="Todo list"/>
        </div>
      </div>
    );
  }
}

export default App;
