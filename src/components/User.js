import React from "react";
import axios from "axios";


class User extends React.Component {
    state = {
        user: null,
      };
    
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

      render() {
        if(!this.state.user) return <p>Loading...</p>;

        return (
            <div className='user'>
                <div>
                    <img src={this.state.user.avatar_url} alt='avatar'/>
                </div>
                <h2>{this.state.user.name}</h2>
                <a href={this.state.user.url}>My GitHub</a>
            </div>
        )
    }
}

export default User;