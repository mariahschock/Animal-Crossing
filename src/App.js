import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import FishPage from './FishPage';
import FishDetail from './FishDetail';

import './App.css';

export default function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path="/">
            <FishPage />
          </Route>
          <Route exact path="/fish/:id">
            <FishDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}