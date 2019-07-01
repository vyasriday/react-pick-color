import React from 'react';
import './Color-Item.css';

const ColorItem = ({ changeColor, color }) => {
  return (
    <div>
      <span
        title="click to change drawer color"
        className="color-item"
        style={{ backgroundColor: color }}
        onClick={() => changeColor(color)}
      ></span>
    </div>
  );
};

export default ColorItem;
