import React from "react";
import { Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './components/Home';
import Pizza from './components/Pizza';

const App = () => {
  return (
    <div>
      <NavBar />

      <Route exact path ='/'>
        <Home />
      </Route>
      <Route path ='/components/Pizza'>
        <Pizza />
      </Route>
          
    </div>
  );
};
export default App;
