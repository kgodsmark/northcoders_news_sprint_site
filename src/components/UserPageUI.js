import React from 'react';

const UserPageUI = ({ loading, user, repos }) => (
    <div>
                {(loading) ? <h3>Loading...</h3> : user.map((user, i) => (
            <div>
                <h3 key={`username${i}`}>{user.username}</h3>
            <p key={`name${i}`}>{user.name}</p>
                    <img src={user.avatar_url} alt='' />
            </div>
        ))
        }
    </div>
);

export default UserPageUI;
