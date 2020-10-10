import React, { useState } from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.css";

function Button() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times.</p>
      <button class="btn btn-danger" onClick={() => setCount(count + 1)}>
        Click Me
      </button>
    </div>
  );
}

const domElement = document.getElementById("root");
ReactDOM.render(<Button></Button>, domElement);
