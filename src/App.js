import React from "react";
import { Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './components/Home';
import Form from './components/Form';

const App = () => {
  return (
    <div>
      <NavBar />

      <Route exact path ='/'>
        <Home />
      </Route>
      <Route path ='/components/Form'>
        <Form />
      </Route>

      
    </div>
  );
};
export default App;
