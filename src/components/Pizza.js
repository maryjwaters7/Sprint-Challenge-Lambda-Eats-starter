import React from "react";
import { Route, Link } from 'react-router-dom';
import Form from './Form.js';



const Pizza = () => {
  return (
    <div className='pizzaWrapper'>
      <h1>Build Your Own Pizza</h1>
      <img src='../Assets/Pizza.jpg' alt='pizza' />
      <h2> Build Your Own Pizza</h2>

        <Form />
    
    </div>
  );
};
export default Pizza;