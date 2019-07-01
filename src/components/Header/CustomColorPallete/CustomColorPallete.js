import React from 'react';
import CustomColorItem from './CustomColorItem/CustomColorItem';
import './CustomColorPallete.css';

const CustomColorPallete = ({
  customColorArray,
  changeColor,
  removeColorFromCustomArray,
}) => {
  return (
    <div className="customColorPallete">
      {customColorArray.map((customColor, index) => (
        <CustomColorItem
          customColor={customColor}
          key={Math.random() * 10}
          index={index}
          removeColorFromCustomArray={removeColorFromCustomArray}
          changeColor={changeColor}
        />
      ))}
    </div>
  );
};

export default CustomColorPallete;
