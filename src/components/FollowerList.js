import React from "react";
import axios from "axios";
import Follower from "./Follower";

class FollowerList extends React.Component {
    state = {
        followers: []
    }

    componentDidUpdate() {
        axios.get(`https://api.github.com/users/${this.props.userHandle}/followers`)
            .then(res => {
                this.setState({
                    ...this.state,
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
                <h2 style={{ paddingTop: '5%'}}>My Followers</h2>
                <div className='wrapper'>
                    {this.state.followers.map(follower => {
                        return <Follower follower={follower} key={follower.id} />
                    })}
                </div>
            </div>
        )
    }
}

export default FollowerList;