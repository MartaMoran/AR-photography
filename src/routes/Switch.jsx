import React from 'react';
import {redirectRoutes, routes} from './constants';
import {Routes, Route} from 'react-router-dom'
import { Homepage } from '../pages/Homepage';
import { Projects } from '../pages/Projects';
import { About } from '../pages/About';
import { Contact } from '../pages/Contact';
import { Lavapies } from '../pages/Lavapies';
import { Europa } from '../pages/Europa';
import { Photos } from '../pages/Photos';
import { Rtn } from '../pages/rtn';
import { Coming } from '../pages/coming-back';
import { Street } from '../pages/street';
export function SwitchRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path={routes.homePage.url} element={<Homepage/>} />
      <Route path={routes.projects.url} element={<Projects/>}/>
      <Route path={routes.photos.url} element={<Photos/>}/>
      <Route path={routes.about.url} element={<About/>}/>
      <Route path={routes.contact.url} element={<Contact/>}/>
      <Route path={redirectRoutes.europa.url} element={<Europa/>}/>
      <Route path={redirectRoutes.lavapies.url} element={<Lavapies/>}/>
      <Route path={redirectRoutes.rtn.url} element={<Rtn/>}/>
      <Route path={redirectRoutes.coming.url} element={<Coming/>}/>
      <Route path={redirectRoutes.street.url} element={<Street/>}/>
    </Routes>
  );
}