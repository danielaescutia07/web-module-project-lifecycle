import React from "react";
import axios from "axios";
import Follower from "./Follower";

class FollowerList extends React.Component {
    state = {
        followers: []
    }

    componentDidMount() {
        axios.get('https://api.github.com/users/danielaescutia07/followers')
            .then(res => {
                this.setState({
                    followers: res.data
                });
            })
            .catch(err => {
                console.log(err);
            })
    }

    render () {
        return (
            <div>
                <h3>My Followers</h3>
                {this.state.followers.map(follower => {
                    return <Follower follower={follower} key={follower.id} />
                })}
            </div>
        )
    }
}

export default FollowerList;