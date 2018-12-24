import React, {Component} from 'react';
import './Header.css';
import Color from '../Color/Color';

class Header extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      colorArray : ['#FF7F00', '#00FF00', '#AAFFCC', '#0022EE'],
      color: ''
    }
  }
  
  // this will change the parent app's color state 
  changeColor(newColor) {
    this.setState({
      color: newColor
    })
    this.props.changeColor(this.state.color)
  }
  render() {
    return(
      <div className="header">
        <Color colorArray={this.state.colorArray} changeColor={this.props.changeColor} />
      </div>
    )
  }
}

export default Header;