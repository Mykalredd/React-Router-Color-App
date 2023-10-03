import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function AddColorForm() {
  const [newColor, setNewColor] = useState('#000000'); // Default color is black
  const history = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add new colors to the 'colors' array here
    // For this example, we'll simply log the new color
    console.log(`New color added: ${newColor}`);
    history.push('/colors');
  };

  return (
    <div>
      <h1>Add Color</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="color"
          value={newColor}
          onChange={(e) => setNewColor(e.target.value)}
        />
        <button type="submit">Add Color</button>
      </form>
      <a href="/colors">Back to Color List</a>
    </div>
  );
}

export default AddColorForm;