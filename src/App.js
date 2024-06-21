import React from 'react';
import axios from 'axios';
import User from './components/User';
import FollowerList from './components/FollowerList';
import './App.css';

class App extends React.Component {
  state = {
    user: [],
    input: ''
  }

  componentDidMount(){
    axios.get('https://api.github.com/users/danielaescutia07')
      .then(res => {
        this.setState({
          user: res.data,
        });
      })
      .catch(err => {
        console.log(err);
      })
  }

  handleChange = (evt) => {
    this.setState({
      ...this.state,
      input: evt.target.value
    });
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.input}`)
      .then(res => {
        this.setState({
          ...this.state,
          user: res.data
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
    <div className='App'>
      <h1>My GitHub Card</h1>
      <input 
        onChange={this.handleChange}
        placeholder='Enter Username'
      />
      <button onClick={this.handleSubmit}>Search</button>
      <User user={this.state.user} />
      <FollowerList userHandle={this.state.user.login}/>
    </div>);
  }
}

export default App;
