import React from "react";
import Form from './Form.js';
import '../styles/Pizza.scss';
import pizzaImg from '../assets/Pizza.jpg';



const Pizza = () => {
  return (
    <div className='pizzaWrapper'>
      <h1>Build Your Own Pizza</h1>
      <img src={pizzaImg} alt='pizza' />
      <h2> Build Your Own Pizza</h2>

        <Form />
    
    </div>
  );
};
export default Pizza;