import React from 'react';
import { NavLink } from 'react-router-dom';
import {routes} from '../routes/constants';
import './navbar.css'
export function Navbar({ items }) {
  const [value, setValue] = React.useState(0);

  return (
        <ul class="nav justify-content-center backgroundNav">               
                {Object.keys(routes).map((item, i) => (
                  <li class="nav-item">  <NavLink className={"nav-link link-light"} to={routes[item].url}>{routes[item].title}</NavLink></li>
                 ))}
                
        </ul>
  );
}
