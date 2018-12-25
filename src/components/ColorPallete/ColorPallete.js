import React, {Component} from 'react';
import './ColorPallete.css';
import ColorItem from './Color-Item/Color-Item';

class ColorPallete extends Component {
  
  constructor(props) {
    super(props);
    this.changeParentColor = this.changeParentColor.bind(this);
  }

  changeParentColor(newColor) {
    this.props.changeColor(newColor);
  }
  render() {
    return(
      <div className="colorBox">
      {this.props.colorArray.map((color, key) => <ColorItem  color= {color} key={key} changeColor = {this.changeParentColor} />
      )}
      </div>
    )
  }
}

export default ColorPallete;