import React from 'react';
import {routes} from './constants';
import {Routes, Route} from 'react-router-dom'
import { Navbar } from '../components/Navbar';
import { Homepage } from '../pages/Homepage';
import { Projects } from '../pages/Projects';
import { About } from '../pages/About';
import { Contact } from '../pages/Contact';

export function SwitchRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Navbar/>}/>
      <Route path={routes.homePage.url} element={<Homepage/>} />
      <Route path={routes.projects.url} element={<Projects/>}/>
      <Route path={routes.photos.url} element={<h1>photos</h1>}/>
      <Route path={routes.about.url} element={<About/>}/>
      <Route path={routes.contact.url} element={<Contact/>}/>
    </Routes>
  );
}