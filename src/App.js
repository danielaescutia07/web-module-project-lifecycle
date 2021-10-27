import React from 'react';
import axios from 'axios';
import User from './components/User';
import FollowerList from './components/FollowerList';

class App extends React.Component {
  

  render() {
    return (
    <div>
      <h1>My GitHub Card</h1>
      <input />
      <button>Search</button>
      <User />
      <FollowerList />
    </div>);
  }
}

export default App;
