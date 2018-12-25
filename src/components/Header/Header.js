import React, {Component} from 'react';
import './Header.css';
import ColorPallete from '../ColorPallete/ColorPallete';

class Header extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      colorArray : ['#FF7F00', '#00FF00', '#AAFFCC', '#0022EE'],
    }
    this.changeParentColor = this.changeParentColor.bind(this);
  }
  
  // this will change the parent app's color state 
  changeParentColor(newColor) {
    this.props.changeColor(newColor);
  }
  render() {
    return(
      <div className="header">
        <ColorPallete colorArray={this.state.colorArray} changeColor={this.changeParentColor} />
      </div>
    )
  }
}

export default Header;