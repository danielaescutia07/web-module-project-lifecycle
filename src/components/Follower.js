import React from "react";

class Follower extends React.Component {
    render() {
        return (
            <div className='follower'>
                <img style={{ width: "30%", borderRadius: "50%"}} src={this.props.follower.avatar_url} alt='avatar'/><br/>
                <a style={{ textDecoration: 'none', color: 'black'}} href={this.props.follower.html_url}>{this.props.follower.login}</a>
            </div>
        )
    }
}

export default Follower;