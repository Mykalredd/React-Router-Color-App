import React from 'react';
import { useParams } from 'react-router-dom';

const colorDetails = {
  red: 'Red is the color of love and passion.',
  white: 'White symbolizes purity and innocence.',
  blue: 'Blue represents calm and tranquility.',
};

function ColorDetail() {
  const { color } = useParams();

  return (
    <div>
      <h1>Color Detail: {color}</h1>
      <p>{colorDetails[color]}</p>
      <a href="/colors">Back to Color List</a>
    </div>
  );
}

export default ColorDetail;