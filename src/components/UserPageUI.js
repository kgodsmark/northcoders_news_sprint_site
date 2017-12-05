import React from 'react';

const UserPageUI = ({ loading, user }) => (
  <div className="card" style={{ width: '20rem' }}>
    {(loading) ? <h3>Loading...</h3> : user.map((user, i) => (
      <div key={`div${i}`}>
        <img key={`img${i}`} className="card-img-top" src={user.avatar_url} alt="" ref={img => this.img = img} onError={() => this.img.src = '/default_user.png'}/>
        <div key={`body${i}`} className="card-body">
   
          <p className="card-text" key={`name${i}`}>{user.name}</p>
          <h3 key={`username${i}`}>Username: {user.username}</h3>
        </div>
      </div>
    ))
    }

  </div>
);

export default UserPageUI;
