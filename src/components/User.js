import React from "react";

class User extends React.Component {

      render() {

        const { user } = this.props;

        return (
            <div className='user'>
                <div className='imageDiv'>
                    <img src={user.avatar_url} alt='avatar'/>
                </div>
                <div style={{width: '30%'}}>
                <h2 style={{ fontSize: '2rem'}}>{user.name}</h2>
                <a style={{ textDecoration: 'none', color: 'black', fontSize: '1.2rem'}} href={user.html_url}>{user.login}</a>
                <p style={{ fontSize: '1.2rem' }}>Bio: {user.bio}</p>
                <p style={{ fontSize: '1.2rem' }}>Repos: {user.public_repos}</p>
                <p style={{ fontSize: '1.2rem' }}>Followers: {user.followers}</p>
                </div>
            </div>
        )
    }
}

export default User;