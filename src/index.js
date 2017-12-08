import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import './index.css';
import {routes} from './routes';
import registerServiceWorker from './registerServiceWorker';

render((
    <BrowserRouter>
      <div>
       routes={routes};
      </div>
  </BrowserRouter>),
  document.getElementById('root')
);

