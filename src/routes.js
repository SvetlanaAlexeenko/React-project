import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './App';
import Admin from './components/Admin';
import Genre from './components/Genre';
import Home from './components/Home';


export const routes =(
  <div>
       const App=()=>(
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='admin' component={Admin} />
        <Route path='genre' component={Genre} />
        </Switch>
    )
      </div>
  )