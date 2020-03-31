import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import camera from '../../assets/camera.svg';
import logo from '../../assets/logo.png';

export default function Header() {
  return (
    <header id="main-header">
      <div className="header-content">
        <Link to="/">
          <img src={logo} alt="InstaRocket" />
        </Link>
        <input
          type="search"
          name=""
          id=""
          className="input-search"
          placeholder="Buscar"
        />
        <Link to="/new">
          <img src={camera} alt="Enviar publicão" />
        </Link>
      </div>
    </header>
  );
}
