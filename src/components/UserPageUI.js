import React from 'react';

const UserPageUI = ({ loading, user }) => (
    <div>
                {(loading) ? <h3>Loading...</h3> : user.map((user, i) => (
            <div>
                <h3 key={`username${i}`}>{user.username}</h3>
            <p key={`name${i}`}>{user.name}</p>
        
            </div>
        ))
           
        }
    </div>
);

export default UserPageUI;
