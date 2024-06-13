import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1>Veterinaria de Perros en Adopción</h1>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/dogs">Perros en Adopción</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
