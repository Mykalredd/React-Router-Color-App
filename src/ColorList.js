import React from 'react';
import { Link } from 'react-router-dom';

const colors = ['red', 'white', 'blue'];

function ColorList() {
  return (
    <div>
      <h1>Color List</h1>
      <ul>
        {colors.map((color) => (
          <li key={color}>
            <Link to={`/colors/${color}`}>{color}</Link>
          </li>
        ))}
      </ul>
      <Link to="/colors/new">Add a New Color</Link>
    </div>
  );
}

export default ColorList;