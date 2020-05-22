import React from "react";
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className='homeWrapper'>
        <h1>Your favorite food, delivered while coding</h1>
        <div className='pizzaBox'>
            <Link className='pizza' to='/components/Pizza'>
                Pizza?
            </Link>
        </div>
        <div className='restaurantWrapper'>
            <h3>Food Delivery in Gotham City</h3>
            <div className='foodCard'>
                <img src='../Assets/restaurant.png' alt='restaurant'/>
                <h4>Restaurant</h4>
                <p>$$ Food Type</p>
                <p> time </p>
            </div>
        </div>
        

    </div>
  );
};
export default Home;