import React from 'react';
import {routes} from './constants';
import {Routes, Route} from 'react-router-dom'

export function SwitchRoutes() {
  return (
    <Routes>
      <Route path='/' element={<h1>home</h1>}/>
      <Route path={routes.homePage.url} element={<h1>home</h1>} />
      <Route path={routes.projects.url} element={<h1>projects</h1>}/>
      <Route path={routes.photos.url} element={<h1>photos</h1>}/>
      <Route path={routes.about.url} element={<h1>about</h1>}/>
      <Route path={routes.contact.url} element={<h1>contact</h1>}/>
    </Routes>
  );
}