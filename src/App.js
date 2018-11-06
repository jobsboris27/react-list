import React, { Component } from 'react';
import './App.css';
import { API_TODOS, API_USERS } from "./config";
import ListContainer from "./components/list-container/ListContainer";
import List from "./components/list/List";
import HorizontalList from "./components/horizontal-list/HorizontalList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App__container">
          <ListContainer api={API_USERS} title="Users">
            <HorizontalList/>
          </ListContainer>
          <ListContainer api={API_TODOS} title="Users">
            <List/>
          </ListContainer>
        </div>
      </div>
    );
  }
}

export default App;
