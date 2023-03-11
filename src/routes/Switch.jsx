import React from 'react';
import {routes} from './constants';
import {Routes, Route} from 'react-router-dom'
import { Homepage } from '../pages/Homepage';
import { Projects } from '../pages/Projects';
import { About } from '../pages/About';
import { Contact } from '../pages/Contact';
import { Layout } from '../layout/Layout';
export function SwitchRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path={routes.homePage.url} element={<Homepage/>} />
      <Route path={routes.projects.url} element={<Projects/>}/>
      <Route path={routes.photos.url} element={<Layout>   </Layout>}/>
      <Route path={routes.about.url} element={<About/>}/>
      <Route path={routes.contact.url} element={<Contact/>}/>
    </Routes>
  );
}