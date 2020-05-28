import React from "react";
import { Link } from 'react-router-dom';
import '../styles/NavBar.scss';


const NavBar = () => {
  return (
    <div className='navWrapper'>
      <h2>Lambda Eats</h2>
      <div className='navLinks'>
        <div className='navBox'>
          <Link exact className='home' to='/'>
              Home
          </Link>
        </div>
      </div>
    </div>
  );
};
export default NavBar;