import React, { useState } from 'react';
import  '../styles/index.css' // Import a CSS file for styling (optional)

const TrafficLight = () => {
  // State to keep track of the active light
  const [activeLight, setActiveLight] = useState(null);

  // Function to handle light click
  const handleLightClick = (light) => {
    setActiveLight(light);
  };

  return (
    <div className="traffic-light-container">
      <div
        className={`light red ${activeLight === 'red' ? 'active' : ''}`}
        onClick={() => handleLightClick('red')}
      ></div>
      <div
        className={`light yellow ${activeLight === 'yellow' ? 'active' : ''}`}
        onClick={() => handleLightClick('yellow')}
      ></div>
      <div
        className={`light green ${activeLight === 'green' ? 'active' : ''}`}
        onClick={() => handleLightClick('green')}
      ></div>
    </div>
  );
};

export default TrafficLight;


