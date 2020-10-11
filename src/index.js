import React, { useState } from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.css";
const Beverage = () => (
  <div>
    <FontAwesomeIcon icon={faCheckSquare} />
    Your <FontAwesomeIcon icon={faCoffee} /> is hot and ready!
  </div>
);

const domElement = document.getElementById("root");
ReactDOM.render(<Beverage></Beverage>, domElement);
