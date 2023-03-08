import React from 'react';
import {Route, MemoryRouter} from 'react-router-dom'
import routes from './constants';

export function SwitchRoutes() {
  return (
    <MemoryRouter>
      <Route path={routes.home.url}>
      <h1>home</h1>
      </Route>
      <Route exact path={routes.projects.url}>
        <h1>projects</h1>
      </Route>
      <Route exact path={routes.photos.url}>
        <h1>photos</h1>
      </Route>
      <Route exact path={routes.about.url}>
        <h1>about</h1>
      </Route>
      <Route exact path={routes.contact.url}>
        <h1>contact</h1>
      </Route>
    </MemoryRouter>
  );
}