import React from 'react';
import { Instagram } from 'react-bootstrap-icons';



export function Footer() {
  return (
    <footer className="bd-footer bg-body-tertiary fixed-bottom">
    <div className="container text-body-secondary">
        <div className="row">
        <div className="col offset-3 offset-md-5">
        <ul className="list-unstyled offset-0 offset-md-1">   
          <li>All rights reserved</li>
          <li className="offset-3 offset-md-1 mt-1"><a href="https://www.instagram.com/andreratto/?hl=en"> <Instagram color="secondary" size={25} /></a></li>
        </ul>
           
        </div>
        </div>
    </div>
    </footer>
  );
}