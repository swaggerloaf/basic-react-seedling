import './style.scss';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';

const Beverage = () => (
  <div>
    <p class="text-danger">.text-danger</p>
    <span className="text-info">
      Your <FontAwesomeIcon icon={faCoffee} /> is hot and ready!
    </span>
  </div>
);

const domElement = document.getElementById('root');
ReactDOM.render(<Beverage></Beverage>, domElement);
