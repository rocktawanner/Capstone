import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const HomePage = () => {
  return (
    <div className="home-container">
      <h1>WELCOME TO AI BOT ORC</h1>
      <Link to="/upload">
        <button className="button">Click to AI bot orc</button>
      </Link>
    </div>
  );
};

export default HomePage;
