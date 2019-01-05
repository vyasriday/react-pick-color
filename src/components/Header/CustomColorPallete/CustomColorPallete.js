import React from 'react';
import {CustomColorItem}  from './CustomColorItem/CustomColorItem';
import './CustomColorPallete.css';

export class CustomColorPallete extends React.Component {
  
  constructor(props) {
    super();
    this.removeColorFromCustomArray= this.removeColorFromCustomArray.bind(this);
   
  }

  removeColorFromCustomArray(index) {
    this.props.removeColorFromCustomArray(index);
  }

  addNewColorToArray() {
    this.setState({
      customColorArray: this.state.customColorArray.push(this.props.newColor)
    })
  }

  render() {
    const {customColorArray} = this.props;
    return(
      <div className="customColorPallete">
      {customColorArray.map((customColor, index) => <CustomColorItem 
        customColor = {customColor}
        key={index} 
        index= {index}
        removeColorFromCustomArray={this.removeColorFromCustomArray}  
      /> )}
      </div>
    )
  }
}