import React from 'react';
import './ColorPallete.css';
import ColorItem from './Color-Item/Color-Item';

const ColorPallete = ({ changeColor }) => {
  const colorArray = ['#FF7F00', '#00FF00', '#AAFFCC'];
  return (
    <div className="colorPallete">
      {colorArray.map((color, key) => (
        <ColorItem color={color} key={key} changeColor={changeColor} />
      ))}
    </div>
  );
};

export default ColorPallete;
