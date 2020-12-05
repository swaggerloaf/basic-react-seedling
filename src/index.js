import './style.scss';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';

const Beverage = () => (
  <div className="container">
    <p class="text-primary">Welcome to your first Web Application!</p>
    <span className="text-info">
      Your <FontAwesomeIcon icon={faCoffee} /> is hot and ready!
    </span>
  </div>
);

const domElement = document.getElementById('root');
ReactDOM.render(<Beverage></Beverage>, domElement);
