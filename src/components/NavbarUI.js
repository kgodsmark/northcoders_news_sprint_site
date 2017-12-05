import React from 'react';
import { NavLink } from 'react-router-dom';

const NavbarUI = ({ topics, loading}) => (
  <div>
    <nav className="nav nav-tabs">
      <NavLink className="nav-link" activeStyle={{color: 'red', backgroundColor: 'white'}} exact to='/'>Hot Articles</NavLink>
      {(loading) ? <h3>Loading...</h3> : topics.map((topics, i) => (
        <NavLink key={i} className="nav-link" activeStyle={{color: 'red', backgroundColor: 'white'}}   exact to={`/topics/${topics.slug}/articles`}>{topics.title}</NavLink>
      ))}
    </nav>
  </div>
);

export default NavbarUI;
