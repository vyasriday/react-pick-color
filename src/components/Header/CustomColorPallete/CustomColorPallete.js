import React from 'react';
import {CustomColorItem}  from './CustomColorItem/CustomColorItem';
import './CustomColorPallete.css';

export class CustomColorPallete extends React.Component {
  
  constructor(props) {
    super();
    this.state = {
      customColorArray: []
    }
    this.changeCustomColorArray = this.changeCustomColorArray.bind(this);
  }

  changeCustomColorArray(index) {
    console.log(this.state.customColorArray);
  }

  render() {
    return(
      <div className="customColorPallete">
      {this.state.customColorArray.map((customColor, index) => <CustomColorItem 
        customColor = {customColor}
        key={index} 
        index= {index}
        removeColorItemFromColorArray={this.changeCustomColorArray}  
      /> )}
      </div>
    )
  }
}