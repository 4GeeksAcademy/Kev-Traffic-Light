import React, { useState } from 'react';

const Home = () => {
  const [selectedColor, setSelectedColor] = useState("");
  const [showPurple, setShowPurple] = useState(false);

  const click = (color) => {
    setSelectedColor(color);
  };

  const togglePurple = () => {
    setShowPurple(!showPurple);
  };

  return (
    <div className="all">
      <div className="traffic-top"></div>
      <div className="traffic-box">
        <div
          className={`red ${selectedColor === 'red' ? 'glow' : ''}`}
          onClick={() => click('red')}
        ></div>
        <div
          className={`yellow ${selectedColor === 'yellow' ? 'glow' : ''}`}
          onClick={() => click('yellow')}
        ></div>
        <div
          className={`green ${selectedColor === 'green' ? 'glow' : ''}`}
          onClick={() => click('green')}
        ></div>
        {showPurple && (
          <div
            className={`purple ${selectedColor === 'purple' ? 'glow' : ''}`}
            onClick={() => click('purple')}
          ></div>
        )}
      </div>
      <button id="button" onClick={togglePurple}>
        {showPurple ? "Hide Purple Light" : "Show Purple Light"}
      </button>
    </div>
  );
};

export default Home;

