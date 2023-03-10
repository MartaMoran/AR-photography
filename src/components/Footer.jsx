import React from 'react';
import { Instagram } from 'react-bootstrap-icons';



export function Footer() {
  return (
    <footer class="bd-footer mt-5 bg-body-tertiary fixed-bottom">
    <div class="container text-body-secondary">
        <div class="row">
        <div class="col offset-3 offset-md-5">
        <ul class="list-unstyled offset-0 offset-md-1">   
          <li>All rights reserved</li>
          <li class="offset-3 offset-md-1 mt-1"><a href="https://www.instagram.com/andreratto/?hl=en"> <Instagram color="secondary" size={25} /></a></li>
        </ul>
           
        </div>
        </div>
    </div>
    </footer>
  );
}