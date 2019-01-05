import React from 'react';
import {CustomColorItem}  from './CustomColorItem/CustomColorItem';
import './CustomColorPallete.css';

export class CustomColorPallete extends React.Component {
  
  constructor(props) {
    super();
    this.removeColorFromCustomArray= this.removeColorFromCustomArray.bind(this);
    this.changeParentColor = this.changeParentColor.bind(this);
  }

  removeColorFromCustomArray(index) {
    this.props.removeColorFromCustomArray(index);
  }

  addNewColorToArray() {
    this.setState({
      customColorArray: this.state.customColorArray.push(this.props.newColor)
    })
  }

  changeParentColor(newColor) {
    this.props.changeColor(newColor);
  }

  render() {
    const {customColorArray} = this.props;
    return(
      <div className="customColorPallete">
      {customColorArray.map((customColor, index) => <CustomColorItem 
        customColor = {customColor}
        key={Math.random()*10} 
        index= {index}
        removeColorFromCustomArray={this.removeColorFromCustomArray}  
        changeColor = {this.props.changeColor}
      /> )}
      </div>
    )
  }
}