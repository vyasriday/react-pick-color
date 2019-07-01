import React from 'react';
import './CustomColorItem.css';

const CustomColorItem = props => {
  const { customColor, index, changeColor, removeColorFromCustomArray } = props;
  return (
    <div className="dynamic-color-item-space">
      <span
        title="remove item"
        onClick={() => removeColorFromCustomArray(index)}
      >
        <i className="fas fa-times"></i>
      </span>
      <span
        title="click to change drawer color"
        className="custom-color-item"
        style={{ backgroundColor: customColor }}
        onClick={() => changeColor(customColor)}
      ></span>
    </div>
  );
};

export default CustomColorItem;
