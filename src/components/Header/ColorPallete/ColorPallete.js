import React, {Component} from 'react';
import './ColorPallete.css';
import ColorItem from './Color-Item/Color-Item';

class ColorPallete extends Component {
  
  constructor(props) {
    super(props);
    this.changeParentColor = this.changeParentColor.bind(this);
  }

  colorArray = ['#FF7F00', '#00FF00', '#AAFFCC', '#0022EE'];
  changeParentColor(newColor) {
    this.props.changeColor(newColor);
  }
  render() {
    return(
      <div className="colorPallete">
      {this.colorArray.map((color, key) => <ColorItem  color= {color} key={key} changeColor = {this.changeParentColor} />
      )}
      </div>
    )
  }
}

export default ColorPallete;