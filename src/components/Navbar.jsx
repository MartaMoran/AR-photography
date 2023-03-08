import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import {routes} from '../routes/constants'
export function NavbarHeaders({ items }) {
  const [value, setValue] = React.useState(0);

  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">               
                {Object.keys(routes).map((item, i) => (
                  <li class="nav-item">  <NavLink className={"nav-link"} to={routes[item].url}>{routes[item].title}</NavLink></li>
                 ))}
                
            </ul>
        </div>
    </div>
  </nav>
  );
}
