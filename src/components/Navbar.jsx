import React from 'react';
import { NavLink } from 'react-router-dom';
import {routes} from '../routes/constants';
import './navbar.css'
export function Navbar() {

  return (
    <nav className="navbar navbar-expand-sm backgroundNav">
      <div className="container-fluid">
            <button className="navbar-toggler light" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="collapsibleNavbar">
              <ul className="navbar-nav">               
                      {Object.keys(routes).map((item, i) => (
                        <li className="nav-item">  <NavLink className={"nav-link link-light"} to={routes[item].url}>{routes[item].title}</NavLink></li>
                      ))}
                      
              </ul>
            </div>
       </div>
    </nav>
  );
}
